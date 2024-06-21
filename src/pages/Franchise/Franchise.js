import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadLine from "../../component/Headline/Headline";
import image from "../../assets/product1/product1.png";
const Franchise = () => {
    return (
        <div className="franchise">
            <HeadLine headline={"NHƯỢNG QUYỀN"}></HeadLine>
            <div className="franchise-dominance">
                <h3>ƯU THẾ NHƯỢNG QUYỀN</h3>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className="franchise-dominance_child">
                            <h4>01</h4>
                            <h5>ĐẢM BẢO LỢI NHUẬN</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="franchise-dominance_child">
                            <h4>02</h4>
                            <h5>ƯU THẾ DỊCH VỤ</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="franchise-dominance_child">
                            <h4>03</h4>
                            <h5>ƯU THẾ NGUYÊN LIỆU</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="franchise-dominance_child">
                            <h4>04</h4>
                            <h5>ƯU THẾ ĐÀO TẠO</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="franchise-dominance_child">
                            <h4>05</h4>
                            <h5>ĐẢM BẢO GIÁ CẢ</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="franchise-dominance_child">
                            <h4>06</h4>
                            <h5>ĐẢM BẢO KINH NGHIỆM</h5>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="franchise-conditions">
                <Container>
                    <h3>ĐIỀU KIỆN NHƯỢNG QUYỀN</h3>
                    <Row>
                        <Col md={7}>
                            <ul className="franchise-conditions_menu">
                                <li>
                                    <i className="fa-solid fa-chevron-right"></i>Chứng minh nhân dân hợp lệ, giấy xác nhận không phạm tội, đủ tư cách để xin các giấy phép liên quan.
                                </li>
                                <li>
                                    <i className="fa-solid fa-chevron-right"></i>
                                    Có hứng thú với ngành thức uống, chấp nhận văn hóa thương hiệu và triết lí kinh doanh, toàn tâm toàn ý cho việc kinh doanh, tuân theo sự thống nhất điều hành của
                                    công ty và có tinh thần hợp tác cao.
                                </li>

                                <li>
                                    <i className="fa-solid fa-chevron-right"></i>
                                    Bên nhượng quyền thương hiệu có thể trực tiếp tham gia khóa đào tạo, vận hành và quản lý cửa tiệm toàn thời gian ( Trước khi khai trương, phải đến công ty để tham
                                    gia học đào tạo, mỗi ngày cần học từ 7-8 tiếng, 5-7 ngày, tùy theo thực tế năng lực học tập để quyết định).
                                </li>
                                <li>
                                    <i className="fa-solid fa-chevron-right"></i>Không cùng lúc điều hành các doanh nghiệp có liên quan hoặc có tính cạnh tranh.
                                </li>
                                <li>
                                    <i className="fa-solid fa-chevron-right"></i>Có khả năng chịu rủi ro nhất định, có đủ kinh phí hoạt động ( nguồn vốn hợp pháp), địa điểm, nhân sự …
                                </li>
                            </ul>
                        </Col>
                        <Col md={5}>
                            <img src={image} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Franchise;
