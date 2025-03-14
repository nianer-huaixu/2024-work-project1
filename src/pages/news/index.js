import React from 'react'
import { Player } from 'video-react'
import { useState,useEffect } from 'react'
import { store } from '../../redux/store'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/news.module.scss'
import "node_modules/video-react/dist/video-react.css";
import PageHeader from '../../components/pageHeader'

// 新闻列表 start
import newImg1 from "../../img/news/company1.jpg"
import newImg2 from "../../img/news/company2.png"
import newImg3 from "../../img/news/company3.png"
import newImg4 from "../../img/news/company4.png"
import newImg5 from "../../img/news/company5.png"
import newImg6 from "../../img/news/company6.png"
import newImg7 from "../../img/news/company7.png"
import newImg8 from "../../img/news/company8.png"
import newImg9 from "../../img/news/company9.png"
import newImg10 from "../../img/news/company10.png"
function NewItem(props){
  const imgList = [newImg1,newImg2,newImg3,newImg4,newImg5,newImg6,newImg7,newImg8,newImg9,newImg10]
  const {data} = props
  const Item = data.map((item,i)=>{
    if(i>0) return <div key={i} className={styles.newItem}>
      <div className={styles.imgBox}><Image src={imgList[i]}  layout="fill" alt='公司动态'/></div>
      <div className={styles.newTextBox}>
        <p><b>{item.month+ '.' + item.day}</b> / {item.year}</p>
        <h5><Link href={`/news/0_${i}`}>{item.title}</Link></h5>
        <Link href={`/news/0_${i}`} className={styles.link}>了解详情	&rarr;</Link>
      </div>
    </div>
  })
  return <div className={styles.companyWrap}>
    <Link href={`/news/0_0`} className={styles.firstNew}>
      <Image src={newImg1} alt='新闻资讯'></Image>
      <div className={styles.firstNewR}>
        <h5>{data[0]?.title}</h5>
        <p className={styles.isP} style={{fontSize:'16px'}}>{data[0]?.content1}</p>
        <p  style={{fontSize:'16px'}}>{data[0]?.content2}</p>
        <div className={styles.firstNewDate}>
          <span>{data[0]?.day}</span>
          <p>{data[0]?.year +'/' + data[0]?.month}</p>
        </div>
      </div>
    </Link>
    <div className={styles.newsWrap}>{Item}</div>
  </div>
}
// 新闻列表 end

// 行业新闻 stard
import industry1 from '../../img/news/industry1.png'
import industry2 from '../../img/news/industry2.png'
import industry3 from '../../img/news/industry3.png'
import industry4 from '../../img/news/industry4.png'
import industry5 from '../../img/news/industry5.png'
import industry6 from '../../img/news/industry6.png'
import industry7 from '../../img/news/industry7.png'
import industry8 from '../../img/news/industry8.png'
import industry9 from '../../img/news/industry9.png'
import industry10 from '../../img/news/industry10.png'
import industry11 from '../../img/news/industry11.png'
import industry12 from '../../img/news/industry12.png'
import industry13 from '../../img/news/industry13.png'
import industry14 from '../../img/news/industry14.png'
function IndustryItem(props){
  const {data} = props
  const imgList = [industry1,industry2,industry3,industry4,industry5,industry6,industry7,industry8,industry9,industry10,industry11,industry12,industry13,industry14]
  const Item = data.map((item,i)=>{
    return <div key={i} className={styles.newItem}>
      <div className={styles.imgBox}><Image src={imgList[i]}  layout="fill" alt='行业新闻'/></div>
      <div className={styles.newTextBox}>
        <p><b>{item.month+ '.' + item.day}</b> / {item.year}</p>
        <h5><Link href={`/news/1_${i}`}>{item.title}</Link></h5>
        <Link href={`/news/1_${i}`} className={styles.link}>了解详情	&rarr;</Link>
      </div>
  </div>
  })
  return <div className={styles.industryWrap}>
    <div className={styles.newsWrap}>{Item}</div>
  </div>
}
// 行业新闻 end

// 铝材知识 start
function AluK(props){
  const {data} = props
  const Item = data.map((item,i)=>{
    return <p key={i}><i style={{backgroundColor:item.color}}>{item.tag}</i><Link href={`/news/2_${item.id}`}>{item.title}</Link><span>{item.date}</span></p>
  })
  return <div className={styles.aluK}>{Item}</div>
}
// 铝材知识 end

// 加工视频 start
function Resource(){
  const videoList =[
    {
      title:'铝板切割',
      src:'https://www.yangdong.co:443/video/%E9%93%9D%E6%9D%BF%E5%88%87%E5%89%B2.mp4'},
    {
      title:'铝卷分切',
      src:'https://www.yangdong.co:443/video/%E5%88%86%E5%88%87.mp4'
    },{
      title:'铝卷分条',
      src:'https://www.yangdong.co:443/video/%E5%88%86%E6%9D%A1.mp4'
    },{
      title:'机械加工-铣',
      src:'https://www.yangdong.co:443/video/%E6%9C%BA%E6%A2%B0%E5%8A%A0%E5%B7%A5-%E9%93%A3.mp4'
    },{
      title:'激光切割',
      src:'https://www.yangdong.co:443/video/%E6%BF%80%E5%85%89%E5%88%87%E5%89%B2.mp4'
    },{
      title:'挤压',
      src:'https://www.yangdong.co:443/video/%E6%8C%A4%E5%8E%8B.mp4'
    },{
      title:'剪板',
      src:'https://www.yangdong.co:443/video/%E5%89%AA%E6%9D%BF.mp4'
    },{
      title:'铝板分切',
      src:'https://www.yangdong.co:443/video/%E9%93%9D%E6%9D%BF%E5%88%86%E5%88%87.mp4'
    },{
      title:'铝板覆膜',
      src:'https://www.yangdong.co:443/video/%E9%93%9D%E6%9D%BF%E8%A6%86%E8%86%9C.mp4'
    },{
      title:'铝板整平',
      src:'https://www.yangdong.co:443/video/%E9%93%9D%E6%9D%BF%E6%95%B4%E5%B9%B3.mp4'
    },{
      title:'铝棒切割',
      src:'https://www.yangdong.co:443/video/%E9%93%9D%E6%A3%92%E5%88%87%E5%89%B2.mp4'
    },{
      title:'铝件锻造',
      src:'https://www.yangdong.co:443/video/%E9%93%9D%E4%BB%B6%E9%94%BB%E9%80%A0.mp4'
    },{
      title:'喷涂',
      src:'https://www.yangdong.co:443/video/%E5%96%B7%E6%B6%82.mp4'
    },{
      title:'水刀切割',
      src:'https://www.yangdong.co:443/video/%E6%B0%B4%E5%88%80%E5%88%87%E5%89%B2.mp4'
    },{
      title:'锯切',
      src:'https://www.yangdong.co:443/video/%E9%94%AF%E5%88%87.mp4'
    }
  ]
  const Item = videoList.map((item,i)=>{
    return <div className={styles.videoItem} key={i}>
      <div className={styles.videoTitle}>{item.title}</div>
      <Player playsInline src={item.src}/>
    </div>
  })
  return <div className={styles.resourceWrap}>
    <div>
      <h2>加工视频</h2>
      <p>VIDEO PROCESSING</p>
      <div className={styles.videoWrap}>{Item}</div>
    </div>
  </div>
}
// 加工视频 end

export default function News() {
  const [data, setData] = useState({list:[]})
  function upData(param){
    // console.log('子组件传递',param);
    let newData = {...data,list:param.list}
    setData(newData)
  }
  const [windowSize,setWindowSize]  = useState(getWindowSize())
  function getWindowSize(){
    const {innerWidth} = window
    return {innerWidth}
  }
  useEffect(()=>{
    // 处理屏幕宽度变化
    function handleWindowResize(){
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize',handleWindowResize)
    return ()=>{
      window.removeEventListener('resize',handleWindowResize)
    }
  })
  const pcImgURL = 'https://www.yangdong.co:443/yangdong_web/banner/pc/news_banner.webp'
  const mobileImgURL= 'https://www.yangdong.co:443/yangdong_web/banner/mobile/news_banner.webp'
  return(<main>
    <PageHeader banner={windowSize.innerWidth >= 750 ? pcImgURL : mobileImgURL} onSend={upData}/>
    {store.getState().common.newCategory === 0 && <NewItem data={data.list}/>}
    {store.getState().common.newCategory === 1 && <IndustryItem data={data.list}/>}
    {store.getState().common.newCategory === 2 && <AluK data={data.list}/>}
    {store.getState().common.newCategory === 3 && <Resource/>}
  </main>)
}