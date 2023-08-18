import KeyStatsComponent from "@/components/dashboard/keyStatsComponent";
import { Separator } from "@/components/ui/separator";
import WalletCardComponent from "@/components/wallet/walletCardComponent";
import WalletDetailsComponent from "@/components/wallet/walletDetailsComponent";
import WalletTransactionHistoryComponent from "@/components/wallet/walletTransactionHistoryComponent";
import { FunctionComponent } from "react";

interface WalletPageProps {}

const WalletPage: FunctionComponent<WalletPageProps> = () => {
  return (
    <div>
      <Separator className="mb-5" />
      <KeyStatsComponent />
      <WalletCardComponent />
      <Separator className="mb-5" />
      <WalletDetailsComponent />
      <WalletTransactionHistoryComponent />
    </div>
  );
};

export default WalletPage;
