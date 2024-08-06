import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";



type Props = {
    icon:string;
    title:string;
    number:string | number;
    color:string;
    dataKey:string;
    strokeColor:string;
    percent:number;
    chartData:object[];

};

export default function ChartBox(props:Props) {
  return (
    <div className="chartBox">

        <div className="usersInfo">

            <div className="title">
                <img src={props.icon} alt="" />
                <span> {props.title} </span>
            </div>

            <p> {props.number} </p>

            <Link to={"/"} style={{color : props.color}}>
                <span className="link">View all</span>
            </Link>
        </div>

        <div className="rightSide">
            <div className="chartInfo">
                <ResponsiveContainer width="99%" height="100%">
                    <LineChart data={props.chartData}>
                        <Tooltip contentStyle={{backgroundColor:"transparent", border :"none"}} labelStyle={{display:"none"}} position={{x:10, y:60}} />
                        <Line type="monotone" dataKey={props.dataKey} stroke={props.strokeColor} strokeWidth={2} dot={false}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="text">
                <span className="percent" style={{color:props.percent < 0 ? "tomato" : "limegreen"}}> {props.percent} % </span>
                <p className="month">this month</p>
            </div>
        </div>

    </div>
  )
}
