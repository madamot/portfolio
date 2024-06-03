export const handler = async (event: any) => {
  console.log('event', event)

  console.time('Overall')

  switch (event.field) {
    case 'search':
      return [
        {
          id: 1,
          title: 'Hello world',
          url: 'www.adamhorne.co.uk',
        },
      ]
    case 'all':
      return 'You are searching for all'
    default:
      return {}
  }

  console.timeEnd('Overall')
}
