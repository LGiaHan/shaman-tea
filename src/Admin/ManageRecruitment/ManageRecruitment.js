import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageRecruitment = () => {
    const [people, setPeople] = useState([]);
    const navigate = useNavigate();

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
            const response = await fetch("https://666fee480900b5f87248b557.mockapi.io/Recuitment");
            const data = await response.json();
            setPeople(data);
        } catch (error) {
            console.error("Error fetching drinks:", error);
        }
    };
    const handleDelete = async (id) => {
        try {
            await fetch(`https://666fee480900b5f87248b557.mockapi.io/Recuitment/${id}`, {
                method: "DELETE",
            });
            setPeople((prevDrinks) => prevDrinks.filter((item) => item.id !== id));
            alert("Xoá Thành Công");
        } catch (error) {
            console.error("Lỗi khi xoá:", error);
        }
    };
    return (
        <div className="manageRe">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ và tên</th>
                        <th>Ngày tháng năm sinh</th>
                        <th>Số điện thoại</th>
                        <th>Vị trí tuyển dụng</th>
                        <th>Chi nhánh mong muốn làm việc</th>
                        <th>Địa chỉ</th>
                        <th>Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.fullname}</td>
                            <td>{item.dateOfBirth}</td>
                            <td>{item.position}</td>
                            <td>{item.branch}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td>
                                <button className="button-delete" onClick={() => handleDelete(item.id)}>
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

export default ManageRecruitment;
