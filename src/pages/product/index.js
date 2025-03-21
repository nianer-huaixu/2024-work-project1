'use client' // 客户端渲染时

import React from 'react'
import { useState,useEffect } from 'react'
import { store } from '../../redux/store'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import ProuductBanner from '@/components/productBanner'
import Productsearch from '../../components/productSearch'
import Productsidebar from '../../components/productSidebar'
import styles from '@/styles/product.module.scss'
import { setTitle,setPrompt } from '../../redux/productStore'


function Product() {
  const router = useRouter()
  const {category,type,serise} = router.query
  const [data,setData] = useState({list:[],title:{},prompt:[]})

  const fetchProductData = async ()=>{
    // const categoryIndex = store.getState().productReducer.categoryIndex
    // const typeIndex = store.getState().productReducer.typeIndex
    // const seriseIndex = store.getState().productReducer.seriseIndex
    const categoryIndex = category
    const typeIndex = type
    const seriseIndex = serise
    const req = {categoryIndex,typeIndex,seriseIndex}
    try{
      await fetch('/api/productData',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(req)
      }).then((res)=>{
        if(res.ok){return res.json()}
        throw new Error('network response was not ok')
      }).then(res=>{
        setData(res)
        store.dispatch(setTitle(res.title))
        store.dispatch(setPrompt(res.prompt))
      }).catch(err => console.error(err))
    }catch{
      // 请求错误处理
    }
  }
  useEffect(() => { 
      fetchProductData()
  }, [router.query])
  const host = 'https://www.yangdong.co:8443/'
  const productItem = data?.list.map((item,i)=>{
    return <div key={i} className={styles.productItem}>
      <Link href={{pathname:'/product/detail',query:{detail:`${item.name + (item.spe?item.spe:store.getState().productReducer.title.c_t)}`}}}>
        <img src={host+(item.spe?item.spe:data.title.c_t)+'/'+item.name+'/1.jpg'} alt={item.name} width={200} height={150}/>
      </Link>
      <h5>{item.name + (item.spe?item.spe:'')}</h5>
      <p>{item.texture}</p>
      {item.ply.map((ply,pi)=>{
        return <div key={pi} className={styles.productPly}>{item.name + '-' + ply +(item.spe?item.spe:'')}</div>
      })}
      <div className={styles.productHover}>
        <a target="_blank" href='https://html.ecqun.com/kf/sdk/openwin.html?corpid=11627559&cstype=rand&mode=0&cskey=kkd1a23CLKZMWrHPzz&scheme=2&source=100'>立即询价</a>
        <p>图片 | 介绍 | 参数 | 服务商 </p>
      </div>
    </div>
  })
  return(
    <main>
      <ProuductBanner/>
      <div className={styles.productMain}>
        <Productsidebar onSend={fetchProductData}/> 
        <div className={styles.productC}>
          <div className={styles.productBox}>
            <Productsearch/>
            <h3 className={styles.productBoxTitle}>
              <b>{data.title?.c_t}</b>
            </h3>
            <div className={styles.productList}>{productItem}</div>
          </div>
        </div>
      </div>
    </main>
  )
}
Product.getInitialProps = async () => {
  return {};
}
export default Product