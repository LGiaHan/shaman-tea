import React from "react";
import axios from "axios";
import HeadLine from "../../component/Headline/Headline";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const Recruitment = () => {
    const formik = useFormik({
        initialValues: {
            fullname: "",
            dateOfBirth: "",
            position: "",
            phone: "",
            address: "",
            branch: "",
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Họ và tên là bắt buộc"),
            dateOfBirth: Yup.date().required("Ngày tháng năm sinh là bắt buộc").max(new Date(), "Ngày sinh không hợp lệ"),
            address: Yup.string().required("Địa chỉ thường trú là bắt buộc"),
            position: Yup.string().required("Vị trí ứng tuyển là bắt buộc"),
            phone: Yup.string()
                .required("Số điện thoại là bắt buộc")
                .matches(/^\d{10}$/, "Số điện thoại phải có 10 chữ số"),
        }),
        branch: Yup.string().required("Chi nhánh mong muốn làm việc là bắt buộc"),
        onSubmit: async (values) => {
            console.log(values);
            try {
                const res = await axios.post("https://666fee480900b5f87248b557.mockapi.io/Recuitment", values);
                if (res.status === 201) {
                    alert("Đăng kí thành công");
                    formik.resetForm();
                }
            } catch (error) {
                console.error("Lỗi khi gửi dữ liệu:", error.message);
                alert("Đăng kí không thành công. Vui lòng thử lại sau.");
            }
        },
    });

    return (
        <div className="recruitment">
            <HeadLine headline={"TUYỂN DỤNG"} />
            <div className="recruitment-title">
                <Container>
                    <h3>GÓC TUYỂN PHA CHẾ</h3>
                    <div className="recruitment-address">
                        <i className="fa-solid fa-store"></i>
                        <a href="https://maps.app.goo.gl/9bxnN5UUarjkzHkc6" target="_blank" rel="noopener noreferrer">
                            CN1 - 79 Dân Chủ, Phường Bình Thọ, Quận 9, Thành Phố Hồ Chí Minh
                        </a>
                    </div>
                    <div className="recruitment-address">
                        <i className="fa-solid fa-store"></i>
                        <a href="https://maps.app.goo.gl/9bxnN5UUarjkzHkc6" target="_blank" rel="noopener noreferrer">
                            CN2 - 86 Đ. Nguyễn Thượng Hiền, Phường 5, Quận 3, Thành Phố Hồ Chí Minh
                        </a>
                    </div>
                </Container>
            </div>
            <h2> Thông tin ứng tuyển</h2>
            <form onSubmit={formik.handleSubmit} className="recruitment-form">
                <div className="recruitment-form_input">
                    <label>Họ và tên:</label>
                    <input type="text" name="fullname" value={formik.values.fullname} onChange={formik.handleChange} />
                    {formik.touched.fullname && formik.errors.fullname ? <div className="error">{formik.errors.fullname}</div> : null}
                </div>
                <div className="recruitment-form_input">
                    <label>Ngày tháng năm sinh:</label>
                    <input type="date" name="dateOfBirth" value={formik.values.dateOfBirth} onChange={formik.handleChange} />
                    {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? <div className="error">{formik.errors.dateOfBirth}</div> : null}
                </div>
                <div className="recruitment-form_input">
                    <label>Vị trí ứng tuyển (Fulltime/Partime):</label>
                    <input type="text" name="position" value={formik.values.position} onChange={formik.handleChange} />
                    {formik.touched.position && formik.errors.position ? <div className="error">{formik.errors.position}</div> : null}
                </div>
                <div className="recruitment-form_input">
                    <label>Chi nhánh mong muốn làm việc:</label>
                    <input type="text" name="branch" value={formik.values.branch} onChange={formik.handleChange} />
                    {formik.touched.branch && formik.errors.branch ? <div className="error">{formik.errors.branch}</div> : null}
                </div>
                <div className="recruitment-form_input">
                    <label>Số điện thoại:</label>
                    <input type="text" name="phone" value={formik.values.phone} onChange={formik.handleChange} />
                    {formik.touched.phone && formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}
                </div>
                <div className="recruitment-form_input">
                    <label>Địa chỉ thường trú:</label>
                    <input type="text" name="address" value={formik.values.address} onChange={formik.handleChange} />
                    {formik.touched.address && formik.errors.address ? <div className="error">{formik.errors.address}</div> : null}
                </div>
                <button type="submit">Đăng kí</button>
            </form>
        </div>
    );
};

export default Recruitment;
