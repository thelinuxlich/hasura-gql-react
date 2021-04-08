/**
 * @type {import("@gqless/cli").GqlessConfig}
 */
const config = {
  endpoint: 'http://localhost:8080/v1/graphql',
  enumsAsStrings: false,
  react: true,
  scalars: { DateTime: 'string' },
  preImport: '',
  introspection: {
    endpoint: 'http://localhost:8080/v1/graphql',
    headers: {}
  },
  destination: './libs/gql/src/index.ts',
  subscriptions: false,
  javascriptOutput: false
}

module.exports = config
