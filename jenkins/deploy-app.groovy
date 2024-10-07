pipeline {
    agent {
        label 'build'
    }

    parameters {
        string(name: 'APP_NAME', defaultValue: '', description: 'Name of the app to build')
        choice(name: 'ENVIRONMENT', choices: ['stage', 'live'], description: 'AWS environment to deploy to')
        gitParameter(
            name: 'BRANCH',
            type: 'PT_BRANCH',
            selectedValue: 'DEFAULT',
            branchFilter: 'origin/(.*)',
            defaultValue: 'master',
            description: 'The branch to work from (defaults to master)',
            sortMode: 'ASCENDING_SMART')
    }

    environment {
        DATE = sh(returnStdout: true, script: 'date +%Y-%m-%d_%H.%M.%S').trim()
        FILES_PATH = "${"apps/" + env.APP_NAME}"
    }

    options {
        buildDiscarder(logRotator(daysToKeepStr: '5'))
    }

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Test') {
            steps {
                sh """
                    cd ${FILES_PATH}
                    yarn
                    yarn run test --passWithNoTests
                """
            }
        }

        stage('Build') {
            steps {
                script {
                    sh """
                        cd ${FILES_PATH}
                        rm -rf dist www
                        yarn build
                    """
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    withCredentials([aws(credentialsId: "9190845d-626f-4330-88a2-da3508581995")]) {
                        sh """
                            cd ${FILES_PATH}
                            aws s3 cp ./storybook-static s3://app-madamot-storybook --recursive
                        """
                    }
                    echo "App successfully deployed to https://storybook.adamhorne.co.uk"
                }
            }
        }

       
    }
}

