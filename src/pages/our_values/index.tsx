import styles from './shop.module.css'
import Header from '@/components/header/header'
import CnicheFresh from '@/components/cnicheFresh/cnicheFresh'
import Footer from '@/components/footer/footer'
import '@/app/globals.css';

export default function Home() {
  return (
    <main className={styles.main}>
        <Header/>
        <img className="BellPeppers" style={{width: 302, height: 201, borderRadius: 2}} src="/imgs/shutterstock_1129474973-e1625962199585.jpg" />
        <div className="OurValues" style={{width: 320, color: 'black', fontSize: 64, fontFamily: 'Newsreader', fontWeight: '400' , wordWrap: 'break-word'}}>Our values</div>
        <div className="Subheadline" style={{width: 283, color: '#707070', fontSize: 25, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>We want to get to know you</div><br/>
        <div className="Subheadline" style={{width: 283, color: '#707070', fontSize: 25, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Open communication through a common channel such as Facebook.</div><br/>
        <div className="Subheadline" style={{width: 283, color: '#707070', fontSize: 25, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Transparency towards all the aspects of the business from the start.</div><br/>
        <div className="Subheadline" style={{width: 283, color: '#707070', fontSize: 25, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Common benefit mindset.</div><br/>
<CnicheFresh/>
        <Footer/>
    </main>
  )
}
