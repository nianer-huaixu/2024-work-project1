import { useState,useEffect } from 'react'

import { useRouter } from "next/router"
import Image from 'next/image'
import styles from '../../../styles/news.module.scss'

import PageHeader from "@/components/pageHeader"
// 公司动态图片
import newImg1 from "../../../img/news/company1.jpg"
import newImg2 from "../../../img/news/company2.png"
import newImg3 from "../../../img/news/company3.png"
import newImg4 from "../../../img/news/company4.png"
import newImg5 from "../../../img/news/company5.png"
import newImg6 from "../../../img/news/company6.png"
import newImg7 from "../../../img/news/company7.png"
import newImg8 from "../../../img/news/company8.png"
import newImg9 from "../../../img/news/company9.png"
import newImg10 from "../../../img/news/company10.png"
// 行业动态新闻
import industry1 from '../../../img/news/industry1.png'
import industry2 from '../../../img/news/industry2.png'
import industry3 from '../../../img/news/industry3.png'
import industry4 from '../../../img/news/industry4.png'
import industry5 from '../../../img/news/industry5.png'
import industry6 from '../../../img/news/industry6.png'
import industry7 from '../../../img/news/industry7.png'
import industry8 from '../../../img/news/industry8.png'
import industry9 from '../../../img/news/industry9.png'
import industry10 from '../../../img/news/industry10.png'
import industry11 from '../../../img/news/industry11.png'
import industry12 from '../../../img/news/industry12.png'
import industry13 from '../../../img/news/industry13.png'
import industry14 from '../../../img/news/industry14.png'
import Link from 'next/link'
function NewDetail(){
  const router = useRouter();
  const searchArr = router.query?.new.split('_')
  // console.log(searchArr,'query');
  const [data,setData] = useState({detail:{}})
  useEffect(() => {
    fetchData()
  }, [router.query])//监听路由变化可以出发数据请求
  const fetchData = async () => {
    const req ={category:Number(searchArr[0]),id:Number(searchArr[1])}
  try{
    await fetch('/api/newDataDetail',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(req)
    }).then((res)=>{
      if(res.ok){return res.json()}
      throw new Error('network response was not ok')
    }).then(res=>{
      setData({...res})
    }).catch(err => console.error(err))
  }catch{
    // 请求错误处理
    }
  }
  const imgList = [
    [newImg1,newImg2,newImg3,newImg4,newImg5,newImg6,newImg7,newImg8,newImg9,newImg10,],
    [industry1,industry2,industry3,industry4,industry5,industry6,industry7,industry8,industry9,industry10,industry11,industry12,industry13,industry14,]
  ]
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
  const pcImgURL = 'https://www.yangdong.co:8443/yangdong_web/banner/pc/news_banner.jpg'
  const mobileImgURL= 'https://www.yangdong.co:8443/yangdong_web/banner/mobile/news_banner.jpg'
  return(<main>
    <PageHeader banner={windowSize.innerWidth >= 750 ? pcImgURL : mobileImgURL} />
    <div className={styles.newDetail}>
      <h5>{data.detail.title}</h5>
      <p style={{textAlign:'center'}}>发布时间：{data.detail.year}-{data.detail.month}-{data.detail.day} &nbsp;&nbsp;&nbsp;&nbsp; 浏览：{data.detail.viewCount}次</p>
      <hr></hr>
      {searchArr[0] !='2' && <Image src={imgList[Number(searchArr[0])][Number(searchArr[1])]} width={600} alt='新闻详情'/>}
      {data.detail.content && data.detail.content.split('。').map((item,i)=>{
        if(i < data.detail.content.split('。').length-1) return <p key={i}>{item}。</p>
      })}
      <hr></hr>
      <div className={styles.linkBox}>
        {searchArr[1] != 0 && <Link href={`/news/${Number(searchArr[0])}_${Number(searchArr[1])-1}`}>上一篇：{data.detail.prec}</Link>}
        {data.detail.next !='' && <Link href={`/news/${Number(searchArr[0])}_${Number(searchArr[1])+1}`}>下一篇：{data.detail.next}</Link>}
      </div>
    </div>
  </main>
  )
}
NewDetail.getInitialProps = async () => {
  return {};
}
export default NewDetail