import { Router } from "./router";
import { ConfigProvider } from "antd";

function App() {
	return (
		<ConfigProvider
			theme={{
				token: {
				colorPrimary: '#52DD63',
				},
			}}
		>
			<Router />
		</ConfigProvider>
	);
}

export default App
