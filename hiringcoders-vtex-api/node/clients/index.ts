import { IOClients } from '@vtex/api'
import { Catalog } from '@vtex/clients'
import Products from './products'
import { Price } from './price'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }
  public get products() {
    return this.getOrSet('products', Products)
  }
  public get price() {
    return this.getOrSet('price', Price)
  }
}
