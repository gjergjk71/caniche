import styles from './shop.module.css'
import Header from '@/components/header/header'
import CnicheFresh from '@/components/cnicheFresh/cnicheFresh'
import Footer from '@/components/footer/footer'
import '@/app/globals.css';

export default function Home() {
  return (
    <main className={styles.main}>
        <Header/>
        <div className="MyBasket" style={{ marginLeft: "48%", marginTop: 25, width: 501, color: 'black', fontSize: 64, fontFamily: 'Newsreader', fontWeight: '400', wordWrap: 'break-word'}}>My basket</div>
        <div style={{ marginBottom: 25, marginLeft: "48%",}}>Your basket is empty</div>
<CnicheFresh/>
        <Footer/>
    </main>
  )
}
