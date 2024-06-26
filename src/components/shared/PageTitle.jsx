function PageTitle(props) {
    const { title, level1, level2, level3 } = props;
    return (
        <div className="pagetitle col-3 mb-0">
            <h1>{title}</h1>
            <nav>
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <a href="index.html">{level1}</a>
                    </li>
                    <li className="breadcrumb-item">{level2}</li>
                    <li className="breadcrumb-item active">{level3}</li>
                </ol>
            </nav>
        </div>
    );
}

export default PageTitle;
