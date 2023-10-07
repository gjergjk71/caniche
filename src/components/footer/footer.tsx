import Image from 'next/image'
import styles from '@/components/footer/footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
        <br/>
        <br/>
        <br/>
        <div className='web'>
            <div className={styles.Footer2}>
                <div className={styles.InnerRow}>
                    <div className={styles.LogoAndAddress}>
                        <div className={styles.CnicheLlc}>Cniche LLC</div>
                        <div className={styles.LogoWordmark}></div>
                        <div className={styles.ProduceLaneGardentownCa51512}>5555 Produce Lane    Gardentown, CA 51512</div>
                    </div>
                    <div className={styles.Row}>
                        <div className={''}>
                            <Link href="/shop">
                                <div className={styles.Shop}>Shop</div>
                            </Link>
                            <Link href="/who_we_are">
                            <div className={styles.WhoWeAre}>Who we are</div>
                                </Link>
                            <Link href="/newsstand">
                                
                                <div className={styles.Newsstand}>Newsstand</div>
                            </Link>
                        </div>
                        <div className={" " + styles.LinkColumn2}>
                            <Link href="/my_profile">
                                <div className={styles.MyProfile}>My profile</div>
                            </Link>
                            <Link href="/my_basket">
                                <div className={styles.MyBasket}>My basket</div>
                            </Link>
                            <Link href="/my_preferences">
                                <div className={styles.MyPreferences}>My preferences</div>
                            </Link>
                        </div>
                        <div className={" " + styles.LinkColumn3}>
                            <Link href="/contact_us">
                                <div className={styles.ContactUs}>Contact us</div>
                            </Link>
                            <Link href="/our_values">
                                <div className={styles.OurValues}>Our values</div>
                            </Link>
                            <Link href="/accessibility">
                                <div className={styles.Accessibility}>Accessibility</div>
                            </Link>
                        </div>
                        <div className={" " + styles.LinkColumn4}>
                            <Link href="/privacy_and_policy">
                                <div className={styles.PrivacyPolicy}>Privacy policy</div>
                            </Link>
                            <div className={styles.SiteMap}>Site map</div>
                            <Link href="/terms_and_conditions">
                                <div className={styles.TermsAndConditions}>Terms and conditions</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={ 'mobile ' + styles.Mobile}>
            <div className="CnicheLlc" style={{color: 'black', fontSize: 40, fontFamily: 'Newsreader', fontStyle: 'italic', fontWeight: '400',  wordWrap: 'break-word'}}>Cniche LLC</div>
            <div className="ProduceLaneGardentownCa51512" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>5555 Produce LaneGardentown, CA 51512</div>
            <div className='row'>
                <Link href="/shop">
                    <div className="Shop" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Shop</div>
                </Link>
                <Link href="/who_we_are">
                    <div className="WhoWeAre" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Who we are</div>
                </Link>
                <Link href="/newsstand">
                    <div className="Newsstand" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Newsstand</div>
                </Link>
            </div>
            <div className='row'>
                <Link href="/my_profile">
                    <div className="MyProfile" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>My profile</div>
                </Link>
                <Link href="/my_basket">
                    <div className="MyBasket" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>My basket</div>
                </Link>
                <Link href="/my_preferences">
                    <div className="MyPreferences" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>My preferences</div>
                </Link>
            </div>
            <div className='row'>
                <Link href="/contact_us">
                    <div className="ContactUs" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Contact us</div>
                </Link>
                <Link href="/our_values">
                    <div className="OurValues" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Our values</div>
                </Link>
                <Link href="/accessibility">
                    <div className="Accessibility" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Accessibility</div>
                </Link>
            </div>
            <div className='row'>
                <Link href="/privacy_and_policy">
                    <div className="PrivacyPolicy" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Privacy policy</div>
                </Link> 
                <a href="#">
                    <div className="SiteMap" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Site map</div>
                </a>
                <Link href="/terms_and_conditions">
                    <div className="TermsAndConditions" style={{color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Terms and conditions</div>
                </Link>
            </div>
        </div>
    </footer>
    )
}