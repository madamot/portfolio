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
        ASSETS_PATH = "${env.APP_NAME + "/internal/assets"}"
        CLOUDFRONT_DISTRIBUTION_ID = getCloudFrontDistributionId(env.ENVIRONMENT)
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
                        yarn build --base=/${APP_NAME}/internal/
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
                            cd ${FILES_PATH}
                            aws s3 cp "./dist/index.html" "s3://apps-madamot-${ENVIRONMENT}/${APP_NAME}/index.html"
                            aws s3 sync "./dist/assets" "s3://apps-internal-madamot-${ENVIRONMENT}/${ASSETS_PATH}" --delete --exclude "index.html"
                            AWS_MAX_ATTEMPTS=10 aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} --paths "${APP_NAME}*" "${ASSETS_PATH}*"
                        """
                    }
                    echo "App successfully deployed to https://${ENVIRONMENT}.adamhorne.co.uk/${APP_NAME}"
                }
            }
        }
    }
}

def getCloudFrontDistributionId(environment) {
    if ("live".equals(environment)) {
        return "E26FL2J96FZVCE";
    } else {
        return "E30WLEF1LVHNXW";
    } 
}

