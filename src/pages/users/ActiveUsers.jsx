import AddUserModal from "./AddUserModal";
import TableActiveUsers from "./TableActiveUsers";
import TableUsers from "./TableActiveUsers";

function ActiveUsers() {
    const handleShow = () => {};

    return (
        <main id="main" className="main">
            <div className="row d-flex justify-content-between">
                <div className="pagetitle col-3">
                    <h1>ActiveUsers Page</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="breadcrumb-item">Pages</li>
                            <li className="breadcrumb-item active">
                                ActiveUsers
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-end">
                    <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#addUser"
                    >
                        Thêm mới
                    </button>
                </div>
            </div>

            <section className="section">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <TableActiveUsers />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AddUserModal />
        </main>
    );
}

export default ActiveUsers;
