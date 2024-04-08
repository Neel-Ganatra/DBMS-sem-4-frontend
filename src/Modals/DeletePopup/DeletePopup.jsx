import React from "react";
import {Modal} from "react-bootstrap";
const DeletePopup = ({show, onHide}) => {
  return (
    <Modal show={show} onHide={onHide} backdrop="static" size="md" centered>
      <Modal.Header
        closeButton
        style={{
          display: "grid",
          placeItems: "end",
          width: "100% ",
          justifyContent: "end",
          border: "0",
        }}
      ></Modal.Header>
      <span className="span-delete-heres">View Post Detail</span>
      {/* <hr /> */}
      <Modal.Body>
        <div className="table-responsive-add">
          <div className="flex-delete-popup-refunds">
            <img src="" alt="" className="Two-img-popu-heres" />
            <div className="name-post-span" style={{marginTop: "0.8rem"}}>
              <span>Iron</span>
              <span>man</span>
            </div>
            <hr className="def-border-post" />
            <span className="span-delete-sure-you">
              Are you sure you want to delete this post?
            </span>
            <div className="post-want-flex-yes">
              <button
                style={{background: "red", color: "#fff"}}
                onClick={() => setOpen(false)}
              >
                No
              </button>
              <button
                style={{
                  background: "#fff",
                  color: "red",
                  border: "1px solid red",
                }}
                // onClick={() => handleDelete(item?.id)}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeletePopup;
