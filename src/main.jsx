import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import "@shopify/polaris/build/esm/styles.css"; // Polaris styles
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import { UserProvider } from "./context/UserContext";

createRoot(document.getElementById("root")).render(
	<UserProvider>
		<AppProvider i18n={en}>
			<App />
		</AppProvider>
	</UserProvider>
);
