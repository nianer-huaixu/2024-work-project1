import { useState,useEffect } from 'react'
import styles from '@/styles/product.module.scss'

export default function ProuductBanner(){
	const host = 'https://www.yangdong.co:443/'
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
	const pcImgURL = 'https://www.yangdong.co:443/yangdong_web/banner/pc/product_banner.webp'
  const mobileImgURL= 'https://www.yangdong.co:443/yangdong_web/banner/mobile/product_banner.webp'
	return (
		<div className={styles.banner}>
			<img src={windowSize.innerWidth >= 750 ? pcImgURL : mobileImgURL} alt='产品中心'/>
		</div>
	)
}

