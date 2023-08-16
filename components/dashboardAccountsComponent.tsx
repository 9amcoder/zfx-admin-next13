"use client";
import { Download, PlusCircle, RefreshCcw } from "lucide-react";
import { FunctionComponent, useEffect, useState } from "react";
import { Button } from "./ui/button";
import TableComponent from "./tableComponent";

interface DashboardAccountComponentProps {
    
}
 
const DashboardAccountComponent: FunctionComponent<DashboardAccountComponentProps> = () => {
  const [isMounted, setIsMounted ] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
    return ( 
        <>
        <div className="flex justify-between items-center mx-5 mt-5">
        <div className="flex justify-start">
          <h2>Accounts </h2> 
        </div>
        <div className="flex justify-end">
          <div>
          <Button variant='outline' className="mr-5 rounded-full">
            <span>New Account</span>
            <PlusCircle className="ml-2 h-4 w-4" />
          </Button>
          </div>
          <div>
          <Button className="rounded-full bg-sky-500">
            <span>Deposit</span>
            <PlusCircle className="ml-2 h-4 w-4" />
          </Button>
          </div>
        </div>
      </div>
      <div>
        <TableComponent />
      </div>
      </>
     );
}
 
export default DashboardAccountComponent;