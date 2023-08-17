import DashboardAccountComponent from "@/components/dashboardAccountsComponent";
import DashBoardCart from "@/components/dashboardCardComponent";
import KeyStatsComponent from "@/components/keyStatsComponent";
import DashboardReferralComponent from "@/components/referralLinkComponent";
import { Separator } from "@/components/ui/separator";


import { FunctionComponent } from "react";

interface DashboardMainPageProps {}

const DashboardMainPage: FunctionComponent<DashboardMainPageProps> = () => {
  return (
    <div>
       <Separator className="mb-5" />
       <KeyStatsComponent />
        <DashBoardCart />
        <Separator className="mb-5" />
        <DashboardAccountComponent /> 
        <Separator className="mb-5" />
        <DashboardReferralComponent />
    </div>
      
   
  );
};

export default DashboardMainPage;
