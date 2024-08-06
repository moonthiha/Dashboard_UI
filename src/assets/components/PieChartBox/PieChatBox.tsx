import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
    {name:"phone", value:400 , color:"#0088FE"},
    {name:"Desktop", value:300 , color:"#00C49F"},
    {name:"Laptop",value:300, color:"#FFBB28"},
    {name:"Tablet", value:200,color:"#FF8042"},
]
export default function PieChatBox() {
  return (
    <div className="pieChartBox">
        <span className="title">Leads by source</span>

        <div className="chartInfo">
            <ResponsiveContainer width="99%" height={300} >
                <PieChart>
                    <Tooltip
                    contentStyle={{backgroundColor:"white", borderRadius:"5px"}}
                    />
                    <Pie
                        data={data}
                        // cx={120}
                        // cy={200}
                        innerRadius={"70%"}
                        outerRadius={"90%"}
                        paddingAngle={5}
                        dataKey="value"
                        >
                        {data   .map((item) => (
                            <Cell key={item.name} fill={item.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>

            <div className="text">
             {data.map((item) => (
                <div className="model" key={item.name}>
                    <div className="head">
                        <div className="dot" style={{backgroundColor:item.color}} />
                        <span className="product"> {item.name} </span>
                    </div>
                    <p className="rate"> {item.value} </p>
                </div>
                ))}
            </div>
    </div>
  )
}
