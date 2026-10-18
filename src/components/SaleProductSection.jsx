import { useState } from 'react'
import SaleCategoryNav from './SaleCategoryNav.jsx'
import SaleProductCard from './SaleProductCard.jsx'
import saleProducts from '../data/saleProducts.js'
import './SaleProductSection.css'

// ラジオボタンの値と、商品データのカテゴリー名の対応。
const categoryNames = {
  food: '食品',
  drink: '飲料',
  daily: '消耗品',
  beauty: '美容・ケア',
  appliances: '家電',
  stationery: '文房具・雑貨',
}

function SaleProductSection({ onCategoryChange, onSortChange }) {
  // 選択中のカテゴリー。初期状態ではすべての商品を表示する。
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('recommended')
  const filteredProducts = activeCategory === 'all'
    ? saleProducts
    : saleProducts.filter((product) => product.category === categoryNames[activeCategory])

  // おすすめ順は割引率の高い順、それ以外は販売価格で並び替える。
  const displayedProducts = [...filteredProducts]
  if (sortOrder === 'price-asc') {
    displayedProducts.sort((a, b) => a.price - b.price)
  } else if (sortOrder === 'price-desc') {
    displayedProducts.sort((a, b) => b.price - a.price)
  } else {
    displayedProducts.sort((a, b) => b.discount - a.discount)
  }

  function handleCategoryChange(categoryId) {
    setActiveCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  function handleSortChange(event) {
    setSortOrder(event.target.value)
    onSortChange?.(event.target.value)
  }

  return (
    <section className="product-section" aria-label="セール商品一覧">
      <SaleCategoryNav activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />

      <div className="product-section__content">
        <div className="product-section__toolbar">
          <p className="product-section__count" aria-live="polite"><span>{filteredProducts.length}</span>件の商品</p>
          <select
            className="product-section__sort"
            aria-label="商品の並び替え"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="recommended">おすすめ順</option>
            <option value="price-asc">価格が安い順</option>
            <option value="price-desc">価格が高い順</option>
          </select>
        </div>

        <div className="product-section__grid">
          {displayedProducts.map((product) => (
            <SaleProductCard key={product.id} {...product} />
          ))}
        </div>

        <p className="product-section__note">
          ※掲載商品・価格はポートフォリオ制作のための架空のものです。<br/>実際の販売は行っておりません。
        </p>
      </div>
    </section>
  )
}

export default SaleProductSection
