export async function products(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { catalog },
  } = ctx

  const data = await catalog.getProductsAndSkus()
  ctx.body = data

  await next()
}
