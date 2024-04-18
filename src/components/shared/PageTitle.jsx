function PageTitle() {
    return (
        <div className="pagetitle col-3 mb-0">
            <h1>ActiveUsers Page</h1>
            <nav>
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item">Pages</li>
                    <li className="breadcrumb-item active">ActiveUsers</li>
                </ol>
            </nav>
        </div>
    );
}

export default PageTitle;
