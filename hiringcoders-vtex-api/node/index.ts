import type { ClientsConfig, ServiceContext, RecorderState } from '@vtex/api'
import { LRUCache, method, Service } from '@vtex/api'
import { Clients } from './clients'
import { products } from './middlewares/products'
import { productsId } from './middlewares/productsId'
import { validate } from './middlewares/validate'
import { price } from './middlewares/price'

const TIMEOUT_MS = 800

const memoryCache = new LRUCache<string, any>({ max: 5000 })

metrics.trackCache('products', memoryCache)

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    products: {
      memoryCache,
    },
  },
}

declare global {
  type Context = ServiceContext<Clients, State>

  interface State extends RecorderState {
    code: number
  }
}

export default new Service({
  clients,
  routes: {
    // `products` is the route ID from service.json. It maps to an array of middlewares (or a single handler).
    products: method({
      GET: [products],
    }),
    productsId: method({
      GET: [validate, productsId],
    }),
    priceId: method({
      GET: [validate, price],
    }),
  },
})
