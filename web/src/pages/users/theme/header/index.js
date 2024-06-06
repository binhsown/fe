import { memo, useState } from "react";
import "./style.scss";
import { UserOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { MenuFoldOutlined } from "@ant-design/icons";
import { ROUTERS } from "utils/router";
import { Link } from "react-router-dom";
import { GiftOutlined } from "@ant-design/icons";
import { LaptopOutlined } from "@ant-design/icons";
import { PrinterOutlined } from "@ant-design/icons";
import { WifiOutlined } from "@ant-design/icons";
import { NodeIndexOutlined } from "@ant-design/icons";
import { SoundOutlined } from "@ant-design/icons";
import { SettingOutlined } from "@ant-design/icons";
import { ShakeOutlined } from "@ant-design/icons";
import { HddOutlined } from "@ant-design/icons";
import { DesktopOutlined } from "@ant-design/icons";
import { RocketOutlined } from "@ant-design/icons";

const Header = () => {
  //setMenus
  const [menus] = useState([
    {
      name: "Lắp đặt phòng net",
      path: ROUTERS.USER.BUILDNETS,
    },
    {
      name: "Trả góp",
      path: ROUTERS.USER.INSTALLMENT,
    },
    {
      name: "Bảng giá",
      path: ROUTERS.USER.PRICELIST,
      isShowSubmenu: false,
      child: [
        {
          name: "Bảng giá mua cũ",
          path: "",
        },
        {
          name: "Bảng giá bán",
          path: "",
        },
        {
          name: "Báng giá outlet",
          path: "",
        },
      ],
    },
    {
      name: "Xây dựng cấu hình",
      path: ROUTERS.USER.BUILDPC,
    },
    {
      name: "Chính sách bảo mật",
      path: ROUTERS.USER.POLICY,
    },
    {
      name: "Thiết bị mining",
      path: ROUTERS.USER.MINES,
    },
  ]);
  //

  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header_top_left">
              <div className="col-lg-9 hero_searchbar_container">
                <diiv className="hero_searchbar">
                  <div className="hero_searchbar_form">
                    <form>
                      <input type="text" placeholder="Bạn tìm gì..." />
                      <button type="submit">Tìm Kiếm</button>
                    </form>
                  </div>
                </diiv>
              </div>
            </div>
            <div className="col-6 header_top_right">
              <div>
                <ul>
                  <li>
                    <UserOutlined />
                    <span>Đăng Nhập/Đăng Ký</span>
                  </li>
                </ul>
              </div>
              <div className="header_cart">
                <ul>
                  <li>
                    <li>Giỏ Hàng</li>
                    <ShoppingCartOutlined />
                    <span>0</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 ">
            <div className="header_danhmucsp">
              <MenuFoldOutlined />
              DANH MỤC SẢN PHẨM
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header_menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li
                    key={menuKey} /*className={menuKey === 0 ? "active" : ""}*/
                  >
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header_menu_dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="header_menus_center">
            <div className="menus">
              <ul>
                <li>
                  <Link to="#">
                    {" "}
                    <GiftOutlined /> TỔNG HỢP KHUYẾN MÃI{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    <SettingOutlined /> LINH KIỆN CŨ{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    <SettingOutlined /> LINH KIỆN MỚI{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    <LaptopOutlined /> LAPTOP{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    <ShakeOutlined /> SSD - HDD - USB{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    <DesktopOutlined /> <HddOutlined /> PC GAMING - HỌC TẬP{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    <DesktopOutlined /> <HddOutlined /> PC VĂN PHÒNG - LÀM VIỆC
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    <DesktopOutlined /> <HddOutlined /> PC ĐỒ HỌA - THIẾT KẾ{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    <DesktopOutlined /> MÀN HÌNH MÁY TÍNH{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    <NodeIndexOutlined /> PHỤ KIỆN PHẦN MỀM
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    <RocketOutlined /> GAMING GEAR
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    <WifiOutlined /> THIẾT BỊ MẠNG{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    <SoundOutlined /> THIẾT BỊ ÂM THANH{" "}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {" "}
                    <PrinterOutlined /> CAMERA, WEBCAM, MÁY IN{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="a">
              <div className="menusgiua"></div>
              <div className="menusphai"></div>
              <div className="menusphai1"></div>
              <div className="menusphai2"></div>
              <div className="menusphai3"></div>
              <div className="menusphai4"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
