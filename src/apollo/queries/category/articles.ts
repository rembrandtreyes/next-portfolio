import gql from "graphql-tag"

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($id: ID!) {
    category(id: $id) {
      name
      articles {
        id
        Title
        Content
        image {
          url
        }
        category {
          id
          name
        }
      }
    }
  }
`

export default CATEGORY_ARTICLES_QUERY
