const hostname = window.location.hostname

const isStage = /^((stage)\.)adamhorne\.co.uk/.test(hostname)

const aws = {
  aws_appsync_graphqlEndpoint: isStage
    ? 'https://qmv3jp3rezd5pauit6bsah2hay.appsync-api.eu-west-1.amazonaws.com/graphql'
    : 'https://5jmk2ibtdfasxcnsogfqvk6kem.appsync-api.eu-west-1.amazonaws.com/graphql',
  aws_appsync_region: 'eu-west-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: isStage ? 'da2-nodpnkf3vzbtzoonxyseof5oxq' : 'da2-mtigrs66fvbnphub6ykeontbfa',
}

export default aws
