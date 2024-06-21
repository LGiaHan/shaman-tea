import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        document.addEventListener("scroll", handleScroll);
    }, []);
    const handleOnTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="footer">
            <div className="footer-top">
                <Row>
                    <Col md={4} lg={2}>
                        <div className="footer-branch">
                            <a href="/" rel="noopener noreferrer">
                                <img className="footer-logo" src={logo} alt="" />
                            </a>
                            <div className="footer-social">
                                <h4>Follow us</h4>
                                <div className="footer-social_icon">
                                    <a href="https://www.tiktok.com/@shamantea8?_t=8nFWPgV9S3s&_r=1" rel="noopener noreferrer">
                                        <i className="fa-brands fa-tiktok"></i>
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=61560399667127&mibextid=LQQJ4d" rel="noopener noreferrer">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} lg={2}>
                        <ul className="footer-listmenu">
                            <li>
                                <Link to="/">TRANG CHỦ </Link>
                            </li>
                            <li>
                                <Link to="/about">VỀ CHÚNG TÔI </Link>
                            </li>
                            <li>
                                <Link to="/contact">LIÊN HỆ </Link>
                            </li>
                            <li>
                                <Link to="/franchise">NHƯỢNG QUYỀN </Link>
                            </li>
                            <li>
                                <Link to="/recruitment">TUYỂN DỤNG</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4} lg={4}>
                        <div className="footer-listmenu">
                            <ul>
                                <li>
                                    <a href="https://maps.app.goo.gl/9bxnN5UUarjkzHkc6" rel="noopener noreferrer" target="_blank">
                                        <i className="fa-solid fa-location-dot"></i> Chi nhánh 1 - 79 Dân Chủ, Phường Bình Thọ, Quận 9, Thành Phố Hồ Chí Minh.
                                    </a>
                                </li>
                                <li>
                                    <a href="https://maps.app.goo.gl/s72a53y7vLSLmqgw5" rel="noopener noreferrer" target="_blank">
                                        <i className="fa-solid fa-location-dot"></i> Chi nhánh 2 - 86 Đ. Nguyễn Thượng Hiền, Phường 5, Quận 3, Thành Phố Hồ Chí Minh.
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:0827220079" rel="noopener noreferrer">
                                        <i className="fa-solid fa-phone"></i>0827220079
                                    </a>
                                </li>
                            </ul>
                            <div className="footer-timmig">
                                <h5>Thời gian hoạt động</h5>
                                <p>
                                    Thứ 2 - Chủ Nhật :<span>8:00 am - 22:00 pm</span>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="footer-instar">
                            <div className="footer-image">
                                <div className="footer-image_instar">
                                    <img src="https://i.pinimg.com/564x/44/23/73/442373324fe5090a2e730c24884e7c38.jpg" alt="" />
                                </div>
                                <div className="footer-image_instar">
                                    <img src="https://i.pinimg.com/564x/2b/9c/ce/2b9cce9486e7ba7ff2be5f3060c08108.jpg" alt="" />
                                </div>
                                <div className="footer-image_instar">
                                    <img src="https://i.pinimg.com/564x/e1/20/f2/e120f2989879a6ede156ef1cb4f72615.jpg" alt="" />
                                </div>
                                <div className="footer-image_instar">
                                    <img src="https://i.pinimg.com/564x/2f/d7/13/2fd7134f0cafc40c143bf93b5751de1c.jpg" alt="" />
                                </div>
                                <div className="footer-image_instar">
                                    <img src="https://i.pinimg.com/564x/24/f5/92/24f59250a8f3f747fd57ffdbef56c9eb.jpg" alt="" />
                                </div>
                                <div className="footer-image_instar">
                                    <img src="https://i.pinimg.com/564x/ed/ce/88/edce88639818c97f14a55c106798b648.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="footer-bot">
                <h5>
                    <span>Shaman Tea</span> xin cám ơn quý khách !!
                </h5>
            </div>
            <button className={`footer-scrolltop ${scroll && "active"}`} onClick={handleOnTop}>
                <i className="fa-solid fa-chevron-up"></i>
            </button>
        </div>
    );
};

export default Footer;
