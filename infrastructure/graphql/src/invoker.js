import { util } from '@aws-appsync/utils'

export function request(ctx) {
  const { source, args } = ctx
  console.log('ctx', ctx)
  return {
    operation: 'Invoke',
    payload: { field: ctx.info.fieldName, arguments: args, source },
  }
}

export function response(ctx) {
  return ctx.result
}
