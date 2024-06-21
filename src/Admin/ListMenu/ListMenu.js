import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const ListMenu = () => {
    const navigate = useNavigate();
    const [drinks, setDrinks] = useState([]);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem("USERLOGIN");
        if (!user) {
            navigate("/admin");
        } else {
            fetchDrinks();
        }
    }, [navigate]);

    const fetchDrinks = async () => {
        try {
            const response = await axios.get("https://666fee480900b5f87248b557.mockapi.io/drinks");
            setDrinks(response.data);
        } catch (error) {
            console.error("Error fetching drinks:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://666fee480900b5f87248b557.mockapi.io/drinks/${id}`);
            setDrinks((prevDrinks) => prevDrinks.filter((drink) => drink.id !== id));
            alert("Xoá Thành Công");
        } catch (error) {
            console.error("Lỗi khi xoá:", error);
        }
    };

    const handleEdit = (id) => {
        setEditId(id);
        const drinkToEdit = drinks.find((drink) => drink.id === id);
        if (drinkToEdit) {
            formik.setValues({
                nameDrink: drinkToEdit.nameDrink,
                description: drinkToEdit.description,
                type: drinkToEdit.type,
                image: drinkToEdit.image,
                price: drinkToEdit.price,
                percentSale: drinkToEdit.percentSale,
            });
        }
    };

    const formik = useFormik({
        initialValues: {
            nameDrink: "",
            description: "",
            type: "",
            image: "",
            price: "",
            percentSale: "",
        },
        validationSchema: Yup.object({
            nameDrink: Yup.string().required("Vui lòng nhập Tên Món"),
            description: Yup.string().required("Vui lòng nhập Mô Tả Món"),
            type: Yup.string().required("Vui lòng chọn Loại").oneOf(["Milk Tea", "Fresh Tea", "None Tea", "Original Tea", "Machiato", "Dessert", "Topping"], "Loại không hợp lệ"),
            image: Yup.string().required("Vui lòng cho hình ảnh"),
            price: Yup.number().required("Vui lòng nhập Giá tiền").positive("Giá tiền phải là số dương"),
            percentSale: Yup.number().required("Vui lòng nhập Phần trăm Sale").min(0, "Phần trăm Sale không hợp lệ").max(100, "Phần trăm Sale không hợp lệ"),
        }),
        onSubmit: async (values) => {
            console.log(values);
            try {
                if (editId) {
                    // Nếu đang chỉnh sửa
                    await axios.put(`https://666fee480900b5f87248b557.mockapi.io/drinks/${editId}`, values);
                    alert("Cập nhật Thành Công");
                } else {
                    // Nếu thêm mới
                    const res = await axios.post("https://666fee480900b5f87248b557.mockapi.io/drinks", values);
                    if (res.status === 201) {
                        alert("Thêm Thành Công");
                    }
                }
                formik.resetForm();
                fetchDrinks();
                setEditId(null);
            } catch (error) {
                console.error("Lỗi khi gửi dữ liệu:", error.message);
                alert("Thao tác không thành công. Vui lòng thử lại sau.");
            }
        },
    });
    const handleImageChange = (event) => {
        const { name, value } = event.target;
        formik.setFieldValue(name, value);
    };
    return (
        <div className="list-menu">
            <h2>Danh sách Menu</h2>
            <form onSubmit={formik.handleSubmit} className="list-menu-input">
                <div className="list-menu-input_form">
                    <label>Tên Món:</label>
                    <input type="text" name="nameDrink" value={formik.values.nameDrink} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.nameDrink && formik.errors.nameDrink ? <div className="error">{formik.errors.nameDrink}</div> : null}
                </div>
                <div className="list-menu-input_form">
                    <label>Mô Tả Món:</label>
                    <input type="text" name="description" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.description && formik.errors.description ? <div className="error">{formik.errors.description}</div> : null}
                </div>
                <div className="list-menu-input_form">
                    <label>Loại:</label>
                    <select name="type" value={formik.values.type} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.type && formik.errors.type ? "error" : ""}>
                        <option value="">Chọn loại</option>
                        <option value="Milk Tea">Milk Tea</option>
                        <option value="Fresh Tea">Fresh Tea</option>
                        <option value="None Tea">None Tea</option>
                        <option value="Original Tea">Original Tea</option>
                        <option value="Machiato">Machiato</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Topping">Topping</option>
                    </select>
                    {formik.touched.type && formik.errors.type ? <div className="error">{formik.errors.type}</div> : null}
                </div>
                <div className="list-menu-input_form">
                    <label>Hình ảnh (URL):</label>
                    <input type="text" name="image" value={formik.values.image} onChange={handleImageChange} onBlur={formik.handleBlur} />
                    {formik.touched.image && formik.errors.image ? <div className="error">{formik.errors.image}</div> : null}
                </div>
                <div className="list-menu-input_form">
                    <label>Giá tiền:</label>
                    <input type="text" name="price" value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.price && formik.errors.price ? <div className="error">{formik.errors.price}</div> : null}
                </div>
                <div className="list-menu-input_form">
                    <label>Phần trăm Sale:</label>
                    <input type="text" name="percentSale" value={formik.values.percentSale} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.percentSale && formik.errors.percentSale ? <div className="error">{formik.errors.percentSale}</div> : null}
                </div>
                <div>
                    {editId ? (
                        <button className="button-update" type="submit">
                            Cập nhật
                        </button>
                    ) : (
                        <button className="button-add" type="submit">
                            Thêm
                        </button>
                    )}
                    {editId && (
                        <button
                            className="button-cancel"
                            onClick={() => {
                                setEditId(null);
                                formik.resetForm();
                            }}
                        >
                            Hủy
                        </button>
                    )}
                </div>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên Món</th>
                        <th>Mô Tả Món</th>
                        <th>Loại</th>
                        <th>Hình ảnh</th>
                        <th>Giá tiền</th>
                        <th>Phần trăm Sale</th>
                        <th>Sửa</th>

                        <th>Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    {drinks.map((drink) => (
                        <tr key={drink.id}>
                            <td>{drink.id}</td>
                            <td>{drink.nameDrink}</td>
                            <td>{drink.description}</td>
                            <td>{drink.type}</td>
                            <td>{drink.image && <img src={drink.image} alt={drink.nameDrink} width="50" />}</td>
                            <td>{drink.price}</td>
                            <td>{drink.percentSale}</td>
                            <td>
                                <button className="button-delete" onClick={() => handleEdit(drink.id)}>
                                    Sửa
                                </button>
                            </td>
                            <td>
                                <button className="button-delete" onClick={() => handleDelete(drink.id)}>
                                    Xoá
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListMenu;
