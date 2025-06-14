// component/navbar/Navbar.jsx
import { useState, useCallback, useEffect } from "react";
import { TopBar } from "@shopify/polaris";
import "./Navbar.css"; // 👈 Import custom CSS

function Navbar({ onToggleMobileNav }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = useCallback(
    () => setIsUserMenuOpen((open) => !open),
    []
  );

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[{ items: [{ content: "Logout" }] }]}
      name="Admin"
      detail="admin@example.com"
      initials="A"
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
