import PageTitle from "../../components/shared/PageTitle";
import TableDeletedUsers from "../../components/users/TableDeletedUsers";

function DeletedUsers() {
    return (
        <main id="main" className="main">
            <div className="row d-flex justify-content-between mb-3">
                <PageTitle />
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
