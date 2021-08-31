# Service Contexto

service base usado à partir do template VTEX-Service-example,
Ajustamos para nossas necessidades de API.
Que consiste em usar tanto recursos de Clients da VTEX já prontos, assim como a utilização da organização do service,
E o modo http a saber o this.http.get método de requisições da VTEX que implementa o Axios por trás.
Exemplo de Client VTEX usado, Catalogo com metodos de getProductsAndSkus.

## Recipes

- `node/index.ts` onde ficam as rotas e chamadas aos middlewares, assim como configurações e basicamente onde junta "tudo"
  os clients, os middlewares, configs, e rotas.

- `node/clients/*` onde ficam nossos clients, geralmente usado para clients customizados. ou seja, que geralmente precisam ser feitos na "mão" e não importar ou usar clients já existentes de algum lugar.

### Nossas routes on _service.json_

~~~jsonc
   "products": {
      "path": "/_v/products",  /*Retorna um Array com os ID product e Sku ID para usarmos na consulta da proxima rota.*/
      "public": true
    },
    "productsId": {
      "path": "/_v/productsId/:code", /*Retorna um Objeto com os As informacoes do product e numero Sku ID, usaremos as info e o sku para consultar preço*/
      "public": true
    },
    "priceId": {
      "path": "/_v/price", /*Retorna um Objeto com os As informacoes relativo ao preço do produto entre outras info, passado o SkuID como queryParams*/
      "public": true
    }
~~~

### Other example apps

We use Node services across all VTEX, and there are a lot inspiring examples. If you want to dive deeper on learning about this subject, don't miss those internal apps: [builder-hub](https://github.com/vtex/builder-hub) or [store-sitemap](https://github.com/vtex-apps/store-sitemap)
