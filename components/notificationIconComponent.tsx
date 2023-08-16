import { AlertCircle } from "lucide-react";
import { FunctionComponent } from "react";

interface NotificationIconProps {
    
}
 
const NotificationIcon: FunctionComponent<NotificationIconProps> = () => {
    return ( 
        <AlertCircle className="h-8 w-8 mt-1 mx-4" />
     );
}
 
export default NotificationIcon;