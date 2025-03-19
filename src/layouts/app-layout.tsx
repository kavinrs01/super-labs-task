import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./header";
const { Content, Header } = Layout;
const AppLayout: React.FC = () => {
  return (
    <Layout className={"h-dvh overflow-x-hidden overflow-y-auto"}>
      <Header className=" bg-white  min-h-[200px] p-0 ">
        <AppHeader />
      </Header>
      <Content className={"h-dvh bg-white"}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export { AppLayout };
