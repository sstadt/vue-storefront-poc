
import Client from 'graphql-js-client'
import { gql } from 'babel-plugin-graphql-js-client-transform'

import typeBundle from '@/lib/config.types'

const client = new Client(typeBundle, {
  url: 'https://scott-sandbox-2/api/graphql',
  fetcherOptions: {
    headers: {
      'X-Shopify-Storefront-Access-Token': '54ffe5ef51e4a673207298fc9e457b93'
    }
  }
})

export const getTestData = () => {
  return new Promise((resolve, reject) => {
    client.send(gql(client)`
      query {
        shop {
          name
          primaryDomain {
            url
            host
          }
        }
      }`).then(resolve)
  })
}

export const getCollections = () => {
  
}

export const getProducts = () => {}
