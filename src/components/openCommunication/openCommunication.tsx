import Image from 'next/image'
import styles from '@/components/openCommunication/openCommunication.module.css';

export default function OpenCommunication() {
  return (
    <div>
      <div className='web'>
        <div className={styles.Row}>
          <div className={styles.RowFirstChild}>
            <img className={styles.BellPeppers} src="/imgs/open.png" />
          </div>
          <div className={styles.Section2Content}>
            <div className={styles.Frame15288}>
              <div className={styles.AfterCommunicatingDetailsMakeYourInformedDecision}>After communicating details make your informed decision</div>
              <div className={styles.Subheadline}>We will help you through all the hurdles and problems that will come on your journey to get on the online shopping experience train.</div>
              <div className={styles.Button}>
                <div className={styles.ContactUs}>Contact Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'mobile ' + styles.Mobile }>
      <img className="BellPeppers" style={{width: 347, height: 231, borderRadius: 2}} src="/imgs/open.png" />
      <div className="AfterCommunicatingDetailsMakeYourInformedDecision" style={{width: 345, color: 'black', fontSize: 35, fontFamily: 'Newsreader', fontWeight: '400', wordWrap: 'break-word'}}>After communicating details make your informed decision</div>
      <div className="Subheadline" style={{width: 345, color: '#707070', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>We will help you through all the hurdles and problems that will come on your journey to get on the online shopping experience train.</div>
      <div className="Button" style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 19, paddingBottom: 19, background: '#426B1F', borderRadius: 8, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
  <div className="ContactUs" style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Contact Us</div>
</div>
      </div>
    </div>
  )
}
