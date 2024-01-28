pipeline {
    agent {
        label 'build'
    }

    parameters {
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
        FILES_PATH = "packages/madamot-components"
    }

    options {
        buildDiscarder(logRotator(daysToKeepStr: '5'))
    }

    stages {
        stage('Test') {
            steps {
                sh """
                    cd ${FILES_PATH}
                    yarn
                    yarn run test
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
                        cd dist
                        rm index.html
                        mv assets/index*.js index.js
                        mv assets/index*.js.map .
                    """
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    sh """
                        cd ${FILES_PATH}
                        yarn release ${ENVIRONMENT}
                    """
                }
            }
        }

       
    }
}

