import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Table from "../../components/Table";
import { IoAddOutline } from "react-icons/io5";
import { SlPencil } from "react-icons/sl";
import { FaRegTrashCan } from "react-icons/fa6";
import { Images } from "../../images";
import { TbArrowsDiagonal } from "react-icons/tb";
import FullPosterPopUp from "./FullPosterPopUp";
import AddNewPromotionPopUp from "./AddNewPromotionPopUp";
import Select from "react-select";
import { customStyles } from "../../components/ReactSelectStyles";
import "../add-team/style.css";
import ConfirmationPopup from "../popups/ConfirmationPopup";

const SportsPromotions = () => {
  const [activeBtn, setActiveBtn] = useState("Admin Promotion");
  const [addPromotionsModal, setAddPromotionsModal] = useState(false);
  const [fullPoster, setFullPoster] = useState(false);
  const [userPromotion, setUserPromotion] = useState(false);
  const [promotionDeleteModal, setPromotionDeleteModal] = useState(false);
  const [editPromotionModel, setEditPromotionModel] = useState(null);

  const ACTIVE_BTNS = ["Admin Promotion", "User Promotion"];

  const handleSportClick = (item) => {
    setActiveBtn(item);
  };

  const handleAddNew = () => {
    setEditPromotionModel("Add New Promotion");
    setAddPromotionsModal(true);
  };

  const handleEdit = () => {
    setEditPromotionModel("Edit New Promotion");
    setAddPromotionsModal(true);
  };

  useEffect(() => {
    if (activeBtn === "User Promotion") {
      setUserPromotion(true);
    } else {
      setUserPromotion(false);
    }
  }, [activeBtn]);

  const selectOptions = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ];

  const CRICKET_COLUMNS = [
    { header: "Date & Time", field: "dateTime", width: "10%" },
    { header: "Sports", field: "sports", width: "10%" },
    { header: "Poster Type", field: "posterType", width: "15%" },
    { header: "Promotion Msg", field: "promotionMsg", width: "15%" },
    { header: "Websites", field: "websites", width: "15%" },
    { header: <div className="flex-center">Poster</div>, field: "Poster" },
    {
      header: <div className="flex-center">Action</div>,
      field: "action",
      width: "10%",
    },
  ];

  const CRICKET_DATA = [
    {
      dateTime: (
        <div>
          1-10-2024
          <br />
          16:11:00
        </div>
      ),
      sports: <div>Cricket</div>,
      posterType: (
        <div>
          1st Deposit Bonus <br />{" "}
          <span className="yellow-font">Code: ABCD234XY</span>
        </div>
      ),
      promotionMsg: (
        <div>
          Welcome Package Rs 15000 <br />
          off Upto 100000
        </div>
      ),
      websites: <div>www.texchange.com</div>,
      Poster: (
        <div className="flex-center">
          <div className="relative poster-img">
            <img src={Images.Poster1} alt="Poster" />
            <TbArrowsDiagonal
              className="absolute zoom-out white-bg pointer"
              size={18}
              onClick={() => setFullPoster(!fullPoster)}
            />
          </div>
        </div>
      ),
      action: (
        <div className="flex-center">
          <SlPencil size={18} className="me-2 pointer" onClick={handleEdit} />
          <FaRegTrashCan
            size={18}
            className="ms-2 pointer"
            onClick={() => setPromotionDeleteModal(true)}
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex-between mb-3 mt-2">
        <h6 className="yellow-font mb-0">Sports Promotion</h6>
        <div className="input-pill d-flex align-items-center rounded-pill px-2">
          <FaSearch size={16} className="grey-clr me-2" />
          <input className="small-font all-none" placeholder="Search..." />
        </div>
      </div>
      <div className="d-flex small-font">
        {ACTIVE_BTNS?.map((item, index) => (
          <div
            key={index}
            className={`me-3 ${
              activeBtn === item ? "saffron-btn2" : "white-btn2 pointer"
            }`}
            onClick={() => handleSportClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="d-flex w-100 flex-between my-3">
        <div className="d-flex w-60 flex-between">
          <div className="col-3 flex-column me-2">
            <label className="black-text4 small-font mb-1">From</label>
            <input className="input-css2 small-font" type="date" />
          </div>
          <div className="col-3 flex-column mx-2">
            <label className="black-text4 small-font mb-1">To</label>
            <input className="input-css2 small-font" type="date" />
          </div>
          <div className="col-3 flex-column me-3">
            <label className="black-text4 small-font mb-1">Website</label>
            <Select
              className="small-font"
              options={selectOptions}
              placeholder="Select"
              styles={customStyles}
              maxMenuHeight={120}
              menuPlacement="auto"
              classNamePrefix="custom-react-select"
            />
          </div>
          <div className="col-3 flex-column me-3">
            <label className="black-text4 small-font mb-1">Sports</label>
            <Select
              className="small-font"
              options={selectOptions}
              placeholder="Select"
              styles={customStyles}
              maxMenuHeight={120}
              menuPlacement="auto"
              classNamePrefix="custom-react-select"
            />
          </div>
          <div className="align-self-end saffron-btn2 small-font pointer col-2">
            Submit
          </div>
        </div>
        <div
          className="white-bg align-self-end p-2 grey-border flex-center blue-font br-10 small-font pointer w-10"
          onClick={handleAddNew}
        >
          <IoAddOutline className="medium-font" />
          <span className="small-font">Add New</span>
        </div>
      </div>
      <div className="mt-4 ">
        {activeBtn === "Admin Promotion" ? (
          <Table
            columns={CRICKET_COLUMNS}
            data={CRICKET_DATA}
            itemsPerPage={2}
          />
        ) : (
          <Table
            columns={CRICKET_COLUMNS}
            data={CRICKET_DATA}
            itemsPerPage={2}
          />
        )}
      </div>
      <AddNewPromotionPopUp
        setAddPromotionsModal={setAddPromotionsModal}
        addPromotionsModal={addPromotionsModal}
        userPromotion={userPromotion}
        editPromotionModel={editPromotionModel}
      />
      <FullPosterPopUp setFullPoster={setFullPoster} fullPoster={fullPoster} />
      <ConfirmationPopup
        confirmationPopupOpen={promotionDeleteModal}
        setConfirmationPopupOpen={() => setPromotionDeleteModal(false)}
        discription={"are you sure you want to delete this Promotion"}
        submitButton={"Delete"}
      />
    </div>
  );
};

export default SportsPromotions;
