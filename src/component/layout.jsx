// src/component/layout/Layout.jsx
import { useState, useCallback } from "react";
import { Frame, Navigation } from "@shopify/polaris";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import './Navbar.css'
import {
	HomeIcon,
	ShareIcon,
	ChartPopularIcon,
	SettingsFilledIcon,
} from "@shopify/polaris-icons";

function Layout({ children }) {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const location = useLocation();

	const toggleMobileNav = useCallback(
		() => setMobileNavOpen((open) => !open),
		[]
	);

	const logo = {
		topBarSource:
			"https://shoployal.com/wp-content/uploads/2019/12/shoployal-merchant-manual-logo.png",
		url: "/",
		width: 124,
		accessibilityLabel: "Shoployal",
	};

	// 🧭 Sidebar navigation
	const navigationMarkup = (
		<Navigation location={location.pathname}>
			<Navigation.Section
			      items={[
					{
					  label: "Home",
					  icon: HomeIcon,
					  url: "/",
					  exactMatch: true
					},
					{
					  label: "Earn & Redeem",
					  icon: ChartPopularIcon,
					  url: "/earn-redeem",
					},
					{
					  label: "Referrals",
					  icon: ShareIcon,
					  url: "/referrals",
					},
					{
					  label: "Widget",
					  icon: ShareIcon,
					  url: "/widget",
					},
				  ]}
				  secondaryNavigation={[
					{
					  label: "Settings",
					  icon: SettingsFilledIcon,
					  url: "/settings",
					},
				  ]}
			
			/>
		</Navigation>
	);

	return (
		<Frame
			logo={logo}
			topBar={<Navbar onToggleMobileNav={toggleMobileNav} />}
			navigation={navigationMarkup}
			navigationOpen={mobileNavOpen}
			onNavigationDismiss={toggleMobileNav}
		>
			<div style={{ padding: "1rem" }}>
				{children || <h1>Welcome to Home</h1>}
			</div>
		</Frame>
	);
}

export default Layout;
