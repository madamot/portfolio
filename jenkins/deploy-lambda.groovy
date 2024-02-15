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
        stage('Prepare Build Environment') {
            steps {
                sh """
                    python3 -m venv venv
                    . venv/bin/activate
                    pip install aws-sam-cli
                    which sam
                """
            }
        }

        stage('Test') {
            steps {
                sh """
                    cd ${LAMBDA_PATH}
                    yarn
                    yarn run test --passWithNoTests
                """
            }
        }

        stage('Build') {
            steps {
                script {
                    sh """
                        cd ${LAMBDA_PATH}
                        yarn build
                        /home/ec2-user/workspace/page-deploy-site/venv/bin/sam build
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    withCredentials([aws(credentialsId: "9190845d-626f-4330-88a2-da3508581995")]) {
                        sh """
                            cd ${LAMBDA_PATH}
                            /home/ec2-user/workspace/page-deploy-site/venv/bin/sam deploy --config-env ${ENVIRONMENT} --parameter-overrides ParameterKey=Environment,ParameterValue=${ENVIRONMENT}
                        """
                    }
                    echo "Lambda successfully deployed"
                }
            }
        }

       
    }
}

