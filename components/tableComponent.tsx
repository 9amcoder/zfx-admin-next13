import { FunctionComponent } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface TableComponentProps {}

const invoices = [
  {
    id: 1,
    accountType: "Standard STP Account",
    server: "ZealCapitalMarketSC-Live",
    accountCurrency: "USD",
    leverageRatio: "200",
    balance: "$250.00",
    freeMargin: "$12,000",
    equity: "$18,291",
  },
  {
    id: 2,
    accountType: "Standard STP Account",
    server: "ZealCapitalMarketSC-Live",
    accountCurrency: "EUR",
    leverageRatio: "100",
    balance: "$260.00",
    freeMargin: "$10,000",
    equity: "$11,291",
  },
];

const TableComponent: FunctionComponent<TableComponentProps> = () => {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Account Type</TableHead>
          <TableHead>Server</TableHead>
          <TableHead>Account Currency</TableHead>
          <TableHead>Leverage Ratio</TableHead>
          <TableHead>Balance</TableHead>
          <TableHead>Free Margin</TableHead>
          <TableHead className="text-right">Equity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.accountType}</TableCell>
            <TableCell>{invoice.server}</TableCell>
            <TableCell>{invoice.accountCurrency}</TableCell>
            <TableCell>{invoice.leverageRatio}</TableCell>
            <TableCell>{invoice.balance}</TableCell>
            <TableCell>{invoice.freeMargin}</TableCell>
            <TableCell className="text-right">{invoice.equity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
