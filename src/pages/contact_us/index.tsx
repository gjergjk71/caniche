import styles from './shop.module.css'
import Header from '@/components/header/header'
import CnicheFresh from '@/components/cnicheFresh/cnicheFresh'
import Footer from '@/components/footer/footer'
import '@/app/globals.css';

export default function Home() {
  return (
    <main className={styles.main}>
        <Header/>
        <img className="BellPeppers" style={{width: 608, height: 405, borderRadius: 2}} src="/imgs/venice.jpg" />
        <div className="EnterYourFirstName" style={{color: '#105A12', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Enter your first name</div>
        <div className="FormInput" style={{width: 501, height: 50, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 8, border: '1px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
  <div className="Gjergj" style={{color: '#707070', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Gjergj</div>
</div>
<div className="EnterYourLastName" style={{color: '#105A12', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Enter your last name</div>
<div className="FormInput" style={{width: 501, height: 50, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 8, border: '1px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
  <div className="Kadriu" style={{color: '#707070', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Kadriu</div>
</div>
<div className="DescribeYourself" style={{color: '#105A12', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Describe yourself</div>
<div className="FormInput" style={{width: 501, height: 203, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 8, border: '1px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
  <div className="HiIMGjergjKadriuAnDeveloperPassionateCoffeeDrinkerAndEnthusiasticOverAllPersonIOwnMyFactoryShopDoingXAndAmOpenTowardsTheIdeaOfSettingUpAnOnlineShop" style={{color: '#707070', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Hi, I’m Gjergj Kadriu. An developer, passionate <br/>coffee drinker, and enthusiastic over all person,<br/>I own my factory/shop doing X, and am open<br/>towards the idea of setting up an online shop.</div>
</div>
<div className="SocialMedia" style={{color: '#105A12', fontSize: 21, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Social media</div>
<div className="FormInput" style={{width: 501, height: 50, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 8, border: '1px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
  <div className="HttpFacebookComProfileId000000" style={{color: '#707070', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>http://facebook.com/?profile_id=000000</div>
</div>
<br/>
<br/>
<div className="CartButton" style={{paddingLeft: 23, paddingRight: 23, paddingTop: 13.50, paddingBottom: 13.50, background: '#426B1F', borderRadius: 8, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
  <div className="SendUsMail" style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Send us mail</div>
</div>
<CnicheFresh/>
        <Footer/>
    </main>
  )
}
