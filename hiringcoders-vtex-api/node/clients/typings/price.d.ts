export interface PriceItem {
  itemId: string
  listPrice: number
  costPrice: number
  markup: number
  basePrice: number
  fixedPrices: [
    {
      tradePolicyId: string
      value: number
      listPrice: number
      minQuantity: number
      dateRange: {
        from: Date
        to: Date
      }
    }
  ]
}
