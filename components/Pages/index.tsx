import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { text } from 'stream/consumers';



export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
 // let name = "خوش آمدید"
 
 {/* global.lang={ff:"vr" , ffb:"vb"}*/}
  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      
      <br-x />
      <Window title={"قیمت لحظه ای تتر"} style={{minHeight: 200, margin: 10, width: "calc(100% - 20px)",fontSize:"15px" }}>
        
      <div style={{
        width:"50%", height:50,backgroundColor:"#8DD3F1D6" , borderRadius:20,
        textAlign: "center", marginTop:"35px", padding:"15px",
        marginRight:"230px",
        borderStyle:"solid",
        borderColor:"darkblue",
        fontPalette:"light"
      }}>
        
        لحظه ای : {(props.p.price as number).toLocaleString("fa-IR")}
        
      </div>
      
      
      
      
      <div style={{width:"50%", height:50,backgroundColor:"#8DD3F1D6" , borderRadius:20,
        textAlign: "center",  padding:"15px",
        marginRight:"230px",
        marginTop:"10px",
        borderStyle:"solid",
        borderColor:"darkblue"
        
      }}>
        تغیرات 24 ساعت : {
        
        "%" +(Number(props.p.diff24d )as number).toLocaleString("fa-IR")
        
        }
      </div>
      
      <div style={
        {width:"50%", height:50,backgroundColor:"#8DD3F1D6" , borderRadius:20,
        textAlign: "center",  padding:"15px",
        marginRight:"230px",
        marginTop:"10px",
        borderStyle:"solid",
        borderColor:"darkblue"
      }}>
        تغیرات هفتگی : {
        
        "%" +(Number(props.p.diff7d )as number).toLocaleString("fa-IR")
        
        
        }
     
      </div>
      
      <div style={
        {width:"50%", height:50,backgroundColor:"#8DD3F1D6" ,borderRadius:20,
        textAlign: "center",padding:"15px",
        marginRight:"230px",
        marginTop:"10px",
        marginBlockEnd:"35px",
        borderStyle:"solid",
        borderColor:"darkblue"
      
      }}>
    
      تغیرات ماهانه : {
        
        "%" +(Number(props.p.diff30d )as number).toLocaleString("fa-IR")
        
        }
      </div>
      
      
      
      <div style={{
        width:"25%", height:25,backgroundColor:"#1680AED6" , borderRadius:20,
        textAlign: "center", 
        marginRight:"230px",
        borderStyle:"solid",
        borderColor:"darkblue",
        fontPalette:"light"
      }}>
        
        کیانا رمضانیان                
        </div>
        <div style={{
        width:"25%", height:25,backgroundColor:"#1680AED6" , borderRadius:20,
        textAlign: "center", 
        marginRight:"455px",
        borderStyle:"solid",
        borderColor:"darkblue",
        fontPalette:"light",
        marginTop:"0px"
      }}>
        
        
        LOCALHOST TEAM
        
      
      </div>
     
     
     
      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch("http://api.tetherland.com/currencies")
    let data = await res.json()
    
    let p =data.data.currencies.USDT
    console.log("priiiiiiiiiice",p)

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}