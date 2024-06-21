import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";

const OrderProduct = () => {
    const { drinkId } = useParams();
    const [drink, setDrink] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    // Fetch drink data from API
    useEffect(() => {
        const fetchDrink = async () => {
            try {
                const response = await fetch(`https://666fee480900b5f87248b557.mockapi.io/drinks/${drinkId}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setDrink(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDrink();
    }, [drinkId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !drink) {
        return <div>Xin hãy load lại trang</div>;
    }

    return (
        <div className="orderproduct">
            <Container>
                <div className="orderproduct-back" onClick={() => navigate("/")}>
                    <i className="fa-solid fa-chevron-left"></i>
                    <p>Trang chủ</p>
                </div>
                <Row>
                    <Col md={12} lg={4}>
                        <div className="orderproduct-images">
                            <img src={drink.image} alt={drink.name} />
                            {drink.percentSale !== "0" && <p>{drink.percentSale}%</p>}
                        </div>
                    </Col>
                    <Col md={12} lg={8}>
                        <div className="orderproduct-choose">
                            <h2>{drink.nameDrink}</h2>
                            <div className="orderproduct-price">
                                <p>{drink.description}</p>
                            </div>
                            <Link to="https://order.ipos.vn/menu?pos_parent=BRAND-WBHA&pos_id=96862&latest=true" className="orderproduct_button-1">
                                Mua Ngay
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OrderProduct;
