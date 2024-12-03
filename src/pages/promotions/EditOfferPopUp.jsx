import React from "react";
import { IoClose } from "react-icons/io5";
import Modal from "react-bootstrap/Modal";
import { MdOutlineFileUpload } from "react-icons/md";
import { Images } from "../../images";

const EditOfferPopUp = ({ editOffer, setEditOffer }) => {
  return (
    <>
      <Modal
        show={editOffer}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="d-flex w-100 flex-between">
            <h6 className="fw-600">Edit Offer</h6>
            <IoClose className="pointer" onClick={() => setEditOffer(false)} />
          </div>

          <div className="row mt-3 small-font">
          <label className="black-text4 small-font " htmlFor="poster">
          Upload New Poster
              <input type="file" style={{ display: "none" }} id="poster" />
              <div className="input-bg small-font d-flex flex-between p-2 rounded mt-2">
                Select File <MdOutlineFileUpload />
              </div>
            </label>
            

            <div className="col-12 flex-column mt-3 ">
              <label className="black-text4 mb-1">Offer Text</label>
              <textarea
                placeholder="Enter"
                className="all-none input-bg small-font p-2 rounded"
                rows="4"
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <div className="col-12 flex-column mt-3 ">
              <label className="black-text4 mb-1">Preview</label>
              <div className="relative p-1 col-7">
              <img src={Images.promotion2} alt="Poster"  className="w-100"/>
              <div className="balck-btn small-font me-1 w-100">
              100% Welcome bonus up 
              to 33000 INR
              </div>
             

             
            </div>
            </div>
            <div className="row">
              
              <div className="saffron-btn2 ms-2 small-font pointer mt-4 col-12">
               Submit
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditOfferPopUp;
