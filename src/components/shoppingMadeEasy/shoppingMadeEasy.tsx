import Image from 'next/image'

export default function ShoppingMadeEasy() {
  return (
    <div>
      <div className="web" style={{ margin: "0 auto"}}>
        <img className="BellPeppers" style={{marginLeft: "20vw", width: 608, height: 405, borderRadius: 2}} src="/imgs/portotheme.png" />
        <div className="ShoppingMadeEasy" style={{display: '-webkit-inline-box', width: 501, color: 'black', fontSize: 64, fontFamily: 'Newsreader', fontWeight: '400', wordWrap: 'break-word'}}>Shopping Made Easy</div>
        <div className="Button" style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 19, paddingBottom: 19, background: '#426B1F', borderRadius: 8, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
    <div className="GetAQuote" style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Get a quote</div>
  </div>
  
        <img className="Image1" style={{ marginLeft: "40vw", width: 680, height: 387}} src="/imgs/elessi.png" />
      </div>
      <div className='mobile'>
      <div className="ShoppingMadeEasy" style={{ marginTop: "3vh",width: 501, color: 'black', fontSize: 35, fontFamily: 'Newsreader', fontWeight: '400', wordWrap: 'break-word'}}>ShoppingMade Easy</div>
      <div className="Button" style={{marginTop: "1vh", paddingLeft: 32, paddingRight: 32, paddingTop: 19, paddingBottom: 19, background: '#426B1F', borderRadius: 8, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
  <div className="GetAQuote" style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Get a quote</div>
</div>
      <div className="GetAQuote" style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Get a quote</div>
      <img className="BellPeppers" style={{width: 300, height: 222, borderRadius: 2}} src="/imgs/electro.png" />
      <div className="LetSMakeTheUserExperienceUnforgettableForYourCustomers" style={{width: 310, color: 'black', fontSize: 35, fontFamily: 'Newsreader', fontWeight: '400', wordWrap: 'break-word'}}>Let’s make the user-experience unforgettable for your customers.</div>
      <div className="Subheadline" style={{width: 310, color: '#707070', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>We will initially communicate and write specifications specific to your customers needs. After that work on off loading work such as inventory and management of inventory can be handled. </div>
      <div className="Button" style={{paddingLeft: 32, paddingRight: 32, paddingTop: 19, paddingBottom: 19, background: '#426B1F', borderRadius: 8, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
  <div className="ContactUs" style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Contact us</div>
</div>
      </div>
    </div>
  )
}
