// component/navbar/Navbar.jsx
import { useState, useCallback, useEffect } from "react";
import { TopBar } from "@shopify/polaris";
import "./Navbar.css"; // 👈 Import custom CSS
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navbar({ onToggleMobileNav }) {
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const { user } = useContext(UserContext);

	const toggleUserMenu = useCallback(
		() => setIsUserMenuOpen((open) => !open),
		[]
	);

	const userMenuMarkup = (
		<TopBar.UserMenu
			actions={[{ items: [{ content: "Logout" }] }]}
			name={user?.firstName + " " + user?.lastName ?? ""}
			detail={user?.email}
			initials={user?.firstName[0] ?? "" + user?.lastName[0] ?? ""}
			open={isUserMenuOpen}
			onToggle={toggleUserMenu}
		/>
	);

	return (
		<div className="custom-topbar-wrapper">
			<TopBar
				showNavigationToggle
				onNavigationToggle={onToggleMobileNav}
				userMenu={userMenuMarkup}
			/>
		</div>
	);
}

export default Navbar;
