import Icon, {
  AndroidOutlined,
  CreditCardOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MobileOutlined,
  PinterestOutlined,
  ShopOutlined,
  TwitterOutlined,
  WechatWorkOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { ReactNode } from "react";

const FooterInfoCard: React.FC<{
  icon: ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-row gap-2  items-center text-[14px] whitespace-nowrap  ">
      <Icon component={() => icon} className="text-[25px]"></Icon>
      <div className="flex flex-col ">
        <span className="font-medium text-[14px]">{title}</span>
        <span className="font-thin text-[12px]">{description}</span>
      </div>
    </div>
  );
};

const footerMenuItems = [
  {
    key: "About Sephora",
    value: [
      "Newsroom",
      "Careers",
      "Sephora Values",
      "Supply Chain Transparency",
      "Affiliates",
      "Sephora Events",
      "Gift Cards",
      "Sephora Global Sites",
      "Diversity, Equity & Inclusion",
      "Sephora Accelerate",
      "Beauty (Re)Purposed",
      "Report a Vulnerability",
    ],
  },
  {
    key: "My Sephora",
    value: [
      "Beauty Insider",
      "Sephora Credit Card",
      "Community Profile",
      "Order Status",
      "Purchase History",
      "Account Settings",
      "Beauty Advisor Recommendations",
      "Auto-Replenishment",
      "Beauty Offers",
      "Buying Guides",
      "Rewards Bazaar",
      "Loves",
      "Book a Reservation",
    ],
  },
  {
    key: "Customer Service",
    value: [
      "Returns & Exchanges",
      "Delivery and Pickup Opt",
      "Shipping",
      "Billing",
      "International Shipments",
      "Beauty Services FAQ",
      "Sephora at Kohl's",
      "Sephora at Hearst",
      "Store Locations",
      "Online Ordering",
      "Flexible Payments",
      "Accessibility",
    ],
  },
];

const HomeFooterFormTextUpdate: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: { phoneNumber: string }) => {
    console.log("Submitted:", values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <div className="flex flex-row gap-3 items-end">
        <Form.Item
          label={
            <span className="text-white font-semibold">
              Sign up for Sephora text updates
            </span>
          }
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please enter your phone number or email",
            },
          ]}
        >
          <Input
            placeholder="Enter your phone number"
            className="rounded-md min-w-[200px]"
            size="large"
          />
        </Form.Item>

        <Form.Item className="justify-items-center">
          <Button
            htmlType="submit"
            size="large"
            ghost
            block
            className="rounded-full bg-white text-black font-bold"
          >
            Continue
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

const footerInfoSampleData = [
  {
    icon: <ShopOutlined />,
    title: "Find a Store",
    description: "Choose Your Store",
  },
  {
    icon: <WechatWorkOutlined />,
    title: "Customer Service",
    description: "Chat is unavailable",
  },
  {
    icon: <AndroidOutlined />,
    title: "Get the App",
    description: "Download Now",
  },
  {
    icon: <MobileOutlined />,
    title: "Get Sephora Text Alerts",
    description: "Sephora Credit Card Program",
  },
  {
    icon: <CreditCardOutlined />,
    title: "Find a Store",
    description: "Want 25 % off your Sephora purchase",
  },
];
const HomeFooterFormTextSignUp: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: { phoneNumber: string }) => {
    console.log("Submitted:", values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <div className="flex flex-row gap-3 items-end">
        <Form.Item
          label={
            <span className="text-white font-semibold">
              Sign up for Sephora text updates
            </span>
          }
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please enter your phone number or email",
            },
          ]}
        >
          <Input
            placeholder="Enter your phone number"
            className="rounded-md min-w-[200px]"
            size="large"
          />
        </Form.Item>

        <Form.Item className="justify-items-center">
          <Button
            htmlType="submit"
            size="large"
            ghost
            block
            className="rounded-full bg-white text-black font-bold"
          >
            Sign Up
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

const FooterMainContent: React.FC = () => {
  return (
    <div className="flex flex-row gap-20  pt-5  border-b border-[#f6f6f8] pb-5">
      {footerMenuItems?.map((item) => (
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">{item.key}</h3>
          {item.value.map((data) => (
            <div>
              <span
                className=" text-[12px] relative inline-block cursor-pointer 
after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
after:h-[1px] after:bg-white after:transition-all after:duration-300 
hover:after:w-full "
              >
                {data}
              </span>
            </div>
          ))}
        </div>
      ))}
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold">Region & Language</h3>
        {[
          {
            img: "https://www.sephora.com/img/ufe/flags/us.svg",
            name: "United States - English",
          },
          {
            img: "https://www.sephora.com/img/ufe/flags/ca.svg",
            name: "Canada - English",
          },
          {
            img: "https://www.sephora.com/img/ufe/flags/ca.svg",
            name: "Canada - Français",
          },
        ].map((data) => (
          <div className="flex flex-row gap-3">
            <img src={data.img} className="w-[20px] h-[20px]"></img>
            <span
              className="text-[12px] relative inline-block cursor-pointer 
after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
after:h-[1px] after:bg-white after:transition-all after:duration-300 
hover:after:w-full "
            >
              {data.name}
            </span>
          </div>
        ))}
      </div>
      <div>
        <h2 className="mb-5 text-[28px]">
          We Belong to
          <br />
          Something Beautiful
        </h2>
        <HomeFooterFormTextUpdate />
        <HomeFooterFormTextSignUp />
      </div>
    </div>
  );
};

const HomeFooter: React.FC = () => {
  return (
    <div>
      <div className="bg-[#f6f6f8] flex justify-center items-center px-5 py-1">
        <Button
          variant="link"
          color="primary"
          className="text-black text-[14px] font-semibold"
        >
          Website feedback? Let us know ▸
        </Button>
      </div>
      <div className="bg-black text-white p-5">
        <div className="flex flex-row gap-24 justify-center border-b border-[#f6f6f8] pb-5">
          {footerInfoSampleData.map((data) => (
            <FooterInfoCard
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
        <FooterMainContent />
        <div className="flex flex-row gap-32 justify-between pt-5">
          <div className="p-5 text-[12px]">
            <p>© 2025 Sephora USA, Inc. All rights reserved.</p>
            <div className="flex flex-row gap-1">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-use">Terms of Use</a>
              <a href="/beauty/accessibility"></a>
              1-877-737-4672 TTY: 1-888-866-9845
            </div>
          </div>
          <div className="text-[30px] flex row gap-5 flex-wrap">
            <InstagramOutlined />
            <FacebookOutlined />
            <TwitterOutlined />
            <YoutubeOutlined />
            <PinterestOutlined />
            <Icon src="https://www.sephora.com/img/ufe/icons/tiktok-ko.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeFooter };
