'use client' // 客户端渲染时

import React from 'react'
import { useState,useEffect } from 'react'
import { store } from '@/redux/store'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import ProuductBanner from '@/components/productBanner'
import Productsearch from '@/components/productSearch'
import Productsidebar from '@/components/productSidebar'
import styles from '@/styles/product.module.scss'
import { setTitle,setPrompt, changeSerise,changeCategory,changeType } from '@/redux/productStore'

export default function ProductType() {
	const router = useRouter()
	const {category,type} = router.query
	// console.log(category,type);
	
	const [data,setData] = useState({list:[],prompt:[],title:{}})

	const fetchProductData = async ()=>{
		const categoryIndex = store.getState().productReducer.categoryIndex
		const typeIndex = store.getState().productReducer.typeIndex
		const req = {categoryIndex,typeIndex}
		try{
			await fetch('/api/productData',{
				method:'POST',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify(req)
			}).then((res)=>{
				if(res.ok){return res.json()}
				throw new Error('network response was not ok')
			}).then(res=>{
				const arr = res.list.reverse()
				// console.log(arr);
				
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
	}, [category,type])
	const host = 'https://www.yangdong.co:443/'
	const productList = ['铝板','铝棒','铝卷','铝管','铝型材','铝锻件']
	return(
		<main>
			<ProuductBanner/>
			<div className={styles.productMain}>
				<Productsidebar onSend={fetchProductData}/> 
				<div className={styles.productC}>
					<div className={styles.productBox}>
						<Productsearch/>
						<div className={styles.productMobileEle}>
							{productList.map((item,i)=>{
								return <div key={i} className={[type ==i ? styles.productActive : '']}
								onClick={()=>{
									store.dispatch(changeCategory(0));
									store.dispatch(changeType(i));
									store.dispatch(changeSerise(null))
								}}
									>
									<Link href={`/product/0/${i}`}>{item}</Link>
									</div>
							})}
						</div>
						<h3 className={styles.productBoxTitle}>
							<b>{data.title?.c_t}</b>
						</h3>
						{data.list.map((list,I)=>{
							return <div key={I} className={styles.seriseItem}>
								<h3>{list.serise}</h3>
								<div className={styles.seriseGrid}>
									{list.product.map((item,i)=>{
										return <div key={i} className={styles.productItem}>
											<Link href={{pathname:'/product/detail',query:{detail:`${item.name + (item.spe?item.spe:store.getState().productReducer.title.c_t)}`}}}
												onClick={()=>store.dispatch(changeSerise(I))}
											>
													<img src={host+(item.spe?item.spe:data.title.c_t)+'/'+item.name+'/1.jpg'} alt={item.name}/>
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
										})}
								</div>
							</div>
						})}
					</div>
				</div>
			</div>
		</main>
	)
}