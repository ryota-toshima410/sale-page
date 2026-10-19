import './SaleHero.css'

function SaleHero() {
  return (
    <section className="hero">

      <div className="hero__content">

        <div className="hero__text">
          <p className="hero__lead">
            <span className="hero__lead-label">最大</span>
            <span className="hero__lead-value">50</span>
            <span className="hero__lead-suffix">
              <span className="hero__lead-unit">%</span>
              <span className="hero__lead-off">OFF</span>
            </span>
          </p>

          <h1 className="hero__title">SALE</h1>

          <p className="hero__date">
            <span className="hero__date-number">10</span>
            月
            <span className="hero__date-number">1</span>
            日&nbsp;(木)&nbsp;0:00&nbsp;-&nbsp;
            <span className="hero__date-number">10</span>
            月<span className="hero__date-number">31</span>
            日&nbsp;(土)&nbsp;23:59
          </p>
        </div>

        <div className="hero__visual">
            <picture>
              <source media="(max-width: 950px)" srcSet={`${import.meta.env.BASE_URL}images/hero/cart.png`} />
              <img className="hero__image" src={`${import.meta.env.BASE_URL}images/hero/hero.png`} alt="お買い物をイメージしたイラスト" />
            </picture>
            <p className="hero__shipping">送料<br/>無料</p>
        </div>
      </div>

    </section>
  )
}

export default SaleHero
