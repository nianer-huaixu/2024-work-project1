import { useState,useEffect } from "react"
import styles from '../styles/statistics.module.scss'
export default function Statistics() {
  const citylist =['常州','江苏','北京','上海','天津','重庆','深圳','青岛','大连','厦门',
    '江苏','江苏','江苏','江苏','江苏','江苏','江苏','江苏','江苏','江苏',
    '上海','上海','上海','上海','上海','上海',
    '武汉','郑州','济南','上海','上海','上海','上海',
    '浙江','浙江','浙江','浙江','浙江','浙江','浙江','浙江','浙江',
    '河北','石家庄','邯郸','唐山','保定','秦皇岛','邢台','张家口','承德','沧州','廊坊','衡水',
    '山西','太原','大同','朔州','阳泉','长治','晋城','忻州','吕梁','晋中','临汾','运城',
    '内蒙古自治区','呼和浩特','包头','乌海','赤峰','呼伦贝尔','通辽','乌兰察布','鄂尔多斯','巴彦淖尔',
    '辽宁','沈阳','大连','朝阳','阜新','铁岭','抚顺','本溪','辽阳','鞍山','丹东','营口','盘锦','锦州','葫芦岛',
    '吉林','长春','吉林市','白城','松原','四平','辽源','通化','白山',
    '黑龙江','哈尔滨','齐齐哈尔','牡丹江','佳木斯','七台河','大庆','黑河','伊春','鹤岗','双鸭山','鸡西','绥化',
    '江苏','南京','徐州','连云港','宿迁','淮安','盐城','无锡','南通','镇江','扬州','泰州',
    '浙江','杭州','宁波','湖州','嘉兴','舟山','绍兴','衢州','金华','台州','温州','丽水',
    '安徽','合肥','宿州','淮北','阜阳','蚌埠','淮南','滁州','马鞍山','芜湖','铜陵','安庆','黄山','六安','池州','宣城','亳州',
    '福建','福州','厦门','南平','三明','莆田','泉州','漳州','龙岩','宁德',
    '江西','南昌','九江','赣州','景德镇','鹰潭','新余','萍乡','上饶','抚州','宜春','吉安',
    '山东','济南','青岛','聊城','德州','东营','淄博','潍坊','烟台','威海','日照','临沂','枣庄','济宁','泰安','滨州','菏泽',
    '河南','郑州','开封','洛阳','平顶山','安阳','鹤壁','新乡','焦作','濮阳','许昌','漯河','三门峡','南阳','商丘','周口','驻马店','信阳',
    '湖北','武汉','十堰','襄阳','荆门','孝感','黄冈','鄂州','黄石','咸宁','荆州','宜昌','随州',
    '湖南','长沙','衡阳','张家界','常德','益阳','岳阳','株洲','湘潭','郴州','永州','邵阳','怀化',
    '广东','广州','深圳','清远','韶关','河源','梅州','潮州','汕头','揭阳','汕尾','惠州','东莞','珠海','中山','江门','佛山','肇庆','云浮','阳江','茂名','湛江',
    '广西','南宁','桂林','柳州','梧州','贵港','玉林','钦州','北海','防城港','崇左','贺州',
    '海南','海口','三亚','三沙','儋州',
    '四川','成都','广元','绵阳','达州','德阳','南充','广安','遂宁','内江','乐山','自贡','泸州','宜宾','攀枝花','巴中','资阳','眉山','雅安',
    '贵州','贵阳','六盘水','遵义','安顺','毕节','铜仁',
    '云南','昆明','曲靖','玉溪','丽江','昭通','普洱','临沧','保山',
    '陕西','西安','宝鸡','延安','铜川','渭南','咸阳','汉中','榆林','商洛','安康',
    '甘肃','兰州','天水','嘉峪关','金昌','白银','酒泉','张掖','武威','庆阳','平凉','定西','陇南',
    '青海']
  const texturelist = ['1050','6061/7075','1060','7075','6061/2A12','3003','2A12','7075','5052/3003','6061','7050/7075','7075/1060/6061','2024','2A12','2A12','2A12',
    '2A12/7075','5024','1050/1060','5052','7075','2A12','6061','5083','6061/6063/6082','7050/7075','6061/2A12','7075','7A04','7A09/2A12','6082/2A12','3A21/3003','6061','2017','1060','2A12','2024/2A12',
    '3003','5083','6061/7075','7075/2A12','5754','6061/2A12','6082','7075','3A21','6061','3003/6061','2A12','6061','6061','5052','7075','5075','5A02/7075','5A05','5A06/5083','2A12','3A21','5A02','5A06/5754','7050','7075'
  ]
  const modellist = ['铝板','铝棒','铝管','铝锻件','铝型材','铝板','铝棒','铝卷',
    '铝板/铝棒','铝板/铝棒/铝锻件','铝棒/铝管','铝管/铝板/铝棒','铝板/铝卷',
    '铝板/铝卷','铝板/铝管/铝锻件','铝棒/铝型材','铝管/铝型材/铝棒','铝板/铝棒',
    '铝棒/铝卷','铝板/铝锻件','铝管/铝型材','铝板/铝型材/铝棒','铝型材/铝棒',
    '铝板','铝锻件','铝棒','铝板/铝棒','铝棒/铝卷'
  ]
  const suffixlist = ['有限公司','研究院','化工','医疗','科技','建筑','波压','工业','化工','有限公司','集团','设备','交通','机械','建材','机械','汽车','船舶','医疗','电子','制造','远洋']
  //
  const [tableList,setList] = useState([])
  function generateList(){
    let arr = []
    for(let i =0;i<50;i++){
      arr.push({texture:texturelist[Math.floor(Math.random()*texturelist.length-1)],
        model:modellist[Math.floor(Math.random()*modellist.length-1)],
        amount:Math.floor(Math.random()*(1500 - 120 + 1)+ 120),
        company:citylist[Math.floor(Math.random()*citylist.length-1)]+'****'+suffixlist[Math.floor(Math.random()*suffixlist.length-1)]})
    }
    Storage.prototype.setCanExpireLocal('list', JSON.stringify(arr), 1);
    setList(arr)
    return arr;
  }
  const date = new Date()
  function fun_date(aa){
    var date1 = new Date();
    var date2 = new Date(date1);
    date2.setDate(date1.getDate()+aa);
    var time2 = date2.getFullYear()+"/"+(date2.getMonth()+1)+"/"+date2.getDate();
    return time2;
  }
  const time1 = fun_date(-2)
  const time2 = fun_date(-1)
// 存储本地，添加时间戳
// 接收三个参数：键、值、有效天数
Storage.prototype.setCanExpireLocal = (key, value, expire) => {
  // 判断传入的有效期是否为数值或有效
  // isNaN是js的内置函数，用于判断一个值是否为NaN（非数值），
  // 非数值返回true，数值返回false
  // 还可以限制一下有效期为整数，这里就不做了
  if (isNaN(expire) || expire < 1) {
    console.error('有效期应为一个有效数值');
    return;
  }
  // 86_400_000一天时间的毫秒数，_是数值分隔符
  const time = expire * 86_400_000;
  const obj = {
    data: value, // 存储值
    time: Date.now(), // 存值时间戳
    expire: time // 过期时间
  };
  localStorage.setItem(key, JSON.stringify(obj));
  };
  // 接收一个参数，存值的键
  Storage.prototype.getCanExpireLocal = key => {
    let val = localStorage.getItem(key);
    // 如果没有值就直接返回invalid无效提示
    if (!val) return 'invalid';
    // 存的时候转换成了字符串，现在转回来
    val = JSON.parse(val);
    // 存值时间戳 +  有效时间 = 过期时间戳
    // 如果当前时间戳大于过期时间戳说明过期了，删除值并返回提示
    if (Date.now() > val.time + val.expire) {
      localStorage.removeItem(key);
      generateList()
    }
    return val.data;
  };
  const [windowSize,setWindowSize]  = useState(getWindowSize())
  function getWindowSize(){
    const {innerWidth} = window
    return {innerWidth}
  }
  useEffect(()=>{
    if(localStorage.getItem('list')){
      let arr = JSON.parse(JSON.parse(localStorage.getItem('list')).data)
      setList(arr)
    }else{
      generateList()
    }
    // 处理屏幕宽度变化
    function handleWindowResize(){
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize',handleWindowResize)
    return ()=>{
      window.removeEventListener('resize',handleWindowResize)
    }
  },[])
const pcImgURL = 'https://www.yangdong.co:443/yangdong_web/banner/pc/sell_banner.webp'
const mobileImgURL= 'https://www.yangdong.co:443/yangdong_web/banner/mobile/sell_banner.webp'
  return(
    <main>
      <div className={styles.banner}><img src={windowSize.innerWidth >= 750 ? pcImgURL : mobileImgURL}/></div>
      <div className={styles.tableBox}>
      <div className={styles.sellTop}><span>销售中心-万吨铝材-库存促销-网上超市-原厂质保</span></div>
        <table className={styles.sellTable}>
          <thead>
            <tr>
              <th>序号</th>
              <th>更新日期</th>
              <th>采购材质</th>
              <th>规格型号</th>
              <th>采购数量（KG）</th>
              <th>采购单位</th>
            </tr>
          </thead>
          <tbody>
            {tableList.map((item,i)=>{
            return <tr key={i} className={i % 2 != 0 ? styles.oddTb:''}>
              <td>{i+1}</td>
              <td>{i<25 ? time1:time2}</td>
              <td>{item.texture ? item.texture : '1060'}</td>
              <td>{item.model ? item.model : '铝板'}</td>
              <td>{item.amount}</td>
              <td>{item.company.replace('undefined','有限公司')}</td>
            </tr>
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}