import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Table from "../../components/Table";
import { IoAddOutline } from "react-icons/io5";
import { MdBlockFlipped } from "react-icons/md";
import { SlPencil } from "react-icons/sl";
import { FaRegTrashCan } from "react-icons/fa6";
import NewPromotionPopUp from "./NewPromotionPopUp";
import { Images } from "../../images";
import { TbArrowsDiagonal } from "react-icons/tb";
import FullPosterPopUp from "./FullPosterPopUp";
import { MdOutlineFileUpload } from "react-icons/md";
import EditPosterPopUp from "./EditPosterPopUp";

const PromotionType = () => {
  const [activeBtn, setActiveBtn] = useState("Promotion Type");
  const [addNewModal, setAddNewModal] = useState(false);
  const [fullPoster, setFullPoster] = useState(false);
  const [editPoster, setEditPoster] = useState(false);
  const ACTIVE_BTNS = ["Promotion Type", "Poster Templates"];

  const handleSportClick = (item) => {
    setActiveBtn(activeBtn === item ? null : item);
  };

  const CASINO_COLUMNS = [
    { header: "Date & Time", field: "dateTime" },
    { header: "Promotion Place", field: "promotionPlace" },
    { header: "Promotion Type", field: "promotionType" },
    { header: "Promotion ID", field: "promotionid" },
    { header: "", field: "icons" },
  ];
  const CASINO_DATA = [
    {
      dateTime: <div>1-10-2024 16:11:00</div>,
      promotionPlace: <div>Cricket</div>,
      promotionType: <div>1st Deposit Bonus</div>,
      promotionid: <div>1234568774432</div>,

      icons: (
        <div className="flex-end">
          <SlPencil size={18} />
          <MdBlockFlipped size={18} className="mx-3" />
          <FaRegTrashCan size={18} />
        </div>
      ),
    },
    {
      dateTime: <div>1-10-2024 16:11:00</div>,
      promotionPlace: <div>Cricket</div>,
      promotionType: <div>1st Deposit Bonus</div>,
      promotionid: <div>1234568774432</div>,

      icons: (
        <div className="flex-end">
          <SlPencil size={18} />
          <MdBlockFlipped size={18} className="mx-3" />
          <FaRegTrashCan size={18} />
        </div>
      ),
    },
    {
      dateTime: <div>1-10-2024 16:11:00</div>,
      promotionPlace: <div>Cricket</div>,
      promotionType: <div>1st Deposit Bonus</div>,
      promotionid: <div>1234568774432</div>,

      icons: (
        <div className="flex-end">
          <SlPencil size={18} />
          <MdBlockFlipped size={18} className="mx-3" />
          <FaRegTrashCan size={18} />
        </div>
      ),
    },
  ];
  const CRICKET_COLUMNS = [
    { header: "Date & Time", field: "dateTime", width: "10%" },
    { header: "Poster Type", field: "posterType", width: "50%" },
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
      posterType: <div>Cricket</div>,
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
          <SlPencil
            size={18}
            className="pointer me-2"
            onClick={() => setEditPoster(!editPoster)}
          />
          <FaRegTrashCan size={18} className="pointer ms-2" />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex-between mb-3 mt-2">
        <h6 className="yellow-font mb-0">Promotion Type</h6>
        <div className="input-pill d-flex align-items-center rounded-pill px-2">
          <FaSearch size={16} className="grey-clr me-2" />
          <input className="small-font all-none" placeholder="Search..." />
        </div>
      </div>
      <div className="d-flex small-font">
        {ACTIVE_BTNS?.map((item, index) => (
          <div
            key={index}
            className={`me-4 ${
              activeBtn === item
                ? "saffron-btn2  px-3"
                : "white-btn2 pointer px-3"
            }`}
            onClick={() => handleSportClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      {activeBtn === "Promotion Type" ? (
        <>
          <div className="d-flex align-items-end justify-content-between w-100 my-3 small-font">
            <div className="flex-column col-3">
              <label className="black-text4 mb-1">Promotion</label>
              <select className="w-100 input-css2">
                <option>All</option>
              </select>
            </div>
            <div
              className="saffron-btn2 pointer"
              onClick={() => setAddNewModal(!addNewModal)}
            >
              <IoAddOutline size={18} className="me-1" />
              <span>Add New</span>
            </div>
          </div>
          <Table columns={CASINO_COLUMNS} data={CASINO_DATA} itemsPerPage={2} />
        </>
      ) : (
        <>
          <div className="d-flex w-50 flex-between my-3">
            <div className="col-4 flex-column me-3">
              <label className="black-text4 small-font mb-1">
                Promotion Type
              </label>
              <select className="input-css2 small-font">
                <option>General Poster</option>
              </select>
            </div>
            <div className="col-6 flex-column me-3 ">
              <label className="black-text4 small-font mb-1">
                Upload Poster{" "}
              </label>
              <label htmlFor="poster">
                <input type="file" style={{ display: "none" }} id="poster" />
                <div className="input-css2 small-font d-flex flex-between">
                  Upload <MdOutlineFileUpload size={16} />
                </div>
              </label>
            </div>
            <div className="saffron-btn2 small-font pointer mt-4 col-2 mx-2">
              Submit
            </div>
          </div>
          <Table
            columns={CRICKET_COLUMNS}
            data={CRICKET_DATA}
            itemsPerPage={2}
          />
        </>
      )}

      <NewPromotionPopUp
        addNewModal={addNewModal}
        setAddNewModal={setAddNewModal}
      />
      <FullPosterPopUp setFullPoster={setFullPoster} fullPoster={fullPoster} />
      <EditPosterPopUp setEditPoster={setEditPoster} editPoster={editPoster} />
    </div>
  );
};

export default PromotionType;
