import AppNav from "./component/layout";
import { Routes, Route } from "react-router-dom";
import Rewards from "./component/earnAndRedeem/earnAndRedeem";
import Referral from "./component/referral/referral";
import Widget from "./component/widget/widget";
import { Home } from "./component/home/home";
import Analytics from "./component/analytics/analytics";

function App() {
	return (
		<>
			<AppNav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/earn-redeem" element={<Rewards />} />
					<Route path="/referrals" element={<Referral />} />
					<Route path="/widget" element={<Widget />} />
					<Route path="/analytics" element={<Analytics />} />
				</Routes>
			</AppNav>
		</>
	);
}

export default App;
