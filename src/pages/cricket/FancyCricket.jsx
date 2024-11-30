import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { MdBlock } from "react-icons/md";
import Table from "./../../components/Table";
import BlockPopup from "../popups/BlockPopup";

const FancyCricket = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { vendor, provider, match } = location.state || {};
  const handleFancyMatch = (individualMatch) => {
    navigate("/fancy-individual-match", {
      state: { vendor, provider, match, individualMatch },
    });
  };
  const [showBlockModal, setShowBlockModal] = useState(false);

  const handleBlockModal = () => {
    setShowBlockModal(!showBlockModal);
  };

  const cols = [
    { header: "", field: "watch" },
    { header: "Date & Time", field: "date" },
    { header: "Matches/ID", field: "match" },
    { header: "Series Name/ID", field: "series" },
    { header: <div className="flex-center">Profit & Loss</div>, field: "pl" },
    { header: <div className="flex-start">Action</div>, field: "action" },
  ];

  const data = [
    {
      watch: (
        <div className="inplay-btn w-fit py-1 px-2 my-1 mx-2">In Play</div>
      ),
      date: (
        <div className="d-flex flex-column">
          <div>21-09-2024</div>
          <div>08:00:00</div>
        </div>
      ),
      match: (
        <div className="d-flex flex-column">
          <div>New Zealand vs India</div>
          <div>12345678912343455</div>
        </div>
      ),
      series: (
        <div className="d-flex flex-column">
          <div>ICC Women T20 world cup</div>
          <div>12345678912343455</div>
        </div>
      ),
      pl: <div className="flex-center green-clr">10000</div>,
      action: (
        <div class="d-flex mt-1">
          <div className="pointer" onClick={handleBlockModal}>
            <MdBlock className="font-20 grey-clr" />
          </div>
          <div
            className="pointer"
            onClick={() =>
              handleFancyMatch(
                "New Zealand vs India(ICC Women T20 WC) 21-09-2024 08:00:00"
              )
            }
          >
            <IoEyeOutline className="font-20 ms-2 orange-clr" />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="d-flex flex-between mb-3">
        <div className="pointer large-font" onClick={() => navigate(-1)}>
          <span className="grey-clr">
            Sports <span className="mx-1 font-20">{">"}</span>
          </span>
          <span className="grey-clr">{vendor}</span>
          <span className="grey-clr">
            <span className="mx-1 font-20 grey-clr">{">"}</span>
            {provider}
          </span>
          <span>
            <span className="mx-1 font-20">{">"}</span>
            <span className="fw-600">{match}</span>
          </span>
        </div>
        <div className="small-font">
          Total P/L : <span className="green-clr mx-1">20000</span>
        </div>
      </div>

      <div>
        <Table columns={cols} data={data} itemsPerPage={4} />
      </div>

      <BlockPopup
        show={showBlockModal}
        setShow={setShowBlockModal}
        title={"Fancy Cricket Match"}
      />
    </div>
  );
};

export default FancyCricket;