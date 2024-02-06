pipeline {
    agent {
        label 'build'
    }

    parameters {
        string(name: 'LAMBDA_NAME', defaultValue: '', description: 'Name of the lambda to build')
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
        LAMBDA_PATH = "${"lambdas/" + env.LAMBDA_NAME}"
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
                    cd ${LAMBDA_PATH}
                    yarn
                    yarn run test --passWithNoTests
                """
            }
        }

        stage('Install sam-cli') {
            steps {
                sh 'python3 -m venv venv && venv/bin/pip install aws-sam-cli'
                stash includes: '**/venv/**/*', name: 'venv'
            }
        }

        stage('Build') {
            steps {
                script {
                    sh """
                        cd ${LAMBDA_PATH}
                        yarn build
                        sam build
                    """
                }
            }
        }

       
    }
}
