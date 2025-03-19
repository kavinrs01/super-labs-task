import { Layout } from "antd";
import { AppHeader } from "./header";
const { Content, Header } = Layout;
const AppLayout: React.FC = () => {
  return (
    <Layout className={"h-dvh"}>
      <Header className=" bg-white  min-h-[200px] p-0 ">
        <AppHeader />
      </Header>
      <Content className={"h-dvh overflow-auto"}>
        {new Array(50).fill(0).map((_, index) => (
          <div key={index} className="h-[50px] w-full">
            {index}
          </div>
        ))}
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export { AppLayout };
