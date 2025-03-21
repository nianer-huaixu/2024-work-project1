'use client';
import React from 'react'
import { useState, useEffect } from 'react'
import { store } from '../redux/store'
import Image from 'next/image'
import Link from 'next/link'
import CountUp from "react-countup";

import logo from "@/img/logo.png"
import logoWhite from "../img/logo-white.png"
import LeftErweima from "../img/left_sidebar_erweima.png"
import LeftImage from '../img/left_sidebar_image.png'
import { changeCategory, changeSerise, changeType } from '../redux/productStore';
import { changeNewCategory } from '../redux/common'
import closeIcon from "../img/images/close.png"
import menuIcon from "../img/images/menu.png"

// 导航栏一级菜单 start
function MuneItem(props){
    let { path } = props
    const headData = [
      {label:'首页',route:'/'},
      {label:'产品中心',route:'/product',isChildren:true},
      {label:'加工中心',route:'/process',isProcess:true},
      {label:'应用领域',route:'/applicationfields',isApp:true},
      {label:'销售统计',route:'/statistics'},
      {label:'走进扬东',route:'/about'},
      {label:'新闻资讯',route:'/news',isList:true},
      {label:'联系我们',route:'/contactus'}
    ]
    const muneItem = headData.map(item =>{
      return <li key={item.label} className={[('/'+path.split('/')[1]) == item.route?'menu-ul-li selectAcitve':'menu-ul-li'].join('')}>
        {
          item.label == "产品中心" ? <Link 
          href={{pathname:item.route,query:{category:0,type:0,serise:3}}}
          onClick={()=>{
            store.dispatch(changeCategory(0));
            store.dispatch(changeType(0));
            store.dispatch(changeSerise(3))
          }}
          className='menu-route-a'>{item.label}</Link>
          :
          <Link href={{pathname:item.route}} className='menu-route-a'>{item.label}</Link>
        }
        {item.isChildren && (<div className='header-product'><ProductMain /></div>)}
        {item.isList && (<div className='header-newList'><NewSList /></div>)}
        {item.isApp && (<div className='header-appList'><Applist /></div>)}
        {item.isProcess && (<div className='header-process'><Process /></div>)}
      </li>
    });
    return (<ul className='menu-ul'>{muneItem}</ul>)
}
// 导航栏一级菜单 end

// 产品中心definition start
function ProductMain(){ 
  const [data,setData] = useState([])
  const fetchData = async()=>{
    try{
      const response = await fetch('/api/headerData')
      const res = await response.json()
      // console.log(res)
      setData(res)
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
      fetchData()
  }, [])

  // 一级分类索引
  const [categoryIndex,setCategoryIndex] = useState(store.getState().productReducer.categoryIndex)
  // switch category
  function onSelectCategory(index){
    store.dispatch(changeCategory(index))
    setCategoryIndex(index)
    setTypeIndex(0)        
  }
  const productCategory = data.map((item,i) =>{
    return <div key={i}><a
      style={{'fontSize':'.1125rem'}}
      className={[categoryIndex == i?"categoryActive":null]}
      onClick={()=>onSelectCategory(i)}
      >{item.category}</a></div>
    })
  // 二级分类索引
  const [typeIndex,setTypeIndex] = useState(0)
  // switch type
  function onSelectType(index){
    store.dispatch(changeCategory(categoryIndex))
    store.dispatch(changeType(index))
    store.dispatch(changeSerise(null))
    setTypeIndex(index)
  }
  // 点击具体产品事件
  function selectProduct(index){
    store.dispatch(changeCategory(categoryIndex))
    store.dispatch(changeType(typeIndex))
    store.dispatch(changeSerise(index))
  }
  const prodoctType = data[categoryIndex]?.first_classify.map((item,i)=>{
    return <b key={i} onClick={()=>onSelectType(i)}>
      <Link href={`/product/${categoryIndex}/${i}`} className={[store.getState().productReducer.typeIndex == i?"seriseActive":null]}>{item.type}</Link>
    </b>
  })
  const productSerise = data[categoryIndex]?.first_classify[store.getState().productReducer.typeIndex]?.second_classify.map((item,I)=>{
    return(
      <div key={I}>
        <span>{item.serise}</span>
        <p onClick={()=>selectProduct(I)}>
          {item.product.map((itemI,i) =>{
            return (<Link key={i} href={{pathname:'/product/detail/',query:{detail:categoryIndex==0?`${itemI}${data[categoryIndex].first_classify[typeIndex].type}`:itemI}}}>{itemI}</Link>)
          })}
        </p>
      </div>
    )
  })
  return(
    <div className='product-main main'>
      <div className='product-category'>{productCategory}</div>
      <div className='product-group'>
        <div className='product-type'>{prodoctType}</div>
        <div className='product-serise'>{productSerise}</div>
      </div>
    </div>
  )
}
// 产品中心definition end

// newList start
function NewSList(){
  const data = [
    {link:'/news',label:'公司动态'},
    {link:'/news',label:'行业新闻'},
    {link:'/news',label:'铝材知识'},
    {link:'/news',label:'加工视频'}
  ]
  const Item = data.map((item,i)=>{
    return <li key={i}><a href={item.link} onClick={()=>{store.dispatch(changeNewCategory(i))}}>{item.label}</a></li>
  })
  return <ul>{Item}</ul>
}
// newList end

// appList start
function Applist(){
  const data = [
    {link:'/applicationfields/#application01',label:'航空航天'},
    {link:'/applicationfields/#application02',label:'轨道交通'},
    {link:'/applicationfields/#application03',label:'汽车制造'},
    {link:'/applicationfields/#application04',label:'船舶运输'},
    {link:'/applicationfields/#application05',label:'消费电子'},
    {link:'/applicationfields/#application06',label:'医疗设备'},
    {link:'/applicationfields/#application07',label:'化工容器'},
    {link:'/applicationfields/#application08',label:'工业模具'},
    {link:'/applicationfields/#application09',label:'机械制造'},
    {link:'/applicationfields/#application10',label:'建筑建材'}
  ]
  const Item = data.map((item,i)=>{
    return <div key={i} className='appItem-box'><Link href={item.link}>{item.label}</Link></div>
  })
  return <div className='header-appList-main main'>{Item}</div>
}
// appList end

// process start
function Process(){
  const data = [
    {link:'/process/#process01',label:'加工材料',list:['铝','钢和不锈钢','铜和黄铜','钛','铝聚合物']},
    {link:'/process/#process02',label:'机加工艺',list:[
      '切割、精密裁剪',
      '埋弧、气保护、氩弧焊和电弧焊',
      '焊接',
      '带锯、火焰、激光、等离子...',
      '横剪、纵剪、覆纸和覆膜',
      '铣削加工、磨削加工',
      '铣磨、表面研磨',
      '热处理',
      '冷轧、热轧、单张和整卷'
    ]},
    {link:'/process/#process03',label:'表面处理',list:[
      '阳极氧化',
      '硬质阳极氧化(III型)',
      '喷砂',
      '电解抛光',
      '钝化',
      '滚筒去毛刺',
      '熏蒸',
      '发黑(黑氧化)'
    ]},
    {link:'/process/#process04',label:'加工优势',list:[
      '多款式',
      '快生产',
      '高质量',
      '好服务',
      '低价格'
    ]},
    {link:'/process/#process05',label:'设备实力',list:[
      '五轴加工中心CNC',
      '无线探针',
      '进口德国镗刀',
      '粗糙度测试仪',
      '...'
    ]}
  ]
  const Item = data.map((item,i)=>{
    return <div key={i} className='header-process-item'>
      <h3><Link href={item.link}>{item.label}</Link></h3>
      {item.list && (<ul>
          {item.list.map((li,l)=>{
            return <li key={l}><p>&#10022;&nbsp;{li}</p></li>
          })}
      </ul>)}
    </div>
  })
  return <div className='header-process-main main'>{Item}</div>
}
// precess end

// alterCard
function AlterCart(props){
  const {img,index,showIndex} = props
  return <div className='erweima_item' style={{display:index==showIndex?'block' : 'none'}}>
    <p style={{color:'#333',lineHeight:'.125rem',marginTop:'.125rem'}}>我们在微信上面沟通吧 <span onClick={()=>props.onSend(index)}>X</span></p>
    <Image src={img} alt='微信二维码'/>
    <p style={{color:'#444',lineHeight:'.1875rem'}}>微信扫一扫</p>
  </div>
}
// header主容器
export default function Header(props){
  const [showbg,setShow] = useState(false)//控制header背景色样式 默认无背景
  const [isTop,setTop] = useState(false) // 回到顶部组件状态
  const [isShowLeft, changeShowLeft] = useState(true)
  const [isShowRight,changeShowRight] = useState(true)
  // console.log(store.getState().router.path)
  useEffect(()=>{
    if(props.curPath !== '/')setShow(true);
    if(props.curPath === '/'){
      if(document.documentElement.clientWidth<1400){
        setShow(true)
      }else{
        setShow(false)
      }
    };
    window.addEventListener('scroll',function(e){
      // 滚动条滚动高度
      const scrollTop = document.documentElement.scrollTop;
      const width = document.documentElement.clientWidth
      // 首页大于高度阈值显示白色导航栏
      if(store.getState().router.path === '/'){
        if(width<1400){//如果屏幕小于1400 导航栏不变化
          setShow(true)
        }else{//反之监听屏幕高度 切换样式
          if(scrollTop>300){
            setShow(true)
          }else{
            setShow(false)
          }
        }
      }
      if(scrollTop>1000){
        setTop(true)
      }else{
        setTop(false)
      }
      // 可视区域高度
      // const clentHeight = document.documentElement.clientHeight;
      // 滚动内容高度
      // const scrollHeight = document.documentElement.scrollHeight;
    })
  },[props.curPath])//监听props.curPath变化
  // const consultList =[
  //   {name:'林小姐',img:erweima1},
  //   {name:'王小姐',img:erweima2},
  //   {name:'朱小姐',img:erweima3},
  //   {name:'黄经理',img:erweima4},
  //   {name:'黄海珠',img:erweima5},
  //   {name:'任小姐',img:erweima6},
  //   {name:'汤小姐',img:erweima7}
  // ]
  // const [showItem,setShowItem] = useState(null)
  // 联系我们切换弹出二维码图片
  function toggleShow(index){
    if(index === showItem){
      setShowItem(null)
    }else{
      setShowItem(index)
    }
  }
  const [isMemu,setMenu] = useState(false)
  const [isShowProduct,setShowProduct] = useState(false)
  const [isShowProcess,setShowProcess] = useState(false)
  const [isShowApp,setShowApp] = useState(false)
  const [isShowNews,setShowNews] = useState(false)
  function clickProductType(i){
    store.dispatch(changeCategory(0));
    store.dispatch(changeType(i));
    store.dispatch(changeSerise(null))
    setMenu(false)
  }
  // 点击菜单按钮显示隐藏
  return(
    <header className={[showbg? 'bg':null]}>
      {/* pc导航 */}
      <div className="header-warp main">
        <div className='logo-wrap'>
          {showbg && <Link href='/'><Image src={logo} alt='logo'/></Link>}
          {!showbg && <Link href='/'><Image src={logoWhite} alt='logo'/></Link>}
        </div>
        <MuneItem path={props.curPath}/>
      </div>
      {/* 移动端 导航栏 */}
      <div className='mobileMenu'>
        <a href='/'><Image src={logoWhite} alt='扬东集团' className='mobileLogo'/></a>
        <div className='mobileMenuBtn' onClick={()=>{isMemu ? setMenu(false) : setMenu(true)}}>
          {!isMemu ? <Image src={menuIcon} alt='展开菜单'/> : <Image src={closeIcon} alt='关闭菜单'/>}
        </div>
        <div className='moboliMenu' style={{left:!isMemu?'-51%':'0px'}}>
          <p onClick={()=>{isShowProduct?setShowProduct(false):setShowProduct(true)}}>
            产品中心
            {!isShowProduct ? <span> &#8744;</span> : <span> &#8743;</span>}
          </p>
          <ul className='Hide' style={{height:!isShowProduct?'0px':'fit-content'}}>
            <li><Link onClick={()=>clickProductType(0)} href='/product/0/0'>+ 铝板</Link></li>
            <li><Link onClick={()=>clickProductType(1)} href='/product/0/1'>+ 铝棒</Link></li>
            <li><Link onClick={()=>clickProductType(2)} href='/product/0/2'>+ 铝卷</Link></li>
            <li><Link onClick={()=>clickProductType(3)} href='/product/0/3'>+ 铝管</Link></li>
            <li><Link onClick={()=>clickProductType(4)} href='/product/0/4'>+ 铝型材</Link></li>
            <li><Link onClick={()=>clickProductType(5)} href='/product/0/5'>+ 铝锻件</Link></li>
          </ul>
          <p onClick={()=>{isShowProcess?setShowProcess(false):setShowProcess(true)}}>
            加工中心
            {!isShowProcess ? <span> &#8744;</span> : <span> &#8743;</span>}
          </p>
          <ul className='Hide' style={{height:!isShowProcess?'0px':'fit-content'}}>
            <li><Link onClick={()=>{setMenu(false)}} href='/process/#process01'>+ 加工材料</Link></li>
            <li><Link onClick={()=>{setMenu(false)}} href='/process/#process02'>+ 机加工艺</Link></li>
            <li><Link onClick={()=>{setMenu(false)}} href='/process/#process03'>+ 表面处理</Link></li>
            <li><Link onClick={()=>{setMenu(false)}} href='/process/#process04'>+ 加工优势</Link></li>
            <li><Link onClick={()=>{setMenu(false)}} href='/process/#process05'>+ 设备实力</Link></li>
          </ul>
          <p onClick={()=>{isShowApp?setShowApp(false):setShowApp(true)}}>
            应用领域
            {!isShowApp ? <span> &#8744;</span> : <span> &#8743;</span>}
          </p>
          <ul className='Hide' style={{height:!isShowApp?'0px':'fit-content'}}>
            <li><Link onClick={()=>{setMenu(false)}} href='/applicationfields/#application01'>+ 航空航天</Link></li>
            <li><Link onClick={()=>{setMenu(false)}} href='/applicationfields/#application02'>+ 轨道交通</Link></li>
            <li><Link onClick={()=>{setMenu(false)}} href='/applicationfields/#application03'>+ 汽车制造</Link></li>
            <li><Link onClick={()=>{setMenu(false)}} href='/applicationfields/#application04'>+ 船舶运输</Link></li>
            <li><Link onClick={()=>{setMenu(false)}} href='/applicationfields/#application05'>+ 消费电子</Link></li>
            <li><Link onClick={()=>{setMenu(false)}} href='/applicationfields/#application06'>+ 医疗设备</Link></li>
            <li><Link onClick={()=>{setMenu(false)}} href='/applicationfields/#application07'>+ 化工容器</Link></li>
            <li><Link onClick={()=>{setMenu(false)}} href='/applicationfields/#application08'>+ 工业模具</Link></li>
            <li><Link onClick={()=>{setMenu(false)}} href='/applicationfields/#application09'>+ 机械制造</Link></li>
            <li><Link onClick={()=>{setMenu(false)}} href='/applicationfields/#application10'>+ 建筑建材</Link></li>
          </ul>
          <a href='/statistics'>销售统计 <span>&gt;</span></a>
          <a href='/about'>走进扬东 <span>&gt;</span></a>
          <p onClick={()=>{isShowNews?setShowNews(false):setShowNews(true)}}>
            新闻资讯
            {!isShowNews ? <span> &#8744;</span> : <span> &#8743;</span>}
          </p>
          <ul className='Hide' style={{height:!isShowNews?'0px':'fit-content'}}>
            <li><Link onClick={()=>{store.dispatch(changeNewCategory(0));setMenu(false)}} href='/news'>+ 公司动态</Link></li>
            <li><Link onClick={()=>{store.dispatch(changeNewCategory(1));setMenu(false)}} href='/news'>+ 行业新闻</Link></li>
            <li><Link onClick={()=>{store.dispatch(changeNewCategory(2));setMenu(false)}} href='/news'>+ 铝材知识</Link></li>
            <li><Link onClick={()=>{store.dispatch(changeNewCategory(3));setMenu(false)}} href='/news'>+ 加工视频</Link></li>
          </ul>
          {/* <a href='/news'>新闻资讯 <span>&gt;</span></a> */}
          <a href='/contactus'>联系我们 <span>&gt;</span></a>
          <a href='/news' onClick={()=>{store.dispatch(changeNewCategory(3))}}>下载中心 <span>&gt;</span></a>
        </div>
        <div className='modileHidden' style={{width:isMemu?'100%' :'0px'}} onTouchStart={()=>isMemu?setMenu(false) :''}></div>
      </div>
      {/* 左侧侧边栏 */}
      <div className='left_sidebar' style={{left:isShowLeft?'0px':'-175px'}}>
        <div className='left_sidebar_top'>
        <div><Image src={LeftImage} alt='产品'/></div>
        </div>
        <p><img src='https://www.yangdong.co:8443/yangdong_web/footer/icon-7.png'/>全国销售总机：</p>
        <p style={{color:'#bb030f',fontWeight:'bold'}}><img src='https://www.yangdong.co:8443/yangdong_web/footer/call.png' style={{width:'140px',margin:'4px 0'}}/></p>
        <p className='p16'><img src='https://www.yangdong.co:8443/yangdong_web/footer/icon-1.png'/>技术咨询:</p>
        <p  style={{fontSize:'20px'}}>0512-62388298</p>
        <p className='p16'><img src='https://www.yangdong.co:8443/yangdong_web/footer/icon-2.png'/>公司销售分组:</p>
        <p className='p14'>急单热线：</p>
        <p className='p14'>0512-62388298</p>
        <p className='p14'>订单咨询：</p>
        <p className='p14'>0512-62388058</p>
        <p className='p14'>技术咨询：</p>
        <p className='p14'>0512-62388068</p>
        <p className='p14'><img src='https://www.yangdong.co:8443/yangdong_web/footer/icon-3.png'/>E-mail:</p>
        <p className='p14'>2521813109@qq.com</p>
        <p className='p14'><img src='https://www.yangdong.co:8443/yangdong_web/footer/icon-4.png'/>销售传真:</p>
        <p className='p14'>0512-62388198</p>
        <p className='p16'><img src='https://www.yangdong.co:8443/yangdong_web/footer/icon-5.png'/>销售主管：黄经理</p>
        <p style={{fontSize:'20px'}}>18852996299</p>
        <p className='p16'><img src='https://www.yangdong.co:8443/yangdong_web/footer/icon-6.png'/>营业时间:</p>
        <p className='p14'>8:00—17:30(周一至周六)</p>
        {/* <p style={{marginTop:'.0938rem'}}>销售主管 :</p>
        <p>18852996299</p>
        <p style={{marginTop:'.0938rem'}}>技术咨询 :</p>
        <p>0512-62388298</p>
        <p style={{marginTop:'.0938rem'}}>营业时间 :</p>
        <p>8:00—17:30</p>
        <p>(周一至周六)</p>
        <div className='erweima_box'>
          <Image src={LeftErweima} alt='微信二维码'/>
        </div>
        <p style={{marginTop:'.0938rem'}}>全国订购热线 :</p>
        <p style={{color:'#bb030f',fontWeight:'bold'}}>0512-62388298</p>
        <p style={{marginTop:'.0938rem'}}>网站访问量：</p>
        <p style={{fontSize:'.1875rem',fontWeight:'bold',marginTop:'.0625rem'}}>
          <CountUp start={60000} end={200000} duration={5} separator=''/>
          <span>+</span>
        </p> */}
        <div className='right_point' onClick={()=>{isShowLeft?changeShowLeft(false): changeShowLeft(true)}}>&nbsp;&rsaquo;</div>
      </div>
      {/* 右侧侧边栏 */}
      {/* <div className='right_sidebar' style={{right:isShowRight?'0px':'-165px'}}>
          <Image src={consultHead} alt='咨询' style={{marginTop:'-1.025rem'}}/>
          <div className='consult_wrap'>
              <p style={{fontSize:'.1125rem'}}>联系我们</p>
              {consultList.map((item,i)=>{
                  return <div className='consult_item' key={i}>
                      <div className='erweima_wrap'
                          onClick={()=>toggleShow(i)}
                      ><Image src={erweimaIcon} alt='icon'/>
                          <AlterCart img={item.img} index={i} showIndex={showItem} onSend={toggleShow}/>
                      </div>
                      <span style={{marginLeft:'.125rem'}}>{item.name}</span>
                  </div>
              })}
          </div>
          <div className='left_point' onClick={()=>{isShowRight?changeShowRight(false): changeShowRight(true)}}>&lsaquo;&nbsp;</div>
      </div> */}
      <div className='up' style={{display:isTop?'block':'none'}} onClick={()=>window.scrollTo(0,0)}></div>
    </header>
  )
}
