import React from 'react'
import { useState,useEffect } from 'react'
import styles from '../styles/news.module.scss'
import Link from 'next/link'
import { store } from '../redux/store'
import { changeNewCategory } from '../redux/common';


export default function PageHeader(props){
    const {banner} = props
    const anchorArr = ['公司动态','行业新闻','铝材知识','加工视频']
    const [data,setData] = useState({list:[]})
    function selectCagegory(i){
        store.dispatch(changeNewCategory(i))
        if(i!==3){
            // 触发数据请求
            fetchData()
        }
    }
    // 请求数据
    useEffect(() => {
        // 如果父组件有传递方法，则是新闻资讯页面需要的数据请求
        if(props.onSend && store.getState().common.newCategory !=3) fetchData()
    }, [])
    const fetchData = async () => {
        const req ={category:store.getState().common.newCategory}
    try{
        await fetch('/api/newsDataAll',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(req)
        }).then((res)=>{
            if(res.ok){return res.json()}
            throw new Error('network response was not ok')
        }).then(res=>{
            setData({...data,res})
            if(props.onSend) props.onSend(res)
        }).catch(err => console.error(err))
    }catch{
        // 请求错误处理
        }
    }
    return<div>
        <div className={styles.banner}><img src={banner} alt='新闻资讯'/></div>
        <div className='pageAnchor'>
            <p className='anchorL'>
                {anchorArr.map((item,i)=>{
                    return <Link key={i} href={'/news'}
                    style={{borderBottom:store.getState().common.newCategory === i ?'2px solid #bb030f':''}} 
                    onClick={()=>selectCagegory(i)}>{item}</Link>
                })}
            </p>
            <div className='anchorR'>
                <p style={{fontSize:'.125rem'}}>News Information</p>
                <p style={{fontSize:'.1375rem',fontWeight:'bold'}}>新闻资讯</p>
            </div>
        </div>
    </div>
} 