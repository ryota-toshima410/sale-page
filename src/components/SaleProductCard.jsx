// お気に入りの選択状態を管理する React の機能と、専用の CSS を読み込む。
import { useState } from 'react'
import './SaleProductCard.css'

// 親から商品情報を props として受け取る。値を省略した場合は、ここに書いた初期値を使う。
// image は画像のパス、imageAlt は画像を説明する代替テキスト。
// price は販売価格、originalPrice は通常価格（どちらも数値で渡す）。
// discount は割引率。省略した場合は価格から自動計算する。
// href は商品のリンク先。onDetails はリンクをクリックしたときの処理。
function SaleProductCard({
  name = '国産米 5kg',
  image = `${import.meta.env.BASE_URL}images/products/food_1.jpg`,
  imageAlt = '木の升に盛られた白米と稲穂',
  price = 2990,
  originalPrice = 5980,
  discount: discountRate,
  category = '食品',
  href = '#',
  onDetails,
}) {
  // false は未選択、true はお気に入り。ページを再読み込みすると初期値に戻る。
  const [isFavorite, setIsFavorite] = useState(false)
  // 入力された割引率を優先し、省略時は通常価格と販売価格から自動計算する。
  const discount = discountRate ?? (originalPrice > price
    ? Math.round((1 - price / originalPrice) * 100)
    : 0)

  return (
    <article className="product-card">
      <a className="product-card__link" href={href} onClick={onDetails}>
        <div className="product-card__visual">
          {/* loading="lazy" は、画面に近づくまで画像の読み込みを遅らせる指定。 */}
          <img className="product-card__image" src={image} alt={imageAlt} loading="lazy" />
          {/* && の左側が true のときだけ、右側の割引ラベルを表示する。 */}
          {discount > 0 && <span className="product-card__discount">{discount}%OFF</span>}

        </div>

        <div className="product-card__content">
          {/* 受け取った商品名を見出しとして表示する。 */}
          <h3 className="product-card__name">{name}</h3>
          <p className="product-card__prices">
            {/* toLocaleString で、2990 を「2,990」のような桁区切りに変換する。 */}
            <span className="product-card__price">¥{price.toLocaleString('ja-JP')}</span>
            {/* 割引がある場合だけ、通常価格を del（取り消し線）で表示する。 */}
            {discount > 0 && (
              <del className="product-card__original-price">¥{originalPrice.toLocaleString('ja-JP')}</del>
            )}
          </p>
          {/* 食品などのカテゴリー名を表示する。 */}
          <span className="product-card__category">{category}</span>
          {/* カード全体がリンクなので、詳細への案内は文字として表示する。 */}
          <span className="product-card__details">
            商品の詳細を見る <span aria-hidden="true">→</span>
          </span>
        </div>
      </a>
      {/* クリックで !isFavorite（現在と反対の値）に切り替える。 */}
      {/* aria-label は読み上げ用の名前、aria-pressed は選択状態を伝える。 */}
      <button
        className="product-card__favorite"
        type="button"
        aria-label={`${name}のお気に入り`}
        aria-pressed={isFavorite}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {/* SVG をマスクとして表示する。装飾なので読み上げは省く。 */}
        <span className="product-card__favorite-icon" aria-hidden="true" />
      </button>
    </article>
  )
}

// ほかのファイルから import して使えるようにする。
export default SaleProductCard
