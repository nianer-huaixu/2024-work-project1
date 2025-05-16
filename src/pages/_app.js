import '@/styles/globals.scss'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store'
import { changeByPath } from '../redux/routerRedux'
import Header from '../components/header'
import Footer from '../components/footer'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  // 路由发生改变将触发修改
  let curPath = router.asPath
  useEffect(() => {
    // console.log(router.asPath,'path');
    curPath = router.asPath
    store.dispatch(changeByPath(router.asPath))
    if(typeof document !== 'undefined'){
      // AIFF()
      BaiduStatistics()
      EC(window, document)
    }
  },[curPath])

  // yangdong-al
  // EC
  // function EC(W, D){
  //   W.ec_corpid = '11627559';
  //   W.ec_cskey = 'kkd1a23CLKZMWrHPzz'; 
  //   W.ec_scheme = '3';
  //   var s = D.createElement('script');
  //   s.charset = 'utf-8';
  //   s.src = '//1.staticec.com/kf/sdk/js/ec_cs.js';
  //   s.setAttribute('defer', 'defer');
  //   D.getElementsByTagName('head')[0].appendChild(s);
  // }
	// // 百度统计
  // var _hmt = _hmt || [];
  // function BaiduStatistics(){
  //   var hm = document.createElement("script");
  //   hm.src = "https://hm.baidu.com/hm.js?bc8ee0d38b789a33a2b7f4f92603603e";
  //   var s = document.getElementsByTagName("script")[0];
  //   s.parentNode.insertBefore(hm, s);
  // }
  
  // yangdonggroup
  // EC
  function EC(W, D){
    W.ec_corpid = '11627559';
    W.ec_cskey = 'kkd1a23CLKZMWrHPzz';
    W.ec_scheme = '2';
    var s = D.createElement('script');
    s.charset = 'utf-8';
    s.src = '//1.staticec.com/kf/sdk/js/ec_cs.js';
    s.setAttribute('defer', 'defer');
    D.getElementsByTagName('head')[0].appendChild(s);
  }
	// 百度统计
  var _hmt = _hmt || [];
  function BaiduStatistics(){
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?674ae08ea6f04dd646321fd0db7ec6af";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header curPath={curPath}/>
        <Component {...pageProps}/>
        <Footer curPath={curPath}/>
      </PersistGate>
    </Provider>
  )
}