import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FiFilePlus } from "react-icons/fi";
import _ from "lodash";

const ModalViewUser = (props) => {
    const { show, setShow, userView } = props;
    const handleClose = () => {
        setShow(false);
    };
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="md"
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={userView.email}
                                readOnly
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={userView.password}
                                readOnly
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={userView.username}
                                readOnly
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select
                                id="inputState"
                                className="form-select"
                                value={userView.role}
                                readOnly
                            >
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label
                                htmlFor="labelUpload"
                                className="form-label label-upload d-flex align-items-center justify-content-start"
                            >
                                <FiFilePlus
                                    className="me-2"
                                    size="20px"
                                    color="green"
                                />
                                Upload File Image
                            </label>
                            <input type="file" hidden id="labelUpload" />
                        </div>

                        <div className="col-12 img-preview">
                            {userView.image ? (
                                <img
                                    src={`data:image/png;base64,${userView.image}`}
                                />
                            ) : (
                                <span>Img Preview</span>
                            )}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalViewUser;
