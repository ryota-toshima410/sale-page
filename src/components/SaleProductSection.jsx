import SaleCategoryNav from './SaleCategoryNav.jsx'
import SaleProductCard from './SaleProductCard.jsx'
import saleProducts from '../data/saleProducts.js'
import './SaleProductSection.css'

function SaleProductSection({ onCategoryChange, onSortChange }) {
  return (
    <section className="product-section" aria-label="セール商品一覧">
      <SaleCategoryNav onCategoryChange={onCategoryChange} />

      <div className="product-section__content">
        <div className="product-section__toolbar">
          <p className="product-section__count"><span>{saleProducts.length}</span>件の商品</p>
          <select
            className="product-section__sort"
            aria-label="商品の並び替え"
            defaultValue="recommended"
            onChange={(event) => onSortChange?.(event.target.value)}
          >
            <option value="recommended">おすすめ順</option>
            <option value="price-asc">価格が安い順</option>
            <option value="price-desc">価格が高い順</option>
          </select>
        </div>

        <div className="product-section__grid">
          {saleProducts.map((product) => (
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
