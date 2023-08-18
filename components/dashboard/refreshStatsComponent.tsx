import { Copy, Download, PlusCircle, QrCode, RefreshCcw } from "lucide-react";
import { FunctionComponent } from "react";
import { Button } from "../ui/button";
import DashboardButtonGroup from "./dashboardButtonGroup";

interface KeyStatsComponentProps {}

const RefreshStatsComponent: FunctionComponent<KeyStatsComponentProps> = () => {
  return (
    <div>
      <DashboardButtonGroup
        blockName="Dedicated Referral Link"
        firstButtonLabel="Copy link"
        secondButtonLabel="Copy QR"
        firstButtonIcon={<QrCode />}
        secondButtonIcon={<Copy />}
      />
    </div>
  );
};

export default RefreshStatsComponent;
