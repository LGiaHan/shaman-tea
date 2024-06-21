import React from "react";
import HeadLine from "../../component/Headline/Headline";
import { Container } from "react-bootstrap";
import logo from "../../assets/logo/logo.jpg";
const Contact = () => {
    return (
        <div className="contact">
            <Container>
                <HeadLine headline={"Liên hệ với chúng tôi"}></HeadLine>
                <div className="contact-information">
                    <div className="contact-information_text">
                        <h2>Shaman Tea</h2>
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        <li>
                            <a href="https://maps.app.goo.gl/9bxnN5UUarjkzHkc6" target="_blank" rel="noopener noreferrer">
                                Địa chỉ chi nhánh 1: <span>79 Dân Chủ, Phường Bình Thọ, Quận 9, Thành Phố Hồ Chí Minh </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://maps.app.goo.gl/9bxnN5UUarjkzHkc6" target="_blank" rel="noopener noreferrer">
                                Địa chỉ chi nhánh 2: <span>86 Đ. Nguyễn Thượng Hiền, Phường 5, Quận 3,Thành Phố Hồ Chí Minh </span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:0827220079" rel="noopener noreferrer">
                                Số điện thoại: <span>0827220079 </span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:0827220079" rel="noopener noreferrer">
                                Phản ánh::<span>0827220079 </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
