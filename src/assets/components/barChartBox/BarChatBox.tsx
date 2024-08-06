import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChatBox.scss";

type Props = {
    title : string,
    dataKey : string,
    color : string,
    chartData : object[],
};

export default function BarChatBox(props:Props) {
  return (
    <div className="barChatBox">
        <span> {props.title} </span>
        <div className="chartInfo">
            <ResponsiveContainer width="99%" height={150}>
                <BarChart data={props.chartData}>
                <Tooltip 
                contentStyle={{backgroundColor:"#2a3447",borderRadius:"10px"}}
                labelStyle={{display:"none"}}
                cursor={{fill:"none"}}
                />
                <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}
