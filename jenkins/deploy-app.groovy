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
        ASSETS_PATH = "${"/internal/assets/" + env.APP_NAME}"
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
                echo "Deploying ${APP_NAME} to ${ENVIRONMENT}"
                script {
                    withCredentials([aws(credentialsId: "9190845d-626f-4330-88a2-da3508581995")]) {
                        sh """
                            ls
                            cd ${FILES_PATH}
                            ls
                            aws s3 cp ./dist/index.html s3://apps-madamot-${ENVIRONMENT}/${APP_NAME}/index.html --recursive
                            aws s3 sync "./dist" "s3://apps-internal-madamot-${ENVIRONMENT}/${APP_NAME}/${ASSETS_PATH}" --delete --exclude "index.html"

                        """
                    }
                    echo "App successfully deployed to https://${ENVIRONMENT}.adamhorne.co.uk/${APP_NAME}"
                }
            }
        }

       
    }
}

