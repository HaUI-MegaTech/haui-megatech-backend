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
            class="form-select"
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
            class="form-select"
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
            class="form-select"
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
            class={`tab-pane fade profile-edit pt-3 ${show && "show active"}`}
            id="/user/update"
        >
            <form>
                <div class="row mb-3">
                    <label
                        for="profileImage"
                        class="col-md-3 col-lg-3 col-form-label"
                    >
                        Profile Image
                    </label>
                    <div class="col-md-9 col-lg-9">
                        <img src="assets/img/profile-img.jpg" alt="Profile" />
                        <div class="pt-2">
                            <a
                                href="#"
                                class="btn btn-primary btn-sm"
                                title="Upload new profile image"
                            >
                                <i class="bi bi-upload"></i>
                            </a>
                            <a
                                href="#"
                                class="btn btn-danger btn-sm"
                                title="Remove my profile image"
                            >
                                <i class="bi bi-trash"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="row mb-3">
                    <label
                        for="fullName"
                        class="col-md-3 col-lg-3 col-form-label"
                    >
                        Full Name
                    </label>
                    <div class="col-md-9 col-lg-9">
                        <input
                            name="fullName"
                            type="text"
                            class="form-control"
                            id="fullName"
                            value="Kevin Anderson"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="about" class="col-md-3 col-lg-3 col-form-label">
                        About
                    </label>
                    <div class="col-md-9 col-lg-9">
                        <textarea
                            name="about"
                            class="form-control"
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

                <div class="row mb-3">
                    <label
                        for="company"
                        class="col-md-3 col-lg-3 col-form-label"
                    >
                        Company
                    </label>
                    <div class="col-md-9 col-lg-9">
                        <input
                            name="company"
                            type="text"
                            class="form-control"
                            id="company"
                            value="Lueilwitz, Wisoky and Leuschke"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="Job" class="col-md-3 col-lg-3 col-form-label">
                        Job
                    </label>
                    <div class="col-md-9 col-lg-9">
                        <input
                            name="job"
                            type="text"
                            class="form-control"
                            id="Job"
                            value="Web Designer"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <label
                        for="Country"
                        class="col-md-3 col-lg-3 col-form-label"
                    >
                        Country
                    </label>
                    <div class="col-md-9 col-lg-9">
                        <input
                            name="country"
                            type="text"
                            class="form-control"
                            id="Country"
                            value="USA"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <label
                        for="Address"
                        class="col-md-3 col-lg-3 col-form-label"
                    >
                        Address
                    </label>
                    <div class="col-sm-4 col-md-3">
                        {renderProvinces(listItem)}
                    </div>
                    <div class="col-sm-4 col-md-3">
                        {province ? (
                            renderDistricts(
                                listItem.find(item => item.title === province)
                                    .child,
                            )
                        ) : (
                            <select class="form-select">
                                <option>Quận/Huyện</option>
                            </select>
                        )}
                    </div>
                    <div class="col-sm-4 col-md-3">
                        {province && district ? (
                            renderCommunes(
                                listItem
                                    .find(item => item.title === province)
                                    .child.find(item => item.title === district)
                                    .child,
                            )
                        ) : (
                            <select class="form-select">
                                <option>Xã/Phường</option>
                            </select>
                        )}
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="Phone" class="col-md-3 col-lg-3 col-form-label">
                        Phone
                    </label>
                    <div class="col-md-9 col-lg-9">
                        <input
                            name="phone"
                            type="text"
                            class="form-control"
                            id="Phone"
                            value="(436) 486-3538 x29071"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <label for="Email" class="col-md-3 col-lg-3 col-form-label">
                        Email
                    </label>
                    <div class="col-md-9 col-lg-9">
                        <input
                            name="email"
                            type="email"
                            class="form-control"
                            id="Email"
                            value="k.anderson@example.com"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <label
                        for="Twitter"
                        class="col-md-3 col-lg-3 col-form-label"
                    >
                        Twitter Profile
                    </label>
                    <div class="col-md-9 col-lg-9">
                        <input
                            name="twitter"
                            type="text"
                            class="form-control"
                            id="Twitter"
                            value="https://twitter.com/#"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <label
                        for="Facebook"
                        class="col-md-3 col-lg-3 col-form-label"
                    >
                        Facebook Profile
                    </label>
                    <div class="col-md-9 col-lg-9">
                        <input
                            name="facebook"
                            type="text"
                            class="form-control"
                            id="Facebook"
                            value="https://facebook.com/#"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <label
                        for="Instagram"
                        class="col-md-3 col-lg-3 col-form-label"
                    >
                        Instagram Profile
                    </label>
                    <div class="col-md-9 col-lg-9">
                        <input
                            name="instagram"
                            type="text"
                            class="form-control"
                            id="Instagram"
                            value="https://instagram.com/#"
                        />
                    </div>
                </div>

                <div class="row mb-3">
                    <label
                        for="Linkedin"
                        class="col-md-3 col-lg-3 col-form-label"
                    >
                        Linkedin Profile
                    </label>
                    <div class="col-md-9 col-lg-9">
                        <input
                            name="linkedin"
                            type="text"
                            class="form-control"
                            id="Linkedin"
                            value="https://linkedin.com/#"
                        />
                    </div>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserUpdateTab;