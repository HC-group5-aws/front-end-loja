export async function productsId(ctx: Context, next: () => Promise<any>) {
  const {
    state: { code },
    clients: { catalog },
  } = ctx

  //   const data = await catalog.(code.toString())
  const data = await catalog.getSkuContext(code.toString())

  ctx.body = data

  await next()
}
