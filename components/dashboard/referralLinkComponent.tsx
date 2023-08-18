import { FunctionComponent } from "react";
import DashboardButtonGroup from "./dashboardButtonGroup";
import { Copy, QrCode } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface DashboardReferralComponentProps {}

const REF_DATA = [
  {
    id: 1,
    referralLink: "Standard STP Account",
    dedicatedReferralLink: "ZealCapitalMarketSC-Live",
  },
];

const DashboardReferralComponent: FunctionComponent<
  DashboardReferralComponentProps
> = () => {
  return (
    <div>
      <DashboardButtonGroup
        blockName="Dedicated Referral Link"
        firstButtonLabel="Copy link"
        secondButtonLabel="Copy QR"
        firstButtonIcon={<QrCode className="ml-2 h-4 w-4" color="#31ADE3" />}
        secondButtonIcon={<Copy className="ml-2 h-4 w-4"  color="#31ADE3"/>}
        buttonOneVariant="ghost"
        buttonTwoVariant="ghost"
      />
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] whitespace-nowrap">
                Referral Link
              </TableHead>
              <TableHead className="whitespace-nowrap">
                Dedicated Referral Link
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {REF_DATA.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium whitespace-nowrap">
                  {invoice.referralLink}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {invoice.dedicatedReferralLink}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DashboardReferralComponent;
