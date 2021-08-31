import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'
import type { PriceItem } from './typings/price'

const routes = {
  base: () => 'https://api.vtex.com/hiringcoders202105/',
  prices: (itemId: string) => `${routes.base()}pricing/prices/${itemId}`,
}
export class Price extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(`${routes.prices}`, context, {
      ...options,
      headers: {
        ...options?.headers,
        // Authorization: context.authToken,  DANADINHO ESTAVA BLOQUEANDO O ACESSO! resolução: comenta-lo e colocar no manifest em polices o host e path;
      },
    })
  }

  public getPrice(itemId: string) {
    return this.http.get<PriceItem>(routes.prices(itemId), {
      params: { itemId },
      headers: {
        'X-VTEX-API-AppKey': 'vtexappkey-hiringcoders202105-EJCXZI',
        'X-VTEX-API-AppToken':
          'RTYLCPZHHHETKOTWZGDNHCDHMBBCLZPUFLOGYPRLCKSXBBUBFNENKKQPQRZBNXVISJNYZMXKPRLXKFGKGZWYUBKVVZQHPPYFOJFROVCTPUYSZSEKKOUOAXOQYRCAWPUZ',
        'Content-Type': 'application/json',
      },
    })
  }
}
