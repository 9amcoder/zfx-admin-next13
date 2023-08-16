import DashboardAccountComponent from "@/components/dashboardAccountsComponent";
import DashBoardCart from "@/components/dashboardCardComponent";
import KeyStatsComponent from "@/components/keyStatsComponent";
import { FunctionComponent } from "react";

interface DashboardMainPageProps {}

const DashboardMainPage: FunctionComponent<DashboardMainPageProps> = () => {
  return (
    <div>
       <KeyStatsComponent />
        <DashBoardCart />
        <DashboardAccountComponent /> 
    </div>
      
   
  );
};

export default DashboardMainPage;
