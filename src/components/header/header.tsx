import Image from 'next/image'
import styles from '@/components/header/header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <>
    <div className='web'>
        <header>
          <div className={styles.Header}>
            <Link href='/'>
              <div className={styles.Cniche}>Cniche</div>
            </Link>
            <div className={styles.NavLinks}>
              <Link href="/shop">
                <div className={styles.Shop}>Shop</div>
              </Link>
              <Link href="/newsstand">
                <div className={styles.Newstand}>Newstand</div>
              </Link>
              <Link href="/who_we_are">
                <div className={styles.WhoWeAre}>Who we are</div>
              </Link>
              <Link href="/my_profile">
                <div className={styles.MyProfile}>My profile</div>
              </Link>
              <Link href="/my_basket">
                <div className={styles.CartButton} >
                  <div className={styles.Basket0}>Basket (0)</div>
                </div>
              </Link>
            </div>
          </div>
        </header>
    </div>
      <div className='mobile'>
        <header style={{ display: 'flex', marginTop: 10 }}>
        <Link href="/" style={{ textDecoration: "none"}}>
          <div className="Cniche" style={{marginTop: 20, color: '#426B1F', fontSize: 32, fontFamily: 'Newsreader', fontWeight: '500', wordWrap: 'break-word'}}>Cniche</div>
          </Link>
        <div className="CartButton" style={{marginLeft: "auto", width: "19vw", height: "2vh", paddingLeft: 23, paddingRight: 23, paddingTop: 13.50, paddingBottom: 13.50, background: '#01AAC3', borderRadius: 8, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div className="Basket0" style={{textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: 20.80, wordWrap: 'break-word'}}>Basket (0)</div>
        </div>
        </header>
      </div>
    </>
  )
}
