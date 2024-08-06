import BarChatBox from "../../components/barChartBox/BarChatBox";
import BigBoxChart from "../../components/BigBoxChart/BigBoxChart";
import ChartBox from "../../components/ChartBox/ChartBox";
import PieChatBox from "../../components/PieChartBox/PieChatBox";
import TopBox from "../../components/topBox/TopBox";
import { BarChatDataRevenue, BarChatDataVisit, chartDataConversion, chartDataProducrs, chartDataRevenue, chartDataUsers } from "../../data";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartDataUsers} />
      </div>
      <div className="box box3">
        <ChartBox {...chartDataProducrs} />
      </div>
      <div className="box box4">
        <PieChatBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartDataConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartDataRevenue} />
      </div>
      <div className="box box7">
        <BigBoxChart />
      </div>
      <div className="box box8">
        <BarChatBox {...BarChatDataRevenue} />
      </div>
      <div className="box box9">
        <BarChatBox {...BarChatDataVisit} />
      </div>
      </div>
    </div>
  )
}
