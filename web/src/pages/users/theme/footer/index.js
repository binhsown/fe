import { memo } from "react";
import "./style.scss";
import { FacebookOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { YoutubeOutlined } from "@ant-design/icons";
import { TruckOutlined } from "@ant-design/icons";
import { FileSyncOutlined } from "@ant-design/icons";
import { WalletOutlined } from "@ant-design/icons";
import { PhoneOutlined } from "@ant-design/icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer_chinhs">
              <h1 className="footer_chinh_to">
                <TruckOutlined />
                CHÍNH SÁCH GIAO HÀNG{" "}
              </h1>
              <ul>
                <li>Nhận hàng và thanh toán tại nhà</li>
              </ul>
            </div>
            <div className="footer_about">
              <h1 className="footer_about_logo">GIỚI THIỆU THNS</h1>
              <div className="red-bar"></div>
              <ul>
                <li>Về chúng tôi</li>
                <li>Tư vấn mua hàng</li>
                <li>Tuyển dụng</li>
              </ul>
            </div>
            <div className="footer_icon">
              <div>
                <FacebookOutlined />
              </div>
              <div>
                <InstagramOutlined />
              </div>
              <div>
                <YoutubeOutlined />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_chinhc">
              <h1 className="footer_chung_to">
                <FileSyncOutlined />
                ĐỔI TRẢ DỄ DÀNG{" "}
              </h1>
              <ul>
                <li>1 đổi 1 trong 7 ngày</li>
              </ul>
            </div>
            <div className="footer_policy">
              <h1 className="footer_about_policy">CHÍNH SÁCH CHUNG</h1>
              <div className="red-bar"></div>
              <ul>
                <li>Chính sách trả góp</li>
                <li>Chính sách bảo mật</li>
                <li>Chính sách giải quyết khiếu nại</li>
                <li>Chính sách bảo vệ thông tin cá nhân</li>
                <li>Chính sách bảo hành</li>
                <li>Chính sách đổi - trả hàng</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_thanhtoans">
              <h1 className="footer_thanhtoans_to">
                <WalletOutlined />
                THANH TOÁN TIỆN LỢI{" "}
              </h1>
              <ul>
                <li>Trả tiền mặt, chuyển khoản, trả góp 0%</li>
              </ul>
            </div>
            <div className="footer_deals">
              <h1 className="footer_about_deals">THÔNG TIN KHUYẾN MÃI</h1>
              <div className="red-bar"></div>
              <ul>
                <li>Tổng hợp khuyến mãi</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_chamsoc">
              <h1 className="footer_chamsoc_to">
                <PhoneOutlined />
                HỖ TRỢ NHIỆT TÌNH{" "}
              </h1>
              <ul>
                <li>Tư vấn , Giải đáp mọi thắc mắc</li>
              </ul>
            </div>
            <div className="footer_customers">
              <h1 className="footer_about_customers">HỖ TRỢ KHÁCH HÀNG</h1>
              <div className="red-bar"></div>
              <ul>
                <li>Tổng hợp Hotline CSKH, phản ánh</li>
                <li>Thông tin thanh toán</li>
                <li>Lắp đặt phòng net</li>
                <li>Tra cứu bảo hành</li>
                <li>Thiết bị Mining</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
