import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../Services/apiService";
import { toast } from "react-toastify";

const ModalDeleteUser = (props) => {
    const { show, setShow, userDelete, fetchUser } = props;

    const handleClose = () => setShow(false);

    const handleDeleteUser = async () => {
        const data = await deleteUser(userDelete.id);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await fetchUser();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    };
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Confirm user deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this user? Email :{" "}
                    <b>
                        {userDelete && userDelete.email ? userDelete.email : ""}
                    </b>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDeleteUser}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDeleteUser;
