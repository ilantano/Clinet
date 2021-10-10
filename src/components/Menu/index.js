import React from "react";
import { Input, Button, Row, Col, Menu, Carousel } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const contentStyle = {
  height: "100%",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

export default function MenuBody() {
  return (
    <div className="container mx-auto h-96">
      <div className="">
        <Row gutter={12}>
          <Col span={0} lg={6}>
            <Menu className="w-full" mode="vertical">
              <SubMenu key="sub1" title="Navigation One">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="Navigation ">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title="Navigation Three">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col span={24} lg={12}>
            <Carousel autoplay autoplaySpeed={2000} arrow>
              <div>
                <img
                  className="w-full h-64"
                  src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/rog-hs-1380-600-max.png"
                />
              </div>
            </Carousel>
            {/* <div className="bg-black h-24">
              <p>dfgahfdghas</p>
            </div> */}
          </Col>
          <Col span={0} lg={6}>
            <Row gutter={[0, 12]}>
              <Col span={24}>
                <img
                  src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/ff-r-690-300-max.png"
                  alt=""
                  className="h-28 w-full "
                />
              </Col>
              <Col span={24}>
                <img
                  src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/ff-r-690-300-max.png"
                  alt=""
                  className="h-28 w-full "
                />
              </Col>
              <Col span={24}>
                <img
                  src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/ff-r-690-300-max.png"
                  alt=""
                  className="h-28 w-full "
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
