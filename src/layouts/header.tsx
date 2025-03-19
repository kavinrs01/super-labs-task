import { AutoComplete, Badge, Input, Popover } from "antd";
import { useMemo, useState } from "react";
import "./styles.less";

import {
  HeartOutlined,
  RightOutlined,
  SearchOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
const options = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];

const menuList = [
  "New",
  "Brands",
  "Makeup",
  "Skincare",
  "Hair",
  "Fragrance",
  "Tools & Brushes",
  "Bath & Body",
  "Mini Size",
  "Beauty Under $20",
  "Gifts & Gift Cards",
  "Sale & Offers",
];

const innerMenuList1 = [
  "All New",
  "The Next Big Thing",
  "Just Dropped",
  "Bestsellers",
  "New Makeup",
  "Trending on Social",
  "New Skincare",
  "Refillable Beauty Products",
];
const innerMenuList2 = [
  "New Hair Care",

  "Buying Guides",
  "New Fragrance",
  "Clean Beauty",
  "New Bath & Body",
  "Planet Aware Beauty",
  "New Tools & Brushes",
  "FSA & HSA Eligible",
];

const AppHeader: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (value: string) => {
    console.log("Search submitted:", value);
  };

  const filteredOptions = useMemo(
    () =>
      options
        .filter((option) =>
          option.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((option) => ({ value: option })),
    [searchValue]
  );

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleSelect = (value: string) => {
    setSearchValue(value);
    onSearch(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchValue);
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-[50px] bg-[#a29ddd] flex flex-row items-center gap-4 justify-between relative">
        <div></div>
        <div className="text-white px-10 absolute">
          <p>
            <span>
              <b>Today Only: </b>50% off select beauty. <b>SHOP NOW ▸</b>
            </span>
          </p>
        </div>
        <img
          className="h-[50px] justify-self-end"
          src="https://www.sephora.com/contentimages/2025-march-oh-snap-site-desktop-global-top-banner-generic-1226x120-us-kohls-img-only-2930-1.jpg?imwidth=612 1x, https://www.sephora.com/contentimages/2025-march-oh-snap-site-desktop-global-top-banner-generic-1226x120-us-kohls-img-only-2930-1.jpg?imwidth=1224 2x"
        ></img>
      </div>
      <div className="flex flex-row items-center gap-6 px-10 py-2 justify-center h-[90px]">
        <svg
          viewBox="0 0 125 17"
          data-at="sephora_logo_ref"
          className="w-[125px] h-[17px] "
          data-comp="BaseComponent "
        >
          <path
            fill-rule="evenodd"
            d="M8.94 1.645s-.05.142-.747 2.032c-1.992-1.586-5.33-1.47-5.33.97 0 2.861 6.972 2.502 6.755 7.61C9.445 16.36 4.395 17.302.5 15.326c.34-.723.694-1.42.936-1.99 2.945 1.741 5.481.943 5.898-.458C8.473 9.044.53 10.228.53 4.793c0-2.286 2.647-5.84 8.41-3.148ZM16.465 1.33h9.124s-.027.822-.01 1.991H18.75v4.082h4.844c-.017.814-.008 1.453-.008 1.873H18.75v5.088h6.83a104.28 104.28 0 0 0 0 1.954h-9.106L16.465 1.33ZM38.195 8.675c-.55 0-.958-.006-1.516-.009 0-2.796.005-5.41.005-5.41s.666-.003 1.295-.003c.602 0 4.106-.273 4.22 2.523.11 2.757-2.648 2.9-4.004 2.9Zm.136-7.316c-.81-.02-2.501-.029-3.945-.029l.005 14.988h2.296s-.007-2.861-.008-5.682c.569-.01 1.75-.041 2.705-.068 1.323-.04 4.8-.701 4.776-4.811-.027-4.62-5.025-4.38-5.83-4.398ZM97.183 8.268c-.536 0-.923-.01-1.466-.014.002-2.632.008-5.058.008-5.058s.628-.009 1.236-.009c.58 0 3.685-.175 3.948 2.267.312 2.885-3.092 2.814-3.726 2.814Zm5.053 8.05h2.854l-4.737-6.725c1.275-.469 2.753-1.557 2.566-4.043-.334-4.454-4.686-4.124-5.618-4.167-.785-.037-2.475-.059-3.94-.052v14.987h2.364s-.007-3.354-.009-6.318c.784.003 1.064-.011 2.246-.042l4.274 6.36ZM61.063 6.976V1.33h2.321v14.336h-2.322V8.851l-7.738.01v6.805h-2.321V1.33h2.32v5.646h7.74ZM79.167.68c-4.823 0-7.963 3.501-7.963 7.82 0 4.319 3.14 7.82 7.963 7.82s7.962-3.501 7.962-7.82c0-4.319-3.14-7.82-7.962-7.82Zm0 2.128c-3.536 0-5.544 2.548-5.544 5.691 0 3.144 1.988 5.692 5.544 5.692 3.555 0 5.543-2.548 5.543-5.692 0-3.143-2.008-5.691-5.543-5.691Zm36.209 7.99 4.935-.03-2.507-7.306h-.033l-2.395 7.336Zm1.084-9.688h2.745l5.435 14.855-2.43-.006s-.537-1.499-1.253-3.484l-6.13.038s-.246.764-.977 3.447h-2.343l4.953-14.85Z"
          ></path>
        </svg>
        <AutoComplete
          options={filteredOptions}
          onSelect={handleSelect}
          onSearch={handleSearch}
          value={searchValue}
        >
          <Input
            placeholder="Search..."
            allowClear
            onKeyDown={handleKeyDown}
            prefix={<SearchOutlined />}
            className="rounded-full bg-[#f6f6f8] border-2 min-w-[400px] header-search-input"
          />
        </AutoComplete>
        <div className="flex flex-row gap-5 items-center h-[40px] cursor-pointer">
          <ShopOutlined className="text-xl" />
          <div className="flex flex-col gap-2 whitespace-nowrap">
            <span className="h-2 font-medium mb-0.5 text-[14px]">
              Stores & Services
            </span>
            <span className="text-[10px]">Choose Your Store</span>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center h-[40px]">
          <UserOutlined className="text-xl" />
          <div className="flex flex-col gap-2 cursor-pointer whitespace-nowrap">
            <span className="h-2 font-medium mb-0.5 text-[14px]">Sign In</span>
            <span className="text-[10px] whitespace-nowrap">
              for free shipping 🚚
            </span>
          </div>
        </div>
        <Badge count={5}>
          <HeartOutlined className="text-2xl cursor-pointer" />
        </Badge>
        <Badge count={1}>
          <ShoppingCartOutlined className="text-2xl cursor-pointer" />
        </Badge>
      </div>
      <div className="w-[100dvw]  h-[50px] px-5 bg-[#000] flex flex-row gap-5 text-white  items-center overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar">
        {menuList.map((item) => (
          <React.Fragment key={item}>
            <Popover
              content={
                <div className="w-[calc(100dvw-20px)] flex flex-row gap-32 p-5 justify-between">
                  <div className="flex flex-col gap-5">
                    {innerMenuList1.map((item) => (
                      <div>
                        <span
                          className="relative inline-block cursor-pointer 
   after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
   after:h-[2px] after:bg-black after:transition-all after:duration-300 
   hover:after:w-full text-[14px]  font-bold"
                        >
                          {item}
                        </span>
                        <RightOutlined />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-5">
                    {innerMenuList2.map((item) => (
                      <div>
                        <span
                          className="relative inline-block cursor-pointer 
   after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
   after:h-[2px] after:bg-black after:transition-all after:duration-300 
   hover:after:w-full text-[14px]  font-bold"
                        >
                          {item}
                        </span>{" "}
                        <RightOutlined />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row gap-5 flex-wrap ">
                    <img
                      src="https://www.sephora.com/contentimages/2025-feb-mu-texture-story-site-desktop-universal-navigation-button-2053-us-release.jpg?imwidth=588"
                      className="w-[300px] h-[300px]"
                    ></img>
                    <img
                      src="https://www.sephora.com/contentimages/2025-feb-hybrids-site-desktop-universal-navigation-button-us-2053.jpg?imwidth=588"
                      className="w-[300px] h-[300px]"
                    ></img>
                  </div>
                </div>
              }
              arrow
              //   title={item}
              styles={{
                body: {
                  marginTop: "-20px",
                  borderRadius: "0px",
                  marginRight: "0px",
                  marginLeft: "0px",
                  boxShadow: "none",
                  maxHeight: "500px",
                  overflowY: "auto",
                  overflowX: "hidden",
                },
              }}
              //   open={index === 8}
              rootClassName="custom-menu-popover"
              trigger={"hover"}
              placement="bottom"
            >
              <span className="cursor-pointer font-medium">{item}</span>
            </Popover>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export { AppHeader };
