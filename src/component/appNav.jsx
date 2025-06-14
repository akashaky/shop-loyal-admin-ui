// src/component/layout/Layout.jsx
import { useState, useCallback } from "react";
import { Frame, Navigation } from "@shopify/polaris";
import Navbar from "./navbar";
import {
	HomeIcon,
	ShareIcon,
	GiftCardFilledIcon,
	ChartPopularIcon,
	SettingsFilledIcon,
} from "@shopify/polaris-icons";

function Layout({ children }) {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

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
		<Navigation location="/">
			<Navigation.Section
			      items={[
					{
					  label: "Home",
					  icon: HomeIcon,
					  url: "/",
					},
					{
					  label: "Referrals",
					  icon: ShareIcon,
					  url: "/referrals",
					},
					{
					  label: "Rewards",
					  icon: ChartPopularIcon,
					  url: "/rewards",
					},
					{
					  label: "Customers",
					  icon: GiftCardFilledIcon,
					  url: "/customers",
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
