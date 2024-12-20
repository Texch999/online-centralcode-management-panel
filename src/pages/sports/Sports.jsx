import React, { useState } from "react";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import ConfirmationPopup from "../popups/ConfirmationPopup";
import { BsEye } from "react-icons/bs";

const Sports = () => {
  const navigate = useNavigate();
  const handleSportNextPage = (vendor, provider) => {
    navigate(`/central-sports/${vendor}/${provider}`);
  };
  const [isActive, setIsACtive] = useState(false);
  const handleActiveModal = () => {
    setIsACtive(!isActive);
  };
  const cols = [
    {
      header: "S No",
      field: "sno",
      width: "8%",
    },
    { header: "VendorName & Company", field: "vendorname", width: "20%" },
    { header: "Vendor %", field: "vendorper", width: "10%" },
    { header: "Vendor Monthly", field: "vendormon", width: "10%" },
    { header: "Vendor Country", field: "country", width: "10%" },
    {
      header: (
        <div className="d-flex w-100">
          <div className="col-3">Providers</div>
          <div className="col-1 flex-center"></div>
          <div className="col-2 flex-center">Action</div>
          <div className="col-3 flex-center">Profit&Loss</div>
          <div className="col-3 flex-end">Status</div>
        </div>
      ),
      field: "all",
      width: "42%",
    },
  ];
  const data = [
    {
      sno: 1,
      vendorname: (
        <div className="d-flex flex-column">
          <div>Jitendra</div>
          <div>TExchange</div>
        </div>
      ),
      vendorper: <div>15%</div>,
      vendormon: <div>50000</div>,
      country: <div>India</div>,
      all: (
        <div className="flex-column">
          <div className="d-flex w-100 mb-2">
            <div
              className="col-3"
              onClick={() => handleSportNextPage("Jitendra", "Odds")}
            >
              Odds
            </div>
            <div className="col-1">
              <BsEye
                className="orange-clr"
                size={18}
                onClick={() => handleSportNextPage("Jitendra", "Odds")}
              />
            </div>
            <div className="col-2 d-flex justify-content-center">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-3 flex-center green-clr">10000000</div>
            <div className="col-3 d-flex justify-content-end">
              <span className="active-btn-table d-flex">Active</span>
            </div>
          </div>
          <div className="d-flex w-100 mb-2">
            <div
              className="col-3"
              onClick={() => handleSportNextPage("Jitendra", "Bookmaker 1")}
            >
              Bookmaker 1
            </div>
            <div className="col-1">
              <BsEye
                className="orange-clr"
                size={18}
                onClick={() => handleSportNextPage("Jitendra", "Bookmaker 1")}
              />
            </div>
            <div className="col-2 d-flex justify-content-center">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-3 flex-center green-clr">10000000</div>
            <div className="col-3 d-flex justify-content-end">
              <span className="inactive-btn-table d-flex">In-Active</span>
            </div>
          </div>
          <div className="d-flex w-100 mb-2">
            <div
              className="col-3"
              onClick={() => handleSportNextPage("Jitendra", "Bookmaker 2")}
            >
              Bookmaker 2
            </div>
            <div className="col-1">
              <BsEye
                className="orange-clr"
                size={18}
                onClick={() => handleSportNextPage("Jitendra", "Bookmaker 2")}
              />
            </div>
            <div className="col-2 d-flex justify-content-center">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-3 flex-center green-clr">10000000</div>
            <div className="col-3 d-flex justify-content-end">
              <span className="active-btn-table d-flex">Active</span>
            </div>
          </div>
          <div className="d-flex w-100 mb-2">
            <div
              className="col-3"
              onClick={() => handleSportNextPage("Jitendra", "Fancy")}
            >
              Fancy
            </div>
            <div className="col-1">
              <BsEye
                className="orange-clr"
                size={18}
                onClick={() => handleSportNextPage("Jitendra", "Fancy")}
              />
            </div>
            <div className="col-2 d-flex justify-content-center">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-3 flex-center green-clr">10000000</div>
            <div className="col-3 d-flex justify-content-end">
              <span className="inactive-btn-table d-flex">In-Active</span>
            </div>
          </div>
          <div className="d-flex w-100 mb-2">
            <div
              className="col-3"
              onClick={() => handleSportNextPage("Jitendra", "Live Streaming")}
            >
              Live Streaming
            </div>
            <div className="col-1">
              <BsEye
                className="orange-clr"
                size={18}
                onClick={() =>
                  handleSportNextPage("Jitendra", "Live Streaming")
                }
              />
            </div>
            <div className="col-2 d-flex justify-content-center">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-3 flex-center green-clr">10000000</div>
            <div className="col-3 d-flex justify-content-end">
              <span className="active-btn-table d-flex">Active</span>
            </div>
          </div>
          <div className="d-flex w-100 mb-2">
            <div
              className="col-3"
              onClick={() => handleSportNextPage("Jitendra", "Scoreboard")}
            >
              Scoreboard
            </div>
            <div className="col-1">
              <BsEye
                className="orange-clr"
                size={18}
                onClick={() => handleSportNextPage("Jitendra", "Scoreboard")}
              />
            </div>
            <div className="col-2 d-flex justify-content-center">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-3 flex-center green-clr">10000000</div>
            <div className="col-3 d-flex justify-content-end">
              <span className="inactive-btn-table d-flex">In-Active</span>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="">
      <div className="d-flex flex-between align-items-center mt-3 mb-2">
        <h6 className="mb-0">Sports</h6>
        <div className="medium-font">
          Total P/L : <span className="green-clr mx-1">20000</span>
        </div>
      </div>
      <Table columns={cols} data={data} itemsPerPage={3} />
      <ConfirmationPopup
        confirmationPopupOpen={isActive}
        setConfirmationPopupOpen={setIsACtive}
        discription={"Are You Sure to Active this Match"}
        submitButton={"Active"}
      />
    </div>
  );
};

export default Sports;
