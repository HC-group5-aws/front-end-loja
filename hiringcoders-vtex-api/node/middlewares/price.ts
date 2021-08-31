export async function price(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code},
    clients: { price },
  } = ctx

  const data = await price.getPrice(code.toString())
  ctx.body = data

  await next()
}
