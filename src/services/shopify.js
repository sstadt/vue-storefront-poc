
import GraphQlClient from 'graphql-client'

const client = GraphQlClient({
  url: `https://scott-sandbox-2.myshopify.com/api/graphql`,
  headers: {
    'X-Shopify-Storefront-Access-Token': '54ffe5ef51e4a673207298fc9e457b93'
  }
})

export const getShopData = () => {
  return new Promise((resolve, reject) => {
    client.query(`
      query {
        shop {
          name
          description
        }
      }`).then(response => resolve(response.data.shop))
  })
}

export const getCollections = () => {
  return new Promise((resolve, reject) => {
    client.query(`
      query {
        shop {
          collections(first: 250) {
            edges {
              node {
                id
                title
                handle
              }
            }
          }
        }
      }`).then(resolve)
  })
}

export const getProducts = () => {

  return new Promise((resolve, reject) => {
    client.query(`
      query {
        shop {
          products(first:250) {
            edges {
              node {
                id
                title
                options {
                  name
                  values
                }
                variants(first: 250) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges {
                    node {
                      title
                      selectedOptions {
                        name
                        value
                      }
                      image {
                        src
                      }
                      price
                    }
                  }
                }
                images(first: 250) {
                  pageInfo {
                    hasNextPage
                    hasPreviousPage
                  }
                  edges {
                    node {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }`).then(resolve)
  })
}
