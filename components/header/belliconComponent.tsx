import { Bell } from "lucide-react";
import { FunctionComponent } from "react";

interface BellIconProps {
    
}
 
const BellIconComponent: FunctionComponent<BellIconProps> = () => {
    return ( 
        <Bell className="h-5 w-5 mt-1 mx-4 cursor-pointer" />
     );
}
 
export default BellIconComponent;