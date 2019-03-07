
import GraphQlClient from 'graphql-client'

const client = GraphQlClient({
  url: `https://scott-sandbox-2.myshopify.com/api/graphql`,
  headers: {
    'X-Shopify-Storefront-Access-Token': '54ffe5ef51e4a673207298fc9e457b93'
  }
})

const checkoutData = `
  userErrors {
    message
    field
  }
  checkout {
    id
    webUrl
    subtotalPrice
    totalTax
    totalPrice
    lineItems (first:250) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          title
          variant {
            title
            image {
              src
            }
            price
          }
          quantity
        }
      }
    }
  }`

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
      }`).then(response => {
        try {
          resolve(response.data.shop.collections.edges.map(collection => collection.node))
        } catch (error) {
          reject('Invalid response')
        }
      })
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
                handle
                collections(first:250) {
                  edges {
                    node {
                      handle
                    }
                  }
                }
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
                      id
                      title
                      price
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
      }`).then(response => {
        try {
          resolve(response.data.shop.products.edges.map(product => product.node))
        } catch (error) {
          reject('Invalid response')
        }
      })
  })
}

export const createCheckout = () => {
  return new Promise((resolve, reject) => {
    client.query(`
      mutation {
        checkoutCreate(input: {}) {
          ${checkoutData}
        }
      }`).then(response => resolve(response.data.checkoutCreate.checkout))
  })
}

export const addCartItem = (checkoutId, { id, quantity }) => {
  let lineItems = `[{ variantId: "${id}", quantity: ${quantity} }]`

  return new Promise((resolve, reject) => {
    client.query(`
      mutation {
        checkoutLineItemsAdd(checkoutId: "${checkoutId}", lineItems: ${lineItems}) {
          ${checkoutData}
        }
      }`).then(response => resolve(response.data.checkoutLineItemsAdd.checkout))
  })
}

export const updateCartItem = (checkoutId, { id, quantity }) => {
  let lineItems = `[{ variantId: "${id}", quantity: ${quantity} }]`
  console.log('update cart item')

  return new Promise((resolve, reject) => {
    client.query(`
      mutation {
        checkoutLineItemsUpdate(checkoutId: "${checkoutId}", lineItems: ${lineItems}) {
          ${checkoutData}
        }
      }`).then(response => {
        console.log(response)
        resolve(response.data.checkoutLineItemsUpdate.checkout)
      })
  })
}

export const removeCartItem = (checkoutId, id) => {
  return new Promise((resolve, reject) => {
    client.query(`
      mutation {
        checkoutLineItemsRemove(checkoutId: "${checkoutId}", lineItemIds: ["${id}"]) {
          ${checkoutData}
        }
      }`).then(response => resolve(response.data.checkoutLineItemsRemove.checkout))
  })
}
