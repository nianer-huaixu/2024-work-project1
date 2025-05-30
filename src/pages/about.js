import React from "react"
import { Player } from 'video-react'
import { useState,useEffect,useRef } from 'react'
import Image from 'next/image'
import Slider from "react-slick"
import CountUp from "react-countup"

import Title from '../components/title'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "node_modules/video-react/dist/video-react.css"

import styles from '../styles/about.module.scss'
import fremaworkImg from '../img/about/fremawork.png'

// 发展历程 start

const URL = 'https://www.yangdong.co:8443/yangdong_web/'
function AdaptiveHeight() {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    className: "historySlickStyle",
    dots: true,
    arrows:true,
    infinite: true,
    initialSlide:0,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div style={{height:'.44rem'}}>
        <ul style={{marginLeft:activeSlide<7?`-${activeSlide* 1.45}rem` : '-8.7rem'}}>{dots}</ul>
      </div>
      ),
      customPaging: i => (<span>{data[i].year}</span>
    ),
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };
  const data =[
    {
      year:2012,
      img:URL +'about/2012.png',
      intro:'2012年5月：扬东铝业成立',
      p1:'江苏扬东铝业集团有限公司(简称"扬东铝业集团”) 成立于2012年，公司现已成为华东地区集铝批发零售、原材料加工、国际贸易和技术咨询为一体的大型多元化企业，主要从事高精I业铝材的加工和销售。扬东铝业位于江苏省苏州市境内，公司占地面积20000平米，物流交通极为发达，走向全国，面向国际，具有资源、质量、价格的绝对优势。',
      p2:'企业实力：',
      p3:[
        '一、铝板厚度(0.02mm至750mm)，最大宽度(3000mm)，最大长度(35000mm)',
        '二、高精铝板(平整度+0.2mm),最厚公差(+0.02mm至0.2mm)',
        '三、铝卷厚度(0.1mm至8mm)，最大宽度(2400mm)，分条加工最窄(15mm)，分条精度(0.2mm)',
        '四、铝锻件：大型自由锻件、模锻件、碾环、特殊锻造(锻件年产量超过500万件)',
        '五、铝板直径(3mm至800mm)，公差(+0.01mm至0.2mm)，长度(24000mm)，公差(+0.2mm至2mm)'
      ]
    },
    {
      year:2014,
      img:URL +'about/2014.png',
      intro:'2014年4月：与全球知名铝厂正在合作',
      p1:'江苏扬东铝业集团有限公司是西南铝业(集团)有限责任公司和东北轻合金有限责任公司在华东地区的总代理，享有"优秀供应商”称号，立足华东，之后也与美铝Alcoa、美国凯撒Kaiser、加拿大铝Alcan、日本神户KOBELCO、 德国爱励Aleris、 韩铝KTC、希腊Elval保持国内外良好、稳定的长久合作关系，是追求铝品牌的领先者!',
      p2:'主要供应领域有:航空航天、国防装备、军工兵器、石油化工、造船、核能、列车、集装箱、环保、精密加工、汽车零部件、机械、电子产品、模具、医疗设备、建筑、装饰、爆炸复台、电缆、仪器、日用品、包装等等。',
      p3:[]
    },
    {
      year:2015,
      img:URL +'about/2015.png',
      intro:'2015年3月：建立综合性现货铝材网上超市',
      p1:'主营产品：航空铝板、汽车用板、军工铝、高速列车用板、船用铝板、机柜板、高档化妆品盖料、模具加工件铝板、管道保温专用板、高精超平铝板(整板平整度+0.2mm)、牛皮纸防潮铝板、超硬铝板、预拉伸铝板、进口铝板、氧化铝板、镜面铝板、压花铝板、拉丝铝板、整平铝板、花纹铝板、高精铝卷、高精铝卷、超窄铝，挤压棒、精拉棒、磨光棒、有缝管、无缝管、铝锻件、断面异型材等。“现货批发、切割零售”2015年建立中国领先专业的综合性现货铝材网上超市。',
      p2:'企业实力：',
      p3:[
        '一、铝板厚度(0.02mm至750mm)，最大宽度(3000mm)，最大长度(35000mm)',
        '二、高精铝板(平整度+0.2mm),最厚公差(+0.02mm至0.2mm)',
        '三、铝卷厚度(0.1mm至8mm)，最大宽度(2400mm)，分条加工最窄(15mm)，分条精度(0.2mm)',
        '四、铝锻件：大型自由锻件、模锻件、碾环、特殊锻造(锻件年产量超过500万件)',
        '五、铝板直径(3mm至800mm)，公差(+0.01mm至0.2mm)，长度(24000mm)，公差(+0.2mm至2mm)'
      ]
    },
    {
      year:2016,
      img:URL +'about/2016.png',
      intro:'2016年6月：实现铝材品种齐全与加工一体化',
      p1:'享营全国的现代综合性全铝服务企业，拥有“裁剪、切割、表面处理、成型和机加工”5大加工平台。',
      p2:'常备铝台金材料[7075、7050、7A04(LC4)、 7A09 (LC9)、2A12 (LY12 )、2024、6061、 6063、 6082、 5A06 (LF6)、5A05 (LF5 )、5083、5754、 5052、 3A21 (LF21 )、3003、 1060、 1050、1070、2017、2A14( LY14 )、2A11 ( LY11 )、2124、2219、2017、 2A50 (LD5)、6A02 (LD2)、5A03 (LF3 )、5A02 (LF2)、6060、 MIC-6、 ]库存6000余吨，批发零售，量大现做(订货周期3-15天) !',
      p3:[]
    },
    {
      year:2017,
      img:URL +'about/2017.png',
      intro:'2017年：成为国内领先集铝批发零售、原材料加工、国际贸易和技术咨询为一体的大型多元化企业',
      p1:'二十几年的风风雨雨，江苏扬东创造了骄人的业绩，令人瞩目也令人自豪。在新世纪的历史进程中，扬东始终坚持“团结、拼搏、务实、开拓”的精神，以“质量求生存，开拓求发展”的经营理念，我们倡导“以客户的目标为追求，以客户的需求为基础”站在客户的角度思考， 定尺交货，为客户降低成本。',
      p2:'不断进取，不断完善，拥有21年专业销售经验与优秀团队，是遍布亚洲的知名供应商和国内最实力、规格最齐全的现货平台，从而使我们的产品更加精益求精，产品铺盖亚洲各地及国内大小型市场。',
      p3:[]
    },
    {
      year:2018,
      img:URL +'about/2018.png',
      intro:'2018年：成立集团公司，公司通过了ISO9001:2015质量体系、3A信用体系认证',
      p1:' ',
      p2:' ',
      p3:[
        '获得 · ISO9001:2015质量管理体系认证证书',
        '获得 · 企业信用评价AAA级信用企业',
        '获得 · 企业资信AAA等级证书',
        '获得 · 诚信经营AAA级示范单位',
        '获得 · 质量服务AAA级诚信单位',
        '获得 · 重合同守信用AAA级企业',
        '获得 · 重服务守信用AAA级单位',
        '获得 · 重质量守信用AAA级单位',
      ]
    },
    {
      year:2019,
      img:URL +'about/2019.png',
      intro:'2019年9月：公司通过国际安全标准测试，获得欧盟CE认证',
      p1:'扬东铝业集团时刻以顾客关注为焦点，以“真诚合作” 为经营准则,产品按国际、国家标准和行业标准组织生产;公司已取得ISO9001:2015质量体系认证、企业信用等级证书、质量服务诚信单位、重合同守信用企业、诚信经营示范单位、企业资信等级证书、重质量守信用单位、重服务守信用企业,部分产品取得了SGS的环保检测报告，符合欧盟ROHS标准',
      p2:' ',
      p3:[]
    },
    {
      year:2020,
      img:URL +'about/2020.png',
      intro:'2020年：荣获2020年中国房地产开发企业500强首选供应商·铝型材类',
      p1:'“精工品质，真诚合作”，扬东集团谒诚为广大中外客户提供优质的高精铝材，为顾客提供满意的产品，是我司不懈追求，以求共同发展，共创佳绩。',
      p2:'随着公司的壮大，集团继续弘扬”精诚求进” 的企业精神，恪守质量第一、用户至上的理念，不断地改进、完善自己。在发展道路上，寻求真诚合作，共同发展，扬东集团将与海内外各界同仁共创美好未来!',
      p3:[]
    },
    {
      year:2021,
      img:URL +'about/2021.png',
      intro:'2021年12月：获得“江苏省级企业技术中心”称号',
      p1:'我们将以客户为中心,持续满足客户需求,绝不失信于客户;',
      p2:'我们致力于精工铝材产业链的打造,为客户提供更加丰富、更具价值的方案和综合服务;',
      p3:['我们崇尚求精文化,不断开拓创新,追求和提供极致化的成本、极致化的效率、极致化的服务。']
    },
    {
      year:2022,
      img:URL +'about/2022.png',
      intro:'2022年：一直在路上，坚持在高端铝合金原材料路上前进。',
      p1:'我们聚焦于高精I业铝材行业;立志于持续改善精I品质,来持续提升客户的精工体验。',
      p2:'我们聚焦于铝材领域的创新,坚持自我批判和学习,不断完善提高,通过持续创新来为客户提供更优质的服务。',
      p3:['我们秉持精品、严谨、认真、实事求是的行事风格,脚踏实地,追求实实在在的成效。']
    },
    {
      year:2023,
      img:URL +'about/2023.png',
      intro:'2023年：积极拥抱ESG 绿电使用从我做起！',
      p1:'我们崇尚求精文化,不断开拓创新,追求和提供极致化的成本、极致化的效率、极致化的服务。',
      p2:'以客户为中心,绝不失信于任何人,以我的说到做到感染他人,赢得尊重。',
      p3:['管理是为经营服务的,我们要追求极致化的创新成果,为客户提供极致化的成本、效率、服务。']
    },
    {
      year:2025,
      img:URL +'about/2024.png',
      intro:'2025年一切敬请期待......',
      p1:'我们秉持精品、严谨、认真、实事求是的行事风格,脚踏实地,追求实实在在的成效。',
      p2:'以客户为中心,绝不失信于任何人,以我的说到做到感染他人,赢得尊重。',
      p3:[]
    }
  ]
  const Item = data.map((item,i)=>{
    return <div key={i}>
      <div className={styles.historyItem}>
        <span>{item.year}</span>
        <img src={item.img} />
      </div>
      <p>{item.intro}</p>
      <div className='historyText'>
        <p>{item.p1}</p>
        <p>{item.p2}</p>
        {item.p3.length!=0 && <div>
          {Array.from(item.p3).map((text,t)=>{
            return <p key={t}>{text}</p>
          })}
        </div>}
        
      </div>
    </div>
  })
  return (
    <div className="slider-container">
        <Slider {...settings}>{Item}</Slider>
    </div>
  );
}
// 发展历程 end

// 企业文化  start
import cultureicon1 from '../img/about/culture_icon_1.png'
import cultureicon2 from '../img/about/culture_icon_2.png'
import cultureicon3 from '../img/about/culture_icon_3.png'
import cultureicon4 from '../img/about/culture_icon_4.png'
import cultureimg1 from '../img/about/culture_img_1.png'
import cultureimg2 from '../img/about/culture_img_2.png'
import cultureimg3 from '../img/about/culture_img_3.png'
import cultureimg4 from '../img/about/culture_img_4.png'
import cultureimg5 from '../img/about/culture_img_5.png'
function Culture(){
  const data = [
    {   
      icon:cultureicon1,titile:'客户至上 求实创新',
      intro:'以客户为中,客户的满意是我们最大的动力,致力于成为新时代精密加工必选的优质铝材服务商，实现企业对内与对外的全球化应用与服务。'
    },
    {   
      icon:cultureicon2,titile:'开拓创新 悉心智造',
      intro:'精准判断市场态势，发挥“互联网+铝材”优势，积极开拓海外市场，大力发展跨境电商，提高产业链附加价值，带动产业链升级、完善和发展努力打造全产业链一体化商业模式。'
    },
    {   
      icon:cultureicon3,titile:'诚信为本 互利共享',
      intro:'始终坚持“团结、拼搏、务实、开拓的精神，以“质量求生存，开拓求发展”的经营理念，我们倡导“以客户的目标为追求，以客户的需求为基础”站在客户的角度思考，定尺交货，为客户降低成本。'
    },{   
      icon:cultureicon4,titile:'追求卓越 使命必达',
      intro:'根据用户的不同需求，专门研发设计最符合用户的材料需求，一直以来，以科学管理为先导，以客户服务工作为中心，不断实施全方位的新战略。'
    }
  ]
  const Item = data.map((item,i)=>{
    return <div key={i}>
      <Image src={item.icon} alt={item.titile}/>
      <h5>{item.titile}</h5>
      <p>{item.intro}</p>
    </div>
  })
  return <div>
    <div className={styles.cultureTop}>{Item}</div>
    <div className={styles.cultureImgBox}>
      <div className={styles.cultureImg1}><Image src={cultureimg1} alt='企业文化'/></div>
      <div><Image src={cultureimg2} alt='企业文化'/></div>
      <div><Image src={cultureimg3} alt='企业文化'/></div>
      <div><Image src={cultureimg4} alt='企业文化'/></div>
      <div><Image src={cultureimg5} alt='企业文化'/></div>
    </div>
  </div>
}
// 企业文化  end

// 荣誉资质 start
import honor1 from '../img/about/honor1.png'
import honor2 from '../img/about/honor2.png'
import honor3 from '../img/about/honor3.png'
import honor4 from '../img/about/honor4.png'
import honor5 from '../img/about/honor5.png'
import honor6 from '../img/about/honor6.png'
import honor7 from '../img/about/honor7.png'
import honor8 from '../img/about/honor8.png'
import honor9 from '../img/about/honor9.png'
function Honor(){
  var settings = {
    className: "honorSlickStyle",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  const data = [honor1,honor2,honor3,honor4,honor5,honor6,honor7,honor8,honor9]
  const Item = data.map((item,i)=>{
    return <div key={i} className={styles.honorItem} style={{width:300}}><Image src={item} alt='荣誉资质'/></div>
  })
  return (
    <div className="slider-container">
      <Slider {...settings}>{Item}</Slider>
    </div>
  );
}
// 荣誉资质 end

// 社会责任 start
function Duty(){
  const data =[
    {
      title:'以人为本',
      intro:'企业以人为本，员工以厂为荣，以人才和技术为基础，创造最佳产品服务。以客户为中心，持续满足客户需求，绝不失信于客户，我们致力于精工铝材产业链的打造，为客户提供更加丰富、更具价值的方案和综合服务。'
    },
    {
      title:'核心价值观',
      intro:'我们秉持精品、严谨、认真、实事求是的行事风格，脚踏实地，追求实实在在的成效。以客户为中心，绝不失信于任何人，以我的说到做到感染他人，赢得尊重。'
    },
    {
      title:'可持续发展',
      intro:'公司坚持绿色智造路线，走可持续发展道路，践行“绿色智造”经营理念，通过提高材料、能源利用率、推广清洁能源、设备环保设施改造，加强安全管理，落实主体责任制，主动承担企业应有的社会责任。'
    },
    {
      title:'道德与治理',
      intro:'我们坚持做良心企业，严格遵守诚信与道德法则，严格落实用人制度，遵守劳动法，完善所有员工福利，落实纳税政策，禁止企业一切不良现象，打造企业良好的口碑。'
    },
    {
      title:'志愿者精神',
      intro:'“舍予为舒，莫若忻者”，公司积极践行造福社会、奉献社会的重要责任，致力于回报社会、服务人民，始终将志愿者精神渗透公司企业文化建设中，积极主动履行社会责任，用实际行动回报社会。'
    },
    {
      title:'企业愿景',
      intro:'我们致力于精工铝材产业链的打造，为客户提供更加丰富、更具价值的方案和综合服务；  我们聚焦于高精工业铝材行业，立志于持续改善精工品质，来持续提升客户的精工体验。'
    }
  ]
  const [index,setIndex] = useState(0)
  const Item = data.map((item,i)=>{
    return <div key={i} className={[i == index? styles.selectDuty:'']} onMouseEnter={()=>{setIndex(i)}}>
      <span>{item.title}</span>
      <p>{item.intro}</p>
    </div>
  })
  const card = [
    {
      name:'黄经理',
      position:'技术总监 / Technical Director',
      tel:'18852996299',
      fax:'0512-62388198',
      email:'2521813109@qq.com',
      img:URL +'concert/erweima_H1.jpg'
    },
    {
      name:'林经理',
      position:'销售主管 / Sales Executive',
      tel:'15850006720',
      fax:'0512-62388198',
      email:'2521813109@qq.com',
      img:URL +'concert/erweima_L.jpg'
    },
    {
      name:'朱女士',
      position:'销售主管 / Sales Executive',
      tel:'18963650984',
      fax:'0512-62388198',
      email:'2521813109@qq.com',
      img:URL +'concert/erweima_Z.jpg'
    }
  ]
  const Card = card.map((item,i)=>{
    return <div key={i} className={styles.dutyCard}>
      <div>
        <span>{item.name}</span>
        <p style={{margin:'0px 0 30px'}}>{item.position}</p>
        <p>电话：<a href={`tel:${item.tel}`}>{item.tel}</a></p>
        <p>传真：{item.fax}</p>
        <p>邮箱：{item.email}</p>
      </div>
      <div className={styles.dutyCardErweima}><img src={item.img} alt='微信二维码'/></div>
    </div>
  })
  return <div className={styles.dutyWrap}>
    <div className={styles.dutyTop}>{Item}</div>
    <div className={styles.dutyCardWrap}>{Card}</div>
  </div>
}
// 社会责任 end
export default function About() {
  const videoRef = useRef()
  
  const [windowSize,setWindowSize]  = useState(getWindowSize())
  function getWindowSize(){
    const {innerWidth} = window
    return {innerWidth}
  }
  useEffect(() => {
    if(videoRef?.current){
      videoRef.current.play()
    }
      // 处理屏幕宽度变化
    function handleWindowResize(){
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize',handleWindowResize)
    return ()=>{
      window.removeEventListener('resize',handleWindowResize)
    }
  },[])
  const pcImgURL = 'https://www.yangdong.co:8443/yangdong_web/banner/pc/about_banner.png'
  const mobileImgURL= 'https://www.yangdong.co:8443/yangdong_web/banner/mobile/about_banner.jpg'
  return(
    <main className={styles.aboutWrap}>
      <div className={styles.banner}><img src={windowSize.innerWidth >= 750 ? pcImgURL : mobileImgURL} alt='扬东铝业'/></div>
      {windowSize.innerWidth >= 750 && <div className='pageAnchor'>
        <p className='anchorL'>
          <a href='#introduce' style={{borderBottom:'2px solid #bb030f'}}>企业简介</a>
          <a href='#history'>发展历程</a>
          <a href='#cuiture'>企业文化</a>
          <a href='#honor'>荣誉资质</a>
          <a href='#fremawork'>组织架构</a>
          <a href='#duty'>社会责任</a>
        </p>
        <div className='anchorR'>
          <p style={{fontSize:'.125rem'}}>About Us</p>
          <p style={{fontSize:'.1375rem',fontWeight:'bold'}}>走进扬东</p>
        </div>
      </div>}
      <div className='upwards' id='introduce'></div>
      <section className={styles.introduce}>
        <div className={styles.introduceL}>
          <i>Yang Chinese culture to create Oriental quality</i>
          <h3><span>扬</span>中华文化  <span>造</span>东方品质</h3>
          <div>
            <Player ref={videoRef} autoplay src='https://www.yangdong.co:8443/video/%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91.mp4'/>
          </div>
        </div>
        <div className={styles.introduceR}>
          <p>江苏扬东铝业集团有限公司(简称"扬东铝业集团”)成立于2012年,公司现已成为华东地区集铝批发零售、原材料加工、国际贸易和技术咨询为一体的大型多元化企业,主要从事高精工业铝材的加工和销售。扬东铝业位于江苏省苏州市境内,公司占地面积20000平米,物流交通极为发达,走向全国,面向国际,具有资源、质量、价格的绝对优势。</p>
          <p>二十几年的风风雨雨,江苏扬东创造了骄人的业绩,令人瞩目也令人自豪。在新世纪的历史进程中,扬东始终坚持“团结、拼搏、务实、开拓”的精神,以“质量求生存,开拓求发展”的经营理念,我们倡导“以客户的目标为追求,以客户的需求为基础”站在客户的角度思考,定尺交货,为客户降低成本。不断进取,不断完善,拥有21年专业销售经验与优秀团队,是遍布亚洲的知名供应商和国内最实力、规格最齐全的现货平台,从而使我们的产品更加精益求精,产品铺盖亚洲各地及国内大小型市场。</p>
          <img src="https://www.yangdong.co:8443/yangdong_web/img/about02.jpg"/>
          <ul className={styles.strengthWarp}>
            <li>
              <b><CountUp start={1999} end={2012} duration={2} separator=''/></b>
              <p>成立于（年）</p>
            </li>
            <li>
              <b><CountUp start={19000} end={20000} duration={2} separator=''/></b>
              <p>占地面积（m²）</p>
            </li>
            <li>
              <b><CountUp start={0} end={50} duration={2}/>+</b>
              <p>销售专员</p>
            </li>
            <li>
              <b><CountUp start={3325} end={5000} duration={2} separator=''/>+</b>
              <p>客户案例</p>
            </li>
          </ul>
        </div>
      </section>
      <div className='upwards' id='history'></div>
      <section className={styles.historyWrap}>
        <div className={styles.histroyT}>
          <h3>发展历程</h3>
          <p>Delevopent History</p>
        </div>
        <AdaptiveHeight/>
        {/* <div className={[styles.historyText,'main'].join(' ')}>
          <p>主营产品：航空铝板、汽车用板、军工铝、高速列车用板、船用铝板、机柜板、高档化妆品盖料、模具加工件铝板、管道保温专用板、高精超平铝板(整板平整度+0.2mm)、牛皮纸防潮铝板、超硬铝板、预拉伸铝板、进口铝板、氧化铝板、镜面铝板、压花铝板、拉丝铝板、整平铝板、花纹铝板、高精铝卷、高精铝卷、超窄铝，挤压棒、精拉棒、磨光棒、有缝管、无缝管、铝锻件、断面异型材等。“现货批发、切割零售”2015年建立中国领先专业的综合性现货铝材网上超市。</p>
          <p>企业实力：</p>
          <div>
            <p>一、铝板厚度(0.02mm至750mm)，最大宽度(3000mm)，最大长度(35000mm)</p>
            <p>二、高精铝板(平整度+0.2mm),最厚公差(+0.02mm至0.2mm)</p>
            <p>三、铝卷厚度(0.1mm至8mm)，最大宽度(2400mm)，分条加工最窄(15mm)，分条精度(0.2mm)</p>
            <p>四、铝锻件：大型自由锻件、模锻件、碾环、特殊锻造(锻件年产量超过500万件)</p>
            <p>五、铝板直径(3mm至800mm)，公差(+0.01mm至0.2mm)，长度(24000mm)，公差(+0.2mm至2mm)</p>
          </div>
        </div> */}
        <div className={styles.clound}></div>
      </section>
      <div className='upwards' id='cuiture'></div>
      <section className={styles.cultureWrap}>
        <Title mainhead={['企业','文化']} subhead={'高端化、集成化、终端化'}/>
        <Culture/>
      </section>
      <div className='upwards' id='honor'></div>
      <section>
        <Title mainhead={['荣誉','资质']} subhead={'已通过ISO9001：2015质量管理体系认证'}/>
        <div className={styles.honorWrap}><Honor/></div>
      </section>
      <div className='upwards' id='fremawork'></div>
      <section className={styles.fremaworkWrap}>
        <Title mainhead={['组织','架构']} subhead={'展卓越才华 铸成功之路'}/>
        <Image src={fremaworkImg} alt='组织架构'/>
      </section>
      <div className='upwards' id='duty'></div>
      <section>
        <Title mainhead={['社会','责任']} subhead={'尊重劳动保障权益 持续发展共筑美好'}/>
        <Duty/>
      </section>
    </main>
  )
}