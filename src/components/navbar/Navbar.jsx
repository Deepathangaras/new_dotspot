import React, { useState } from "react";
import { Menu, Dropdown, Drawer, Button } from "antd";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ham from "../../assets/images/ham.png";
import "./Navbar.css";

function NavbarComponent() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const aboutMenu = (
    <Menu>
      <Menu.Item key="about1">About 1</Menu.Item>
      <Menu.Item key="about2">About 2</Menu.Item>
      <Menu.Item key="about3">About 3</Menu.Item>
    </Menu>
  );

  const servicesMenu = (
    <Menu>
      <Menu.Item key="service1">Service 1</Menu.Item>
      <Menu.Item key="service2">Service 2</Menu.Item>
      <Menu.Item key="service3">Service 3</Menu.Item>
    </Menu>
  );

  return (
    <div className="navbar-container">
      <div className="navbar-brand">
        <img
          alt="Dotsito Logo"
          src={"https://dotsito.s3.ap-south-1.amazonaws.com/dotspot_v2__white_new-removebg-preview.png"}
          width=""
          height="40"
          className="d-inline-block align-top"
        />{" "}
      </div>

      <div className="menu-desktop">
        <Dropdown overlay={aboutMenu}>
          <Button type="link">
            About <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown overlay={servicesMenu}>
          <Button type="link">
            Services <DownOutlined />
          </Button>
        </Dropdown>
        <Button type="link">
          <Link to="/products">Products</Link>
        </Button>
        <Button type="link">
          <Link to="/contact">Contact</Link>
        </Button>
        
      </div>

      <div className="menu-mobile">
        <Button icon={<MenuOutlined />} onClick={showDrawer} />
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={drawerVisible}
        >
          <Menu>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="services">
              <Link to="/services">Services</Link>
            </Menu.Item>
            <Menu.Item key="products">
              <Link to="/products">Products</Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to="/contact">Contact</Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </div>
  );
}

export default NavbarComponent;
