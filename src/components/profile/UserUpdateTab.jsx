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
    const { show } = props;
    const [province, setProvince] = useState();
    const [district, setDistrict] = useState();
    const [conmmue, setCommune] = useState();

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
                        Profile Image
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <img src="assets/img/profile-img.jpg" alt="Profile" />
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
                        htmlFor="fullName"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Full Name
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <input
                            name="fullName"
                            type="text"
                            className="form-control"
                            id="fullName"
                            value="Kevin Anderson"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="about"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        About
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <textarea
                            name="about"
                            className="form-control"
                            id="about"
                            style={{ height: 100 }}
                        >
                            Sunt est soluta temporibus accusantium neque nam
                            maiores cumque temporibus. Tempora libero non est
                            unde veniam est qui dolor. Ut sunt iure rerum quae
                            quisquam autem eveniet perspiciatis odit. Fuga sequi
                            sed ea saepe at unde.
                        </textarea>
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="company"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Company
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <input
                            name="company"
                            type="text"
                            className="form-control"
                            id="company"
                            value="Lueilwitz, Wisoky and Leuschke"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="Job"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Job
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <input
                            name="job"
                            type="text"
                            className="form-control"
                            id="Job"
                            value="Web Designer"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="Country"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Country
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <input
                            name="country"
                            type="text"
                            className="form-control"
                            id="Country"
                            value="USA"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="Address"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Address
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
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="Phone"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Phone
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <input
                            name="phone"
                            type="text"
                            className="form-control"
                            id="Phone"
                            value="(436) 486-3538 x29071"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="Email"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Email
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="Email"
                            value="k.anderson@example.com"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="Twitter"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Twitter Profile
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <input
                            name="twitter"
                            type="text"
                            className="form-control"
                            id="Twitter"
                            value="https://twitter.com/#"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="Facebook"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Facebook Profile
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <input
                            name="facebook"
                            type="text"
                            className="form-control"
                            id="Facebook"
                            value="https://facebook.com/#"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="Instagram"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Instagram Profile
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <input
                            name="instagram"
                            type="text"
                            className="form-control"
                            id="Instagram"
                            value="https://instagram.com/#"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <label
                        htmlFor="Linkedin"
                        className="col-md-3 col-lg-3 col-form-label"
                    >
                        Linkedin Profile
                    </label>
                    <div className="col-md-9 col-lg-9">
                        <input
                            name="linkedin"
                            type="text"
                            className="form-control"
                            id="Linkedin"
                            value="https://linkedin.com/#"
                        />
                    </div>
                </div>

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
