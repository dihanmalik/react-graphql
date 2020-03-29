import gql from 'graphql-tag'

const VISITOR_QUERY = gql`
  {
    visitors {
      id
      dateTime
      ip
      device
    }
  }
`

export default {
  query: {
    VISITOR_QUERY,
  },
}
