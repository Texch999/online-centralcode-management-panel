import React, { useState } from "react";
import Table from "../../components/Table";
import { GrEdit } from "react-icons/gr";
import { MdBlockFlipped } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import AddWebsitesPopup from "./popups/AddWebsitesPopup";

const AddWibsites = () => {
  const role = localStorage.getItem("role");
  const [onAddwebsitePopup, setOnAddwebsitePopup] = useState(false);

  const columns = [
    { header: "Type", field: "type", width: "15%" },
    { header: "Website Name", field: "websiteName", width: "25%" },
    { header: "Location", field: "location", width: "20%" },
    { header: "URL", field: "url", width: "20%" },
    {
      ...(role === "Super Admin"
        ? null
        : [{ header: <div className="ps-1">Action</div>, field: "action" }]),
    },
  ];

  const data = [
    {
      type: "Company",
      websiteName: "T Exchange",
      location: "Hyderabad, India",
      url: "www.texchange.com",
      action:
        role === "Super Admin" ? null : (
          <div className="d-flex gap-3">
            <GrEdit
              size={17}
              className="pointer "
              onClick={() => setOnAddwebsitePopup(true)}
            />
            <MdBlockFlipped size={17} className="pointer" />
          </div>
        ),
    },
    {
      type: "White Label",
      websiteName: "T Casino Park",
      location: "Delhi, India",
      url: "www.tcasinopark.com",
      action:
        role === "Super Admin" ? null : (
          <div className="d-flex gap-3">
            <GrEdit
              size={17}
              className="pointer "
              onClick={() => setOnAddwebsitePopup(true)}
            />
            <MdBlockFlipped size={17} className="pointer" />
          </div>
        ),
    },
    {
      type: "Company",
      websiteName: "Spark Book",
      location: "Hyderabad, India",
      url: "www.sparkbook.com",
      action:
        role === "Super Admin" ? null : (
          <div className="d-flex gap-3">
            <GrEdit
              size={17}
              className="pointer "
              onClick={() => setOnAddwebsitePopup(true)}
            />
            <MdBlockFlipped size={17} className="pointer" />
          </div>
        ),
    },
    {
      type: "White Label",
      websiteName: "Fun77",
      location: "Kolkata, India",
      url: "www.fun77.com",
      action:
        role === "Super Admin" ? null : (
          <div className="d-flex gap-3">
            <GrEdit
              size={17}
              className="pointer "
              onClick={() => setOnAddwebsitePopup(true)}
            />
            <MdBlockFlipped size={17} className="pointer" />
          </div>
        ),
    },
    {
      type: "Company",
      websiteName: "Diamond Exchange",
      location: "Kochi, India",
      url: "www.diamondexchange.com",
      action:
        role === "Super Admin" ? null : (
          <div className="d-flex gap-3">
            <GrEdit
              size={17}
              className="pointer "
              onClick={() => setOnAddwebsitePopup(true)}
            />
            <MdBlockFlipped size={17} className="pointer red-font" />
          </div>
        ),
    },
    {
      type: "Company",
      websiteName: "T Exchange",
      location: "Hyderabad, India",
      url: "www.texchange.com",
      action:
        role === "Super Admin" ? null : (
          <div className="d-flex gap-3">
            <GrEdit
              size={17}
              className="pointer "
              onClick={() => setOnAddwebsitePopup(true)}
            />
            <MdBlockFlipped size={17} className="pointer" />
          </div>
        ),
    },
    {
      type: "Company",
      websiteName: "T Exchange",
      location: "Hyderabad, India",
      url: "www.texchange.com",
      action:
        role === "Super Admin" ? null : (
          <div className="d-flex gap-3">
            <GrEdit
              size={17}
              className="pointer "
              onClick={() => setOnAddwebsitePopup(true)}
            />
            <MdBlockFlipped size={17} className="pointer" />
          </div>
        ),
    },
    {
      type: "Company",
      websiteName: "T Exchange",
      location: "Hyderabad, India",
      url: "www.texchange.com",
      action:
        role === "Super Admin" ? null : (
          <div className="d-flex gap-3">
            <GrEdit
              size={17}
              className="pointer "
              onClick={() => setOnAddwebsitePopup(true)}
            />
            <MdBlockFlipped size={17} className="pointer" />
          </div>
        ),
    },
    {
      type: "Company",
      websiteName: "T Exchange",
      location: "Hyderabad, India",
      url: "www.texchange.com",
      action:
        role === "Super Admin" ? null : (
          <div className="d-flex gap-3">
            <GrEdit
              size={17}
              className="pointer "
              onClick={() => setOnAddwebsitePopup(true)}
            />
            <MdBlockFlipped size={17} className="pointer" />
          </div>
        ),
    },
    {
      type: "Company",
      websiteName: "T Exchange",
      location: "Hyderabad, India",
      url: "www.texchange.com",
      action:
        role === "Super Admin" ? null : (
          <div className="d-flex gap-3">
            <GrEdit
              size={17}
              className="pointer "
              onClick={() => setOnAddwebsitePopup(true)}
            />
            <MdBlockFlipped size={17} className="pointer red-font" />
          </div>
        ),
    },
    {
      type: "Company",
      websiteName: "T Exchange",
      location: "Hyderabad, India",
      url: "www.texchange.com",
      action:
        role === "Super Admin" ? null : (
          <div className="d-flex gap-3">
            <GrEdit
              size={17}
              className="pointer "
              onClick={() => setOnAddwebsitePopup(true)}
            />
            <MdBlockFlipped size={17} className="pointer" />
          </div>
        ),
    },
    {
      type: "Company",
      websiteName: "T Exchange",
      location: "Hyderabad, India",
      url: "www.texchange.com",
      action:
        role === "Super Admin" ? null : (
          <div className="d-flex gap-3">
            <GrEdit
              size={17}
              className="pointer "
              onClick={() => setOnAddwebsitePopup(true)}
            />
            <MdBlockFlipped size={17} className="pointer" />
          </div>
        ),
    },
    {
      type: "Company",
      websiteName: "T Exchange",
      location: "Hyderabad, India",
      url: "www.texchange.com",
      action:
        role === "Super Admin" ? null : (
          <div className="d-flex gap-3">
            <GrEdit
              size={17}
              className="pointer "
              onClick={() => setOnAddwebsitePopup(true)}
            />
            <MdBlockFlipped size={17} className="pointer" />
          </div>
        ),
    },
  ];

  return (
    <div>
      <div className="row justify-content-between align-items-center mb-3 mt-2">
        <h6 className="col-2 yellow-font medium-font mb-0">Websites List</h6>

        <div className="col-6 d-flex justify-content-end gap-3 medium-font">
          <div className="input-pill d-flex align-items-center rounded-pill px-2 w-50">
            <FaSearch size={16} className="grey-clr me-2" />
            <input className="small-font all-none" placeholder="Search..." />
          </div>

          <button
            className="rounded-pill input-pill blue-font small-font px-2"
            onClick={() => setOnAddwebsitePopup(true)}
          >
            {" "}
            <FaPlus /> Add New Website{" "}
          </button>
        </div>
      </div>

      <div className="mt-2">
        <Table data={data} columns={columns} itemsPerPage={12} />
      </div>

      <AddWebsitesPopup
        show={onAddwebsitePopup}
        onHide={() => setOnAddwebsitePopup(false)}
      />
    </div>
  );
};

export default AddWibsites;