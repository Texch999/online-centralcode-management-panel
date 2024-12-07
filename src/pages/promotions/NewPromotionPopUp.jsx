import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import Modal from "react-bootstrap/Modal";

const NewPromotionPopUp = ({ setAddNewModal, addNewModal }) => {
  return (
    <Modal show={addNewModal} size="md" centered>
      <Modal.Body>
        <div className="d-flex w-100 flex-between">
          <h6 className="mb-0 fw-600">New Promotion Type</h6>
          <IoCloseSharp
            size={20}
            onClick={() => setAddNewModal(false)}
            className="pointer"
          />
        </div>
        <div className="row mt-3 small-font">
          <div className="col-12 flex-column">
            <label className="black-text4 mb-1">Promotion</label>
            <select className="input-bg all-none p-2 small-font rounded">
              <option>All</option>
            </select>
          </div>
          <div className="col-12 flex-column mt-3 ">
            <label className="black-text4 mb-1">Promotion Type</label>
            <textarea
              placeholder="Enter"
              className="all-none input-bg small-font p-2 rounded"
              rows="3"
              style={{ resize: "none" }}
            />
          </div>
          <div className="row">
            <div className="saffron-btn2 small-font pointer mt-4 ms-3 col-12">
              Create
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default NewPromotionPopUp;
