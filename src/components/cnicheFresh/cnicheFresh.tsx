import Image from 'next/image'
import styles from '@/components/cnicheFresh/cnicheFresh.module.css';

export default function CnicheFresh() {
  return (
    <>
      <div className='web'>
        <div className={styles.Row}>
            <div className={styles.Frame15195}>
              <div className={styles.CnicheFresh}>Cniche Fresh</div>
              <div className={styles.EmailNewsletter} >Email Newsletter</div>
            </div>
            <div className={styles.CommsPrefsAndOptIn} >
              <div className={styles.FormInput}>
                <input className={styles.EnterYourEmailAddress} placeholder='Enter your email address'/>
              </div>
              <div className={styles.NotificaionPreferences}>
                <div className={styles.EmailMeAbout}>Email me about</div>
                <div className={styles.Frame15119}>
                  <div className={styles.RadioSelection}>
                    <div className={styles.Ellipse211}></div>
                    <div className={styles.SalesAndPromotions}>Sales and promotions</div>
                  </div>
                  <div className={styles.RadioSelection}>
                    <div className={styles.Ellipse211}></div>
                    <div className={styles.FreshStories}>Fresh stories</div>
                  </div>
                  <div className={styles.RadioSelection} >
                    <div className={styles.Ellipse211}></div>
                    <div className={styles.ArticlesAndBlogPosts}>Articles and blog posts</div>
                  </div>
                </div>
              </div>
              <div className={styles.CartButton}>
                <div className={styles.SignMeUp}>Sign me up</div>
              </div>
            </div>
        </div>
      </div>
      <div className={'mobile ' + styles.Mobile}>
      <div className="CnicheFresh" style={{padding:0, color: 'black', fontSize: 40, fontFamily: 'Newsreader', fontStyle: 'italic', fontWeight: '400',  wordWrap: 'break-word'}}>Cniche Fresh</div>
      <div className="EmailNewsletter" style={{padding:0, color: 'black', fontSize: 40, fontFamily: 'Newsreader', fontWeight: '400',  wordWrap: 'break-word'}}>Email Newsletter</div>
      <div className="FormInput" style={{marginTop: 50, width: 282, height: 50, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, borderRadius: 8, border: '1px black solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
        <input className="EnterYourEmailAddress" style={{color: '#707070', fontSize: 20, fontFamily: 'Inter', fontWeight: '400',  wordWrap: 'break-word'}} placeholder='Enter your email address'/>
      </div>
      <div className="EmailMeAbout" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Email me about</div>
          <div style={{ display: 'inline-grid' }}>
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
          </div><br/>
          <div className="CartButton" style={{width: "21vw", height: "2vh", paddingLeft: 23, paddingRight: 23, paddingTop: 13.50, paddingBottom: 13.50, background: '#426B1F', borderRadius: 8, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
  <div className="SignMeUp" style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: 20.80, wordWrap: 'break-word'}}>Sign me up</div>
</div>
      </div>
    </>
  )
}
