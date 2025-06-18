import AppNav from "./component/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/home";
import Rewards from "./component/earnAndRedeem/earnAndRedeem";
import Referral from "./component/referral/referral";
import Widget from "./component/widget/widget";

function App() {
	return (
		<>
			<AppNav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/earn-redeem" element={<Rewards />} />
					<Route path="/referrals" element={<Referral />} />
					<Route path="/widget" element={<Widget />} />
				</Routes>
			</AppNav>
		</>
	);
}

export default App;
