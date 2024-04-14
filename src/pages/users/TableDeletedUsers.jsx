import { useEffect, useState } from "react";
import { fetchAllDeletedUsers } from "../../services/UserService";
import ReactPaginate from "react-paginate";

function TableDeletedUsers() {
    const [Users, setUsers] = useState([]);
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(15);
    const [totalItems, setTotalItems] = useState();
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        getUsers(0);
    }, []);

    const getUsers = pageIndex => {
        fetchAllDeletedUsers(pageIndex)
            .then(response => {
                setPageIndex(response.data.pageIndex);
                setPageSize(response.data.pageSize);
                setTotalItems(response.data.totalItems);
                setTotalPages(response.data.totalPages);
                setUsers(response.data.items);
            })
            .catch(error => console.log(error));
    };

    const renderUsers = items => items.map(item => renderUser(item));

    const handlePageClick = e => {
        getUsers(parseInt(e.selected));
    };

    const renderUser = item => (
        <tr>
            <th scope="row" className="align-middle">
                {item.id}
            </th>
            <td className="align-middle">{item.username}</td>
            <td className="align-middle">{item.firstName}</td>
            <td className="align-middle">{item.lastName}</td>
            <td className="align-middle">{item.email}</td>
            <td className="align-middle">{item.phoneNumber}</td>
            <td className="d-flex justify-content-center">
                <a
                    className="btn btn-secondary btn-sm mx-2"
                    href="#"
                    role="button"
                >
                    <i class="bi bi-eye"></i>
                </a>
                <button type="button" className="btn btn-warning btn-sm mx-2">
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm mx-2">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        </tr>
    );

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên đăng nhập</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Họ đệm</th>
                        <th scope="col">Hộp thư</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col" className="text-center">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody>{renderUsers(Users)}</tbody>
            </table>
            <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPages}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                />
            </div>
        </>
    );
}

export default TableDeletedUsers;
