import './SaleCategoryNav.css'

// 表示するカテゴリー。id は SVG のファイル名、label は表示する文字。
const categories = [
  { id: 'all', label: 'すべての商品' },
  { id: 'food', label: '食品' },
  { id: 'drink', label: '飲料' },
  { id: 'daily', label: '消耗品' },
  { id: 'beauty', label: '美容・ケア' },
  { id: 'appliances', label: '家電' },
  { id: 'stationery', label: '文房具・雑貨' },
]

function SaleCategoryNav({ activeCategory = 'all', onCategoryChange }) {
  return (
    <nav className="category-nav" aria-label="商品カテゴリー">
      <ul className="category-nav__list">
        {/* カテゴリーごとにラジオボタンとラベルを表示する。 */}
        {categories.map((category) => (
          <li className="category-nav__item" key={category.id}>
            {/* label 全体をクリックすると、中のラジオボタンが選択される。 */}
            <label className="category-nav__label">
              {/* 同じ name にすると1つだけ選択できる。初期選択は「すべての商品」。 */}
              <input
                className="category-nav__radio"
                type="radio"
                name="category"
                value={category.id}
                checked={category.id === activeCategory}
                onChange={() => onCategoryChange?.(category.id)}
              />
              {/* SVG をマスクとして使い、アイコンの色を CSS で変更できるようにする。 */}
              <span
                className="category-nav__icon"
                aria-hidden="true"
                style={{ '--category-icon': `url("${import.meta.env.BASE_URL}svg/${category.id}.svg")` }}
              />
              <span className="category-nav__text">{category.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SaleCategoryNav
