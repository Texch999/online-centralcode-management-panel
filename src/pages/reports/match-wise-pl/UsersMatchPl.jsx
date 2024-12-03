import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdEdit, MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Table from "../../../components/Table";
import { IoEye } from "react-icons/io5";
import { FaRotate } from "react-icons/fa6";
import "../../home/style.css";

const UsersMatchPl = () => {
  const navigate = useNavigate();
  const { matchName, role, userDetails } = useParams();

  const cols = [
    { header: "Date & Time", field: "date" },
    { header: "User/Market Name", field: "user" },
    { header: "Game Name-M/match ID", field: "matchid" },
    { header: "Bet Placed", field: "bet" },
    { header: "Selection", field: "selection" },
    { header: <div className="flex-center">P/L</div>, field: "pl" },
    { header: <div className="flex-center">Status</div>, field: "status" },
  ];

  const data = [
    {
      date: (
        <div className="d-flex flex-column">
          <div>01-10-2024</div>
          <div>16:11:00</div>
        </div>
      ),
      user: (
        <div className="d-flex flex-column">
          <div>M.Name: T Exchange </div>
          <div>{"User: Srinivas > Ag: Jayanta >"}</div>
          <div>{"Mas: Lokesh > S M: Sangram > "}</div>
          <div>{"S A: Sudheer > Adm: Nani >  "}</div>
        </div>
      ),
      matchid: (
        <div className="d-flex flex-column">
          <div>
            Match: South Africa Women's vs New Zealand Women's (T20 Women's
            World Cup 2024)
          </div>
          <div>Match ID: 11023843754858</div>
          <div>M ID: 1.11045677544</div>
        </div>
      ),
      bet: <div>Odds</div>,
      selection: (
        <div className="d-flex flex-column">
          <div>Selection: South Africa Wo.. Side: Back</div>
          <div>Odds Rate: 1.50</div>
          <div>B. Amount: 100000</div>
          <div>B. ID: 11023843754858</div>
        </div>
      ),
      pl: (
        <div className="d-flex flex-column flex-center">
          <div className="green-clr mb-4">10000000</div>
          <div>Result: South Africa Wo..</div>
        </div>
      ),
      status: (
        <div className="d-flex flex-column flex-center ">
          <div className="green-btn">settled</div>
          <div className="flex-between my-2 ">
            <MdOutlineEdit className="text-black font-20 pointer" />
            <MdOutlineDelete className="text-black font-20 ms-3 pointer" />
          </div>
        </div>
      ),
    },
    {
      date: (
        <div className="d-flex flex-column dark-orange-clr">
          <div>01-10-2024</div>
          <div>16:11:00</div>
        </div>
      ),
      user: (
        <div className="d-flex flex-column dark-orange-clr">
          <div>M.Name: T Exchange </div>
          <div>{"User: Srinivas > Ag: Jayanta >"}</div>
          <div>{"Mas: Lokesh > S M: Sangram > "}</div>
          <div>{"S A: Sudheer > Adm: Nani >  "}</div>
        </div>
      ),
      matchid: (
        <div className="d-flex flex-column dark-orange-clr">
          <div>
            Match: South Africa Women's vs New Zealand Women's (T20 Women's
            World Cup 2024)
          </div>
          <div>Match ID: 11023843754858</div>
          <div>M ID: 1.11045677544</div>
        </div>
      ),
      bet: <div className="dark-orange-clr">Odds</div>,
      selection: (
        <div className="d-flex flex-column dark-orange-clr">
          <div>Selection: South Africa Wo.. Side: Back</div>
          <div>Odds Rate: 1.50</div>
          <div>B. Amount: 100000</div>
          <div>B. ID: 11023843754858</div>
        </div>
      ),
      pl: <div className="mb-4 flex-center dark-orange-clr">10000000</div>,
      status: (
        <div className="d-flex flex-column flex-center ">
          <div className="red-btn">Deleted</div>
          <div className="flex-between my-2 ">
            <FaRotate className="dark-orange-clr font-20 pointer" />
          </div>
        </div>
      ),
    },

    {
      date: (
        <div className="d-flex flex-column orange-clr">
          <div>01-10-2024</div>
          <div>16:11:00</div>
        </div>
      ),
      user: (
        <div className="d-flex flex-column orange-clr">
          <div>M.Name: T Exchange </div>
          <div>{"User: Srinivas > Ag: Jayanta >"}</div>
          <div>{"Mas: Lokesh > S M: Sangram > "}</div>
          <div>{"S A: Sudheer > Adm: Nani >  "}</div>
        </div>
      ),
      matchid: (
        <div className="d-flex flex-column orange-clr">
          <div>
            Match: South Africa Women's vs New Zealand Women's (T20 Women's
            World Cup 2024)
          </div>
          <div>Match ID: 11023843754858</div>
          <div>M ID: 1.11045677544</div>
        </div>
      ),
      bet: <div className="orange-clr">Odds</div>,
      selection: (
        <div className="d-flex flex-column orange-clr">
          <div>Selection: South Africa Wo.. Side: Back</div>
          <div>Odds Rate: 1.50</div>
          <div>B. Amount: 100000</div>
          <div>B. ID: 11023843754858</div>
        </div>
      ),
      pl: <div className="mb-4 flex-center orange-clr">10000000</div>,
      status: (
        <div className="d-flex flex-column flex-center ">
          <div className="orange-btn2">Edited</div>
        </div>
      ),
    },
    {
      date: (
        <div className="d-flex flex-column">
          <div>01-10-2024</div>
          <div>16:11:00</div>
        </div>
      ),
      user: (
        <div className="d-flex flex-column">
          <div>M.Name: T Exchange </div>
          <div>{"User: Srinivas > Ag: Jayanta >"}</div>
          <div>{"Mas: Lokesh > S M: Sangram > "}</div>
          <div>{"S A: Sudheer > Adm: Nani >  "}</div>
        </div>
      ),
      matchid: (
        <div className="d-flex flex-column">
          <div>
            Match: South Africa Women's vs New Zealand Women's (T20 Women's
            World Cup 2024)
          </div>
          <div>Match ID: 11023843754858</div>
          <div>M ID: 1.11045677544</div>
        </div>
      ),
      bet: <div>Odds</div>,
      selection: (
        <div className="d-flex flex-column">
          <div>Selection: South Africa Wo.. Side: Back</div>
          <div>Odds Rate: 1.50</div>
          <div>B. Amount: 100000</div>
          <div>B. ID: 11023843754858</div>
        </div>
      ),
      pl: (
        <div className="d-flex flex-column flex-center">
          <div className="green-clr mb-4">10000000</div>
          <div>Result: South Africa Wo..</div>
        </div>
      ),
      status: (
        <div className="d-flex flex-column flex-center ">
          <div className="green-btn">settled</div>
          <div className="flex-between my-2 ">
            <MdOutlineEdit className="text-black font-20 pointer" />
            <MdOutlineDelete className="text-black font-20 ms-3 pointer" />
          </div>
        </div>
      ),
    },

    {
      date: (
        <div className="d-flex flex-column orange-clr">
          <div>01-10-2024</div>
          <div>16:11:00</div>
        </div>
      ),
      user: (
        <div className="d-flex flex-column orange-clr">
          <div>M.Name: T Exchange </div>
          <div>{"User: Srinivas > Ag: Jayanta >"}</div>
          <div>{"Mas: Lokesh > S M: Sangram > "}</div>
          <div>{"S A: Sudheer > Adm: Nani >  "}</div>
        </div>
      ),
      matchid: (
        <div className="d-flex flex-column orange-clr">
          <div>
            Match: South Africa Women's vs New Zealand Women's (T20 Women's
            World Cup 2024)
          </div>
          <div>Match ID: 11023843754858</div>
          <div>M ID: 1.11045677544</div>
        </div>
      ),
      bet: <div className="orange-clr">Odds</div>,
      selection: (
        <div className="d-flex flex-column orange-clr">
          <div>Selection: South Africa Wo.. Side: Back</div>
          <div>Odds Rate: 1.50</div>
          <div>B. Amount: 100000</div>
          <div>B. ID: 11023843754858</div>
        </div>
      ),
      pl: <div className="mb-4 flex-center orange-clr">10000000</div>,
      status: (
        <div className="d-flex flex-column flex-center ">
          <div className="orange-btn2">Edited</div>
        </div>
      ),
    },
  ];
  return (
    <div className="d-flex flex-column p-1">
      <div
        className="d-flex medium-font mt-2 mb-3 align-items-center pointer"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowBack className="orange-clr fw-800 font-20 me-1" />
        <div>Match Wise P/L</div>
        <div className="">
          <span>
            <IoIosArrowForward className="font-20" />
          </span>
          {matchName}
        </div>
        <div className="">
          <span>
            <IoIosArrowForward className="font-20" />
          </span>
          {role}
        </div>
        <div className="orange-clr">
          <span>
            <IoIosArrowForward className="font-20" />
          </span>
          {userDetails}
        </div>
      </div>

      <div className="white-bg col-4 radius-10 py-2 px-2 border-grey flex-between small-font">
        Users P/L
        <span className="green-clr">500000</span>
      </div>

      <div className="d-flex w-100 my-2 align-items-center">
        <div className="flex-column pe-2 small-font col-2">
          <label className="mb-1">Bet Placed</label>
          <select className="input-css2">
            <option>All</option>
            <option>All</option>
            <option>All</option>
          </select>
        </div>

        <div className="saffron-btn br-5 small-font col-2 px-2 mt-3">
          Submit
        </div>
      </div>

      <div>
        <Table columns={cols} data={data} itemsPerPage={3} />
      </div>
    </div>
  );
};

export default UsersMatchPl;