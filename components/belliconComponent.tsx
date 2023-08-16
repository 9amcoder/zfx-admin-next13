import { Bell } from "lucide-react";
import { FunctionComponent } from "react";

interface BellIconProps {
    
}
 
const BellIconComponent: FunctionComponent<BellIconProps> = () => {
    return ( 
        <Bell className="h-8 w-8 mt-1 mx-4" />
     );
}
 
export default BellIconComponent;