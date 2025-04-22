'use client' // 客户端渲染时
import React, { useState, useEffect } from 'react'
import { Player } from 'video-react'
import Slider from "react-slick";
import Link from 'next/link'
import CountUp from "react-countup";
import { Inter, Share_Tech } from 'next/font/google'
import styles from '@/styles/index.module.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "node_modules/video-react/dist/video-react.css";
import Title from '../components/title'
import { store } from '../redux/store'
import { changeCategory,changeSerise,changeType } from '../redux/productStore'
import { changeNewCategory } from '../redux/common'

const {common} = store.getState()
const URL = common.URL
const comURL = common.comURL
console.log(URL,comURL);

// imgs
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
// insert product list 13
function ProductShow(){
  const data =[
    {
      title:'板材',type:0,
      list:[
        '\u25A3 亮面铝板',
        '\u25A3 贴膜铝板',
        '\u25A3 超宽铝板',
        '\u25A3 特厚铝板',
        '\u25A3 超平铝板',
        '\u25A3 锻造铝板',
        '\u25A3 花纹铝板',
        '\u25A3 预拉伸铝板'
      ]
    },
    {
      title:'花纹板',type:0,
      list:[
        '\u25A3 菱形花纹',
        '\u25A3 三条型花纹',
        '\u25A3 方格型花纹',
        '\u25A3 日月型花纹',
        '\u25A3 指针型花纹',
        '\u25A3 扁豆型花纹',
        '\u25A3 大五条筋花纹',
        '\u25A3 小五条筋花纹',
      ]
    },
    {
      title:'卷材',type:2,
      list:[
        '\u25A3 铝带',
        '\u25A3 铝卷',
        '\u25A3 铝箔',
        '\u25A3 铝卷开平',
        '\u25A3 铝卷分条',
        '\u25A3 冲压铝卷',
        '\u25A3 花纹铝卷',
        '\u25A3 超宽铝卷',
      ]
    },
    {
      title:'圆棒',type:1,
      list:[
        '\u25A3 铸铝棒',
        '\u25A3 挤压铝棒',
        '\u25A3 精拉铝棒',
        '\u25A3 研磨铝棒',
        '\u25A3 锻造铝棒',
        '\u25A3 小直径铝棒',
        '\u25A3 大直径铝棒',
        '\u25A3 花进口铝棒'
      ]
    },
    {
      title:'铝排',type:4,
      list:[
        '\u25A3 铝排',
        '\u25A3 方棒',
        '\u25A3 扁棒',
        '\u25A3 铝条',
        '+ 现货库存',
        '+ 规格齐全',
        '+ 现成模具',
        '+ 定做周期短'
      ]
    },
    {
      title:'圆管',type:3,
      list:[
        '\u25A3 铝盘管',
        '\u25A3 挤压铝管',
        '\u25A3 拉拔铝管',
        '\u25A3 无缝铝管',
        '\u25A3 锻压铝管',
        '\u25A3 薄壁铝管',
        '\u25A3 厚壁铝管',
        '\u25A3 大口径铝管'
      ]
    },
    {
      title:'矩形管',type:4,
      list:[
        '\u25A3 铝方管',
        '\u25A3 铝扁管',
        '+ 切割加工',
        '+ 现货库存',
        '+ 规格齐全',
        '+ 现成模具',
        '+ 定做周期短'
      ]
    },
    {
      title:'角铝',type:4,
      list:[
        '\u25A3 角铝',
        '\u25A3 等边角铝',
        '\u25A3 不等边角铝',
        '+ 切割加工',
        '+ 现货库存',
        '+ 规格齐全',
        '+ 现成模具',
        '+ 定做周期短'
      ]
    },
    {
      title:'铝锻件',type:5,
      list:[
        '\u25A3 2/5/6/7系铝材',
        '\u25A3 锻板',
        '\u25A3 锻棒',
        '\u25A3 锻管',
        '\u25A3 锻环',
        '\u25A3 锻饼',
        '\u25A3 锻筒',
        '\u25A3 锻椎形'
      ]
    },
    {
      title:'异型材',type:4,
      list:[
        '\u25A3 铝排',
        '\u25A3 方棒',
        '\u25A3 扁棒',
        '\u25A3 六角棒',
        '\u25A3 方管',
        '+ 规格齐全',
        '+ 现成模具',
        '+ 定做周期短'
      ]
    },
    {
      title:'铝圆片',type:1,
      list:[
        '\u25A3 拉伸铝圆片',
        '\u25A3 铸扎铝圆片',
        '\u25A3 厨具铝圆片',
        '\u25A3 灯具铝圆片',
        '\u25A3 罐体铝圆片',
        '\u25A3 氧化铝圆片',
        '+ 现成模具',
        '+ 定做周期短'
      ]
    },
    {
      title:'铝盘圆',type:1,
      list:[
        '\u25A3 盘圆',
        '\u25A3 盘管',
        '\u25A3 盘线',
        '+ 切割加工',
        '+ 现货库存',
        '+ 规格齐全',
        '+ 现成模具',
        '+ 定做周期短'
      ]
    }
  ]
  const [index,setIndex] = useState(0);

  const Item = data.map((item,I)=>{
    return <div key={I} onMouseEnter={()=>{setIndex(I)}} className={styles.showItem} style={{flex:index==I?5:1}}>
      <Link href={`/product/0/${item.type}`}
        onClick={()=>{
          store.dispatch(changeCategory(0));
          store.dispatch(changeType(item.type))
          store.dispatch(changeSerise(null))
        }}
      >
        <h3 style={{display:index==I?'none':'block'}}>{item.title}</h3>
      </Link>
      <div className={[index==I?styles.activeBox:styles.hideBox]}>
        <div>
          <h5>{item.title}</h5>
          <ul>{item.list.map((list,i)=>{return <li key={i}>{list}</li>})}</ul>
        </div>
        <div className={styles.imgWrap}><img src={`${URL}index/productShow/${item.title}.png`} alt={item.title}/></div>
      </div>
    </div>
  })
  return <div className={[styles.productShow,'main'].join(" ")}>{Item}</div>
}
// end
// strength start 
function Strengthcom(){
  const strength = [
    {start:19526,num:20000,tag:'m²',cn_text:'占地面积'},
    {start:4135,num:6000,tag:'吨',cn_text:'库存量'},
    {start:5268,num:5000,tag:'家',cn_text:'服务客户'},
    {start:0,num:15,tag:'年',cn_text:'行业经验'},
    {start:0,num:1,tag:'天',cn_text:'现货当天发货'}
  ]
  return(<div className={[styles.strengthWarp, 'main'].join(' ')}>
    <ul>
      {strength.map((item,i)=>{
        return <li key={i}>
          <b><CountUp start={item.start} end={item.num} duration={3} separator=''/><i>{item.tag}</i></b>
          <p>{item.cn_text}</p>
        </li>
      })}
    </ul>
  </div>)
}
// strength end 

// core product start
function Coreproduct(){
  const data = [
    {category:'7系',type:5,
      item:[
        {title:'7075铝板',type:'航空超硬铝',img:comURL+ '铝板/7075/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
        {title:'7075铝棒',type:'航空超硬铝',img:comURL+ '铝棒/7075/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
        {title:'7075铝管',type:'航空超硬铝',img:comURL+ '铝管/7075/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
        {title:'7075铝型材',type:'航空超硬铝',img:comURL+ '铝型材/7075/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
        {title:'7A04铝棒',type:'航空超硬铝',img:comURL+ '铝棒/7A04/1.jpg',text:'生产标准: GB GJB GBN'},
        {title:'7050铝板',type:'航空超硬铝',img:comURL+ '铝板/7050/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
      ]},
    {category:'6系',type:4,
      item:[
        {title:'6061铝板',type:'工业硬铝',img:comURL+ '铝板/6061/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'6061铝棒',type:'工业硬铝',img:comURL+ '铝棒/6061/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'6061铝管',type:'工业硬铝',img:comURL+ '铝管/6061/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'6063铝管',type:'工业硬铝',img:comURL+ '铝管/6063/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'6063铝型材',type:'工业硬铝',img:comURL+ '铝型材/6063/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'6082铝棒',type:'工业硬铝',img:comURL+ '铝棒/6082/1.jpg',text:'生产标准: GB EN ASTM'},
      ]},
    {category:'5系',type:3,
      item:[
        {title:'5052铝板',type:'耐腐蚀铝镁合金',img:comURL+ '铝板/5052/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'5052铝管',type:'耐腐蚀铝镁合金',img:comURL+ '铝管/5052/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'5083铝板',type:'耐腐蚀铝镁合金',img:comURL+ '铝板/5083/1.jpg',text:'生产标准: GB GJB GBN EN ASTM'},
        {title:'5083铝棒',type:'耐腐蚀铝镁合金',img:comURL+ '铝棒/5083/1.jpg',text:'生产标准: GB GJB GBN EN ASTM'},
        {title:'5754铝板',type:'耐腐蚀铝镁合金',img:comURL+ '铝板/5754/1.jpg',text:'生产标准: GB GJB GBN EN ASTM'},
        {title:'5A06铝板',type:'耐腐蚀铝镁合金',img:comURL+ '铝板/5A06/1.jpg',text:'生产标准: GB GJB GBN'},
      ]},
    {category:'3系',type:2,
      item:[
        {title:'3003铝板',type:'防锈铝合金',img:comURL+ '铝板/3003/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'3003铝棒',type:'防锈铝合金',img:comURL+ '铝棒/3003/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'3003铝管',type:'防锈铝合金',img:comURL+ '铝管/3003/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'3A21铝板',type:'防锈铝合金',img:comURL+ '铝板/3A21/1.jpg',text:'生产标准: GB GJB GBN EN ASTM'},
        {title:'3A21铝棒',type:'防锈铝合金',img:comURL+ '铝棒/3A21/1.jpg',text:'生产标准: GB GJB GBN EN ASTM'},
        {title:'3A21铝管',type:'防锈铝合金',img:comURL+ '铝管/3A21/1.jpg',text:'生产标准: GB GJB GBN EN ASTM'},
      ]},
    {category:'2系',type:1,
      item:[
        {title:'2A12铝板',type:'军工硬铝',img:comURL+ '铝板/2A12/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
        {title:'2A12铝棒',type:'军工硬铝',img:comURL+ '铝棒/2A12/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
        {title:'2A12铝管',type:'军工硬铝',img:comURL+ '铝管/2A12/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
        {title:'2024铝板',type:'军工硬铝',img:comURL+ '铝板/2024/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
        {title:'2024铝棒',type:'军工硬铝',img:comURL+ '铝棒/2024/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
        {title:'2024铝管',type:'军工硬铝',img:comURL+ '铝管/2024/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
      ]},
    {category:'1系',type:0,
      item:[
        {title:'1050铝板',type:'工业纯铝',img:comURL+ '铝板/1050/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'1060铝板',type:'工业纯铝',img:comURL+ '铝板/1060/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'1060铝棒',type:'工业纯铝',img:comURL+ '铝棒/1060/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'1050铝卷',type:'工业纯铝',img:comURL+ '铝卷/1050/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'1060铝卷',type:'工业纯铝',img:comURL+ '铝卷/1060/1.jpg',text:'生产标准: GB EN ASTM'},
        {title:'1060铝管',type:'工业纯铝',img:comURL+ '铝管/1050/1.jpg',text:'生产标准: GB EN ASTM'},
      ]}
  ]
  const [index,setIndex] = useState(0)
  
  function onSelect(index){
    setIndex(index)
  }
  const selectList = data.map((item,i)=>{
    return <li key={i} className={[index==i?styles.selectAcitve:null]}>
      <a onClick={()=>onSelect(i)}>{item.category}</a>
    </li>
  })
  const productItem = data[index].item.map((item,i)=>{
    return <div key={i} className={styles.productC}>
      <h4>{item.title+item.type}</h4>
        <Link
          onClick={()=>{
            store.dispatch(changeCategory(1));
            store.dispatch(changeType(data[index].type))
            store.dispatch(changeSerise(null))
          }}
          href={{pathname:'/product/detail/',query:{detail:item.title}}}><img src={item.img} alt={item.title}/></Link>
      <div>{item.text}</div>
    </div>
  })
  return(
    <div>
      <ul className={styles.selectBox}>{selectList}</ul>
      <div className={[styles.productBox,styles.coreProduct].join(' ')}>
        <div className={[styles.productBoxMain,'main'].join(' ')}>
          <div className={styles.productMainB}>{productItem}</div>
        </div>
      </div>
    </div>
  )
}
// core product end

// hot product start
function Hotproduct(){
  const data = [
    {category:'铝板',type:0,item:[
      {title:'2A12铝板',type:'军工硬铝',img:comURL+ '铝板/2A12/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
      {title:'6063铝板',type:'工业硬铝',img:comURL+ '铝板/6063/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'6082铝板',type:'工业硬铝',img:comURL+ '铝板/6082/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'5052铝板',type:'耐腐蚀铝镁合金',img:comURL+ '铝板/5052/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'5083铝板',type:'耐腐蚀铝镁合金',img:comURL+ '铝板/5083/1.jpg',text:'生产标准: GB GJB GBN EN ASTM'},
      {title:'7050铝板',type:'航空超硬铝',img:comURL+ '铝板/7050/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'}
    ]},
    {category:'铝棒',type:1,item:[
      {title:'2A12铝棒',type:'军工硬铝',img:comURL+ '铝棒/2A12/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
      {title:'2024铝棒',type:'军工硬铝',img:comURL+ '铝棒/2024/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
      {title:'5083铝棒',type:'耐腐蚀铝镁合金',img:comURL+ '铝棒/5083/1.jpg',text:'生产标准: GB GJB GBN EN ASTM'},
      {title:'6061铝棒',type:'工业硬铝',img:comURL+ '铝棒/6061/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'6082铝棒',type:'工业硬铝',img:comURL+ '铝棒/6082/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'7075铝棒',type:'航空超硬铝',img:comURL+ '铝棒/7075/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'}
    ]},
    {category:'铝卷',type:2,item:[
      {title:'2A12铝卷',type:'军工硬铝',img:comURL+ '铝卷/2A12/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
      {title:'5052铝卷',type:'耐腐蚀铝镁合金',img:comURL+ '铝卷/5052/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'5083铝卷',type:'耐腐蚀铝镁合金',img:comURL+ '铝卷/5083/1.jpg',text:'生产标准: GB GJB GBN EN ASTM'},
      {title:'6061铝卷',type:'工业硬铝',img:comURL+ '铝卷/6061/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'6063铝卷',type:'工业硬铝',img:comURL+ '铝卷/6063/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'7050铝卷',type:'航空超硬铝',img:comURL+ '铝卷/7075/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'}
    ]},
    {category:'铝管',type:3,item:[
      {title:'2A12铝管',type:'军工硬铝',img:comURL+ '铝管/2A12/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
      {title:'2024铝管',type:'军工硬铝',img:comURL+ '铝管/2024/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
      {title:'6061铝管',type:'军工硬铝',img:comURL+ '铝管/6061/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'6082铝管',type:'军工硬铝',img:comURL+ '铝管/6082/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'6063铝管',type:'军工硬铝',img:comURL+ '铝管/6063/1.jpg',text:'生产标准: GB GJB GBN'},
      {title:'7075铝管',type:'航空超硬铝',img:comURL+ '铝管/7075/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'}
    ]},
    {category:'铝型材',type:4,item:[
      {title:'2024铝型材',type:'军工硬铝',img:comURL+ '铝型材/2024/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
      {title:'2A12铝型材',type:'军工硬铝',img:comURL+ '铝型材/2A12/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
      {title:'6061铝型材',type:'工业硬铝',img:comURL+ '铝型材/6061/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'6063铝型材',type:'工业硬铝',img:comURL+ '铝型材/6063/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'6082铝型材',type:'工业硬铝',img:comURL+ '铝型材/6082/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'7075铝型材',type:'航空超硬铝',img:comURL+ '铝型材/7075/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'}
    ]},
    {category:'铝锻件',type:5,item:[
      {title:'2024铝锻件',type:'军工硬铝',img:comURL+ '铝锻件/2024/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
      {title:'2A12铝锻件',type:'军工硬铝',img:comURL+ '铝锻件/2A12/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'},
      {title:'5083铝锻件',type:'耐腐蚀铝镁合金',img:comURL+ '铝锻件/5083/1.jpg',text:'生产标准: GB GJB GBN EN ASTM'},
      {title:'6061铝锻件',type:'工业硬铝',img:comURL+ '铝锻件/6061/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'6082铝锻件',type:'工业硬铝',img:comURL+ '铝锻件/6082/1.jpg',text:'生产标准: GB EN ASTM'},
      {title:'7075铝锻件',type:'航空超硬铝',img:comURL+ '铝锻件/7075/1.jpg',text:'生产标准: GB GJB GBN EN ASTM AMS'}
    ]}
  ]
  const [index,setIndex] = useState(0)
  
  function onSelect(index){
    setIndex(index)
  }
  const selectList = data.map((item,i)=>{
    return <li key={i} className={[index==i?styles.selectAcitve:null]}>
      <a onClick={()=>onSelect(i)}>{item.category}</a>
    </li>
  })

  const productItem = data[index].item.map((item,i)=>{
    return <div key={i} className={styles.productC}>
      <h4>{item.title+item.type}</h4>
      <Link
        onClick={()=>{
          store.dispatch(changeCategory(0));
          store.dispatch(changeType(data[index].type))
          store.dispatch(changeSerise(null))
        }}
        href={{pathname:'/product/detail/',query:{detail:item.title}}}><img src={item.img} alt={item.title}/></Link>
      <div>{item.text}</div>
    </div>
  })
  return(
    <div>
      <ul className={styles.selectBox}>{selectList}</ul>
      <div className={[styles.productBox,styles.hotProduct].join(' ')}>
        <div className={[styles.productBoxMain,'main'].join(' ')}>
          <div className={styles.productMainB}>{productItem}</div>
        </div>
      </div>
    </div>
  )
}
// hot product end

// four advantage start
function Advantage(props){
  const {width} = props
  return <div className={styles.advantageWrap}>
    <div className={[styles.advantageMain,'main'].join(' ')}>
      <div><img src={width >= 560 ? (URL + 'index/advantage1.png') : (URL +'index/advantage1_m.jpg')} alt='优势一' /></div>
      <div><img src={width >= 560 ? (URL + 'index/advantage4.png') : (URL +'index/advantage4_m.jpg')} alt='优势四' /></div>
      <div><img src={width >= 560 ? (URL + 'index/advantage2.png') : (URL +'index/advantage2_m.jpg')} alt='优势二' /></div>
      <div><img src={width >= 560 ? (URL + 'index/advantage3.png') : (URL +'index/advantage3_m.jpg')} alt='优势三' /></div>
    </div>
  </div>
}
// four advantage end

// application fields start

function Applicationfields(){
  const data =[
    [
      {
        title:'航空航天',text:'具有航空领域用高端铝铁材料的提供能力，其中一些标准产品等新型发动机涡轮盘、压气盘、叶片用铝成功应用于轰炸机、强毒机等核心部件制作。',
        img:URL+'index/app01.jpg'
      },
      {
        title:'轨道交通',text:'供应的铁路用铝主要有铁路弹簧铝、扣件用铝、道岔用铝、钩尾框用铝、铁路轴承铝、欧标合金铝，美标合金铝等产品，全部通过国家铁道部认可并具备了批量供货能力。',
        img:URL+'index/app03.jpg'
      },
      {
        title:'汽车制造',text:'在当今燃料及环境问题日益严峻的时期，铝合金扮演着一个助推汽车轻量化及提升燃油能效的重要角色，从而帮助缓解能源及环境问题。',
        img:URL+'index/app04.jpg'
      },
      {
        title:'船舶运输',text:'铝合金板材在船舶及海洋工程中主要用在船体结构及隔舱等上层建筑上，同时通常用小直径铝合金管材做管道，大直径管材和棒材则用作船体架构、桅杆构件、梁柱等...',
        img:URL+'index/app05.jpg'
      },
      {
        title:'消费电子',text:'使用铝制散热器元件，能够满足电子产品设计指标的要求，也是提高功率器件使用寿命。铝合金板材也用于制造各种电子面板、电器柜体箱体。',
        img:URL+'index/app08.jpg'
      }
    ],
    [
      {
        title:'医疗设备',text:'得益于医疗技术的飞速发展，大型的医疗设备越来越多，铝合金由于其良好的塑性和加工性能，以及轻量化，耐腐蚀等优点。',
        img:URL+'index/app06.jpg'
      },
      {
        title:'化工容器',text:'适用于油罐车和其他化工运输车罐体等，具有大规格、中强度、高质量表面、高成形性的特点，并具有良好的抗腐蚀性能和焊接性能，以及可回收性。不但安全可靠也利于环保。',
        img:URL+'index/app07.jpg'
      },
      {
        title:'工业模具',text:'扬东铝业集团有国内机械加工铝供应及服务极高的市场声誉，工模具被誉为“现代工业之母”，随着市场的发展及铝合金技术的提高，目前欧美市场逐渐呈现铝模替代钢模的现象。',
        img:URL+'index/app09.jpg'
      },
      {
        title:'机械制造',text:'扬东铝业集团是国内机械加工铝供应及服务极高的市场声誉，铝与钢的密度比为1:3，铝模取代钢模在质量方面可节约1/2。采用钢-铝复合模。铝合金模的成本约比钢模低15%以上。',
        img:URL+'index/app02.jpg'
      },
      {
        title:'建筑建材',text:'除了众所周知的抗腐蚀、高强度、低重量, 铝合金光彩美观，耐侵蚀性好，对光和热的反射率高，吸声机能好，通过化学及电化学的方法可获得各种不同的颜色。',
        img:URL+'index/app10.jpg'
      }
    ]
  ]
  const [index,setIndex] = useState([[0],[0]])
  function onHover(I,i){
    let arr = index
    // console.log(arr);
    if(I == 0){
      arr[0] = [i]
      setIndex([...arr])
    }else{
      arr[1] = [i]
      setIndex([...arr])
    }
  }
  const Item =data.map((item,I)=>{
    return <div className={[styles.filedsWrap].join(' ')} key={I}>
      {item.map((list,i)=>{
        return <div key={i}
          className={[index[I] == i? styles.filedActive:styles.filed]}
          onMouseEnter={()=>onHover(I,i)}>
          <img src={list.img} alt={list.title}/>
          <h5>{list.title}</h5>
          <p>{list.text}</p>
        </div>
      })}
    </div>
  })
  return <div className='main'>{Item}</div>
}
// 移动端 应用领域
function ApplicationfieldsM(){
  return <div className={[styles.ApplicationWrapM,'main'].join(' ')}>
    <img src={URL + 'index/app_1.jpg'} alt='应用领域'/>
    <img src={URL + 'index/app_2.jpg'} alt='应用领域'/>
    <img src={URL + 'index/app_3.jpg'} alt='应用领域'/>
    <img src={URL + 'index/app_4.jpg'} alt='应用领域'/>
    <img src={URL + 'index/app_5.jpg'} alt='应用领域'/>
    <img src={URL + 'index/app_6.jpg'} alt='应用领域'/>
    <img src={URL + 'index/app_7.jpg'} alt='应用领域'/>
    <img src={URL + 'index/app_8.jpg'} alt='应用领域'/>
    <img src={URL + 'index/app_9.jpg'} alt='应用领域'/>
  </div>
}
// application fields end
import partner1 from '../img/concert/partner1.png'
import partner2 from '../img/concert/partner2.png'
import partner3 from '../img/concert/partner3.png'
import partner4 from '../img/concert/partner4.png'
import partner5 from '../img/concert/partner5.png'
import partner6 from '../img/concert/partner6.png'
import partner7 from '../img/concert/partner7.png'
import partner8 from '../img/concert/partner8.png'
import partner9 from '../img/concert/partner9.png'
import partner10 from '../img/concert/partner10.png'
import partner11 from '../img/concert/partner11.png'
import partner12 from '../img/concert/partner12.png'
import partner13 from '../img/concert/partner13.png'
import partner14 from '../img/concert/partner14.png'
import partner15 from '../img/concert/partner15.png'
import partner16 from '../img/concert/partner16.png'
import partner17 from '../img/concert/partner17.png'
import partner18 from '../img/concert/partner18.png'
import partner19 from '../img/concert/partner19.png'
import partner20 from '../img/concert/partner20.png'
import partner21 from '../img/concert/partner21.png'
import partner22 from '../img/concert/partner22.png'
import partner23 from '../img/concert/partner23.png'
import partner24 from '../img/concert/partner24.png'
import partner25 from '../img/concert/partner25.png'
import partner26 from '../img/concert/partner26.png'
import partner27 from '../img/concert/partner27.png'
import partner28 from '../img/concert/partner28.png'
import partner29 from '../img/concert/partner29.png'
import partner30 from '../img/concert/partner30.png'
// concert company start
function Concert(){
  const data1 = [partner1,partner2,partner3,partner4,partner5,partner6,partner7,partner8,partner9,partner10]
  const data2 = [partner11,partner12,partner13,partner14,partner15,partner16,partner17,partner18,partner19,partner20]
  const data3 = [partner21,partner22,partner23,partner24,partner25,partner26,partner27,partner28,partner29,partner30]
  const item1 = data1.map((item,i)=>{
    return <div key={i} className={styles.concertItem}>
      <Image src={item} alt='合作单位'></Image>
    </div>
  })
  const item2 = data2.map((item,i)=>{
    return <div key={i} className={styles.concertItem}>
      <Image src={item} alt='合作单位'></Image>
    </div>
  })
  const item3 = data3.map((item,i)=>{
    return <div key={i} className={styles.concertItem}>
      <Image src={item} alt='合作单位'></Image>
    </div>
  })
  return <div className={[styles.concertWrap,'main'].join(' ')}>
    <div className={[styles.concertList]}>
      <div className={[styles.concertRow,styles.rowRight].join(' ')}>
        {item1}{item1}
      </div>
    </div>
    <div className={styles.concertList}>
      <div className={[styles.concertRow,styles.rowLeft].join(' ')}>
        {item2}{item2}
      </div>
    </div>
    <div className={styles.concertList}>
      <div className={[styles.concertRow,styles.rowRight].join(' ')}>
        {item3}{item3}
      </div>
    </div>
  </div>
}
// concert company end

// news start
function News(){
  const data =[
    {title:'公司动态',list:[
      {img:URL + 'index/news01.png',text:'“精工品质，真诚合作”扬东集团客户好评不断诚信可靠',link:'/news/0_0'},
      {img:URL + 'index/news02.png',text:'扬东集团被中国兵器工业集团纳入优选供应商名录',link:'/news/0_4'},
      {img:URL + 'index/news03.png',text:'热烈祝贺扬东集团顺利通过ISO9001质量管理体系认证',link:'/news/0_2'},
      {img:URL + 'index/news04.png',text:'【喜讯】扬东集团荣获3A级企业信用等级证书',link:'/news/0_3'}
    ]},
    {title:'行业新闻',list:[
      {
        img: URL +'index/industry.jpg',
        title:'西南铝为天舟三号提供多个铝合金关键材料',
        content:[
          '9月20日，长征七号遥四运载火箭搭载天舟三号货运飞船，在海南文昌发射场发射成功。在此次发射任务中，西南铝承担了火箭和货运飞船，多个品种、多个规格的铝合金关键材料的研制任务。',
          '西南铝为长征七号遥四运载火箭和天舟三号飞船提供的铝合金材料涵盖锻件、板材、型材、管材等多个大类10多个规格品种，主要用于飞船的连接框、中间框、端框以及飞船表面等主要结构和运载火箭的过渡环、转接框、贮箱等关键部位，铝材占比总量达60%以上，天舟三号货物舱的壳体主结构铝框则100%由西南铝提供。',
          '天舟三号货运飞船工程所需的关键铝合金材料，具有高冶金质量、的技术指标要求及品种规格多、构件尺寸大的特点，其制造技术是当今国际的铝加工技术。',
          '为坚定保障需求，西南铝深入开展工艺研究与技术攻关，有效解决了系列工艺难题，取得了在熔铸、热加工、热处理等方面重要科研成果，攻克了材料研发、生产中的多项关键技术难题，使产品综合性能达到了国际水平，打破了国外长期技术垄断，成功确保了天舟三号货运飞船工程高精尖铝材需求。'
        ],
        time:'2021-09-30 09:26',
        link:'/news/1_0'
      }
    ]},
    {title:'铝材知识',list:[
        {itemTitle:'工业铝材采购需要注意的几点',date:'2024-06-20',tag:'技术知识',color:'#388cfe'},
        {itemTitle:'铝型材加工常识',date:'2022-04-19',tag:'铝材知识',color:'#fc9c21'},
        {itemTitle:'无缝铝管和有缝铝管的区别',date:'2020-05-05',tag:'技术知识',color:'#388cfe'},
        {itemTitle:'铝板表面出现瑕疵的原因',date:'2019-10-12',tag:'技术知识',color:'#388cfe'},
        {itemTitle:'铝合金和铝镁合金的区别',date:'2019-10-12',tag:'精选知识',color:'#fa605c'},
        {itemTitle:'为什么7075铝合金氧化效果不稳定',date:'2019-09-22',tag:'精选知识',color:'#fa605c'},
        {itemTitle:'铝板的拉丝与喷砂处理',date:'2019-09-11',tag:'技术知识',color:'#388cfe'},
        {itemTitle:'花纹铝板该如何保养',date:'2019-07-23',tag:'精选知识',color:'#fa605c'},
        {itemTitle:'铝合金T6和T651区别',date:'2019-02-01',tag:'铝材知识',color:'#fc9c21'},
        {itemTitle:'铝模具和钢模具区别及优势',date:'2018-12-19',tag:'铝材知识',color:'#fc9c21'}
      ]
    },
    {title:'加工视频',list:[
      {src:comURL+ 'video/%E9%93%9D%E6%9D%BF%E5%88%87%E5%89%B2.mp4',title:'铝板切割',link:'/news'},
      {src:comURL+ 'video/%E9%93%9D%E6%A3%92%E5%88%87%E5%89%B2.mp4',title:'铝棒切割',link:'/news'},
      {src:comURL+ 'video/%E9%93%9D%E4%BB%B6%E9%94%BB%E9%80%A0.mp4',title:'铝件锻造',link:'/news'},
      {src:comURL+ 'video/%E6%8C%A4%E5%8E%8B.mp4',title:'挤压',link:'/news'}
    ]},
  ]
  const [index,setIndex] = useState(0)
  function onSelect(index){
    setIndex(index)
  }
  const selectList = data.map((item,i)=>{
    return <li key={i}
      onClick={()=>onSelect(i)}
      className={[index==i?styles.selectAcitve:null]}>
      <a>{item.title}</a>
    </li>
  })
  // 公司动态
  const Dynamic = data[0].list.map((item,i)=>{
    return <Link key={i} className={styles.dynamicBox} href={item.link}>
        <div className={styles.dynamicImg}><img src={item.img} alt='动态'/></div>
        <p>{item.text}</p>
    </Link>
  })
  // 行业新闻
  const IndustryNews = data[1].list.map((item,I)=>{
    return <Link key={I} className={styles.industry} href={item.link}>
      <div className={styles.industryimg}><img src={item.img} alt='行业新闻'/></div>
      <div className={styles.industryC}>
        <h5>{item.title}</h5>
        <hr></hr>
        {item.content.map((itemP,i)=>{
          return <p key={i}>{itemP}</p>
        })}
        <span>发布时间：{item.time}</span>
      </div>
    </Link>
  })
  // 铝材知识
  const Alu = data[2].list.map((item,i)=>{
    return <p key={i}><i style={{backgroundColor:item.color}}>{item.tag}</i>{item.itemTitle}<span>发布时间：{item.date}</span></p>
  })
  // 加工视频
  const Resource = data[3].list.map((item,i)=>{
    return <div key={i} className={styles.resourceBox}>
    <div className={styles.resourceVideo}><Player playsInline src={item.src}/></div>
    <Link href={item.link} onClick={()=>store.dispatch(changeNewCategory(2))}>{item.title}	&rarr;</Link>
    </div>
  })
  return <div className='main'>
    <ul className={styles.selectBox}>{selectList}</ul>
    {index == 0 && <div className={styles.dynamic}>{Dynamic}</div>}
    {index == 1 && IndustryNews}
    {index == 2 && <div className={styles.aluK}>{Alu}</div>}
    {index == 3 && <div className={styles.resource}>{Resource}</div>}
  </div>
}
// news end

// 走进扬东 start
function Aboutcompany(){
  const data =[
    {num:'2012',text:'成立于（年）'},
    {num:'20000',text:'占地面积（m²）'},
    {num:'50+',text:'销售专员'},
    {num:'5000+',text:'客户案例'},
  ]
  const Item = data.map((item,i)=>{
    return <div key={i}>
      <b>{item.num}</b>
      <span>{item.text}</span>
    </div>
  })
  return <div className={[styles.aboutWrap,'main'].join(' ')}>
    <div className={styles.aboutL}>
    <h3>走进扬东</h3>
    <h5>致力成为一个高效、专业、稳定的集团化企业！</h5>
    <p>江苏扬东铝业集团有限公司(简称”扬东铝业集团”)成立于2012年，公司现已成为华东地区集铝批发零售、原材料加工、国际贸易和技术咨询为一体的大型多元化企业，主要从事高精铝材的加工和销售。扬东铝业位于江苏省苏州市，公司占地20000平米，物流交通极为发达，走向全国，面向国际，具有资源、质量、价格的绝对优势。</p>
    <div className={styles.btnGroup}>
      <button className='redBtn'><Link href={'/about'}>了解我们</Link></button>
      <button className='whiteBtn' style={{marginLeft:'20px'}}>
        <a target="_blank" href='https://html.ecqun.com/kf/sdk/openwin.html?corpid=11627559&cstype=rand&mode=0&cskey=kkd1a23CLKZMWrHPzz&scheme=2&source=100'>立即咨询</a>
      </button>
    </div>
    <div className={styles.companyData}>{Item}</div>
    </div>
    <div className={styles.aboutR}>
      <div className={styles.aboutRC}>
        <div><img src={URL +'index/icon1.png'}/><a href='/about/#introduce'>扬东简介</a></div>
        <div><img src={URL +'index/icon2.png'}/><a href='/about/#fremawork'>组织架构</a></div>
        <div><img src={URL +'index/icon3.png'}/><a href='/about/#history'>发展历程</a></div>
        <div><img src={URL +'index/icon4.png'}/><a href='/about/#honor'>公司荣誉</a></div>
      </div>  
    </div>
  </div>
}
// 走进扬东 end
// 移动端定制流程
function FlowMobile(){
  const data = [
    {img:URL +'index/flow1.jpg',text:'需求解读'},
    {img:URL +'index/flow2.jpg',text:'方案确定'},
    {img:URL +'index/flow3.jpg',text:'造型配样'},
    {img:URL +'index/flow4.jpg',text:'方案报价'},
    {img:URL +'index/flow5.jpg',text:'加工定制'},
    {img:URL +'index/flow6.jpg',text:'物流配送'}
  ]
  const Item = data.map((item,i)=>{
    return <div key={i}>
      <img src={item.img} alt={item.text}/>
      <p>{item.text}</p>
    </div>
  })
  return <div className={styles.flowMainM}>{Item}</div>
}
// comment start
import tag from '../img/icon/tag.svg'
function Comment(){
  const data =[
    {
      logo:URL +'index/client1.png',
      content:'扬东的铝材价钱比较合理，适合我们合作选用的供应商，报价单真实。',
      desc:['精度要求高','批量'],
      client:'蔡先生', 
      compeny:'梅卡曼德机器人'
    },
    {
      logo:URL +'index/client2.jpg',
      content:'很棒的铝材厂家，报价也透明，我们公司需要的铝板和铝管一直都在这里采购，铝材质量很好，用着不错。',
      desc:['精度要求高','批量','便捷采购'],
      client:'刘先生', 
      compeny:'中国第一汽车集团有限公司'
    },
    {
      logo:URL +'index/client3.png',
      content:'找了几家对比，还是这家的实力好，铝材做的非常好，价格也给得很实惠，非常感谢扬东铝业，这次合作很满意，以后继续找你们合作。',
      desc:['精度要求高','多品种','出货快'],
      client:'苏先生', 
      compeny:'大疆创新科技'
    }, {
      logo:URL +'index/client4.png',
      content:'感谢扬东对这批紧急加工件的全力支持，一度担心质量和交期，最终按期交付，订单状态更新、客服回复都很及时，很满意的一次合作。',
      desc:['精度要求高','批量','加急订单'],
      client:'刘先生', 
      compeny:'华为技术有限公司'
    },
    {
      logo:URL +'index/client5.jpg',
      content:'零件质量太棒了，线上采购很省心，整个过程非常方便。希望保持高品质交付，订单每月都有，已推荐给其他实验室。',
      desc:['精度要求高','多品种','出货快'],
      client:'郭先生', 
      compeny:'海洋科技有限公司'
    },
    {
      logo:URL +'index/client6.jpg',
      content:'之前经同事推荐，对扬东的服务一直挺满意，精度外观都很好，沟通顺畅，工程师给的修改建议很专业。',
      desc:['外观要求高','小批量'],
      client:'李先生', 
      compeny:'河南平高电气股份有限公司'
    },
    {
      logo:URL +'index/client7.png',
      content:'不得不说，无论质量还是价格都是相当好，很有实力的公司,做的铝材型号和规格也齐全，整体费用比预算稍降低一些，质量上没发现啥问题。',
      desc:['精度要求高','多品种','出货快'],
      client:'胡先生', 
      compeny:'广州小鹏汽车科技有限公司'
    }, {
      logo:URL +'index/client8.png',
      content:'扬东的铝卷制造工艺相当成熟，经过多年的发展，以产品过硬的质量获得了非常好的评价，我们公司一直都在这里采购的，非常满意。',
      desc:['精度要求高','多品种','出货快'],
      client:'王先生', 
      compeny:'中科院精密机械研究所'
    },
  ]
  const Item = data.map((item,i)=>{
    return <div key={i} className={styles.commentI}>
      <div className={styles.commentLogo}><img src={item.logo} alt={item.compeny}/></div>
      <div className={styles.comtentBox}>
        <p className={styles.comtent} style={{height:'.6rem'}}>{item.content}</p>
        <p>需求及特征</p>
        <p className={styles.feature}>
          <Image src={tag} alt='icon'/>
          {item.desc.map((text,t)=>{
            return <span key={t}>{text}</span>
          })}
        </p>
        <p style={{marginTop:'.1875rem',color:'#b6b6b6'}}>{item.client}</p>
        <p style={{color:'#b6b6b6'}}>{item.compeny}</p>
      </div>
    </div>
  })
  return <div className={[styles.commentWrap,'main'].join(' ')}>
    <div className={styles.commentC}>{Item}</div>
  </div>
}
// comment end
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1500
  };
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
  return (
    <main>
      <div className="slider-container banner-container">
        {windowSize.innerWidth >= 980 ? 
        <Slider {...settings}>
          <div><img src={URL+'banner/pc/banner2.png'} alt='banner'/></div>
          <div><img src={URL+'banner/pc/banner6.png'} alt='banner'/></div>
          <div><img src={URL+'banner/pc/banner1.jpg'} alt='banner'/></div>
          <div><img src={URL+'banner/pc/banner3.jpg'} alt='banner'/></div>
          <div><img src={URL+'banner/pc/banner4.jpg'} alt='banner'/></div>
        </Slider>
        :
        <Slider {...settings}>
          <div><img src={URL+'banner/mobile/banner2.png'} alt='banner'/></div>
          <div><img src={URL+'banner/mobile/banner6.png'} alt='banner'/></div>
          <div><img src={URL+'banner/mobile/banner1.jpg'} alt='banner'/></div>
          <div><img src={URL+'banner/mobile/banner3.jpg'} alt='banner'/></div>
          <div><img src={URL+'banner/mobile/banner4.jpg'} alt='banner'/></div>
        </Slider>
        }
      </div>
      <ProductShow/>
      <Strengthcom/>
      <Title mainhead={['核心','产品']} subhead={'高质产品 · 中国制造'}/>
      <Coreproduct/>
      <Title mainhead={['热销','产品']} subhead={'现货供应 · 高精品质'}/>
      <Hotproduct/>
      <Title mainhead={['四大优势 · ','完善服务']} subhead={'公司具有产品丰富、销售、服务配套到位的优势'}/>
      <Advantage width={windowSize.innerWidth}/>
      <div className={styles.flowWrap}>
      <Title mainhead={['定制流程 · ','匠心制造']} subhead={'细化每一个环节，时刻对客户负责'}/>
      {windowSize.innerWidth >= 750 && <div className={[styles.flowMain,'main'].join(' ')}>
          <img src={URL +'index/flow.png'} alt='定制流程' style={{width:'7.9063rem',height:'1.5688rem'}}/>
          <div className={styles.flowHref}>
            <a target="_blank" href='https://html.ecqun.com/kf/sdk/openwin.html?corpid=11627559&cstype=rand&mode=0&cskey=kkd1a23CLKZMWrHPzz&scheme=2&source=100'>快速咨询</a>
          </div>
        </div>
      }
      {windowSize.innerWidth < 750 && <FlowMobile/> }
      </div>
      <Title mainhead={['应用','领域']} subhead={'前沿科技 · 应用广泛'}/>
      {windowSize.innerWidth >= 750 ? <Applicationfields/> : <ApplicationfieldsM/>}
      <Title mainhead={['全球战略','合作伙伴']} subhead={'客户信赖 · 贴心服务'}/>
      <Concert/>
      <Title mainhead={['新闻','资讯']} subhead={'精工品质 · 真诚合作'}/>
      <News/>
      {windowSize.innerWidth > 749 && <Title mainhead={['走进 · ','扬东']} subhead={'扬中华文化 · 造东方品质'}/>}
      <Aboutcompany/>
      <Title mainhead={['客户','评价']} subhead={'品质实力 · 质量无忧'}/>
      <Comment/>
    </main>
  )
}