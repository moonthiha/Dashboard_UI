
export const chartDataUsers = {
    color:"#8884db",
    icon:"./icons/user.svg",
    title:"Total users",
    number: "11.238",
    dataKey : "users",
    strokeColor:"#8884db",
    percent:45,
    chartData:[
        {name:"Sun", users:1000},
        {name:"Mon", users:600},
        {name:"Tue", users:500},
        {name:"Wed", users:700},
        {name:"Thu", users:500},
        {name:"Fri", users:600},
        {name:"Sat", users:2050},
    ]
};

export const chartDataProducrs = {
    color : "skyblue",
    icon : "./icons/productIcon.svg",
    title : "Total Products",
    number : "238",
    dataKey : "products",
    strokeColor : "skyblue",
    percent : 21,
    chartData : [
        {name:"Sun",products:400},
        {name:"Mon",products:600},
        {name:"Tue",products:500},
        {name:"Wed",products:700},
        {name:"Thu",products:400},
        {name:"Fri",products:500},
        {name:"Sat",products:450}
    ]
};

export const chartDataRevenue = {
    color: "teal",
    icon :"./icons/revenueIcon.svg",
    title : "Total Revenue",
    number : "56.432",
    dataKey : "revenue",
    strokeColor: "teal",
    percent : -12,
    chartData : [
        {name:"Mon",revenue:400},
        {name:"Mon",revenue:600},
        {name:"Tue",revenue:500},
        {name:"Wed",revenue:700},
        {name:"Thu",revenue:400},
        {name:"Fri",revenue:500},
        {name:"Sat",revenue:450}

    ]
};

export const chartDataConversion = {
    color: "gold",
    icon :"./icons/conversionIcon.svg",
    title : "Total Ratio",
    number : "2.6",
    dataKey : "ratio",
    strokeColor: "gold",
    percent : 12,
    chartData : [
        {name:"Mon",ratio:400},
        {name:"Mon",ratio:600},
        {name:"Tue",ratio:500},
        {name:"Wed",ratio:700},
        {name:"Thu",ratio:400},
        {name:"Fri",ratio:500},
        {name:"Sat",ratio:450}

    ]
};

export const BarChatDataRevenue = {
    title:"Profit Earned",
    color : "seagreen",
    dataKey : "profit",
    chartData : [
        {name:"Mon",profit:400},
        {name:"Mon",profit:600},
        {name:"Tue",profit:500},
        {name:"Wed",profit:700},
        {name:"Thu",profit:400},
        {name:"Fri",profit:500},
        {name:"Sat",profit:450}
    ]
};

export const BarChatDataVisit = {
    title:"Total Visit",
    color : "lightgray",
    dataKey : "visit",
    chartData : [
        {name:"Mon",visit:400},
        {name:"Mon",visit:600},
        {name:"Tue",visit:500},
        {name:"Wed",visit:700},
        {name:"Thu",visit:400},
        {name:"Fri",visit:500},
        {name:"Sat",visit:450}
    ]
};


export const userRows = [
    {
        id:1,
        img:"data:image/jpeg;base64,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",
        lastName:"John",
        firstName:"Doe",
        email:"john@gmail.com",
        phone:"09100100100",
        createdAt:"17.07.2024",
        verified:true,
    },

    {
        id:2,
        img:"https://i.pinimg.com/474x/6a/e8/27/6ae827fcca32bf53c2a286efeb0b145d.jpg",
        lastName:"Alice",
        firstName:"Marry",
        email:"alice@gmail.com",
        phone:"09200200200",
        createdAt:"17.07.2024",
        verified:true,
    },

    {
        id:3,
        img:"https://i.pinimg.com/236x/d6/e1/0a/d6e10a79f543530e51c36f3c421299df.jpg",
        lastName:"Da",
        firstName:"Eduardo",
        email:"edu@gmail.com",
        phone:"09300300300",
        createdAt:"17.07.2024",
        verified:true,
    },

    {
        id:4,
        img:"https://i.pinimg.com/236x/6a/fc/5c/6afc5c43a5050054d7482202e3b75239.jpg",
        lastName:"John",
        firstName:"Doe",
        email:"john@gmail.com",
        phone:"09400400400",
        createdAt:"17.07.2024",
        verified:true,
    },

    {
        id:5,
        img:"https://i.pinimg.com/474x/6a/e8/27/6ae827fcca32bf53c2a286efeb0b145d.jpg",
        lastName:"Modric",
        firstName:"Luka",
        email:"modric@gmail.com",
        phone:"09500500500",
        createdAt:"17.07.2024",
        verified:true,
    },

    {
        id:6,
        img:"https://i.pinimg.com/474x/a9/5c/17/a95c176c0ee55db735157d3deed34d1e.jpg",
        lastName:"Sakura",
        firstName:"Hana",
        email:"hana@gmail.com",
        phone:"09600600600",
        createdAt:"17.07.2024",
        verified:true,
    },

    {
        id:7,
        img:"https://i.pinimg.com/236x/35/b0/a5/35b0a52220d4a0dc3f5038d829fa820f.jpg",
        lastName:"Hayabusa",
        firstName:"sancho",
        email:"hana@gmail.com",
        phone:"09700700700",
        createdAt:"17.07.2024",
        verified:true,
    },

    
]