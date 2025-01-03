import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../../../App.css";
import Fancy from "./Fancy";
import LiveScoreBoard from "./LiveScoreboard";

const IndividualMatchOddsLive = () => {
  const [oddsLiveButton, setoddsLiveButton] = useState("odds");
  const navigate = useNavigate();
  const { sport } = useParams();


  return (
    <div className="">
      <div className="flex-between mb-3 mt-2">
        <div className="d-flex align-items-center">
          <IoIosArrowBack
            className="yellow-font medium-font me-1 pointer"
          />
          <h6 className="m-0 cursor-pointer medium-font" onClick={() => navigate(-1)}>
            Sports Live Settings
          </h6>
          <IoIosArrowForward className="medium-font yellow-font mx-2" />
          <span className="yellow-font medium-font">{sport}</span>
        </div>
        <div className="input-pill d-flex align-items-center rounded-pill px-2">
          <FaSearch size={16} className="grey-clr me-2" />
          <input
            className="small-font all-none border-0 outline-none"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="row d-flex px-3">
        <div className="col-6 d-flex align-items-center input-css2 rounded py-2">
          <div className="col-4 small-font border-2 px-2">
            <div>Live</div>
            <div>01-10-2024 16:11:00</div>
          </div>
          <div className="col-4 small-font border-start border-2 px-2">
            <div>ICICI T20 Women World Cup 2024</div>
            <div>Market ID: 1.11045677544</div>
          </div>
          <div className="col-4 small-font border-start border-2 px-2">
            <div>New Zealand Wo vs South Africa Wo</div>
            <div>Match ID: 11023843754858</div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-6 ps-3 d-flex justify-content-between align-items-center p-0">
          <div className="d-flex gap-3">
            <button
              className={`col-7 small-font px-2 ${
                oddsLiveButton === "odds" ? "saffron-btn rounded" : "input-css2"
              }`}
              onClick={() => setoddsLiveButton("odds")}
            >
              Odds
            </button>
            <button
              className={`col-7 small-font ${
                oddsLiveButton === "live-score"
                  ? "saffron-btn rounded"
                  : "input-css2"
              }`}
              onClick={() => setoddsLiveButton("live-score")}
            >
              Live Score
            </button>
          </div>
          <div className="d-flex align-items-center">
            <span className="medium-font">P/L:</span>
            <button className="white-btn2 medium-font green-font ms-2">10000000</button>
          </div>
        </div>
      </div>
      {oddsLiveButton === "odds" && <Fancy />}
      {oddsLiveButton === "live-score" && <LiveScoreBoard sport={sport}/>}
    </div>
  );
};

export default IndividualMatchOddsLive;

