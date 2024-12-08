import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Header from "./components/Header";
import Casino from "./pages/casino/Casino";
import RiskLimitSet from "./pages/risk-management/RiskLimitSet";
import AddManagementTeam from "./pages/add-team/AddManagementTeam";
import RiskSports from "./pages/risk-management/RiskSports";
import AddDirectorAdmin from "./pages/add-team/AddDirectorAdmin";
import DashboardViewAll from "./pages/home/DashboardViewAll";
import RiskBetHistory from "./pages/risk-management/RiskBetHistory";
import CasinoVendor from "./pages/casino/CasinoVendor";
import CasinoGames from "./pages/casino/CasinoGames";
import UserProfileDashboard from "./pages/add-team/UserProfileDasboard";
import RiskCasino from "./pages/risk-management/RiskCasino";
import FancyResult from "./pages/fancy-result/FancyResult";
import MarketResult from "./pages/market-result/MarketResult";
import LiveBetList from "./pages/risk-management/LiveBetList";
import SportProviders from "./pages/sports/SportProviders";
import DeletedBetHistory from "./pages/risk-management/DeletedBetHistory";
import CheatAlertBets from "./pages/risk-management/CheatAlertBets";
import Cricket from "./pages/cricket/Cricket";
import FancyCricket from "./pages/cricket/FancyCricket";
import FancyIndividualCricketMatch from "./pages/cricket/FancyIndividualCricketMatch";
import CricketBookmaker from "./pages/cricket/CricketBookmaker";
import CricketLiveStreaming from "./pages/cricket/CricketLiveStreaming";
import VendorRegistration from "./pages/vendor-registration/casino/casino/VendorRegistration";
import SportsVendorRegistration from "./pages/vendor-registration/casino/sports/SportsVendorRegistration";
import CricketScoreboard from "./pages/cricket/CricketScoreboard";
import MyVendorsAccount from "./pages/wallet/MyVendorsAccount";
import SettledHistory from "./pages/wallet/SettledHistory";
import Offer from "./pages/promotions/Offer";
import MyStatement from "./pages/reports/MyStatement";
import MyDepositWithdraw from "./pages/wallet/MyDepositWithdraw";
import OfflineDepositWithdraw from "./pages/wallet/OfflineDepositWithdraw";
import Tickets from "./pages/wallet/Tickets";
import DownlineList from "./pages/add-team/DownlineList";
import DownlineTrasactionHistory from "./pages/add-team/DownlineTrasactionHistory";
import ActivityLogs from "./pages/ownerSettings/ActivityLogs";
import RecentAccessIp from "./pages/ownerSettings/RecentAccessIp";
import PromotionType from "./pages/promotions/PromotionType";
import SportsPromotions from "./pages/promotions/SportsPromotions";
import CasinoPromotions from "./pages/promotions/CasinoPromotions";
import Broadcasting from "./pages/promotions/Broadcasting";
import SandCBanner from "./pages/promotions/SandCBanner";
import GatewayTransactions from "./pages/wallet/GatewayTransactions";
import DownLineAdmins from "./pages/reports/DownLineAdmins";
import IndividualMatch from "./pages/ownerSettings/IndividualMatch";
import ReferenceData from "./pages/ownerSettings/ReferenceData";
import PrivacyPolicy from "./pages/ownerSettings/PrivacyPolicy";
import Result from "./pages/ownerSettings/Result";
import PaymentGateway from "./pages/add-team/PaymentGateway";
import AddWibsites from "./pages/add-team/AddWebsites";
import LiveBlockSports from "./pages/live-block/LiveBlockSports";
import IndividualMatchOddsLive from "./pages/live-block/components/IndividualMatchOddsLive";
import MatchWisePl from "./pages/reports/match-wise-pl/MatchWisePl";
import IndividualMatchPl from "./pages/reports/match-wise-pl/IndividualMatchPl";
import MatchAdminsUsersPl from "./pages/reports/match-wise-pl/MatchAdminsUsersPl";
import UsersMatchPl from "./pages/reports/match-wise-pl/UsersMatchPl";
import Userslist from "./pages/reports/Userslist";
import SuperAdminDL from "./pages/reports/SuperAdminDL";
import CasinoReports from "./pages/reports/CasinoReports";
import UserBetsList from "./pages/reports/UserBetsList";
import SportsReport from "./pages/reports/SportsReport";
import UserReports from "./pages/reports/UserReports";
import ClientRental from "./pages/reports/ClientRental";
import ViewFancyBets from "./pages/live-block/components/ViewFancyBets";
import LiveScoreBoard from "./pages/live-block/components/LiveScoreboard";
import Sports from "./pages/sports/Sports";
import WhiteLabelSetting from "./pages/white-label/WhiteLabelSetting";
import CasinoWebsite from "./pages/live-block/casino-management/CasinoWebsite";
import MCasinoGames from "./pages/live-block/casino-management/MCasinoGames";
import BonusChips from "./pages/bonuschips/BonusChips";
import BetBlockUsers from "./pages/live-block/BetBlockUsers";
import InActiveUsers from "./pages/live-block/InActiveUsers";
import SetLimits from "./pages/live-block/SetLimits";
import McasinoGDetails from "./pages/live-block/casino-management/McasinoGDetails";
import MCasinoBetHistory from "./pages/live-block/casino-management/MCasinoBetHistory";
import CasinoProvider from "./pages/live-block/casino-management/CasinoProvider";
import CasinoProviderGames from "./pages/live-block/casino-management/CasinoProviderGames";
import CasinoMBetHistory from "./pages/live-block/casino-management/CasinoMBetHistory";

function App() {
  const isLoggedIn = localStorage?.getItem("isLoggedIn");
  return (
    <div>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <div>
          {isLoggedIn && <Header />}
          <div className="home">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/central-casino" element={<Casino />} />
              <Route path="/risk-limit-set" element={<RiskLimitSet />} />
              <Route path="/management-team" element={<AddManagementTeam />} />
              <Route path="/director-admin" element={<AddDirectorAdmin />} />
              <Route path="/risk-sports" element={<RiskSports />} />
              <Route path="/match/:matchName" element={<IndividualMatch />} />
              <Route path="/reference-data" element={<ReferenceData />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/user-profile-dashboard"
                element={<UserProfileDashboard />}
              />
              <Route
                path="/dashboard-view-all"
                element={<DashboardViewAll />}
              />
              <Route
                path="/risk-sports/:matchName"
                element={<RiskBetHistory />}
              />
              <Route
                path="/central-casino/:vendor/:provider"
                element={<CasinoVendor />}
              />
              <Route
                path="/central-casino/:vendor/:provider/:game"
                element={<CasinoGames />}
              />
              <Route
                path="/vendor-registration"
                element={<VendorRegistration />}
              />
              <Route path="/risk-casino" element={<RiskCasino />} />
              <Route path="/activity-logs" element={<ActivityLogs />} />
              <Route
                path="/userActivity/:userActivity"
                element={<RecentAccessIp />}
              />
              <Route
                path="/create-promotion-type"
                element={<PromotionType />}
              />
              <Route path="/live-bet-list" element={<LiveBetList />} />
              <Route path="/sports-promotions" element={<SportsPromotions />} />
              <Route path="/casino-promotions" element={<CasinoPromotions />} />
              <Route path="/broadcasting" element={<Broadcasting />} />
              <Route path="/banners" element={<SandCBanner />} />
              <Route path="/central-sports" element={<Sports />} />
              <Route path="/fancy-results" element={<FancyResult />} />
              <Route path="/market-results" element={<MarketResult />} />
              <Route
                path="/central-sports/:vendor/:provider"
                element={<SportProviders />}
              />
              <Route
                path="/deleted-bet-history"
                element={<DeletedBetHistory />}
              />
              <Route path="/cheat-alert-bets" element={<CheatAlertBets />} />
              <Route
                path="/central-sports/:vendor/:provider/:match"
                element={<Cricket />}
              />
              <Route
                path="/central-sports/:vendor/:provider/:match"
                element={<FancyCricket />}
              />
              <Route
                path="/central-sports/:vendor/:provider/:match/:individualMatch"
                element={<FancyIndividualCricketMatch />}
              />
              <Route
                path="/central-sports/:vendor/:provider/:match"
                element={<CricketBookmaker />}
              />
              <Route
                path="/central-sports/:vendor/:provider/:match"
                element={<CricketLiveStreaming />}
              />
              <Route
                path="/sports-vendor-registration"
                element={<SportsVendorRegistration />}
              />
              <Route
                path="/central-sports/:vendor/:provider/:match"
                element={<CricketScoreboard />}
              />
              <Route path="/settled-history" element={<SettledHistory />} />
              <Route path="/offers" element={<Offer />} />
              <Route path="/my-statement" element={<MyStatement />} />
              <Route path="/deposit-withdraw" element={<MyDepositWithdraw />} />
              <Route
                path="/offline-deposit-withdraw"
                element={<OfflineDepositWithdraw />}
              />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/downline-list" element={<DownlineList />} />
              <Route
                path="/transactions-history"
                element={<DownlineTrasactionHistory />}
              />
              <Route
                path="/gateway-transactions"
                element={<GatewayTransactions />}
              />
              <Route path="/pl-report-downline" element={<DownLineAdmins />} />
              <Route
                path="/my-vendors-account"
                element={<MyVendorsAccount />}
              />
              <Route path="/results" element={<Result />} />
              <Route path="/payment-details" element={<PaymentGateway />} />
              <Route path="/websites" element={<AddWibsites />} />
              <Route path="/live-block-sports" element={<LiveBlockSports />} />
              <Route
                path="/live-block-sports/:sport"
                element={<IndividualMatchOddsLive />}
              />
              <Route
                path="/live-block-sports/:sport/:fancyType"
                element={<ViewFancyBets />}
              />
              <Route path="/match-wise-pl" element={<MatchWisePl />} />
              <Route
                path="/match-wise-pl/:matchName"
                element={<IndividualMatchPl />}
              />
              <Route
                path="/match-wise-pl/:matchName/:role"
                element={<MatchAdminsUsersPl />}
              />
              <Route
                path="/match-wise-pl/:matchName/:role/:userDetails"
                element={<UsersMatchPl />}
              />
              <Route path="/downline/:superadmin" element={<SuperAdminDL />} />
              <Route path="/superadmin/:user" element={<Userslist />} />
              <Route path="/pl-casino-report" element={<CasinoReports />} />
              <Route path="/userbets/:username" element={<UserBetsList />} />
              <Route path="/pl-report-sports" element={<SportsReport />} />
              <Route path="/pl-report-users" element={<UserReports />} />
              <Route path="/client-rental-sheet" element={<ClientRental />} />
              <Route path="/pdfdfg" element={<LiveScoreBoard />} />
              <Route
                path="/white-label-setting"
                element={<WhiteLabelSetting />}
              />
              <Route path="/management-casino" element={<CasinoWebsite />} />
              <Route
                path="/management-casino/:gamename"
                element={<MCasinoGames />}
              />
              <Route
                path="/management-casino/:gamename/:usergame"
                element={<McasinoGDetails />}
              />
               <Route
                path="/management-casino/:gamename/:usergame/:bethistory"
                element={<MCasinoBetHistory />}
              />
              <Route path="/bonus-chips" element={<BonusChips />} />
              <Route path="/bet-block-users" element={<BetBlockUsers />} />
              <Route path="/inactive-users" element={<InActiveUsers />} />
              <Route path="/set-limits" element={<SetLimits />} />
              <Route
                path="/management-casino-provider/:provider"
                element={<CasinoProvider />}
              />
               <Route
                path="/management-casino-provider/:provider/:gamename"
                element={<CasinoProviderGames />}
              />
              <Route
                path="/management-casino-provider/:provider/:gamename/:bethistory"
                element={<CasinoMBetHistory />}
              />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
