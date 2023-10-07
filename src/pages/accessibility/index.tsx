import styles from './shop.module.css'
import Header from '@/components/header/header'
import CnicheFresh from '@/components/cnicheFresh/cnicheFresh'
import Footer from '@/components/footer/footer'
import '@/app/globals.css';

export default function Home() {
  return (
    <main className={styles.main}>
        <Header/>
        <div>
        <div className="AccessibilityStatementForCniche" style={{width: '1145px', color: 'black', fontSize: '64px', fontFamily: 'Newsreader', fontWeight: 400, lineHeight: '76.80px', wordWrap: 'break-word'}}>Accessibility Statement for Cniche<br /></div>
        <div className="Subheadline" style={{width: '670px', color: '#707070', fontSize: '25px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '40px', wordWrap: 'break-word'}}>This is an accessibility statement from cniche.<br /></div>
        <div className="ConformanceStatus" style={{width: '1145px', color: 'black', fontSize: '42.67px', fontFamily: 'Newsreader', fontWeight: 400, lineHeight: '51.20px', wordWrap: 'break-word'}}>Conformance status</div>
        <div className="Subheadline" style={{width: '928px', height: '252px'}}><span style={{color: '#707070', fontSize: '25px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '40px', wordWrap: 'break-word'}}>The </span><span style={{color: '#707070', fontSize: '25px', fontFamily: 'Inter', fontWeight: 400, textDecoration: 'underline', lineHeight: '40px', wordWrap: 'break-word'}}>Web Content Accessibility Guidelines (WCAG)</span><span style={{color: '#707070', fontSize: '25px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '40px', wordWrap: 'break-word'}}> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Cniche is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.<br /></span></div>
        <div className="Feedback" style={{width: '1145px', color: 'black', fontSize: '42.67px', fontFamily: 'Newsreader', fontWeight: 400, lineHeight: '51.20px', wordWrap: 'break-word'}}>Feedback</div>
        <div className="Subheadline" style={{width: '928px', height: '252px'}}><span style={{color: '#707070', fontSize: '25px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '40px', wordWrap: 'break-word'}}>We welcome your feedback on the accessibility of Cniche. Please let us know if you encounter accessibility barriers on Cniche:<br /></span><span style={{color: '#707070', fontSize: '25px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '40px', wordWrap: 'break-word'}}>Phone: +38349236492<br />E-mail: </span><span style={{color: '#707070', fontSize: '25px', fontFamily: 'Inter', fontWeight: 400, textDecoration: 'underline', lineHeight: '40px', wordWrap: 'break-word'}}>gk210076k@riinvest.net<br /></span></div>
        <div className="Date" style={{width: '1145px', color: 'black', fontSize: '42.67px', fontFamily: 'Newsreader', fontWeight: 400, lineHeight: '51.20px', wordWrap: 'break-word'}}>Date</div>
        <div className="Subheadline" style={{width: '1035px'}}><span style={{color: '#707070', fontSize: '25px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '40px', wordWrap: 'break-word'}}>This statement was created on 1 October 2023 using the </span><span style={{color: '#707070', fontSize: '25px', fontFamily: 'Inter', fontWeight: 400, textDecoration: 'underline', lineHeight: '40px', wordWrap: 'break-word'}}>W3C Accessibility Statement Generator Tool</span><span style={{color: '#707070', fontSize: '25px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '40px', wordWrap: 'break-word'}}>.<br /></span></div>
      </div>

        <CnicheFresh/>
        <Footer/>
    </main>
  )
}
