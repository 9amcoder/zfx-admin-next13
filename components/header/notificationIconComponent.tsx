import { AlertCircle } from "lucide-react";
import { FunctionComponent } from "react";

interface NotificationIconProps {
    
}
 
const NotificationIcon: FunctionComponent<NotificationIconProps> = () => {
    return ( 
        <AlertCircle className="h-5 w-5 mt-1 mx-4 cursor-pointer" />
     );
}
 
export default NotificationIcon;