import { Area, AreaChart,  ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./bigBoxChart.scss";


const data = [
    {name:"Sun",book:2300,clothes:2600,electronic:2900},
    {name:"Mon",book:1000,clothes:1200,electronic:1400},
    {name:"Tue",book:2000,clothes:2200,electronic:2400},
    {name:"Wed",book:1500,clothes:1700,electronic:1900},
    {name:"Thu",book:2500,clothes:2700,electronic:2900},
    {name:"Fri",book:2700,clothes:2800,electronic:2900},
    {name:"Sat",book:2000,clothes:2200,electronic:2400},
]

export default function BigBoxChart() {
  return (
    <div className="bigBoxChart">
        <span className="title">Revenue Analytics</span>

        <div className="chartInfo">
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="book" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="electronic" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}
