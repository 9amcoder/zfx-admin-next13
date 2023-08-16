import { Download, PlusCircle, RefreshCcw } from "lucide-react";
import { FunctionComponent } from "react";
import { Button } from "./ui/button";

interface KeyStatsComponentProps {
    
}
 
const KeyStatsComponent: FunctionComponent<KeyStatsComponentProps> = () => {
    return ( 
        <div className="flex justify-between items-center mx-5">
        <div className="flex justify-start">
          <span>Key Stats </span> 
          <span>Refresh Stats</span><RefreshCcw/>
        </div>
        <div className="flex justify-end">
          <Button variant='outline' className="mr-5 rounded-full">
            <span>Download MT4</span>
            <Download className="ml-2 h-4 w-4" />
          </Button>
          <Button className="rounded-full bg-sky-500">
            <span>Deposit</span>
            <PlusCircle className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
     );
}
 
export default KeyStatsComponent;