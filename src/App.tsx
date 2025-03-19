import { App as AntdApp, ConfigProvider, theme } from "antd";
import { AppRouter } from "./app-routes/app-routes";

const { defaultAlgorithm } = theme;
const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        hashed: false,
        algorithm: defaultAlgorithm,
        cssVar: true,
        token: {
          colorPrimary: "#000",
        },
        components: {
          Button: {
            colorPrimary: "#000",
          },
          Menu: {
            colorPrimary: "#000",
          },
          Tabs: {
            colorPrimary: "#000",
          },
          Popover: {},
          Modal: {},
        },
      }}
    >
      <AntdApp>
        <AppRouter />
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
