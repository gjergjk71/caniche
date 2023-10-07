import Image from 'next/image'
import styles from '@/components/developTech/developTech.module.css';

export default function DevelopTech() {
  return (
    <div>
      <div className='web'>
        <div className={styles.Row}>
        <div className={styles.RowFirstChild}>
          <img className={styles.BellPeppers} src="/imgs/plan.png" />
        </div>
        <div className={styles.Section2Content}>
          <div className={styles.Frame15288}>
            <div className={styles.WeReDevelopersTechSupportersAndConsumersOfOurOwnProducts}>We’re developers, tech supporters,    and consumers of our own products.</div>
            <div className={styles.Subheadline}>Sustainability is at the heart of what we stand for—that’s why we only partner with partners who are open to communication from the get-go.</div>
            <div className={styles.Button}>
              <div className={styles.ReadOurStory}>Read our story</div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className={'mobile ' + styles.Mobile}>
      <div className="WeReDevelopersTechSupportersAndConsumersOfOurOwnProducts" style={{width: 324, color: 'black', fontSize: 35, fontFamily: 'Newsreader', fontWeight: '400', wordWrap: 'break-word'}}>We’re developers, tech supporters,and consumers of our own products.</div> 
      <div className="Subheadline" style={{width: 324, color: '#707070', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Sustainability is at the heart of what we stand for—that’s why we only partner with partners who are open to communication from the get-go.</div>
      <div className="Button" style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 19, paddingBottom: 19, background: '#426B1F', borderRadius: 8, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
        <div className="ReadOurStory" style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Read our story</div>
      </div><br/>
        <img className="BellPeppers" style={{width: 312, height: 208, borderRadius: 2}} src="/imgs/plan.png" />
      </div>
    </div>
  )
}
