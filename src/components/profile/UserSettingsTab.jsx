import { useEffect } from "react";

function UserSettingsTab(props) {
    const { show } = props;

    useEffect(() => {
        show && (document.title = "Thiết lập tài khoản");
    }, [show]);

    return (
        <div
            className={`tab-pane fade pt-3 ${show && "show active"}`}
            id="/user/settings"
        >
            <form>
                <div className="row mb-3">
                    <label
                        for="fullName"
                        className="col-md-4 col-lg-3 col-form-label"
                    >
                        Email Notifications
                    </label>
                    <div className="col-md-8 col-lg-9">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="changesMade"
                                checked
                            />
                            <label
                                className="form-check-label"
                                for="changesMade"
                            >
                                Changes made to your account
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="newProducts"
                                checked
                            />
                            <label
                                className="form-check-label"
                                for="newProducts"
                            >
                                Information on new products and services
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="proOffers"
                            />
                            <label className="form-check-label" for="proOffers">
                                Marketing and promo offers
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="securityNotify"
                                checked
                                disabled
                            />
                            <label
                                className="form-check-label"
                                for="securityNotify"
                            >
                                Security alerts
                            </label>
                        </div>
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

export default UserSettingsTab;
