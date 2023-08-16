import { FunctionComponent } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { DollarSign, Package, TrendingUp, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashBoardCartProps {
    
}

const cardData = [
    {
        id: 1,
        increase: true,
        decrease: false,
        rate: "2.05%",
        value: "$100",
        icon: DollarSign,
        color: "primary",
        iconSize: "fa-2x",
        footerText: "View Details",
    },
    {
        id: 2,
        increase: true,
        decrease: false,
        rate: "2.05%",
        value: "$100",
        icon: Package,
        color: "primary",
        iconSize: "fa-2x",
        footerText: "View Details",
    },
    {
        id: 3,
        increase: true,
        decrease: false,
        rate: "2.05%",
        value: "$100",
        icon: Wallet,
        color: "primary",
        iconSize: "fa-2x",
        footerText: "View Details",
    },
    {
        id: 4,
        increase: false,
        decrease: true,
        rate: "-2.05%",
        value: "$100",
        icon: TrendingUp,
        color: "primary",
        iconSize: "fa-2x",
        footerText: "View Details",
    },
]
 
const DashBoardCart: FunctionComponent<DashBoardCartProps> = () => {
    return (
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/6 mb-4">
          {cardData.map((card) => (
            <Card key={card.id}>
              {/* <CardHeader>
                              <CardTitle>
  
                              </CardTitle>
                              <CardDescription>
  
                              </CardDescription>
  
                          </CardHeader> */}
              <CardContent>
                <card.icon className={cn("h-5 w-5 mr-3", card.color)} />
                <p>{card.value}</p>
              </CardContent>
              <CardFooter>
                <p>{card.footerText}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="hidden sm:block w-1/2 md:w-1/2 lg:w-3/4 xl:w-5/6 mb-4">
          {cardData.map((card) => (
            <Card key={card.id}>
              {/* <CardHeader>
                              <CardTitle>
  
                              </CardTitle>
                              <CardDescription>
  
                              </CardDescription>
  
                          </CardHeader> */}
              <CardContent>
                <card.icon className={cn("h-5 w-5 mr-3", card.color)} />
                <p>{card.value}</p>
              </CardContent>
              <CardFooter>
                <p>{card.footerText}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  };
 
export default DashBoardCart;

