import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from 'redwood-express-api'
import importAll from 'redwood-express-api/importAll.macro'

import { db } from 'src/lib/db'

const schemas = importAll('api', 'graphql')
const services = importAll('api', 'services')

export const handler = createGraphQLHandler(
  {
    schema: makeMergedSchema({
      schemas,
      services: makeServices({ services }),
    }),
  },
  db
)
