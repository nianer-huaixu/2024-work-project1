const data = [
    {category:'规格分类',
        first_classify:[
            {type:'铝板',second_classify:[
                {serise:'1系',product:['1050','1060']},
                {serise:'2系',product:['2017','2024','2A12']},
                {serise:'3系',product:['3003','3A21']},
                {serise:'5系',product:['5052','5083','5754','5A02','5A05','5A06']},
                {serise:'6系',product:['6061','6063','6082']},
                {serise:'7系',product:['7050','7075','7A04','7A09']}
            ]},
            {type:'铝棒',second_classify:[
                {serise:'1系',product:['1050','1060']},
                {serise:'2系',product:['2017','2024','2A12']},
                {serise:'3系',product:['3003','3A21']},
                {serise:'5系',product:['5052','5083','5754','5A02','5A05','5A06']},
                {serise:'6系',product:['6061','6063','6082']},
                {serise:'7系',product:['7050','7075','7A04','7A09']}
            ]},
            {type:'铝卷',second_classify:[
                {serise:'1系',product:['1050','1060']},
                {serise:'2系',product:['2024','2A12']},
                {serise:'3系',product:['3003','3A21']},
                {serise:'5系',product:['5052','5083','5754','5A02']},
                {serise:'6系',product:['6061','6063']},
                {serise:'7系',product:['7075']}
            ]},
            {type:'铝管',second_classify:[
                {serise:'1系',product:['1050','1060']},
                {serise:'2系',product:['2017','2024','2A12']},
                {serise:'3系',product:['3003','3A21']},
                {serise:'5系',product:['5052','5083','5754','5A02','5A05','5A06']},
                {serise:'6系',product:['6061','6063','6082']},
                {serise:'7系',product:['7050','7075','7A04','7A09']}
            ]},
            {type:'铝型材',second_classify:[
                {serise:'1系',product:['1050','1060']},
                {serise:'2系',product:['2017','2024','2A12']},
                {serise:'3系',product:['3003','3A21']},
                {serise:'5系',product:['5052','5083','5754','5A02','5A05','5A06']},
                {serise:'6系',product:['6061','6063','6082']},
                {serise:'7系',product:['7050','7075','7A04','7A09']}
            ]},
            {type:'铝锻件',second_classify:[
                {serise:'1系',product:['1050','1060']},
                {serise:'2系',product:['2017','2024','2A12']},
                {serise:'3系',product:['3003','3A21']},
                {serise:'5系',product:['5052','5083','5754','5A02','5A05','5A06']},
                {serise:'6系',product:['6061','6063','6082']},
                {serise:'7系',product:['7050','7075','7A04','7A09']}
            ]},
            {type:'进口铝板',second_classify:[
                {serise:'2系',product:['2024','2A12']},
                {serise:'5系',product:['5052','5083','5754']},
                {serise:'6系',product:['6061','6063','6082']},
                {serise:'7系',product:['7050','7075']}
            ]},
            {type:'进口铝棒',second_classify:[
                {serise:'2系',product:['2024','2A12']},
                {serise:'5系',product:['5052','5083']},
                {serise:'6系',product:['6061','6063','6082']},
                {serise:'7系',product:['7075']}
            ]}
        ]
    },
    {category:'材质分类',first_classify:[
        {type:'1系',second_classify:[
            {serise:'1050',product:['1050铝板','1050铝棒','1050铝卷','1050铝管','1050铝型材','1050铝锻件']},
            {serise:'1060',product:['1060铝板','1060铝棒','1060铝卷','1060铝管','1060铝型材','1060铝锻件']}
        ]},
        {type:'2系',second_classify:[
            {serise:'2A12',product:['2A12铝板','2A12铝棒','2A12铝卷','2A12铝管','2A12铝型材','2A12铝锻件']},
            {serise:'2017',product:['2017铝管','2017铝型材','2017铝锻件']},
            {serise:'2024',product:['2024铝板','2024铝棒','2024铝卷','2024铝管','2024铝型材','2024铝锻件']}
        ]},
        {type:'3系',second_classify:[
            {serise:'3003',product:['3003铝板','3003铝棒','3003铝卷','3003铝管','3003铝型材','3003铝锻件']},
            {serise:'3A21',product:['3A21铝板','3A21铝棒','3A21铝卷','3A21铝管','3A21铝型材','3A21铝锻件']}
        ]},
        {type:'5系',second_classify:[
            {serise:'5052',product:['5052铝板','5052铝棒','5052铝卷','5052铝管  ','5052铝型材','5052铝锻件']},
            {serise:'5083',product:['5083铝板','5083铝棒','5083铝卷','5083铝管','5083铝型材','5083铝锻件']},
            {serise:'5754',product:['5754铝板','5754铝棒','5754铝卷','5754铝管','5754铝型材','5754铝锻件']},
            {serise:'5A02',product:['5A02铝板','5A02铝棒','5A02铝卷','5A02铝管','5A02铝型材','5A02铝锻件']},
            {serise:'5A05',product:['5A05铝板','5A05铝棒','5A05铝管','5A05铝型材','5A05铝锻件']},
            {serise:'5A06',product:['5A06铝板','5A06铝棒','5A06铝管','5A06铝型材','5A06铝锻件']}
        ]},
        {type:'6系',second_classify:[
            {serise:'6061',product:['6061铝板','6061铝棒','6061铝卷','6061铝管','6061铝型材','6061铝锻件']},
            {serise:'6063',product:['6063铝板','6063铝棒','6063铝卷','6063铝管','6063铝型材','6063铝锻件']},
            {serise:'6082',product:['6082铝板','6082铝棒','6082铝管','6082铝型材','6082铝锻件']}
        ]},
        {type:'7系',second_classify:[
            {serise:'7050',product:['7050铝板','7050铝棒','7050铝管','7050铝型材','7050铝锻件']},
            {serise:'7075',product:['7075铝板','7075铝棒','7075铝卷','7075铝管','7075铝型材','7075铝锻件']},
            {serise:'7A04',product:['7A04铝板','7A04铝棒','7A04铝管','7A04铝型材','7A04铝锻件']},
            {serise:'7A09',product:['7A09铝板','7A09铝棒','7A09铝管','7A09铝型材','7A09铝锻件']}
        ]},
    ]},
    {category:'行业应用',first_classify:[
        {type:'航空航天',second_classify:[
            {serise:'2024',product:['2024铝板','2024铝棒','2024铝卷','2024铝管','2024铝型材','2024铝锻件']},
            {serise:'7050',product:['7050铝板','7050铝棒','7050铝管','7050铝型材','7050铝锻件']},
            {serise:'7075',product:['7075铝板','7075铝棒','7075铝卷','7075铝管','7075铝型材','7075铝锻件']}
        ]},
        {type:'轨道交通',second_classify:[
            {serise:'5052',product:['5052铝板','5052铝棒','5052铝卷','5052铝管','5052铝型材','5052铝锻件']},
            {serise:'5083',product:['5083铝板','5083铝棒','5083铝卷','5083铝管','5083铝型材','5083铝锻件']},
            {serise:'5754',product:['5754铝板','5754铝棒','5754铝卷','5754铝管','5754铝型材','5754铝锻件']},
            {serise:'5A06',product:['5A06铝板','5A06铝棒','5A06铝管','5A06铝型材','5A06铝锻件']},
            {serise:'6061',product:['6061铝板','6061铝棒','6061铝卷','6061铝管','6061铝型材','6061铝锻件']},
            {serise:'6082',product:['6082铝板','6082铝棒','6082铝管','6082铝型材','6082铝锻件']}
        ]},
        {type:'汽车制造',second_classify:[
            {serise:'5052',product:['5052铝板','5052铝棒','5052铝卷','5052铝管','5052铝型材','5052铝锻件']},
            {serise:'5083',product:['5083铝板','5083铝棒','5083铝卷','5083铝管','5083铝型材','5083铝锻件']},
            {serise:'5754',product:['5754铝板','5754铝棒','5754铝卷','5754铝管','5754铝型材','5754铝锻件']},
            {serise:'5A06',product:['5A06铝板','5A06铝棒','5A06铝管','5A06铝型材','5A06铝锻件']},
            {serise:'6061',product:['6061铝板','6061铝棒','6061铝卷','6061铝管','6061铝型材','6061铝锻件']},
            {serise:'6082',product:['6082铝板','6082铝棒','6082铝管','6082铝型材','6082铝锻件']}
        ]},
        {type:'船舶运输',second_classify:[
            {serise:'5052',product:['5052铝板','5052铝棒','5052铝卷','5052铝管','5052铝型材','5052铝锻件']},
            {serise:'5083',product:['5083铝板','5083铝棒','5083铝卷','5083铝管','5083铝型材','5083铝锻件']},
            {serise:'5754',product:['5754铝板','5754铝棒','5754铝卷','5754铝管','5754铝型材','5754铝锻件']},
            {serise:'6082',product:['6082铝板','6082铝棒','6082铝管','6082铝型材','6082铝锻件']}
        ]},
        {type:'消费电子',second_classify:[
            {serise:'2024',product:['2024铝板','2024铝棒','2024铝卷','2024铝管','2024铝型材','2024铝锻件']},
            {serise:'2A12',product:['2A12铝板','2A12铝棒','2A12铝卷','2A12铝管','2A12铝型材','2A12铝锻件']},
            {serise:'5052',product:['5052铝板','5052铝棒','5052铝卷','5052铝管','5052铝型材','5052铝锻件']},
            {serise:'5754',product:['5754铝板','5754铝棒','5754铝卷','5754铝管','5754铝型材','5754铝锻件']},
            {serise:'6061',product:['6061铝板','6061铝棒','6061铝卷','6061铝管','6061铝型材','6061铝锻件']},
            {serise:'7075',product:['7075铝板','7075铝棒','7075铝卷','7075铝管','7075铝型材','7075铝锻件']}
        ]},
        {type:'医疗设备',second_classify:[
            {serise:'5052',product:['5052铝板','5052铝棒','5052铝卷','5052铝管','5052铝型材','5052铝锻件']},
            {serise:'5083',product:['5083铝板','5083铝棒','5083铝卷','5083铝管','5083铝型材','5083铝锻件']},
            {serise:'5754',product:['5754铝板','5754铝棒','5754铝卷','5754铝管','5754铝型材','5754铝锻件']},
            {serise:'5A06',product:['5A06铝板','5A06铝棒','5A06铝管','5A06铝型材','5A06铝锻件']},
            {serise:'6061',product:['6061铝板','6061铝棒','6061铝卷','6061铝管','6061铝型材','6061铝锻件']},
            {serise:'6082',product:['6082铝板','6082铝棒','6082铝管','6082铝型材','6082铝锻件']}
        ]},
        {type:'化工容器',second_classify:[
            {serise:'5052',product:['5052铝板','5052铝棒','5052铝卷','5052铝管','5052铝型材','5052铝锻件']},
            {serise:'5083',product:['5083铝板','5083铝棒','5083铝卷','5083铝管','5083铝型材','5083铝锻件']}
        ]},
        {type:'工业模具',second_classify:[
            {serise:'2024',product:['2024铝板','2024铝棒','2024铝卷','2024铝管','2024铝型材','2024铝锻件']},
            {serise:'2A12',product:['2A12铝板','2A12铝棒','2A12铝卷','2A12铝管','2A12铝型材','2A12铝锻件']},
            {serise:'6061',product:['6061铝板','6061铝棒','6061铝卷','6061铝管','6061铝型材','6061铝锻件']},
            {serise:'7075',product:['7075铝板','7075铝棒','7075铝卷','7075铝管','7075铝型材','7075铝锻件']}
        ]},
        {type:'机械制造',second_classify:[
            {serise:'2024',product:['2024铝板','2024铝棒','2024铝卷','2024铝管','2024铝型材','2024铝锻件']},
            {serise:'2A12',product:['2A12铝板','2A12铝棒','2A12铝卷','2A12铝管','2A12铝型材','2A12铝锻件']},
            {serise:'5052',product:['5052铝板','5052铝棒','5052铝卷','5052铝管','5052铝型材','5052铝锻件']},
            {serise:'5083',product:['5083铝板','5083铝棒','5083铝卷','5083铝管','5083铝型材','5083铝锻件']},
            {serise:'5754',product:['5754铝板','5754铝棒','5754铝卷','5754铝管','5754铝型材','5754铝锻件']},
            {serise:'6061',product:['6061铝板','6061铝棒','6061铝卷','6061铝管','6061铝型材','6061铝锻件']},
            {serise:'7075',product:['7075铝板','7075铝棒','7075铝卷','7075铝管','7075铝型材','7075铝锻件']}
        ]},
        {type:'建筑建材',second_classify:[
            {serise:'1050',product:['1050铝板','1050铝棒','1050铝卷','1050铝管','1050铝型材','1050铝锻件']},
            {serise:'1060',product:['1060铝板','1060铝棒','1060铝卷','1060铝管','1060铝型材','1060铝锻件']},
            {serise:'3003',product:['3003铝板','3003铝棒','3003铝卷','3003铝管','3003铝型材','3003铝锻件']},
            {serise:'5052',product:['5052铝板','5052铝棒','5052铝卷','5052铝管','5052铝型材','5052铝锻件']},
            {serise:'5083',product:['5083铝板','5083铝棒','5083铝卷','5083铝管','5083铝型材','5083铝锻件']},
            {serise:'5754',product:['5754铝板','5754铝棒','5754铝卷','5754铝管','5754铝型材','5754铝锻件']},
            {serise:'6061',product:['6061铝板','6061铝棒','6061铝卷','6061铝管','6061铝型材','6061铝锻件']}
        ]} 
    ]}
]
export default function handler(req,res){
    res.status(200).json(data)
}