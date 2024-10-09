import React from "react";
import "./ManageUser.scss";
import { useState, useEffect } from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FaUserPlus } from "react-icons/fa";
import TableUser from "./TableUser";
import { getAllUser } from "../../../Services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ModalViewUser from "./ModalViewUser";
const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [userUpdate, setUserUpdate] = useState({});
    const [userDelete, setUserDelete] = useState({});
    const [userView, setUserView] = useState({});
    const handleShowModalCreateUser = () => {
        setShowModalCreateUser(true);
    };

    const handleShowModalUpdateUser = (user) => {
        setShowModalUpdateUser(true);
        setUserUpdate(user);
    };

    const handleShowModalViewUser = (user) => {
        setShowModalViewUser(true);
        setUserView(user);
    };

    const handleShowModalDeleteUser = (user) => {
        setShowModalDeleteUser(true);
        setUserDelete(user);
    };

    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        let users = await getAllUser();
        if (users && users.EC === 0) {
            setListUser(users.DT);
        }
    };

    const resetUserData = () => {
        setUserUpdate({});
    };
    return (
        <div className="manage-user-container">
            <div className="title">Quản lý User</div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-primary d-flex align-items-center mt-3"
                        onClick={() => {
                            handleShowModalCreateUser();
                        }}
                    >
                        <FaUserPlus className="me-2" /> Add new user
                    </button>
                </div>
                <TableUser
                    handleShowModalUpdateUser={handleShowModalUpdateUser}
                    listUser={listUser}
                    handleShowModalDeleteUser={handleShowModalDeleteUser}
                    handleShowModalViewUser={handleShowModalViewUser}
                />
                <ModalCreateUser
                    fetchUser={fetchUser}
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    userUpdate={userUpdate}
                    fetchUser={fetchUser}
                    resetUserData={resetUserData}
                />
                <ModalViewUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    userView={userView}
                    fetchUser={fetchUser}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    userDelete={userDelete}
                />
            </div>
        </div>
    );
};

export default ManageUser;
