import SaleHero from './components/SaleHero.jsx'
import SaleProductSection from './components/SaleProductSection.jsx'
import './SalePage.css'

function SalePage() {
  return (
    <>
      <main className="sale-page">
        <SaleHero />
        <SaleProductSection />
      </main>
      <footer className="sale-page__footer">
        <small className="sale-page__copyright">
          © 2026 SALE PAGE. All Rights Reserved.
        </small>
      </footer>
    </>
  )
}

export default SalePage
