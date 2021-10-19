export interface CurrencyResponse {
  response: ICurrency[]
}

export interface ICurrency {
  ccy: string
  base_ccy: string
  buy: number
  sale: number
}
