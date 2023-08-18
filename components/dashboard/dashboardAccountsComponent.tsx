"use client";
import { Download, PlusCircle, RefreshCcw } from "lucide-react";
import { FunctionComponent, useEffect, useState } from "react";
import { Button } from "../ui/button";
import TableComponent from "./tableComponent";
import DashboardButtonGroup from "./dashboardButtonGroup";

interface DashboardAccountComponentProps {}

const DashboardAccountComponent: FunctionComponent<
  DashboardAccountComponentProps
> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <DashboardButtonGroup
        blockName="Accounts"
        firstButtonLabel="New Account"
        secondButtonLabel="Deposit"
        firstButtonIcon={<PlusCircle className="ml-2 h-4 w-4" color="#31ADE3" />}
        secondButtonIcon={<PlusCircle className="ml-2 h-4 w-4" />}
        buttonOneVariant="outline"
        buttonTwoVariant="outlineBlue"
      />

      <div>
        <TableComponent />
      </div>
    </>
  );
};

export default DashboardAccountComponent;
