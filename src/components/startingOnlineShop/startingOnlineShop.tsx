import Image from 'next/image'
import styles from '@/components/startingOnlineShop/startingOnlineShop.module.css';

export default function StartingOnlineShop() {
  return (
    <>
    <div className='web'>
      <div className={styles.Row}>
        <div className={styles.Section1Content}>
          <div className={styles.StartingAnOnlineShop}>Starting an online shop</div>
          <div className={styles.Button}>
            <a style={{ textDecoration: "none"}} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScFK8IKKTO-3QYr5f0VcS5p2PqC_EwiqshGtWitUfvEa5Vg7A/viewform?usp=sf_link">
              <div className={styles.SubmitOurSurvey}>Submit our survey</div>
            </a>
          </div>
        </div>
        <div>
          <img className={styles.Image1}  src="/imgs/brainstorming.jfif" />
        </div>
      </div>
    </div>
      <div className={'mobile ' + styles.Mobile}> 
      <div className="StartingAnOnlineShop" style={{width: 501, color: 'black', fontSize: 35, fontFamily: 'Newsreader', fontWeight: '400', wordWrap: 'break-word'}}>Starting an online shop</div>
      <div className="Button" style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 19, paddingBottom: 19, background: '#426B1F', borderRadius: 8, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
  <div className="SubmitOurSurvey" style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>
    <a style={{ textDecoration: "none", color: "white" }} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScFK8IKKTO-3QYr5f0VcS5p2PqC_EwiqshGtWitUfvEa5Vg7A/viewform?usp=sf_link">Submit our survey</a>
  </div>
  </div><br/><img className="Image1" style={{width: 285, height: 149}} src="/imgs/brainstorming.jfif" />
      </div>
    </>
  )
}
