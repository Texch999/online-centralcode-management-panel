import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Table from "../../components/Table";
import { IoEyeOutline } from "react-icons/io5";
import ActionPopup from "../casino/ActionPopup";

const SportProviders = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { vendor, provider } = location.state || {};
  const handleGameMatches = (match) => {
    if (provider === "Odds") {
      navigate("/cricket", { state: { vendor, provider, match } });
    } else if (provider === "fancy") {
      navigate("/fancy-cricket", { state: { vendor, provider, match } });
    } else if (provider === "Bookmaker 1") {
      navigate("/cricket-bookmaker", { state: { vendor, provider, match } });
    } else if (provider === "Bookmaker 2") {
      navigate("/cricket-bookmaker", { state: { vendor, provider, match } });
    } else if (provider === "Live Streaming") {
      navigate("/cricket-livestreaming", {
        state: { vendor, provider, match },
      });
    } else if (provider === "Scoreboard") {
      navigate("/cricket-scoreboard", {
        state: { vendor, provider, match },
      });
    }
  };
  const [isActive, setIsACtive] = useState(false);
  const handleActiveModal = () => {
    setIsACtive(!isActive);
  };
  const cols = [
    { header: <div className="flex-center">S No</div>, field: "sno" },
    { header: "Games", field: "games" },
    { header: "", field: "eye" },
    { header: "Status", field: "status" },

    { header: "Profit & Loss", field: "pl" },
    { header: "Action", field: "action" },
  ];

  const data = [
    {
      sno: <div className="flex-center">1</div>,
      games: (
        <div className="pointer" onClick={() => handleGameMatches("Cricket")}>
          Cricket{" "}
        </div>
      ),
      eye: (
        <div className="d-flex flex-column pointer">
          <span
            className=" font-20"
            onClick={() => handleGameMatches("Cricket")}
          >
            <IoEyeOutline className="orange-clr" />
          </span>
        </div>
      ),
      status: (
        <div className="green-clr">
          <span className="round-green-dot mx-1"></span>ON
        </div>
      ),
      pl: <div className="dark-orange-clr">500000</div>,
      action: (
        <div class="form-check form-switch" onClick={handleActiveModal}>
          <input
            class="form-check-input w-40"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      ),
    },
    {
      sno: <div className="flex-center">2</div>,
      games: (
        <div className="pointer" onClick={() => handleGameMatches("Football")}>
          Football
        </div>
      ),
      eye: (
        <div className="d-flex flex-column pointer">
          <span
            className=" font-20"
            onClick={() => handleGameMatches("Football")}
          >
            <IoEyeOutline className="orange-clr" />
          </span>
        </div>
      ),
      status: (
        <div className="dark-orange-clr">
          <span className="round-red-dot mx-1"></span>OFF
        </div>
      ),
      pl: <div className="dark-orange-clr">500000</div>,
      action: (
        <div class="form-check form-switch">
          <input
            class="form-check-input w-40"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      ),
    },
    {
      sno: <div className="flex-center">3</div>,
      games: (
        <div className="pointer" onClick={() => handleGameMatches("Tennis")}>
          Tennis
        </div>
      ),
      eye: (
        <div className="d-flex flex-column pointer">
          <span
            className=" font-20"
            onClick={() => handleGameMatches("Tennis")}
          >
            <IoEyeOutline className="orange-clr" />
          </span>
        </div>
      ),

      status: (
        <div className="green-clr">
          <span className="round-green-dot mx-1"></span>ON
        </div>
      ),
      pl: <div className="dark-orange-clr">500000</div>,
      action: (
        <div class="form-check form-switch">
          <input
            class="form-check-input w-40"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      ),
    },
    {
      sno: <div className="flex-center">4</div>,
      games: (
        <div className="pointer" onClick={() => handleGameMatches("Sic Bo")}>
          Sic bo
        </div>
      ),
      eye: (
        <div className="d-flex flex-column">
          <span
            className=" font-20"
            onClick={() => handleGameMatches("Sic Bo")}
          >
            <IoEyeOutline className="orange-clr" />
          </span>
        </div>
      ),
      status: (
        <div className="dark-orange-clr">
          <span className="round-red-dot mx-1"></span>OFF
        </div>
      ),
      pl: <div className="dark-orange-clr">500000</div>,
      action: (
        <div class="form-check form-switch">
          <input
            class="form-check-input w-40"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      ),
    },
    {
      sno: <div className="flex-center">5</div>,
      games: (
        <div
          className="pointer"
          onClick={() => handleGameMatches("Table Game")}
        >
          Tables Game
        </div>
      ),
      eye: (
        <div className="d-flex flex-column">
          <span
            className=" font-20"
            onClick={() => handleGameMatches("Table Game")}
          >
            <IoEyeOutline className="orange-clr" />
          </span>
        </div>
      ),
      status: (
        <div className="dark-orange-clr">
          <span className="round-red-dot mx-1"></span>OFF
        </div>
      ),
      pl: <div className="dark-orange-clr">500000</div>,
      action: (
        <div class="form-check form-switch">
          <input
            class="form-check-input w-40"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      ),
    },
    {
      sno: <div className="flex-center">6</div>,
      games: (
        <div
          className="pointer"
          onClick={() => handleGameMatches("Black Jack")}
        >
          Black Jack
        </div>
      ),
      eye: (
        <div className="d-flex flex-column">
          <span
            className=" font-20"
            onClick={() => handleGameMatches("Black Jack")}
          >
            <IoEyeOutline className="orange-clr" />
          </span>
        </div>
      ),
      status: (
        <div className="dark-orange-clr">
          <span className="round-red-dot mx-1"></span>OFF
        </div>
      ),
      pl: <div className="dark-orange-clr">500000</div>,
      action: (
        <div class="form-check form-switch">
          <input
            class="form-check-input w-40"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="d-flex flex-between">
        <div className="pointer large-font" onClick={() => navigate(-1)}>
          <span className="grey-clr">
            Sports <span className="mx-1 font-20">{">"}</span>
          </span>
          <span className="grey-clr">{vendor}</span>
          <span>
            <span className="mx-1 font-20">{">"}</span>

            <span className="fw-800"> {provider}</span>
          </span>
        </div>

        <div className="small-font">
          Total P/L : <span className="green-clr mx-1">20000</span>
        </div>
      </div>

      <div className="radius mt-3">
        <Table columns={cols} data={data} itemsPerPage={3} />
      </div>
      <ActionPopup show={isActive} setShow={setIsACtive} />
    </div>
  );
};

export default SportProviders;
