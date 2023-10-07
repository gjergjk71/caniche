import styles from './shop.module.css'
import Header from '@/components/header/header'
import CnicheFresh from '@/components/cnicheFresh/cnicheFresh'
import Footer from '@/components/footer/footer'
import '@/app/globals.css';

export default function Home() {
  return (
    <main className={styles.main}>
        <Header/>
        <img className="BellPeppers" style={{width: 302, height: 201, borderRadius: 2}} src="/imgs/Summer-In-New-York_19th-dec.webp" />
<div className="Preferences" style={{width: 501, color: 'black', fontSize: 35, fontFamily: 'Newsreader', fontWeight: '400', wordWrap: 'break-word'}}>Preferences</div>
<div className="Subheadline" style={{width: 290, color: '#707070', fontSize: 25, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>We care about your personal quirks</div>
<div className="EmailMeAbout" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Email me about</div>
<div style={{ display: 'inline-grid', padding:15 }}>
          <div className="RadioSelection" style={{width: 229, height: 26, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div className="Ellipse211" style={{backgroundColor:"#426B1F", width: 20, height: 20, borderRadius: 9999, border: '1px black solid'}} />
        <div className="SalesAndPromotions" style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Sales and promotions</div>
      </div>
      <div className="RadioSelection" style={{width: 148, height: 26, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div className="Ellipse211" style={{backgroundColor:"#426B1F", width: 20, height: 20, borderRadius: 9999, border: '1px black solid'}} />
        <div className="FreshStories" style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Fresh stories</div>
      </div>
      <div className="RadioSelection" style={{width: 241, height: 26, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div className="Ellipse211" style={{backgroundColor:"#426B1F", width: 20, height: 20, borderRadius: 9999, border: '1px black solid'}} />
        <div className="ArticlesAndBlogPosts" style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Articles and blog posts</div>
      </div>
          </div>
          <div className="EmailMeAbout" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Site Language</div>
<div style={{ display: 'inline-grid', padding:15 }}>
          <div className="RadioSelection" style={{width: 229, height: 26, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div className="Ellipse211" style={{width: 20, height: 20, borderRadius: 9999, border: '1px black solid'}} />
        <div className="SalesAndPromotions" style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Deutsch (soon)</div>
      </div>
      <div className="RadioSelection" style={{width: 148, height: 26, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div className="Ellipse211" style={{backgroundColor:"#426B1F", width: 20, height: 20, borderRadius: 9999, border: '1px black solid'}} />
        <div className="FreshStories" style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>English</div>
      </div>
      <div className="RadioSelection" style={{width: 241, height: 26, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div className="Ellipse211" style={{width: 20, height: 20, borderRadius: 9999, border: '1px black solid'}} />
        <div className="ArticlesAndBlogPosts" style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Italian (soon)</div>
      </div>
          </div>
          <div className="EmailMeAbout" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Collect cookies</div>
<div style={{ display: 'inline-grid', padding:15 }}>
      <div className="RadioSelection" style={{width: 148, height: 26, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div className="Ellipse211" style={{backgroundColor:"#426B1F", width: 20, height: 20, borderRadius: 9999, border: '1px black solid'}} />
        <div className="FreshStories" style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>Yes</div>
      </div>
      <div className="RadioSelection" style={{width: 241, height: 26, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div className="Ellipse211" style={{width: 20, height: 20, borderRadius: 9999, border: '1px black solid'}} />
        <div className="ArticlesAndBlogPosts" style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}}>No</div>
      </div>
          </div>
          <CnicheFresh/>
        <Footer/>
    </main>
  )
}
