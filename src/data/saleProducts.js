// 仮の商品データ。4種類の商品を繰り返し、合計16件にする。
const samples = [
  { name: '国産米 5kg', price: 2990, originalPrice: 5980 },
  { name: '国産米 2kg', price: 1490, originalPrice: 2980 },
  { name: '国産米 10kg', price: 5490, originalPrice: 10980 },
  { name: '国産無洗米 5kg', price: 3290, originalPrice: 6580 },
]

const saleProducts = Array.from({ length: 16 }, (_, index) => ({
  ...samples[index % samples.length],
  id: index + 1,
  image: '/images/products/food_1.jpg',
  imageAlt: '木の升に盛られた白米と稲穂',
  category: '食品',
}))

export default saleProducts
