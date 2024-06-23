import { useEffect, useState } from "react";

function UserDetailTab(prop) {
    const { show, data } = prop;

    useEffect(() => {
        show && (document.title = "Thông tin chi tiết");
    }, [show]);

    return (
        <div
            className={`tab-pane fade profile-overview ${
                show && "show active"
            }`}
            id="/user/detail"
        >
            <h5 className="card-title">Profile Details</h5>

            <div className="row">
                <div className="col-lg-3 col-md-4 label ">Họ và tên</div>
                <div className="col-lg-9 col-md-8">
                    {data.firstName + " " + data.lastName}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">Địa chỉ email</div>
                <div className="col-lg-9 col-md-8">{data.email}</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">Số điện thoại</div>
                <div className="col-lg-9 col-md-8">{data.phoneNumber}</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">Cập nhật lần cuối</div>
                <div className="col-lg-9 col-md-8">{data.lastUpdated}</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">Ngày tạo</div>
                <div className="col-lg-9 col-md-8">{data.whenCreated}</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">
                    Đăng nhập lần cuối
                </div>
                <div className="col-lg-9 col-md-8">{data.lastLoggedIn}</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">Số lần đăng nhập</div>
                <div className="col-lg-9 col-md-8">{data.loggedIn}</div>
            </div>
        </div>
    );
}

export default UserDetailTab;
