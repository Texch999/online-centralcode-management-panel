import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Modal, Button } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css"
import "../../../App.css";

const AddManagementPopup = ({
  formData,
  setFormData,
  onClose,
  onSubmit,
  show,
}) => {
  const [showPassword, setShowPassword] = React.useState({
    password: false,
    confirmPassword: false,
    managementPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <div className="d-flex justify-content-between align-items-center pt-4 px-4">
        <h6 className="mb-0 ms-2 medium-font black-font">
          {formData.name ? "Edit Management Team" : "Add Management Team"}
        </h6>
        <MdOutlineClose
          size={25}
          type="button"
          onClick={onClose}
          aria-label="Close"
        />
      </div>
      <Modal.Body>
        <form
          className="add-management-popup-form px-3"
          onSubmit={handleSubmit}
        >
          <div className="row mb-3">
            <div className="col">
              <label className="small-font">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-100 small-font rounded all-none input-css"
              >
                <option value="">Select</option>
                <option value="Accounts">Accounts</option>
                <option value="Designer">Designer</option>
                <option value="Company Team">Company Team</option>
              </select>
            </div>
            <div className="col">
              <label className="small-font">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="small-font rounded all-none input-css w-100"
                placeholder="Enter"
              />
            </div>
            <div className="col">
              <label className="small-font">Login Name</label>
              <input
                type="text"
                name="loginName"
                value={formData.loginName}
                onChange={handleChange}
                className="small-font rounded all-none input-css w-100"
                placeholder="Enter"
              />
            </div>
          </div>

          {/* Row 2: Phone Number, Password, Confirm Password */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="small-font">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="small-font rounded all-none input-css w-100"
                placeholder="Enter"
              />
            </div>
            <div className="col-md-4 position-relative">
              <label className="small-font">Password</label>
              <input
                type={showPassword.password ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="small-font rounded all-none input-css w-100"
                placeholder="Enter Password"
              />
              <span
                className="eye-icon"
                onClick={() => togglePasswordVisibility("password")}
                style={{
                  position: "absolute",
                  right: "10%",
                  top: "55%",
                  cursor: "pointer",
                }}
              >
                {showPassword.password ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="col-md-4 position-relative">
              <label className="small-font">Confirm Password</label>
              <input
                type={showPassword.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="small-font rounded all-none input-css w-100"
                placeholder="Re-enter Password"
              />
              <span
                className="eye-icon"
                onClick={() => togglePasswordVisibility("confirmPassword")}
                style={{
                  position: "absolute",
                  right: "10%",
                  top: "55%",
                  cursor: "pointer",
                }}
              >
                {showPassword.confirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          {/* Row 3: Email, Management Password, Submit Button */}
          <div className="row mb-3 align-items-end">
            <div className="col-md-4">
              <label className="small-font">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="small-font rounded all-none input-css w-100"
                placeholder="Enter"
              />
            </div>
            <div className="col-md-4 position-relative">
              <label className="small-font">Management Password</label>
              <input
                type={showPassword.managementPassword ? "text" : "password"}
                name="managementPassword"
                value={formData.managementPassword}
                onChange={handleChange}
                className="small-font rounded all-none input-css w-100"
                placeholder="Enter Password"
              />
              <span
                className="eye-icon"
                onClick={() => togglePasswordVisibility("managementPassword")}
                style={{
                  position: "absolute",
                  right: "10%",
                  top: "55%",
                  cursor: "pointer",
                }}
              >
                {showPassword.managementPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <Button className="saffron-btn w-100" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddManagementPopup;