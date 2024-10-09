const TableUser = (props) => {
    const {
        listUser,
        handleShowModalUpdateUser,
        handleShowModalDeleteUser,
        handleShowModalViewUser,
    } = props;

    return (
        <>
            <table className="table table-bordered table-hover mt-3">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser &&
                        listUser.length > 0 &&
                        listUser.map((user, index) => {
                            return (
                                <tr key={`list user - ${index}`}>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => {
                                                handleShowModalViewUser(user);
                                            }}
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleShowModalUpdateUser(user);
                                            }}
                                            className="btn btn-warning mx-3"
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => {
                                                handleShowModalDeleteUser(user);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    {listUser && listUser.length === 0 && (
                        <tr>
                            <td>Not Found Data</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default TableUser;
