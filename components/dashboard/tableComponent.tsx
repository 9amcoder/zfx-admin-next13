import { FunctionComponent } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { INVOICE_DATA } from "@/constant/constantDataValues";

interface TableComponentProps {}

const TableComponent: FunctionComponent<TableComponentProps> = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] whitespace-nowrap">Account Type</TableHead>
            <TableHead className="whitespace-nowrap">Server</TableHead>
            <TableHead className="whitespace-nowrap">Account Currency</TableHead>
            <TableHead className="whitespace-nowrap">Leverage Ratio</TableHead>
            <TableHead className="whitespace-nowrap">Balance</TableHead>
            <TableHead className="whitespace-nowrap">Free Margin</TableHead>
            <TableHead className="text-right whitespace-nowrap">Equity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {INVOICE_DATA.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium whitespace-nowrap">{invoice.accountType}</TableCell>
              <TableCell className="whitespace-nowrap">{invoice.server}</TableCell>
              <TableCell className="whitespace-nowrap">{invoice.accountCurrency}</TableCell>
              <TableCell className="whitespace-nowrap">{invoice.leverageRatio}</TableCell>
              <TableCell className="whitespace-nowrap">{invoice.balance}</TableCell>
              <TableCell className="whitespace-nowrap">{invoice.freeMargin}</TableCell>
              <TableCell className="text-right whitespace-nowrap">{invoice.equity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;