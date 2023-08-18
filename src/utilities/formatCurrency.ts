// "undefined" is the locale, so it displays the number based on 
// where user lives
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  })
  
//   specifies the type (number)
  export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
  }