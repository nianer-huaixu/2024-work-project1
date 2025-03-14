import { useState, useEffect } from 'react'
import { store } from '../redux/store'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/product.module.scss'
import { changeCategory, changeSerise, changeType } from '../redux/productStore'

export default function ProductSidebar(props){
  const [isSkip,setIsSkip] = useState(useRouter().pathname === '/product' ? true:false)
  // console.log(isSkip);
  const router = useRouter()
  const [data,setData] = useState([])
  const [Length,setLength] = useState(0)
  const [isArr,setArr] =  useState([])
  // 请求侧边栏数据
  const fetchHeaderData = async()=>{
    try{
      const response = await fetch('/api/headerData')
      const res = await response.json()
      setData(res)
      const classLength = await res[store.getState().productReducer.categoryIndex].first_classify.length
      setLength(classLength)
      let arr = new Array(classLength).fill(false)
      arr[store.getState().productReducer.typeIndex] = true
      await setArr(arr)
    }catch(err){
      console.log(err)
    }
  }
  // 分类索引
  const [selectIndex,setSelectIndex] = useState(store.getState().productReducer.categoryIndex)
  useEffect(() => { 
    fetchHeaderData()
    // console.log(store.getState().productReducer.categoryIndex,store.getState().productReducer.typeIndex,store.getState().productReducer.seriseIndex,'store');
    // console.log(selectIndex,'selectIndex');
    setSelectIndex(store.getState().productReducer.categoryIndex)
  }, [router])
  // switch category
  function onSelectCategory(index){
    setSelectIndex(index)
    store.dispatch(changeCategory(selectIndex))
    const classLength = data[index].first_classify.length
    let arr = new Array(classLength).fill(false)
    if(index === store.getState().productReducer.categoryIndex){
      arr[store.getState().productReducer.typeIndex] = true
      setArr([...arr])
    }else{
      setArr([...arr])
    }
  }
  const ProductCategory = data.map((item,i)=>{
    return <span key={i}
      className={[selectIndex == i ? styles.selectCategory:null]}
      onClick={()=>onSelectCategory(i)}
    >{item.category}</span>
    // <Link href={`/product/${i}`} key={i} ></Link>
  })
  const [typeIndex,setTypeIndex] = useState(store.getState().productReducer.typeIndex)
  const [seriseIndex,setSeriseIndex] = useState(store.getState().productReducer.seriseIndex)
  // 折叠展开三级菜单
  function toggleList(index){
    // setTypeIndex(index)
    let newArr = [...isArr]
    newArr[index] ? newArr[index] =false : newArr[index] = true
    setArr([...newArr])//浅拷贝数组必须复制一份重新覆盖才能修改状态
  }
  // 点击三级菜单子项 触发父组件的数据请求
  const {categoryIndex} = store.getState().productReducer
  
  function selectItem(Tindex,Iindex){
    // 修改store的两个索引
    store.dispatch(changeCategory(selectIndex))
    store.dispatch(changeType(Tindex))
    store.dispatch(changeSerise(Iindex))
    setSeriseIndex(Iindex)
    // 判断索引是否一致，防止重复请求  再调用父组件传递的方法
    if(categoryIndex !== store.getState().productReducer.categoryIndex){
      props?.onSend()
    }else if(typeIndex !== store.getState().productReducer.typeIndex){
      props?.onSend()
    }else if(seriseIndex !== store.getState().productReducer.seriseIndex){
      props?.onSend()
    }
  }
  const productType = data[selectIndex]?.first_classify.map((Item,I)=>{
    return <div key={I} className={[styles.productType,isArr[I] ?styles.typeActive:' '].join(' ')}
    style={{height:(isArr[I] == false)?'60px':'auto'}}
    >
      <p style={{color:(selectIndex == store.getState().productReducer.categoryIndex &&store.getState().productReducer.typeIndex == I) ?'#bb030f':''}} onClick={()=>(toggleList(I))}>{Item.type}</p>
      <div className={styles.productSeries}>
        {Item.second_classify.map((item,i)=>{
          if(!isSkip){//根据路由所在位置，选择是否使用跳转标签
            return <Link href={{pathname:'/product',query:{category:selectIndex,type:I,serise:i}}} key={i}><span
            className={[(selectIndex ==store.getState().productReducer.categoryIndex && store.getState().productReducer.typeIndex===I) && store.getState().productReducer.seriseIndex===i ?styles.activeSerise:'']}
            onClick={()=>{
              store.dispatch(changeCategory(selectIndex))
              store.dispatch(changeType(I))
              store.dispatch(changeSerise(i))
              setSeriseIndex(i)
            }}
            >{item.serise}</span></Link>
          }else{
            return <Link href={{pathname:'/product',query:{category:selectIndex,type:I,serise:i}}} key={i}><span
              className={[(categoryIndex===selectIndex && store.getState().productReducer.typeIndex===I)&& store.getState().productReducer.seriseIndex===i ?styles.activeSerise:'']}
              onClick={()=>(selectItem(I,i))}
            >{item.serise}</span></Link>
          }
        })}
      </div>
    </div>
  })
  // const [scrollTop,setTop] = useState(0)
  // window.addEventListener('scroll',function(e){
  //     // 滚动条滚动高度
  //     const top = document.documentElement.scrollTop;
  //     console.log(top);
  //     setTop(top)
  // })
  return(
    <div className={styles.productSidedar} 
      // style={{marginTop:scrollTop>1200 ? `${scrollTop-460}px`: '.0625rem'}}
    >
      <div className={styles.sidedarT}>
        <h3>产品中心</h3>
        <p>Products Show</p>
      </div>
      <div className={styles.productCategory}>{ProductCategory}</div>
      {productType}
    </div>
  )
}