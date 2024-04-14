import TableProducts from "../../components/products/TableProducts";

function ActiveProducts() {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>ActiveProducts Page</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">Pages</li>
                        <li className="breadcrumb-item active">
                            ActiveProducts
                        </li>
                    </ol>
                </nav>
            </div>

            <section className="section">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body pb-0">
                                <TableProducts />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ActiveProducts;
