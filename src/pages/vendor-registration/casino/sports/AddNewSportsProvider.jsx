import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { IoMdAdd } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

const AddNewSportsProvider = ({show,setShow}) => {
    const [addnewGame, setAddNewGame] = useState(false);

    const handleGameBtn = () => {
      setAddNewGame((prevState)=>!prevState);
    };
  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
    <div className="p-2">
      <div className="d-flex flex-between text-black px-2">
        <div className="medium-font">Select New Provider</div>
        <div onClick={() => setShow(false)} className="font-20">
          <IoClose/>
        </div>
      </div>
      <div className="flex-column small-font">
        <div className="felx-column px-2 text-black  my-2">
          <label className="small-font mb-1">Providers</label>
          <select className="input-css small-font w-100 d-flex pointer">
            <option className="grey-clr">Select</option>
            <option className="text-black">provider1</option>
            <option className="text-black">provider1</option>
            <option className="text-black">provider1</option>
          </select>
        </div>

        <div className="flex-column px-2 text-black my-2">
          <label className="small-font mb-1">Games</label>
          <select className="input-css small-font w-100">
            <option className="grey-clr">Select</option>
            <option className="text-black">game1</option>
            <option className="text-black">game1</option>
            <option className="text-black">game1</option>
          </select>
        </div>

        <div className="d-flex flex-end align-items-center px-2 my-2">
          <div
            className="input-css radius-20 small-font text-black pointer px-2"
            onClick={handleGameBtn}
          >
            {addnewGame ? (
              <span>
                <IoClose className="mx-1" />
                Close
              </span>
            ) : (
              <span>
                <IoMdAdd className="mx-1" />
                Add New Game
              </span>
            )}
          </div>
        </div>
        {addnewGame === true && (
          <div className="px-2 my-2">
            <input
              type="text"
              placeholder="Enter Game"
              className="input-css small-font text-black w-100 pointer"
            />
          </div>
        )}

        <div className="my-2 saffron-btn2 br-5 mx-2 pointer">Submit</div>
      </div>
    </div>
  </Modal>
  )
}

export default AddNewSportsProvider