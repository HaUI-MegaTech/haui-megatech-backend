import { useEffect, useState } from "react";

const listItem = [
    {
        title: "1",
        child: [
            {
                title: "11",
                child: [
                    {
                        title: "111",
                    },
                    {
                        title: "112",
                    },
                ],
            },
            {
                title: "12",
                child: [
                    {
                        title: "121",
                    },
                    {
                        title: "122",
                    },
                ],
            },
        ],
    },
    {
        title: "2",
        child: [
            {
                title: "21",
                child: [
                    {
                        title: "211",
                    },
                    {
                        title: "212",
                    },
                ],
            },
            {
                title: "22",
                child: [
                    {
                        title: "221",
                    },
                    {
                        title: "222",
                    },
                ],
            },
        ],
    },
];

function UserUpdateTab(props) {
    const { show, data } = props;
    const [province, setProvince] = useState();
    const [district, setDistrict] = useState();
    const [conmmue, setCommune] = useState();

    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);
    const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
    const [avatarImageUrl, setAvatarImageUrl] = useState(data.avatarImageUrl);

    useEffect(() => {
        show && (document.title = "Cập nhật thông tin");
        console.log(province);
        console.log("hi");
    }, [show, province]);

    const renderProvinces = items => (
        <select
            className="form-select"
            aria-label="Default select example"
            onChange={e => setProvince(e.target.value)}
        >
            <option selected>Tỉnh/Thành phố</option>
            {items.map(item => (
                <option value={item.title}>{item.title}</option>
            ))}
        </select>
    );

    const renderDistricts = items => (
        <select
            className="form-select"
            aria-label="Default select example"
            onChange={e => setDistrict(e.target.value)}
            disabled={province ? false : true}
        >
            {items.map(item => (
                <option value={item.title}>{item.title}</option>
            ))}
        </select>
    );

    const renderCommunes = items => (
        <select
            className="form-select"
            aria-label="Default select example"
            onChange={e => setCommune(e.target.value)}
            disabled={province && district ? false : true}
        >
            {items.map(item => (
                <option value={item.title}>{item.title}</option>
            ))}
        </select>
    );

    return (
        <div
            className={`tab-pane fade profile-edit pt-3 ${
                show && "show active"
            }`}
            id="/user/update"
        >
            <form>
                <div className="row mb-3">
                    <label
                        htmlFor="profileImage"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Ảnh đại diện
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <img src={avatarImageUrl} alt="Profile" />
                        <div className="pt-2">
                            <a
                                href="#"
                                className="btn btn-primary btn-sm"
                                title="Upload new profile image"
                            >
                                <i className="bi bi-upload"></i>
                            </a>
                            <a
                                href="#"
                                className="btn btn-danger btn-sm"
                                title="Remove my profile image"
                            >
                                <i className="bi bi-trash"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="firstName"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Tên
                    </label>
                    <div className="col-md-3 col-lg-3">
                        <input
                            name="firstName"
                            type="text"
                            className="form-control"
                            id="firstName"
                            value={firstName}
                        />
                    </div>

                    <label
                        htmlFor="lastName"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Họ đệm
                    </label>
                    <div className="col-md-3 col-lg-3">
                        <input
                            name="lastName"
                            type="text"
                            className="form-control"
                            id="lastName"
                            value={lastName}
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="email"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Địa chỉ email
                    </label>
                    <div className="col-md-3 col-lg-3">
                        <input
                            name="email"
                            type="text"
                            className="form-control"
                            id="email"
                            value={email}
                        />
                    </div>

                    <label
                        htmlFor="phoneNumber"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Số điện thoại
                    </label>
                    <div className="col-md-3 col-lg-3">
                        <input
                            name="phoneNumber"
                            type="text"
                            className="form-control"
                            id="phoneNumber"
                            value={phoneNumber}
                        />
                    </div>
                </div>

                {/* <div className="row mb-3">
                    <label
                        htmlFor="Address"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Địa chỉ
                    </label>
                    <div className="col-sm-4 col-md-3">
                        {renderProvinces(listItem)}
                    </div>
                    <div className="col-sm-4 col-md-3">
                        {province ? (
                            renderDistricts(
                                listItem.find(item => item.title === province)
                                    .child,
                            )
                        ) : (
                            <select className="form-select">
                                <option>Quận/Huyện</option>
                            </select>
                        )}
                    </div>
                    <div className="col-sm-4 col-md-3">
                        {province && district ? (
                            renderCommunes(
                                listItem
                                    .find(item => item.title === province)
                                    .child.find(item => item.title === district)
                                    .child,
                            )
                        ) : (
                            <select className="form-select">
                                <option>Xã/Phường</option>
                            </select>
                        )}
                    </div>
                </div> */}

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserUpdateTab;
