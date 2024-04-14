import TableDeletedUsers from "../../components/users/TableDeletedUsers";

function DeletedUsers() {
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
                                Deleted Users
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section className="section">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <TableDeletedUsers />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default DeletedUsers;
