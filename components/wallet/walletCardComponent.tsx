"use client";
import { FunctionComponent } from "react";
import { DASHBOARD_CART_DATA } from "../dashboard/dashboardCardComponent";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface WalletCardComponentProps {}

const WalletCardComponent: FunctionComponent<WalletCardComponentProps> = () => {
  return (
    <div className="my-2 grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
      {DASHBOARD_CART_DATA.map((card) => (
        <div className="md:m-2" key={card.id}>
          <Card className="m-1 md:m-2">
            <CardHeader>
              <div className="grid grid-rows-1 gap-1">
                <div className="flex flex-row">
                  <div>
                    <card.icon
                      color="white"
                      size="35"
                      className={cn(
                        `" mr-5 md:mr-20 ${card.bgColor} border rounded-full"`
                      )}
                    />
                  </div>
                  <div className="flex flex-row">
                    {card.increase ? (
                      <ArrowBigUp
                        color="#05eb20"
                        className={cn("h-5 w-5 mr-2 mt-0.5")}
                      />
                    ) : (
                      <ArrowBigDown
                        color="red"
                        className={cn("h-5 w-5 mr-2 mt-0.5")}
                      />
                    )}
                    <p
                      className={cn("text-emerald-400", {
                        "text-red-400": !card.increase,
                      })}
                    >
                      {card.rate}
                    </p>
                  </div>
                </div>
              </div>
              <CardTitle className="md:pt-5">{card.value}</CardTitle>
              <CardDescription>{card.footerText}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default WalletCardComponent;
