export function formatMoney(number: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
}

export function formatQuantity(number: number): string {
  return new Intl.NumberFormat('pt-BR', {
    maximumFractionDigits: 2
  }).format(number);
}
