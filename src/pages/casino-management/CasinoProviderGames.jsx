import React from "react";
import { useNavigate, useParams } from "react-router";
import { FaSearch } from "react-icons/fa";
import Table from "../../components/Table";
import { MdBlockFlipped } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import { BsEye } from "react-icons/bs";

const CasinoProviderGames = () => {
  const { provider, gamename } = useParams();
  const navigation = useNavigate();
  const handleMatchClick = (matchName) => {
    navigation(
      `/management-casino-provider/${encodeURIComponent(
        provider
      )}/${encodeURIComponent(gamename)}/${encodeURIComponent(matchName)}`
    );
  };

  const CASINO_COLUMNS = [
    { header: "Games", field: "games", width: "25%" },
    { header: "P/L", field: "pl", width: "35%" },
    { header: "Status", field: "status", width: "10%" },
  ];
  const CASINO_DATA = [
    {
      games: <div>Roulette</div>,
      pl: <div className="green-font">5000000</div>,

      status: (
        <div className="w-100 flex-between  pointer">
          <BsEye size={18} onClick={() => handleMatchClick("Bet History")} />
          <span>
            <MdBlockFlipped size={18} />
          </span>
          <span className="active-btn-table">Live</span>
        </div>
      ),
    },
  ];
  const CASINO_DATA_DUPLICATES = Array(10).fill(CASINO_DATA[0]);

  return (
    <div>
      <div className="flex-between mb-3 mt-2">
        <h6 className=" mb-0">
          Casino Live Settings
          <span>
            <FiChevronRight /> Casino Providers
          </span>
          <span>
            <FiChevronRight />
            {provider}
          </span>
          <span className="yellow-font">
            <FiChevronRight />
            {gamename}
          </span>
        </h6>
        <div className="d-flex ">
          <div className="input-pill d-flex align-items-center rounded-pill px-2">
            <FaSearch size={16} className="grey-clr me-2" />
            <input className="small-font all-none" placeholder="Search..." />
          </div>
          <div className="small-font mt-2 ms-2">
            P/L : <span className="white-btn2 green-font">10000000</span>
          </div>
        </div>
      </div>

      <div className="mt-4 ">
        <Table
          columns={CASINO_COLUMNS}
          data={CASINO_DATA_DUPLICATES}
          itemsPerPage={5}
        />
      </div>
    </div>
  );
};

export default CasinoProviderGames;
