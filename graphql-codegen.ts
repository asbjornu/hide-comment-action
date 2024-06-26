import type { CodegenConfig } from '@graphql-codegen/cli'
import { schema } from '@octokit/graphql-schema'

const config: CodegenConfig = {
  schema: schema.idl,
  documents: ['src/queries/**/*.ts'],
  generates: {
    'src/generated/graphql-types.ts': {
      plugins: ['typescript'],
    },
    'src/generated/graphql.ts': {
      preset: 'import-types',
      plugins: ['typescript-operations'],
      presetConfig: {
        typesPath: './graphql-types.js',
      },
    },
  },
  config: {
    // https://docs.github.com/en/graphql/reference/scalars
    scalars: {
      URI: 'string',
    },
  },
}

export default config
