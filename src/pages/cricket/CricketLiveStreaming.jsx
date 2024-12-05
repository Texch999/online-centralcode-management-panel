import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Table from "../../components/Table";
import { MdBlock, MdDeleteOutline } from "react-icons/md";
import ConfirmationPopup from "../popups/ConfirmationPopup";
import { FaRegTrashCan } from "react-icons/fa6";

const CricketLiveStreaming = () => {
  const navigate = useNavigate();
  const { vendor, provider, match } = useParams();

  const matchContent =
    match === "Football" ? (
      <>
        <div>Santos vs Cruzeiro MG</div>
        <div>12345678912343455</div>
      </>
    ) : match === "Tennis" ? (
      <>
        <div>Guangzhou Challenger 2023</div>
        <div>67890123456789012</div>
      </>
    ) : match === "HorseRacing" ? (
      <>
        <div>BathRust</div>
        <div>67890123456789012</div>
      </>
    ) : (
      <>
        <div>ICC Women T20 World Cup</div>
        <div>09876543211234567</div>
      </>
    );

  const seriesContent =
    match === "Football" ? (
      <>
        <div>Brazilian Series A</div>
        <div>12345678912343455</div>
      </>
    ) : match === "Tennis" ? (
      <>
        <div>Evgeny Donskoy vs Omar Jasika</div>
        <div>67890123456789012</div>
      </>
    ) : (
      <>
        <div>ICC Women T20 World Cup</div>
        <div>56789012345678900</div>
      </>
    );

  const liveStreamContent =
    match === "Football" ? (
      <>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/-eaLutjqXu0?si=PdWBHVKXvC4nkNeI"
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          F
        ></iframe>
      </>
    ) : match === "Tennis" ? (
      <>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/CGRzfUccmNE?si=6xSZtz34KLFbHSie"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </>
    ) : match === "HorseRacing" ? (
      <>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/aUDgaN6iHFc?si=CVADDxsX_h1hkEhe"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </>
    ) : (
      <>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/F0_aypvtW8Y?si=E_8oO598HmxNP80O"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </>
    );
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleBlockModal = () => {
    setShowBlockModal(!showBlockModal);
  };
  const handleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const cols = [
    { header: "", field: "watch" },
    { header: "Date & Time", field: "date" },
    { header: "Matches/ID", field: "match" },
    ...(match !== "HorseRacing"
      ? [{ header: "Series Name/ID", field: "series" }]
      : []),
    { header: <div className="flex-center">Live</div>, field: "live" },
    { header: <div className="flex-start">Action</div>, field: "action" },
  ];

  const data = [
    {
      watch: <div className="inplay-btn w-fit py-1 px-2 mx-2">In Play</div>,
      date: (
        <div className="d-flex flex-column">
          <div>21-09-2024</div>
          <div>08:00:00</div>
        </div>
      ),
      match: [matchContent],
      series: [seriesContent],
      live: [liveStreamContent],

      action: (
        <div class="d-flex mt-1">
          <div onClick={handleBlockModal} className="pointer">
            <MdBlock className="font-20 grey-clr" />
          </div>
          <div onClick={handleDeleteModal} className="pointer">
          <FaRegTrashCan size={18} className="ms-2" />
          </div>
        </div>
      ),
    },
    {
      watch: <div className="inplay-btn w-fit py-1 px-2 mx-2">In Play</div>,
      date: (
        <div className="d-flex flex-column">
          <div>21-09-2024</div>
          <div>08:00:00</div>
        </div>
      ),
      match: [matchContent],
      series: [seriesContent],
      live: [liveStreamContent],
      action: (
        <div class="d-flex mt-1">
          <div onClick={handleBlockModal} className="pointer">
            <MdBlock className="font-20 grey-clr" />
          </div>
          <div onClick={handleDeleteModal} className="pointer">
          <FaRegTrashCan size={18} className="ms-2" />
          </div>
        </div>
      ),
    },
    {
      watch: <div className="mx-2">Today</div>,
      date: (
        <div className="d-flex flex-column">
          <div>21-09-2024</div>
          <div>08:00:00</div>
        </div>
      ),
      match: [matchContent],
      series: [seriesContent],
      live: [liveStreamContent],

      action: (
        <div class="d-flex mt-1">
          <div onClick={handleBlockModal} className="pointer">
            <MdBlock className="font-20 grey-clr" />
          </div>
          <div onClick={handleDeleteModal} className="pointer">
          <FaRegTrashCan size={18} className="ms-2" />
          </div>
        </div>
      ),
    },
    {
      watch: <div className=" mx-2">Upcoming</div>,
      date: (
        <div className="d-flex flex-column">
          <div>21-09-2024</div>
          <div>08:00:00</div>
        </div>
      ),
      match: [matchContent],
      series: [seriesContent],
      live: [liveStreamContent],

      action: (
        <div class="d-flex mt-1">
          <div onClick={handleBlockModal} className="pointer">
            <MdBlock className="font-20 grey-clr" />
          </div>
          <div onClick={handleDeleteModal} className="pointer">
          <FaRegTrashCan size={18} className="ms-2" />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="p-1">
      <div>
        <Table columns={cols} data={data} itemsPerPage={5} />
      </div>

      <ConfirmationPopup
        confirmationPopupOpen={showBlockModal}
        setConfirmationPopupOpen={setShowBlockModal}
        discription={"Are You Sure to Block this Match"}
        submitButton={"Block"}
      />

      <ConfirmationPopup
        confirmationPopupOpen={showDeleteModal}
        setConfirmationPopupOpen={setShowDeleteModal}
        discription={"Are You Sure to Delete this Match"}
        submitButton={"Delete"}
      />
    </div>
  );
};

export default CricketLiveStreaming;
