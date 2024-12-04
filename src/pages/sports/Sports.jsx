import React, { useState } from "react";
import Table from "../../components/Table";
import { IoEye, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ActionPopup from "../casino/ActionPopup";

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
    { header: <div className="flex-center">S No</div>, field: "sno" },
    { header: "Vendor Name & Company", field: "vendorname" },
    { header: "vendor Percentage", field: "vendorper" },
    { header: "vendor Monthly", field: "vendormon" },
    { header: "Vendor Country", field: "country" },
    {
      header: (
        <div className="d-flex flex-between row">
          <div className="col-4">Providers</div>
          <div className="col-2"></div>
          <div className="col-2">Action</div>
          <div className="col-2">PL</div>
          <div className="col-2">Status</div>
        </div>
      ),
      field: "all",
    },
  ];
  const data = [
    {
      sno: <div className="flex-center">2</div>,
      vendorname: (
        <div className="d-flex flex-column">
          <div>Lokesh</div>
          <div>Fun77</div>
        </div>
      ),
      vendorper: <div>15%</div>,
      vendormon: <div>50000</div>,
      country: <div>India</div>,
      all: (
        <div className="d-flex flex-column">
          <div className="d-flex flex-between pointer">
            <div
              className="py-2 col-4"
              onClick={() => handleSportNextPage("Jitendra", "Odds")}
            >
              ODDS
            </div>

            <div className="col-2">
              <span
                className=" font-20"
                onClick={() => handleSportNextPage("Jitendra", "Odds")}
              >
                <IoEyeOutline className="orange-clr" />
              </span>
            </div>
            <div className="col-2">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-2 green-clr">10000</div>
            <div className="active-btn-table col-2">Active</div>
          </div>

          <div className="d-flex flex-between pointer">
            <div
              className="py-2 col-4"
              onClick={() => handleSportNextPage("Jitendra", "Bookmaker 1")}
            >
              Bookmaker 1
            </div>

            <div className="col-2">
              <span
                className=" font-20"
                onClick={() => handleSportNextPage("Jitendra", "Bookmaker 1")}
              >
                <IoEyeOutline className="orange-clr" />
              </span>
            </div>
            <div className="col-2">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-2 green-clr">10000</div>
            <div className="active-btn-table col-2">Active</div>
          </div>

          <div className="d-flex flex-between pointer">
            <div
              className="py-2 col-4"
              onClick={() => handleSportNextPage("Jitendra", "Bookmaker 2")}
            >
              Bookmaker 2
            </div>

            <div className="col-2">
              <span
                className=" font-20"
                onClick={() => handleSportNextPage("Jitendra", "Bookmaker 2")}
              >
                <IoEyeOutline className="orange-clr" />
              </span>
            </div>
            <div className="col-2">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-2 dark-orange-clr">10000</div>
            <div className="inactive-btn-table col-2">In-Active</div>
          </div>

          <div className="d-flex flex-between pointer">
            <div
              className="py-2 col-4"
              onClick={() => handleSportNextPage("Jitendra", "Fancy")}
            >
              Fancy
            </div>

            <div className="col-2">
              <span
                className=" font-20"
                onClick={() => handleSportNextPage("Jitendra", "Fancy")}
              >
                <IoEyeOutline className="orange-clr" />
              </span>
            </div>
            <div className="col-2">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-2 dark-orange-clr ">10000</div>
            <div className="inactive-btn-table col-2">In-Active</div>
          </div>

          <div className="d-flex flex-between pointer">
            <div
              className="py-2 col-4"
              onClick={() => handleSportNextPage("Jitendra", "Live Streaming")}
            >
              Live Streaming
            </div>

            <div className="col-2">
              <span
                className=" font-20"
                onClick={() =>
                  handleSportNextPage("Jitendra", "Live Streaming")
                }
              >
                <IoEyeOutline className="orange-clr" />
              </span>
            </div>
            <div className="col-2">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-2 dark-orange-clr">10000</div>
            <div className="inactive-btn-table col-2">In-Active</div>
          </div>

          <div className="d-flex flex-between pointer">
            <div
              className="py-2 col-4"
              onClick={() => handleSportNextPage("Jitendra", "Scoreboard")}
            >
              Scoreboard
            </div>

            <div className="col-2">
              <span
                className=" font-20"
                onClick={() => handleSportNextPage("Jitendra", "Scoreboard")}
              >
                <IoEyeOutline className="orange-clr" />
              </span>
            </div>
            <div className="col-2">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-2 dark-orange-clr">10000</div>
            <div className="inactive-btn-table col-2">In-Active</div>
          </div>
        </div>
      ),
    },
    {
      sno: <div className="flex-center">2</div>,
      vendorname: (
        <div className="d-flex flex-column">
          <div>Lokesh</div>
          <div>Fun77</div>
        </div>
      ),
      vendorper: <div>-</div>,
      vendormon: <div>50000</div>,
      country: <div>India</div>,
      all: (
        <div className="d-flex flex-column">
          <div className="d-flex flex-between pointer">
            <div
              className="py-2 col-4"
              onClick={() => handleSportNextPage("Lokesh", "Odds")}
            >
              ODDS
            </div>

            <div className="col-2">
              <span
                className=" font-20"
                onClick={() => handleSportNextPage("Lokesh", "Odds")}
              >
                <IoEyeOutline className="orange-clr" />
              </span>
            </div>
            <div className="col-2">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-2 green-clr">10000</div>
            <div className="active-btn-table col-2">Active</div>
          </div>

          <div className="d-flex flex-between pointer">
            <div
              className="py-2 col-4"
              onClick={() => handleSportNextPage("Lokesh", "Bookmaker 1")}
            >
              Bookmaker 1
            </div>

            <div className="col-2">
              <span
                className=" font-20"
                onClick={() => handleSportNextPage("Lokesh", "Bookmaker 1")}
              >
                <IoEyeOutline className="orange-clr" />
              </span>
            </div>
            <div className="col-2">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-2 green-clr">10000</div>
            <div className="active-btn-table col-2">Active</div>
          </div>

          <div className="d-flex flex-between pointer">
            <div
              className="py-2 col-4"
              onClick={() => handleSportNextPage("Lokesh", "Bookmaker 2")}
            >
              Bookmaker 2
            </div>

            <div className="col-2">
              <span
                className=" font-20"
                onClick={() => handleSportNextPage("Lokesh", "Bookmaker 2")}
              >
                <IoEyeOutline className="orange-clr" />
              </span>
            </div>
            <div className="col-2">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-2 dark-orange-clr">10000</div>
            <div className="inactive-btn-table col-2">In-Active</div>
          </div>

          <div className="d-flex flex-between pointer">
            <div
              className="py-2 col-4"
              onClick={() => handleSportNextPage("Lokesh", "Fancy")}
            >
              Fancy
            </div>

            <div className="col-2">
              <span
                className=" font-20"
                onClick={() => handleSportNextPage("Lokesh", "Fancy")}
              >
                <IoEyeOutline className="orange-clr" />
              </span>
            </div>
            <div className="col-2">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-2 dark-orange-clr">10000</div>
            <div className="inactive-btn-table col-2">In-Active</div>
          </div>

          <div className="d-flex flex-between pointer">
            <div
              className="py-2 col-4"
              onClick={() => handleSportNextPage("Lokesh", "Live Streaming")}
            >
              Live Streaming
            </div>

            <div className="col-2">
              <span
                className=" font-20"
                onClick={() => handleSportNextPage("Lokesh", "Live Streaming")}
              >
                <IoEyeOutline className="orange-clr" />
              </span>
            </div>
            <div className="col-2">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-2 dark-orange-clr">10000</div>
            <div className="inactive-btn-table col-2">In-Active</div>
          </div>

          <div className="d-flex flex-between pointer">
            <div
              className="py-2 col-4"
              onClick={() => handleSportNextPage("Lokesh", "Scoreboard")}
            >
              Scoreboard
            </div>

            <div className="col-2">
              <span
                className=" font-20"
                onClick={() => handleSportNextPage("Lokesh", "Scoreboard")}
              >
                <IoEyeOutline className="orange-clr" />
              </span>
            </div>
            <div className="col-2">
              <div class="form-check form-switch" onClick={handleActiveModal}>
                <input
                  class="form-check-input w-40"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-2 dark-orange-clr">10000</div>
            <div className="inactive-btn-table col-2">In-Active</div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="">
      <div className="d-flex flex-between align-items-center">
        <h4 className="my-2">Sports</h4>
        <div className="small-font">
          Total P/L : <span className="green-clr mx-1">20000</span>
        </div>
      </div>
      <div className="radius-20">
        <Table columns={cols} data={data} itemsPerPage={3} />
      </div>
      <ActionPopup show={isActive} setShow={setIsACtive} />
    </div>
  );
};

export default Sports;
