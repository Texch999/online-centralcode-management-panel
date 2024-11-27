import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Header from "./components/Header";
import Casino from "./pages/casino/Casino";
import Result from "./pages/ownerSettings/Result";
import RiskLimitSet from "./pages/risk-management/RiskLimitSet";
import RiskSports from "./pages/risk-management/RiskSports";
import IndividualMatch from "./pages/ownerSettings/IndividualMatch";
import ReferenceData from "./pages/ownerSettings/ReferenceData";
import RiskBetHistory from "./pages/risk-management/RiskBetHistory";
import PrivacyPolicy from "./pages/ownerSettings/PrivacyPolicy";
import RiskCasino from "./pages/risk-management/RiskCasino";
import ActivityLogs from "./pages/ownerSettings/ActivityLogs";
import RecentAccessIp from "./pages/ownerSettings/RecentAccessIp";
import PromotionType from "./pages/promotions/PromotionType";

function App() {
  const isLoggedIn = localStorage?.getItem("isLoggedIn");
  const role = localStorage?.getItem("role");
  return (
    <div>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <div>
          {isLoggedIn && <Header />}
          <div className="home">
            <Routes>
              <Route path="/dashboard" element={<Homepage />} />
              <Route path="/casino" element={<Casino />} />
              <Route path="/results" element={<Result />} />
              <Route path="/risk-limit-set" element={<RiskLimitSet />} />
              <Route path="/risk-sports" element={<RiskSports />} />
              <Route path="/match/:matchName" element={<IndividualMatch />} />
              <Route path="/reference-data" element={<ReferenceData />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/risk-bet-history/:matchName"
                element={<RiskBetHistory />}
              />
              <Route path="/risk-casino" element={<RiskCasino />} />
              <Route path="/activity-logs" element={<ActivityLogs />} />
              <Route path="/userActivity/:userActivity" element={<RecentAccessIp />} />
              <Route path="/create-promotion-type" element={<PromotionType />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
