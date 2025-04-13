const hostname = window.location.hostname

const awsmobile = {
  aws_appsync_graphqlEndpoint:
    'https://qmv3jp3rezd5pauit6bsah2hay.appsync-api.eu-west-1.amazonaws.com/graphql',
  aws_appsync_region: 'eu-west-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: /^((stage)\.)adamhorne\.co.uk/.test(hostname)
    ? 'da2-nodpnkf3vzbtzoonxyseof5oxq'
    : 'da2-mtigrs66fvbnphub6ykeontbfa',
}

export default awsmobile
