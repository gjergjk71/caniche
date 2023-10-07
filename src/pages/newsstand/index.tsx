import Header from '@/components/header/header'
import CnicheFresh from '@/components/cnicheFresh/cnicheFresh'
import Footer from '@/components/footer/footer'
import '@/app/globals.css';
import Newsstand from '@/components/newsstand/newsstand';

export default function Home() {
  return (
    <main>
        <Header/>
        <Newsstand/>
        <CnicheFresh/>
        <Footer/>
    </main>
  )
}
