import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Map = () => {
    const arrayLocation = [
        {
            id: 1,
            name: "Thủ Đức",

            address: "79 Dân Chủ, Bình Thọ, Quận 9, Thành phố Hồ Chí Minh",
            img: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5115758814186!2d106.76372787464591!3d10.84864055785833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527002adbc953%3A0x655feb004c8d22c8!2sShaman%20Tea!5e0!3m2!1sen!2s!4v1718809159837!5m2!1sen!2s",
            link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5115758814186!2d106.76372787464591!3d10.84864055785833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527002adbc953%3A0x655feb004c8d22c8!2sShaman%20Tea!5e0!3m2!1sen!2s!4v1718809159837!5m2!1sen!2s",
        },
        {
            id: 2,
            name: "Quận 3",

            address: "86 Đ. Nguyễn Thượng Hiền, Phường 5, Quận 3, Thành phố Hồ Chí Minh",
            img: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5101288025485!2d106.68273927464507!3d10.772186459272751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f230ae072a3%3A0x85b8e60d84991e84!2zODYgxJAuIE5ndXnhu4VuIFRoxrDhu6NuZyBIaeG7gW4sIFBoxrDhu51uZyA1LCBRdeG6rW4gMywgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1718810134735!5m2!1sen!2s",
            link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5101288025485!2d106.68273927464507!3d10.772186459272751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f230ae072a3%3A0x85b8e60d84991e84!2zODYgxJAuIE5ndXnhu4VuIFRoxrDhu6NuZyBIaeG7gW4sIFBoxrDhu51uZyA1LCBRdeG6rW4gMywgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1718810134735!5m2!1sen!2s",
        },
    ];
    const [location, setLocation] = useState(arrayLocation[0].link);

    return (
        <div className="map">
            <Container>
                <Row>
                    <Col md={12} lg={7}>
                        <div className="map-location">
                            <iframe title="Example Iframe" src={location} width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Col>
                    <Col md={12} lg={5}>
                        <div className="map-system">
                            <h2>Hệ thống chi nhánh</h2>
                            <div className="map-system-scroll">
                                <div className="map-system-box">
                                    {arrayLocation.map((item) => (
                                        <div className="map-card" onClick={() => setLocation(item.link)}>
                                            <div className="map-card-branch">
                                                <div className="map-card-branch_text">
                                                    <h3>Chi Nhánh {item.id}:</h3>
                                                    <h4>
                                                        <i className="fa-solid fa-map-pin"></i>
                                                        {item.name}
                                                    </h4>
                                                    <h5>{item.address}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Map;
