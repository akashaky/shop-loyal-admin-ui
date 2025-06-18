// components/PointsEngagementChart.jsx
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const generateLast14DaysData = () => {
	const now = new Date();
	const data = [];

	for (let i = 13; i >= 0; i--) {
		const date = new Date(now);
		date.setDate(now.getDate() - i);
		const timestamp = Date.UTC(
			date.getFullYear(),
			date.getMonth(),
			date.getDate()
		);

		data.push({
			timestamp,
			earned: Math.floor(Math.random() * 200 + 100),
			redeemed: Math.floor(Math.random() * 100 + 50),
			transactions: Math.floor(Math.random() * 250 + 120),
		});
	}

	return data;
};

const PointsEngagementChart = () => {
	return (
		<>
			<br />
			<br />
			{GraphData()}
		</>
	);
};

function GraphData() {
	const chartData = generateLast14DaysData();

	const options = {
    chart:{
      type: 'line',
      height: "388px"
    },
		title: {
			text: null,
		},
		xAxis: {
			type: "datetime",
			title: { text: "Date" },
		},
		yAxis: {
			title: { text: "Points" },
		},
		tooltip: {
			shared: true,
			crosshairs: true,
			xDateFormat: "%b %e",
		},
		credits: {
			enabled: false,
		},
		series: [
			{
				name: "Points Earned",
				data: chartData.map((d) => [d.timestamp, d.earned]),
				color: "#007BFF",
			},
			{
				name: "Points Redeemed",
				data: chartData.map((d) => [d.timestamp, d.redeemed]),
				color: "#28A745",
			},
			{
				name: "Points Transactions",
				data: chartData.map((d) => [d.timestamp, d.transactions]),
				color: "#FF5733",
			},
		],
	};

	return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default PointsEngagementChart;
