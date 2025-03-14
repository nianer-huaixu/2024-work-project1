import styles from '@/styles/product.module.scss'
import Image from 'next/image'

import certificate from "@/img/product/detail/certificate.png"
import company1 from "@/img/product/detail/company1.png"
import company2 from "@/img/product/detail/company2.png"
import company3 from "@/img/product/detail/company3.png"
import company4 from "@/img/product/detail/company4.png"

export default function productCom(){
    const list = [
        {text:'质真价优',intro:'质量赢得客户，信誉创造价值'},
        {text:'技术支持',intro:'专业的技术人才支持'},
        {text:'工作团队',intro:'高效率的工作团队'},
        {text:'品牌优势',intro:'全过程质量监控多方位检测'},
        {text:'服务优势',intro:'完善的生产流水线充足备货'},
    ]
    const List = list.map((item,i)=>{
        return <div key={i}>
            <div className={styles.iconWrap}></div>
            <b>{item.text}</b>
            <p>{item.intro}</p>
        </div>
    })
    const strength = [
        {img:company1,title:'实力雄厚 设备先进',intro:'20年行业经验，打造高标准生产服务商',
            introList:[
                '◇  技术积累15年，拥有稳定的 CNC 精密五金加工技术团队和5000㎡现代化生产基地，精度可达±0.005m',
                '◇  90+台先进生产设备，员工80余人，白夜班轮换工作制，使生产力得到提高。'
            ],
            stList:[
                {st:'90+',text:'先进设备'},
                {st:'80+',text:'团队成员'},
            ]
        },
        {img:company2,title:'注重品质 精尖检测',intro:'我们致力于做客户信得过的产品！',
            introList:[
                '◇  公司配备三坐标测量机和专业的质检人员，以多年的品控经验严格控制品质，为产品出具质检报告。',
                '◇  本公司通过IS0 三体系认证(IS09001质量、ISO14001环境、ISO45001职业健康)，并严格执行，确保品质。'
            ],
            stList:[
                {st:'三坐标',text:'测量机'},
                {st:'IS09001 ',text:'质量管理体系认证'},
            ]
        },
        {img:company3,title:'售后完善 快速发货 ',intro:'全方位服务 3-7天快速发货',
            introList:[
                '◇  因加工导致的质量问题，我们免费返修或重新加工，并且会承担由此产生的所有运费。',
                '◇  定制化产品，3-7天发货，7*12小时在线服务，及时、细致、周到。'
            ],
            stList:[
                {st:'3-7天',text:'快速发货'},
                {st:'7x12h',text:'全方位售后服务'},
            ]
        },
        {img:company4,title:'不断创新 创造卓越',intro:'涵盖全流程加工的一站式服务',
            introList:[
                '◇  产业链完善，一体化制造，成本与质量更可控 ；厂家自产直销，无中间环节，做到业内超高性价比。',
                '◇  售前出图、售中服务、售后追踪，一站服务到底。'
            ],
            stList:[
                {st:'全覆盖',text:'产业链'},
                {st:'精密化 ',text:'一站式服务'},
            ]
        }
    ]
    const Strength = strength.map((list,I)=>{
            // console.log(list);
        if(I === 0 || I === 2) return <div className={[styles.companyIntro,styles.companyLeft].join(' ')} key={I}>
            <Image src={list.img}  alt='img'/>
            <div className={styles.stDetail}>
                <h6>{list.title}</h6>
                <span>{list.intro}</span>
                {list.introList.map((li,i)=>{
                    return <li key={i}>{li}</li>
                })}
                <div className={styles.stDetailMin}>
                    {list.stList.map((st,i)=>{
                        return <div key={i}>
                            <b>{st.st}</b>
                            <p>{st.text}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
        if(I === 1 || I === 3) return <div className={[styles.companyIntro,styles.companyRight].join(' ')} key={I}>
            <div className={styles.stDetail}>
                <h6>{list.title}</h6>
                <span>{list.intro}</span>
                {list.introList.map((li,i)=>{
                    return <li key={i}>{li}</li>
                })}
                <div className={styles.stDetailMin}>
                    {list.stList.map((st,i)=>{
                        return <div key={i}>
                            <b>{st.st}</b>
                            <p>{st.text}</p>
                        </div>
                    })}
                </div>
            </div>
            <Image src={list.img} alt='img'/>
        </div>
    })
    return <div className={styles.companySt}>
        <div className='upwards' id='advantage'></div>
        <h5 className={styles.anchor}>产品优势 Product Advantage</h5>
        <p className={styles.grayText} style={{marginTop:'.0938rem'}}>质量、环境、职业健康安全分别通过ISO9001、ISO14001、GB/T28001管理体系认证。本产品的铅、汞、铜、六价饹的含量均符合欧盟ROHS指令2011/65/EU的要求。食品和药品包装用铝材砷≤100PPm。</p>
        <p className={styles.grayText}>Quality, Environment and Professional health & safetyManagement System have Certified as per 1s09001、 As9100、 1S014001 andGB/T28001.Content of Plumbum,Hydrargyrum,Cadmium and sewavalent chrome conformst to ROHS 2011/65/EU.Aresenic≤100PPm for food and drug packaging aluminum alloy.</p>
        <Image src={certificate} alt='证书'/>
        <div className={styles.iconList}>{List}</div>
        <div className='upwards' id='strength'></div>
        <h5 className={styles.anchor}>公司实力 Company Strength</h5>
        <div>{Strength}</div>
    </div>
}