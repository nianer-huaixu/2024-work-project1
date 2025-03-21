import { useState,useEffect } from 'react'
import Title from '@/components/title'
import styles from '@/styles/process.module.scss'

var imgUrl = 'https://www.yangdong.co:8443/yangdong_web'
// 加工材料 start
function Material(){
  const data = [
    {
      title:'铝',
      content:'铝材是有色金属中使用量最大、应用面最广的金属材料，而且其应用范围还在不断扩大之中。运用铝材生产的铝制品更是种类繁多、不胜枚举，据统计已超过70多万种，从建筑装璜业到交通运输业和航空航天等各行各业都有不同的需求。今天小编给大家介绍一下铝制品的加工工艺以及如何避免加工变形。',
      listTitle:'铝的优越性和特点如下:',
      list:[
        '密度低。铝的密度约为2.7g/cm3。它的密度只是铁或铜的1/3。',
        '塑性高。铝的延展性好，可以通过挤压、拉伸等压力加工手段制成各种用品。',
        '耐腐蚀。铝是一个负电性很强的金属，在自然条件或阳极氧化下表面会生成保护性的氧化膜，具有比钢铁好得多的耐腐蚀性。',
        '易强化。纯铝的强度并不高，但通过阳极氧化后可提高其强度。',
        '易表面处理。表面处理可以进一步提高或改变铝的表面性能。铝阳极氧化工艺相当成熟，操作稳定，在铝制品加工过程中已经广泛应用。',
        '导电好，易回收。'
      ]
    },
    {
      title:'钢和不锈钢',
      content:'不锈钢是指含有至少11%铬的铁基合金系列，铭是一种防止铁腐蚀并提供耐热性的化合物。不同类型的不锈钢包括元素氮、铝、硅、硫、钛、镍、铜、硒、铌和钼。不锈钢的种类繁多，不锈钢牌号多达150多个，常用的不锈钢只占不锈钢总数的十分之一左右。不锈钢可以制成薄板、板材、棒材、线材和管材，使其适用于各种应用场景。',
      listTitle:'我们来看看不锈钢在机加工中的优势。',
      list:[
        '耐腐蚀性：不锈钢以其卓越的耐腐蚀性而闻名。这使得不锈钢成为需要抵抗酸碱、盐水等腐蚀因素的应用的理想选择。在机械加工中，如果工件将暴露在潮湿或腐蚀性环境中，不锈钢是更好的选择。',
        '强度和坚固性：不锈钢具有较高的强度和耐久性，使其适用于需要承受高压、重载或严酷工作条件的机械零件。不锈钢的强度和硬度使其能够抵抗变形和损坏，保持稳定的性能。',
        '应用要求：根据最终产品的要求来选择材料非常重要。考虑到强度、耐腐蚀性、重量和其他性能要求，选择适合的材料以确保产品的质量和功能。',
        '成本：一般情况下，铝合金的成本相对较低，而不锈钢的成本较高。如果您在机加工项目中对成本敏感，铝合金可能是更经济实惠的选择。',
      ]
    },
    {
      title:'铜和黄铜',
      content:'铝黄铜排加工工艺是将铝和黄铜按一定比例混合后通过熔炼、铸造、轧制和加工等工艺制成的一种特殊合金材料。下面我们来介绍一下铝黄铜排的加工工艺。在加工过程中，还需要进行退火、整形、锻造等工艺，以使铝黄铜排的性能得到进一步提升。同时，在加工过程中需要遵循严格的生产标准和工艺要求，确保铝黄铜排的质量和稳定性。铝黄铜排具有优良的导电性强度和耐腐蚀性，广泛应用于电力、化工、船舶、航天等领域。因此，在加工工艺中需要确保产品的性能和质量，同时还需要考虑到产品的成本和生产效率，不断优化工艺流程，提高产品的竞争力。',
      listTitle:'加工过程如下：',
      list:[
        '材料准备：首先需要准备好铝和黄铜的原料，并按一定比例进行混合。通常情况下，铝黄铜的比例为铝合金65%~70%，黄铜合金30%~35%。',
        '熔炼：将预先准备好的铝和黄铜原料放入熔炉中进行熔炼，通过高温熔炼将两种原料充分混合，形成液态合金。',
        '铸造：将熔融的铝黄铜合金倒入合金模具中进行铸造，通过冷却固化形成所需形状的铸件。',
        '轧制：铸造成型的铝黄铜合金需要经过轧制工艺，将其加工成所需厚度和规格的板材或条材。',
        '加工：将轧制后的铝黄铜合金进行下料、成型、冷拔、拉伸、焊接等加工工艺，制成所需的铝黄铜排产品。'
      ]
    },
    {
      title:'钛',
      content:'钛是一种通常用作合金元素的金属，它在铝制品中往往作为添加元素使用。钛的添加使铝制品的组织结构更加致密，可以明显提高其硬度和刚性。综上所述，钛在铝制品中是一种非常重要的添加元素，其作用主要是强化铝材的性能和提高其耐腐蚀性和机械强度，具有多重优点。',
      listTitle:'具体来说，钛在铝合金中的主要作用包括以下几个方面:',
      list:[
        '强化铝的性能：将钛添加到铝合金中可以显著提高它的强度和硬度，从而提高其耐用性和承载能力。据研究，铝合金中添加约4%的钛可以使其强度提高近30%。',
        '提高耐腐蚀性：铝合金经常被用于航空航天等领域，需要具有良好的耐腐蚀性。钛的强氧化性可以增加铝合金的抗腐蚀性，延长其使用寿命。',
        '优化铝的加工性能：在铝合金的制造过程中，钛可以调节合金的晶粒结构，使其具有更好的加工性能，从而便于后续的加工和成形。',
      ]
    },
    {
      title:'铝聚合物',
      content:'铝聚合物是一类化合物，其主要成分为铝和有机物质。在塑料加工中，铝聚合物被广泛用于增强塑料的性能。铝聚合物作为一种重要的塑料添加剂，其应用领域广阔。铝聚合物能够提高塑料的硬度、耐热性、防火性等多重性能，广泛应用于汽车、家电、医疗器械等领域，为产品的性能和安全性带来了增值效果。',
      listTitle:'铝聚合物的作用:',
      list:[
        '提高硬度：添加适量的铝聚合物飞效果显著。铝聚合物可与塑料中的基材形成化学反应，增强塑料的硬度和强度。',
        '提高耐热性：铝聚合物的加入能够提高塑料的耐热性。在高温环境下，铝聚合物可以保持塑料的稳定性，避免塑料熔化或变形.。',
        '提高防火性：铝聚合物在塑料中的存在能够提高塑料的防火性。铝聚合物可在高温下生成氧化铝保护层，防止氧气引起的燃烧反应，从而起到防火的作用。',
      ]
    }
  ]
  const Item = data.map((item,I)=>{
    if(I % 2 == 0) return <div key={I} className={styles.item}>
      <img src={`${imgUrl}/process_img/material_${I}.jpg`}/>
      <div className={styles.itemLeft}>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <p>{item.listTitle}</p>
        {item.list.map((li,i)=>{
          return <p key={i}>{i+1}.&nbsp;{li}</p>
        })}
      </div>
    </div>
    if(I % 2 != 0) return <div key={I} className={[styles.item,styles.itemReserve].join(" ")}>
      <div className={styles.itemRight}>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <p>{item.listTitle}</p>
        {item.list.map((li,i)=>{
          return <p key={i}>{i+1}.&nbsp;{li}</p>
        })}
      </div>
      <img src={`${imgUrl}/process_img/material_${I}.jpg`}/>
    </div>
  })
  return Item
}
// 机加工艺 craft start
function Craft(){
  const data =[
    '切割、精密裁剪',
    '埋弧、气保护、氩弧焊和电弧焊',
    '焊接',
    '带锯、火焰、激光、等离子和水射流',
    '横剪、纵剪、覆纸和覆膜',
    '铣削加工、磨削加工',
    '铣磨、表面研磨',
    '热处理',
    '冷轧、热轧、单张和整卷'
  ]
  const Item = data.map((item,i)=>{
    return <div key={i}>
      <img src={`${imgUrl}/process_img/craft_${i}.jpg`}/>
      <p>{item}</p>
    </div>
  })
  return <div className={styles.craftMain}>{Item}</div>
}
// 表面处理 dispose start 
function Dispose(){
  const data =[
    {
      title:'阳极氧化',
      content:'II型阳极氧化提高了耐腐蚀性，可用作油漆和其他饰面表面处理的基础。不同材料可能产生的阳极氧化效果会有所区别',
      list:[
        '使用染料来影响零件的表面颜色',
        'II型涂层容易磨损，并且在长时间直射阳光下可能会漂白或褪色',
        '可以定制颜色(RAL)'
      ]
    },
    {
      title:'硬质阳极氧化(III型)',
      content:'硬质阳极氧化(III型)层可产生更厚的标准阳极氧化层，使其更耐用、更耐磨。可用作油漆或其他饰面的打底。',
      list:[
        '由于厚度原因，颜色会显得稍暗',
        '可以定制颜色(RAL)',
      ]
    },
    {
      title:'喷砂',
      content:'喷砂是一种表面处理技术，涉及使用高速磨料颗粒去除污染物并使表面粗糙化。',
      list:[
        '通常用于清洁、纹理化或为喷漆等工艺准备塑料',
        '哑光表面',
        '增强油漆附着力'
      ]
    },
    {
      title:'电解抛光',
      content:'电解抛光是指一种电化学过程，可清洁钢部件，从而减少腐蚀并通过使金属更亮来改善外观。但电解抛光在提高产品表面光洁度的同时可能会对产品尺寸有一定影响(减少)。',
      list:[
        '减少腐蚀。外观更明亮',
        '可以定制颜色(RAL)'
      ]
    },
    {
      title:'钝化',
      content:'这是一种无色涂层，通过去除表面毛刺，提高了对200系列、300系列和时效硬化耐腐蚀不锈钢的耐腐蚀性',
      list:[
        '尺寸变化：钝化处理可能导致金属尺寸的微小变化',
        '表面粗糙度：钝化处理可能导致表面略微增加粗糙度。',
        '不适用于所有金属：钝化处理通常用于钢铁和不锈钢等金属，对于一些其他类型的金属可能并不适用。'
      ]
    },
    {
      title:'滚筒去毛刺',
      content:'通过滚筒机来去除零件表面的锋利边缘和毛刺。锋利的边缘可能会变钝。不建议对具有易碎特征的零件进行滚筒去毛刺表面处理。',
      list:[
        '触感光滑',
        '丝缎般的哑光外观'
      ]
    },
    {
      title:'熏蒸',
      content:'熏蒸是指将打印部件浸泡在汽化的化学溶剂中，以去除毛刺。',
      list:[
        '可以软化锋利的边缘',
        '不适合小特征和薄壁',
        '触感光滑',
        '外观光泽'
      ]
    },
    {
      title:'发黑(黑氧化)',
      content:'黑色氧化物是一种铁质材料(例如钢和不锈钢)转化的涂层，可使材料的表面变黑。',
      list:[
        '可用于减少反射和眩光',
        '具有一定耐腐蚀性同时不会影响零件尺寸'
      ]
    }
  ]
  const Item = data.map((item,I)=>{
    return <div key={I}>
      <img src={`${imgUrl}/process_img/dispose_${I}.jpg`} alt={item.title}/>
      <h4>{item.title}</h4>
      <p>{item.content}</p>
      {item.list.map((li,i)=>{
        return <p key={i}>&bull;&nbsp;{li}</p>
      })}
    </div>
  })
  return <div className={styles.disposeMain}>{Item}</div>
}
// 加工优势 adv start
function Advantage(){
  const data = {
    first:[
      {
        title:'多',
        sup:'多款式',
        intro:'新款产品 库存充足'
      },{
        title:'快',
        sup:'快生产',
        intro:'打样迅速 快速出货'
      },{
        title:'高',
        sup:'高质量',
        intro:'出货合格率在99%'
      },{
        title:'好',
        sup:'好服务',
        intro:'专业的售前售后服务'
      },{
        title:'价',
        sup:'低价格',
        intro:'厂家直供 价格优惠'
      }
    ],
    second:[
      {
        span:'外观件评审与识别',
        p:'零件图审查识别关键点'
      },{
        span:'评估与优化',
        p:'制造的设计评估与优化'
      },{
        span:'重点尺寸识别',
        p:'基准.装配.重点尺寸识别与缩小标准化'
      },{
        span:'样品问题点关闭',
        p:'针对评估及打样问题点总结修订图面'
      },{
        span:'小批量问题点关闭',
        p:'针对量产问题总结'
      },{
        span:'测量系统分析',
        p:'按仪校计划执行'
      },{
        span:'可靠性',
        p:'按客户要求执行'
      },{
        span:'FQC及OQC',
        p:'按AQL及标准与要求执行'
      },{
        span:'SPC/CPK',
        p:'管控特殊工艺的过程分析/对重点尺寸执行'
      },{
        span:'首检/巡检',
        p:'按图执行,检查验证关闭，问题点/按工程与标准执行'
      }
    ]
  }
  const Card = data.first.map((item,i)=>{
    return <div key={i} className={styles.card}>
      <div className={styles.shape}>{item.title}</div>
      <p style={{fontSize:'.225rem'}}>{item.sup}</p>
      <p style={{marginBottom:'.0625rem'}}>{item.intro}</p>
    </div>
  })
  const Flow = data.second.map((item,i)=>{
    return <div key={i} className={styles.flow}>
      <img src={`${imgUrl}/process_img/adv_${i}.jpg`}/>
      <span style={{display:'block'}}>{item.span}</span>
      <p>{item.p}</p>
    </div>
  })
  return <div>
    <div className={styles.advCard}>{Card}</div>
    <p className={styles.flowTitle} style={{color:'#0d08ba'}}><span style={{color:'#bb030f'}}>为客户创造价值，</span>我们全新投入，精益求精</p>
    <p className={styles.grayPE}>TO CREATE VALUE FOR CUSTOMERS, WE NEW INPUT, EXCELLENC!</p>
    <p className={styles.grayP}>铝合金cnc加工精细化生产标准，为您提供高达99.8%合格率的精密零件</p>
    <div className={styles.advFlow}>{Flow}</div>
  </div>
}
// 设备实力 facility start
function Facility(){
  const data = {
    intro:'2016年6月，江苏扬东铝业集团实现了铝材品种齐全与加工一体化享营全国的现代综合性全铝服务企业，拥有“裁剪、切割、表面处理、成型和机加工”5大加工平台。2017年成为国内领先集铝批发零售、原材料加工、国际贸易和技术咨询为一体的大型多元化企业。二十几年的风风雨雨，江苏扬东创造了骄人的业绩，令人瞩目也令人自豪。在新世纪的历史进程中，扬东始终坚持“团结、拼搏、务实、开拓”的精神，以“质量求生存，开拓求发展”的经营理念，我们倡导“以客户的目标为追求，以客户的需求为基础”站在客户的角度思考，定尺交货，为客户降低成本。不断进取，不断完善，拥有21年专业销售经验与优秀团队，是遍布亚洲的知名供应商和国内实力、规格齐全的现货平台，从而使我们的产品更加精益求精，产品铺盖亚洲各地及国内大小型市场。'
  }
  return <div className={styles.facilityMain}>
    <p style={{fontSize:'.125rem',marginBottom:'.1875rem'}}>{data.intro}</p>
    <div className={styles.facilityGrid1}>
      <div>
        <img src={`${imgUrl}/process_img/facility_0.jpg`} alt='设备实力'/>
        <span>五轴加工中心CNC</span>
      </div>
      <div>
        <img src={`${imgUrl}/process_img/facility_2.jpg`} alt='设备实力'/>
        <span>原装无线探针，在线检测</span>
      </div>
      <div>
        <img src={`${imgUrl}/process_img/facility_1.jpg`} alt='设备实力'/>
        <span>进口德国镗刀</span>
      </div>
    </div>
    <div className={styles.facilityGrid2}>
      <div>
        <img src={`${imgUrl}/process_img/facility_3.jpg`} alt='设备实力'/>
        <span>三丰高度计</span>
      </div>
      <div>
        <img src={`${imgUrl}/process_img/facility_4.jpg`} alt='设备实力'/>
        <span>粗糙度测试仪</span>
      </div>
      <div>
        <img src={`${imgUrl}/process_img/facility_5.jpg`} alt='设备实力'/>
        <span>三丰卡尺</span>
      </div>
      <div>
        <img src={`${imgUrl}/process_img/facility_6.jpg`} alt='设备实力'/>
        <span>三丰千分尺</span>
      </div>
    </div>
    <p className={styles.facilityTip}>因加工导致出现的质量问题，我们免费返修或重新加工，并承担由此产生的所有运费</p>
  </div>
}

export default function Process(){
  const [windowSize,setWindowSize]  = useState(getWindowSize())
  function getWindowSize(){
    const {innerWidth} = window
    return {innerWidth}
  }
  useEffect(() => {
      // 处理屏幕宽度变化
    function handleWindowResize(){
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize',handleWindowResize)
    return ()=>{
      window.removeEventListener('resize',handleWindowResize)
    }
  },[])
  const pcImgURL = 'https://www.yangdong.co:8443/yangdong_web/banner/pc/process_banner.jpg'
  const mobileImgURL= 'https://www.yangdong.co:8443/yangdong_web/banner/mobile/process_banner.jpg'
  return(
    <main>
      <div className={styles.banner}>
        <img src={windowSize.innerWidth >= 750 ? pcImgURL : mobileImgURL} alt='产品中心'/>
      </div>
      <div className={styles.processMain}>
        <div className={styles.rightTips} style={{display:windowSize.innerWidth >559 ? 'block' : 'none'}}>
            <p style={{fontSize:'.125rem'}}>Machining Center</p>
            <p style={{fontSize:'.1375rem',fontWeight:'bold'}}>加工中心</p>
        </div>
        <p className={styles.anchorBox}>
          <a href='#process01'>加工材料</a>
          <a href='#process02'>机加工艺</a>
          <a href='#process03'>表面处理</a>
          <a href='#process04'>加工优势</a>
          <a href='#process05'>设备实力</a>
        </p>
        <div className='upwards' id="process01"></div>
        <section className={styles.material}><Material/></section>
        <div className='upwards' id="process02"></div>
        <section className={styles.craft}>
          <Title mainhead={['机加','工艺']} subhead={'规格多样 按需定制 即时报价'}/>
          <Craft/>
        </section>
        <div className='upwards' id="process03"></div>
        <section className={styles.dispose}>
          <Title mainhead={['表面','处理']} subhead={'为您量身设计非标解决方案'}/>
          <Dispose/>
        </section>
        <div className='upwards' id="process04"></div>
        <section className={styles.adv}>
          <Title mainhead={['加工','优势']} subhead={'优质的产品、优良的服务、低廉的价格'}/>
          <Advantage/>
        </section>
      </div>
      <div className='upwards' id="process05"></div>
        <section className={styles.facility}>
          <Title mainhead={['设备','实力']} subhead={'尖端科技，引领行业前沿实力。'}/>
          <Facility/>
        </section>
    </main>
  )
}