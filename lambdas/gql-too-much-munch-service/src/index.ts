const { AWS_ENV } = process.env

export const handler = async (event: any) => {
  console.log('event', event)

  console.time('Overall')

  console.timeEnd('Overall')
  return { greeting: 'Hello world!', favouriteFood: 'Pizza' }
}
