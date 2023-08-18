import { Download, PlusCircle, RefreshCcw } from "lucide-react";
import { FunctionComponent } from "react";
import { Button } from "../ui/button";

interface KeyStatsComponentProps {}

const KeyStatsComponent: FunctionComponent<KeyStatsComponentProps> = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center md:mx-5">
      <div className="ml-4 grid grid-rows-2 gap-4 grid-flow-col md:flex-row md:justify-start md:items-center md:mr-5">
        <div className="row-start-1 row-span-2">
          <span className="mr-2 md:text-xl md:font-bold">Key Stats</span>
        </div>
        <div className="row-end-3 row-span-2 ">
          <span className="text-sm text-sky-600 mx-2 underline cursor-pointer"></span>
        </div>
        <div className="row-start-1 row-end-4">
          <Button
            variant="ghost"
            className="pb-5 text-sm text-sky-600 underline cursor-pointer"
          >
            Refresh Stats{" "}
            <RefreshCcw
              color="#0284C7"
              size="12"
              className="ml-2 cursor-pointer"
            />
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-end md:items-center">
        <Button
          variant="outline"
          className="my-3 mx-3 md:mr-2 md:mr-5 rounded-full text-sky-500  border-sky-500"
        >
          <span className="whitespace-nowrap">Download MT4</span>
          <Download className="ml-2 h-4 w-4" />
        </Button>
        <Button className="mx-3 md:mr-5 rounded-full bg-sky-500">
          <span>Deposit</span>
          <PlusCircle className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default KeyStatsComponent;
