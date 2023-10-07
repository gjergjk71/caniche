import styles from './shop.module.css'
import Header from '@/components/header/header'
import CnicheFresh from '@/components/cnicheFresh/cnicheFresh'
import Footer from '@/components/footer/footer'
import '@/app/globals.css';
import ShoppingMadeEasy from '@/components/shoppingMadeEasy/shoppingMadeEasy';

export default function Home() {
  return (
    <main className={styles.main}>
        <Header/>
        <div className='web' >
          <div style={{ display: 'inline-flex', marginLeft: "21vw", marginTop: "1vh", marginBottom: "1vh" }} className={styles.WebMobile}>
            <div className=''>
              <div className="WhoWeAre" style={{width: 501, color: 'black', fontSize: 64, fontFamily: 'Newsreader', fontWeight: '400', wordWrap: 'break-word'}}>Who We Are</div>
              <div className="Subheadline" style={{width: 443, color: '#707070', fontSize: 25, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>We are a team of university students trying to enter the market with friendly clients, to form long lasting beneficial relationships.<br/></div>
            </div>
            <div>
              <img className="BellPeppers" style={{width: 608, height: 405, borderRadius: 2}} src="/imgs/who-we-are.avif" />
            </div>
          </div>
        </div>
        <div className='mobile'>
            <div className="WhoWeAre" style={{width: 501, color: 'black', fontSize: 64, fontFamily: 'Newsreader', fontWeight: '400', wordWrap: 'break-word'}}>Who We Are</div>
            <div className="Subheadline" style={{width: 443, color: '#707070', fontSize: 25, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>We are a team of university students trying to enter the market with friendly clients, to form long lasting beneficial relationships.<br/></div>
            <img className="BellPeppers" style={{width: 608, height: 405, borderRadius: 2}} src="/imgs/who-we-are.avif" />
        </div>
        <CnicheFresh/>
        <Footer/>
    </main>
  )
}
