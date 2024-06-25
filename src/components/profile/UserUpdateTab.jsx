import { useEffect, useState } from "react";
import { updateMyInfo } from "../../services/UserService";
import { toast } from "react-toastify";

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
    const { show, data, getData } = props;
    const [province, setProvince] = useState();
    const [district, setDistrict] = useState();
    const [conmmue, setCommune] = useState();

    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);
    const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
    const [avatarImageUrl, setAvatarImageUrl] = useState(data.avatarImageUrl);
    const [avatar, setAvatar] = useState();
    const [previewAvatar, setPreviewAvatar] = useState();

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

    const handleFileChange = e => {
        setAvatar(e.target.files[0]);
        const fileUrl = URL.createObjectURL(e.target.files[0]);
        setPreviewAvatar(fileUrl);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        await updateMyInfo({ firstName, lastName, email, phoneNumber, avatar })
            .then(response => {
                if (response && response.status === 200) {
                    toast.success(response.data.meta.message);
                    getData();
                }
            })
            .catch(error => {
                toast.error(error.response.data.meta.message);
            });
    };

    return (
        <div
            className={`tab-pane fade profile-edit pt-3 ${
                show && "show active"
            }`}
            id="/user/update"
        >
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row mb-3">
                    <label
                        htmlFor="profileImage"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Ảnh đại diện
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <img
                            src={previewAvatar ? previewAvatar : avatarImageUrl}
                            className="mw-50"
                        />
                        <div className="pt-2">
                            <label
                                href="#"
                                className="btn btn-primary btn-sm text-white"
                                title="Upload new profile image"
                                for="avatar"
                            >
                                Tải ảnh đại diện&nbsp;
                                <i className="bi bi-upload"></i>
                            </label>
                            <input
                                type="file"
                                id="avatar"
                                className="d-none"
                                onChange={handleFileChange}
                            />
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
                            onChange={e => setFirstName(e.target.value)}
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
                            onChange={e => setLastName(e.target.value)}
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
                            onChange={e => setEmail(e.target.value)}
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
                            onChange={e => setPhoneNumber(e.target.value)}
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
                        Lưu thay đổi
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserUpdateTab;
