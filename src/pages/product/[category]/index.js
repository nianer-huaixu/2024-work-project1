import { useState,useEffect } from 'react'
import { useRouter } from "next/router"
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { store } from '@/redux/store'
import { changeCategory, changeSerise, changeType } from '@/redux/productStore'

import ProductSidebar from "@/components/productSidebar"
import ProductSearch from "@/components/productSearch"
import ProuductBanner from '@/components/productBanner'

import styles from '@/styles/product.module.scss'
import Board from '@/img/icon/board.svg'
import Bang from '@/img/icon/bang.svg'
import Juan from '@/img/icon/juan.svg'
import Guan from '@/img/icon/guan.svg'
import Xingcai from '@/img/icon/xingcai.svg'
import Duanjian from '@/img/icon/duanjian.svg'

import one from '@/img/icon/one.svg'
import two from '@/img/icon/two.svg'
import three from '@/img/icon/three.svg'
import five from '@/img/icon/five.svg'
import six from '@/img/icon/six.svg'
import seven from '@/img/icon/seven.svg'

import aerospect from '@/img/icon/aerospace.svg'
import rail from '@/img/icon/rail.svg'
import automobile from '@/img/icon/automobile.svg'
import ship from '@/img/icon/ship.svg'
import electronic from '@/img/icon/electronic.svg'
import medical from '@/img/icon/medical.svg'
import chemical from '@/img/icon/chemical.svg'
import industrial from '@/img/icon/industrial.svg'
import mechanical from '@/img/icon/mechanical.svg'
import architecture from '@/img/icon/architecture.svg'


function ProductCategory(){
    const router = useRouter();
    const {category} = router.query
    console.log(category);
    // store.dispatch(changeCategory(category))
    const [data,setData] = useState({list:[]})
    const productReducer = useSelector(store => store.productReducer)
    const fetchProductData = async ()=>{
        // const categoryIndex = store.getState().productReducer.categoryIndex
        const categoryIndex = category
        const req = {categoryIndex}
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
                // store.dispatch(setTitle(res.title))
                // store.dispatch(setPrompt(res.prompt))
            }).catch(err => console.error(err))
        }catch{
            // 请求错误处理
        }
    }
    useEffect(() => { 
        fetchProductData()
        // console.log(productReducer);
        
    }, [category])
    // const Item = data.list.map
    const actionIcon = [
        [Board,Bang,Juan,Guan,Xingcai,Duanjian,Board,Bang],
        [one,two,three,five,six,seven],
        [aerospect,rail,automobile,ship,electronic,medical,chemical,industrial,mechanical,architecture]
    ]
    return (
        <main>
            <ProuductBanner/>
            <div className={styles.productMain}>
                <ProductSidebar/>
                <div className={styles.productC}>
                    <div className={styles.productBox}>
                        <ProductSearch/>
                        <h3 className={styles.productBoxTitle}>
                            <b>产品分类</b>
                        </h3>
                        <div className={styles.productList}>
                            {data.list.map((item,i)=>{
                                return <div className={styles.categoryItem} key={i}>
                                    <Link href={`/product/${category}/${i}`}><span>{item}&nbsp;&#10230;</span></Link>
                                    <Image src={actionIcon[category][i]} alt='产品分类'/>
                                </div>     
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
ProductCategory.getInitialProps = async () => {
    return {};
}
export default ProductCategory