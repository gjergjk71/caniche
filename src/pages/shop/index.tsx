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
        <ShoppingMadeEasy/>
        <CnicheFresh/>
        <Footer/>
    </main>
  )
}
