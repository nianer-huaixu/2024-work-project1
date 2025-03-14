import Image from 'next/image'
import Link from 'next/link'
import {store} from '../redux/store'
import Router from 'next/router'
import PhoneIcon from '../img/icon/phone.svg'
import LocationIcon from '../img/icon/location.svg'
import EmailIcon from '../img/icon/email.svg'
import erweima01 from '../img/images/erweima01.png'
import erweima02 from '../img/images/erweima02.png'
import gonganbuLogo from "../img/gonganbu_logo.png"
import homeIcon from "../img/images/home.png"
import introIcon from "../img/images/intro.png"
import productIcon from "../img/images/product.png"
import callIcon from "../img/images/call.png"
import serverIcon from "../img/images/server.png"
import { changeNewCategory } from '../redux/common'
import { changeCategory,changeSerise, changeType } from '../redux/productStore'
export default function Footer(props){
  let { curPath } = props
  // console.log(curPath)
  const data =[
    {title:'走进扬东',link:'/about',list:[
      {text:'企业简介',link:'/about#introduce'},
      {text:'发展历程',link:'/about#history'},
      {text:'企业文化',link:'/about#cuiture'},
      {text:'荣誉资质',link:'/about#honor'},
      {text:'组织架构',link:'/about#fremawork'},
      {text:'社会责任',link:'/about#duty'}
    ]},
    {title:'产品中心',link:'/product',list:[
      {text:'铝板',link:'/product/0/0'},
      {text:'铝棒',link:'/product/0/1'},
      {text:'铝卷',link:'/product/0/2'},
      {text:'铝管',link:'/product/0/3'},
      {text:'铝型材',link:'/product/0/4'},
      {text:'铝锻件',link:'/product/0/5'},
      {text:'进口铝板',link:'/product/0/6'},
      {text:'进口铝棒',link:'/product/0/7'}
    ]},
    {title:'加工中心',link:'/process',list:[
      {text:'加工材料',link:'/process#process01'},
      {text:'机加工艺',link:'/process#process02'},
      {text:'表面处理',link:'/process#process03'},
      {text:'加工优势',link:'/process#process04'},
      {text:'设备实力',link:'/process#process05'}
    ]},
    {title:'应用领域',link:'/applicationfields',list:[
      {text:'航空航天',link:'/applicationfields#application01'},
      {text:'高铁轨交',link:'/applicationfields#application02'},
      {text:'汽车制造',link:'/applicationfields#application03'},
      {text:'船舶运输',link:'/applicationfields#application04'},
      {text:'消费电子',link:'/applicationfields#application05'},
      {text:'医疗设备',link:'/applicationfields#application06'},
      {text:'化工容器',link:'/applicationfields#application07'},
      {text:'工业模具',link:'/applicationfields#application08'},
      {text:'机械制造',link:'/applicationfields#application09'},
      {text:'建筑建材',link:'/applicationfields#application10'}
    ]},
    {title:'销售统计',link:'/statistics',list:[{text:'销售统计',link:'/statistics'}]},
    {title:'新闻资讯',link:'/news',list:[
      {text:'公司动态',link:'/news'},
      {text:'行业新闻',link:'/news'},
      {text:'铝材知识',link:'/news'},
      {text:'加工视频',link:'/news'}
    ]}
  ]
  function changeState(title,i){
    if(title === '新闻资讯'){
      store.dispatch(changeNewCategory(i))
    }
    if(title === '产品中心'){
      Router.push({pathname:`/product/0/${i}`})
      store.dispatch(changeCategory(0))
      store.dispatch(changeType(i))
      store.dispatch(changeSerise(null))
    }
  }
  const Item = data.map((group,I)=>{
    return <ul key={I} className='footer-normal-ul'>
      <h5><Link href={group.link}>{group.title}</Link></h5>
      {group.list.map((item,i)=>{
        return <li key={i} onClick={()=>changeState(group.title,i)}>
          <Link href={item.link}>{item.text}</Link>
        </li>
      })}
    </ul>
  })
  return (
    <footer style={{marginTop:curPath=='/process/' ?'0px': '60px'}}>
      <div className="footer-wrap main">
        {Item}
        <ul className='contact'>
          <h5><Link href={'/contactus'}>联系我们</Link></h5>
          <li><Image src={PhoneIcon} alt='icon'/>电话: 0512-62388268</li>
          <li><Image src={LocationIcon} alt='icon'/>地址: 江苏省苏州市工业园区唯亭镇双灯路2号</li>
          <li><Image src={EmailIcon} alt='icon'/>邮箱: 2521813109@qq.com</li>
          <div className='erweima-box'>
            <div>
              <Image src={erweima01} alt='微信二维码'/>
              <p style={{marginTop:'10px'}}>联系我们</p>
            </div>
            {/* <div>
              <Image src={erweima02} alt='抖音二维码'/>
              <p style={{marginTop:'10px'}}>关注抖音</p>
            </div> */}
          </div>
        </ul>
      </div>
      <p>江苏扬东铝业集团有限公司 版权所有
        <Image src={gonganbuLogo} alt='公安部备案'/>
        <br></br>
        <a href='https://beian.mps.gov.cn/#/query/webSearch' target='_blank'>苏公网安备32059002005043号</a> 
        &nbsp;&nbsp;&nbsp;
        <a href='https://beian.miit.gov.cn' target='_blank'>苏ICP备19073843号-1</a></p>
    <div className='mobile-footer'>
      <div>
        <Image src={homeIcon} alt="首页"/>
        <p>首页</p>
        <a href={"/"}></a>
      </div>
      <div>
        <Image src={introIcon} alt="公司简介"/>
        <p>简介</p>
        <a href={"/about"}></a>
      </div>
      <div>
        <Image src={productIcon} alt="产品中心"/>
        <p>产品</p>
        <a onClick={()=>{
          Router.push({pathname:`/product/0/${1}`})
          store.dispatch(changeCategory(0))
          store.dispatch(changeType(1))
          store.dispatch(changeSerise(null))
        }}></a>
      </div>
      <div>
        <Image src={callIcon} alt="拨打电话"/>
        <p>拨打</p>
        <a  href="tel:0512-62388268"></a>
      </div>
      <div>
        <Image src={serverIcon} alt="联系客服"/>
        <p>客服</p>
        <a target="_blank" href='https://html.ecqun.com/kf/sdk/openwin.html?corpid=11627559&cstype=rand&mode=0&cskey=kkd1a23CLKZMWrHPzz&scheme=2&source=100'></a>
      </div>
    </div>
    </footer>
  )
}