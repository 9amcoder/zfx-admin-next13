"use client";
import { Download, PlusCircle, RefreshCcw } from "lucide-react";
import { FunctionComponent, useEffect, useState } from "react";
import { Button } from "./ui/button";
import TableComponent from "./tableComponent";

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
      <div className="flex flex-col md:flex-row justify-between items-center mx-5">
        <div className="flex flex-row md:flex-row justify-start items-center md:mr-5">
          <span className="mr-2 md:text-md">Accounts</span>
        </div>
        <div className="flex flex-col md:flex-row justify-end items-center mt-2 md:mt-0">
          <Button variant="outline" className="mr-2 md:mr-5 rounded-full">
            <span className="whitespace-nowrap">New Account</span>
            <PlusCircle className="ml-2 h-4 w-4" />
          </Button>
          <Button className="w-full rounded-full bg-sky-500">
            <span>Deposit</span>
            <PlusCircle className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div>
        <TableComponent />
      </div>
    </>
  );
};

export default DashboardAccountComponent;
