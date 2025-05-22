import { useState,useEffect } from 'react'
import Image from 'next/image'
import MapContainer from '../components/MapContainer'

import addressIcon from '../img/icon/address.svg'
import hourIcon from '../img/icon/hour24.svg'
import foxIcon from '../img/icon/fox.svg'
import cellphoneIcon from '../img/icon/cellphone.svg'
import consultIcon from '../img/icon/consult.svg'
import call2 from '../img/icon/call2.svg'
import styles from '../styles/contact.module.scss'

const URL = 'https://www.yangdong.co:8443/yangdong_web/'
export default function Contact() {
  const contactData =[
    {icon:addressIcon,text1:'公司地址',text2:'江苏省苏州工业园区唯亭镇双灯路2号'},
    {icon:hourIcon,text1:'销售总机',text2:'0512-62388268'},
    {icon:call2,text1:'急单热线',text2:'0512-62388298'},
    {icon:cellphoneIcon,text1:'订单咨询',text2:'0512-62388058'},
    {icon:cellphoneIcon,text1:'技术咨询',text2:'0512-62388068'},
    {icon:consultIcon,text1:'销售主管',text2:'18852996299'},
    {icon:foxIcon,text1:'销售传真',text2:'0512-62388198'},
  ]
  const teamData =[
    {
      name:'黄经理',
      position:'技术总监 / Technical Director',
      tel:'18852996299',
      fax:'0512-62388198',
      email:'2521813109@qq.com',
      img:URL + 'concert/erweima_H1.jpg'
    },
    {
      name:'林女士',
      position:'销售主管 / Sales Executive',
      tel:'15850006720',
      fax:'0512-62388198',
      email:'2521813109@qq.com',
      img:URL + 'concert/erweima_L.jpg'
    },
    {
      name:'朱女士',
      position:'销售主管 / Sales Executive',
      tel:'18963650984',
      fax:'0512-62388198',
      email:'2521813109@qq.com',
      img:URL + 'concert/erweima_Z.jpg'
    },
    {
      name:'黄女士',
      position:'销售主管 / Sales Executive',
      tel:'13776080469',
      fax:'0512-62388198',
      email:'2521813109@qq.com',
      img:URL + 'concert/erweima_H2.jpg'
    },
    {
      name:'尹小艳',
      position:'销售专员 / Sales Specialist',
      tel:'138 6257 6851',
      fax:'0512-62388198',
      email:'2521813109@qq.com',
      img:'https://www.yangdong.co:8443/yangdong-new/contact/erweima4.webp'
    },
    {
      name:'黄玲',
      position:'销售专员 / Sales Specialist',
      tel:'180 2024 2001',
      fax:'0512-62388198',
      email:'2521813109@qq.com',
      img:'https://www.yangdong.co:8443/yangdong-new/contact/erweima5.webp'
    },
    {
      name:'徐小玲',
      position:'销售专员 / Sales Specialist',
      text3:'180 2024 2063',
      fax:'0512-62388198',
      email:'2521813109@qq.com',
      img:'https://www.yangdong.co:8443/yangdong-new/contact/erweima6.webp'
    }
  
  ]
  const [windowSize,setWindowSize]  = useState(getWindowSize())
  function getWindowSize(){
    const {innerWidth} = window
    return {innerWidth}
  }
  useEffect(() => {
      // 处理屏幕宽度变化
    function handleWindowResize(){
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize',handleWindowResize)
    return ()=>{
      window.removeEventListener('resize',handleWindowResize)
    }
  },[])
  const pcImgURL = 'https://www.yangdong.co:8443/yangdong_web/banner/pc/contact_banner.jpg'
  const mobileImgURL= 'https://www.yangdong.co:8443/yangdong_web/banner/mobile/contact_banner.jpg'
  return(
    <main>
      <div className={styles.banner}><img src={windowSize.innerWidth >= 750 ? pcImgURL : mobileImgURL} alt='联系我们'/></div>
      <div className='pageAnchor'>
        <p className='anchorL'>
          <a style={{borderBottom:'2px solid #bb030f'}}>联系方式</a>
          {/* <a>在线留言</a> */}
        </p>
        <div className='anchorR'>
          <p style={{fontSize:'.125rem'}}>Contact Us</p>
          <p style={{fontSize:'.1375rem',fontWeight:'bold'}}>联系我们</p>
        </div>
      </div>
      <div className={styles.contactWrap}>
        <div className={styles.contactWay}>
          <div className={styles.contactLeft}>
            <h2>江苏扬东铝业集团有限公司</h2>
            <div className={styles.contactGrid}>
                {contactData.map((item,i)=>{
                    return <div key={i} className={styles.contactItem}>
                        <Image src={item.icon}></Image>
                        <div>
                            <p>{item.text1}</p>
                            <p>{item.text2}</p>
                        </div>
                    </div>
                })}
            </div>
          </div>
          <div className={styles.address}><MapContainer/></div>
        </div> 
        <div className={styles.contactTitle}>
          <h3>联系我们的团队</h3>
          <p>Contact Our Team</p>
        </div>
        <div className={styles.teamWrap}>
          {teamData.map((item,i)=>{
            return <div key={i} className={styles.teamCard}>
              <div>
                <span>{item.name}</span>
                <p style={{margin:'0px 0 .1875rem'}}>{item.position}</p>
                <p>电话：<a href={`tel:${item.tel}`}>{item.tel}</a></p>
                <p>传真：<a>{item.fax}</a></p>
                <p>邮箱：{item.email}</p>
              </div>
            <div className={styles.teamCardErweima}><img src={item.img} alt='微信二维码'/></div>
          </div>
          })}
        </div>
          {/* <div className={styles.contactTitle}>
              <h3>给我们留言</h3>
              <p>Leave us s message</p>
          </div> */}
      </div>
    </main>
  )
}