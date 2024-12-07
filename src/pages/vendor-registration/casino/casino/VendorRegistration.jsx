import React, { useState } from "react";
import Table from "../../../../components/Table";
import { MdOutlineEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import AddNewProvider from "./AddNewProvider";
import RegisterNewVendor from "./RegisterNewVendor";
import { SlPencil } from "react-icons/sl";

const VendorRegistration = () => {
  const buttons = ["Vendor List", "Register New Vendor"];
  const [activeBtn, setActiveBtn] = useState(0);
  const [addNewProvider, setAddNewProvider] = useState(false);
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const [isEditVendor, setISEditVendor] = useState(false);

  const showEditModal = () => {
    setISEditVendor(true);
  };

  const addNewProviderModal = () => {
    setIsActiveBtn(true);
    setAddNewProvider(!addNewProvider);
  };

  const handleClick = (index) => {
    setActiveBtn(index);
  };

  const cols = [
    { header: "S No", field: "sno" },
    { header: "Vendor Name", field: "vendor" },
    { header: "vendor Percentage", field: "vendorper" },
    { header: "Vendor Country", field: "country" },
    { header: "Providers", field: "providers" },
    { header: "Profit & Loss", field: "pl" },
    { header: "Action", field: "action" },
  ];

  const data = [
    {
      sno: <div>1</div>,
      vendor: <div className="orange-clr">Jitendra</div>,
      vendorper: <div>15%</div>,
      country: <div>UK</div>,
      providers: (
        <div className="d-flex flex-column">
          <div className="py-2">Ezugi</div>
          <div className="py-2">Evolution</div>
          <div className="py-2">Asian Games</div>
          <div className="py-2">Pragmatic Play</div>
          <div className="py-2">Sexy Gaming</div>
        </div>
      ),
      pl: (
        <div className="d-flex flex-column">
          <div className="green-clr py-2">50000</div>
          <div className="dark-orange-clr py-2">60000</div>
          <div className="green-clr py-2">20000</div>
          <div className="green-clr py-2">40000</div>
          <div className="dark-orange-clr py-2">65000</div>
        </div>
      ),
      action: (
        <div onClick={showEditModal} className="pointer">
          <SlPencil size={18} className="pointer me-1 orange-clr" />
        </div>
      ),
    },
    {
      sno: <div>2</div>,
      vendor: <div className="orange-clr">Lokesh</div>,
      vendorper: <div>15%</div>,
      country: <div>UK</div>,
      providers: (
        <div className="d-flex flex-column">
          <div className="py-2">Ezugi</div>
          <div className="py-2">Evolution</div>
          <div className="py-2">Asian Games</div>
          <div className="py-2">Pragmatic Play</div>
          <div className="py-2">Sexy Gaming</div>
        </div>
      ),
      pl: (
        <div className="d-flex flex-column">
          <div className="green-clr py-2">50000</div>
          <div className="dark-orange-clr py-2">60000</div>
          <div className="green-clr py-2">20000</div>
          <div className="green-clr py-2">40000</div>
          <div className="dark-orange-clr py-2">65000</div>
        </div>
      ),
      action: (
        <div className="pointer" onClick={showEditModal}>
          <SlPencil size={18} className="pointer me-1 orange-clr" />
        </div>
      ),
    },
  ];

  return (
    <div className="">
      <h4 className="black-text mt-3 mb-2">Register Vendor</h4>
      <div className="d-flex flex-between medium-font">
        <div className="d-flex">
          {buttons.map((btn, index) => {
            return (
              <div
                key={index}
                className={`px-3 py-1 me-2 white-box pointer ${
                  activeBtn === index ? "active-saffron-btn " : ""
                }`}
                onClick={() => {
                  handleClick(index);
                  setIsActiveBtn(null);
                }}
              >
                {btn}
              </div>
            );
          })}
        </div>
        <div
          className={`flex-center white-bg grey-border px-3 py-1 rounded-pill me-2 pointer black-text2 ${
            isActiveBtn === true ? "saffron-btn" : ""
          }`}
          onClick={() => {
            addNewProviderModal();
          }}
        >
          <IoMdAdd size={19} />
          <span className="ps-2 medium-font">Add New Provider</span>
        </div>
      </div>

      <div className="mt-3">
        {activeBtn === 0 && (
          <div>
            {isEditVendor ? (
              <div>
                <RegisterNewVendor
                  isEdit={isEditVendor}
                  setIsEdit={setISEditVendor}
                />
              </div>
            ) : (
              <div className="radius box-shadow">
                <Table columns={cols} data={data} itemsPerPage={4} />
              </div>
            )}
          </div>
        )}
        {activeBtn === 1 && (
          <div>
            <RegisterNewVendor />
          </div>
        )}
      </div>

      <AddNewProvider show={addNewProvider} setShow={setAddNewProvider} />
    </div>
  );
};

export default VendorRegistration;
