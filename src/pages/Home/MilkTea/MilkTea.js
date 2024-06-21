import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import HeadLine from "../../../component/Headline/Headline";
import { useNavigate } from "react-router-dom";

const MilkTea = () => {
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Fetch drinks from API
    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const response = await fetch("https://666fee480900b5f87248b557.mockapi.io/drinks");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setDrinks(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDrinks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Xin hãy load lại trang: {error}</div>;
    }

    // React Slick settings for the slider
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    ///add to cart
    const handleAddCart = (drinkId) => {
        navigate(`/orderproduct/${drinkId}`);
    };
    // Get unique drink types
    const uniqueTypes = [...new Set(drinks.map((drink) => drink.type))];

    return (
        <Container>
            <div className="milkTea-container">
                {uniqueTypes.map((type) => (
                    <div className="milkTea-parent" key={type}>
                        <HeadLine headline={type} />
                        <Slider {...settings}>
                            {drinks
                                .filter((drink) => drink.type === type)
                                .map((drink, index) => (
                                    <div className="milktea-box" key={drink.id}>
                                        <div className="milkTea-box_image">
                                            <img src={drink.image} alt={drink.name} />
                                            {drink.percentSale !== "0" && <p>{drink.percentSale}%</p>}
                                        </div>
                                        <div className="milkTea-box_title">
                                            <h2>{drink.nameDrink}</h2>
                                        </div>
                                        <div onClick={() => handleAddCart(drink.id)}>
                                            <button className="milkTea-box_button-1">Đặt hàng</button>
                                        </div>
                                    </div>
                                ))}
                        </Slider>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default MilkTea;
