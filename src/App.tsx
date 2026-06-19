import { ConfigProvider } from "antd";
import { AxiosComponent } from "./hooks/useAxiosPrivate";
import { Router } from "./router";

function App() {
	return (
		<ConfigProvider
			theme={{
				token: {
				colorPrimary: '#52DD63',
				},
			}}
		>
			<AxiosComponent />
			<Router />
		</ConfigProvider>
	);
}

export default App
