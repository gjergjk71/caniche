import Image from 'next/image'
import styles from "./newsstand.module.css";

export default function Newsstand() {
  return (
    <div>
        <div className='web' >
          <div style={{ display: 'inline-flex', marginLeft: "20vw", marginTop: 15, marginBottom: 15 }} className={styles.WebMobile}>
<div>
<div className="Newsstand" style={{width: 501, color: 'black', fontSize: 64, fontFamily: 'Newsreader', fontWeight: '400', wordWrap: 'break-word'}}>Newsstand</div>
      <div className="Subheadline" style={{width: '443px', color: '#707070', fontSize: '25px', fontFamily: 'Inter', fontWeight: 400, lineHeight: '40px', wordWrap: 'break-word'}}>News from our company</div>
      <br/>
      <br/>
      <br/>
      <br/>
      <p style={{ margin: "0 auto" }}>No blog pots to show.</p>

</div>
      
      <img className="BellPeppers" style={{width: 608, height: 405, borderRadius: 2}} src="/imgs/newsstand.jpg" />
      </div>

    <div>
    <div>
    </div>
    </div>
      </div>
      <div className='mobile'>
      <img className="BellPeppers" style={{width: 608, height: 405, borderRadius: 2}} src="/imgs/newsstand.jpg" />
    <div>
    <br/>
      <p style={{ margin: "0 auto" }}>No blog pots to show.</p> 
    </div>
    <br/>
    <br/>
    <br/>
    <br/>

      </div>
    </div>
  )
}
