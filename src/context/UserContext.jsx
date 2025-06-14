import { createContext, useState, useEffect, useRef } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
	const [user, setUser] = useState(null);
	const initialized = useRef(false);

	useEffect(() => {
		if (initialized.current) return;
		initialized.current = true;

		const fetchUser = async () => {
			const queryParams = new URLSearchParams(window.location.search);
			const tokenFromUrl = queryParams.get("token");
			const storedToken = localStorage.getItem("token");

			const activeToken = tokenFromUrl || storedToken;

			if (tokenFromUrl) {
				localStorage.setItem("token", tokenFromUrl);
			}

			if (!activeToken) return;

			try {
				const response = await fetch(`http://localhost:61556/api/user`, {
					headers: {
						Authorization: `Bearer ${activeToken}`,
					},
				});
				const data = await response.json();

				if (data.user) {
					setUser(data.user);
				}
			} catch (err) {
				console.error("User fetch failed", err);
				localStorage.removeItem("token");
			}
		};

		fetchUser();
	}, []);

	return (
		<UserContext.Provider value={{ user }}>
			{children}
		</UserContext.Provider>
	);
}
