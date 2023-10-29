const { DATOCMS_API_KEY } = process.env

import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager'

export const get = async () => {
  if (DATOCMS_API_KEY) {
    return DATOCMS_API_KEY
  }

  const secret_name = 'DatoCMS/page-deploy-site/API_KEY'

  const client = new SecretsManagerClient({
    region: 'eu-west-1',
  })

  let response

  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: 'AWSCURRENT', // VersionStage defaults to AWSCURRENT if unspecified
      })
    )
    console.log('get key res', JSON.stringify(response))
  } catch (error) {
    // For a list of exceptions thrown, see
    // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
    throw error
  }

  return JSON.parse(response.SecretString as string).DATOCMS_API_KEY
}
