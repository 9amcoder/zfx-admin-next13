"use client";
import { FunctionComponent } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ArrowBigDown, ArrowBigUp, DollarSign, Package, TrendingUp, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import ChartComponent from "./chartComponent";
import { CHART_DATA } from "@/constant/constantDataValues";

interface DashBoardCartProps {}

export const DASHBOARD_CART_DATA = [
  {
    id: 1,
    increase: true,
    rate: "+0.25%",
    value: "$40,291",
    icon: DollarSign,
    color: "primary",
    bgColor: "bg-yellow-400",
    iconSize: "35",
    footerText: "Current balance",
  },
  {
    id: 2,
    increase: true,
    rate: "+2.05%",
    value: "$18,291",
    icon: Package,
    color: "primary",
    bgColor: "bg-blue-500",
    iconSize: "35",
    footerText: "Equity",
  },
  {
    id: 3,
    increase: true,
    rate: "+0.25%",
    value: "$12,426",
    icon: Wallet,
    color: "primary",
    bgColor: "bg-sky-600",
    iconSize: "35",
    footerText: "E-Wallet",
  },
  {
    id: 4,
    increase: false,
    rate: "-2.05%",
    value: "$0",
    icon: TrendingUp,
    color: "primary",
    bgColor: "bg-green-400",
    iconSize: "35",
    footerText: "Trading-842986",
  },
];

const DashBoardCart: FunctionComponent<DashBoardCartProps> = () => {
  return (
    <div className="mt-2 grid w-full md:grid-cols-2 md:gap-2">
      <div className="md:row-span-3 ">
        <div className="grid grid-cols-2 gap-1 md:gap-2">
          {DASHBOARD_CART_DATA.map((card) => (
            <div className="md:m-2" key={card.id}>
              <Card className="md:m-2 cursor-pointer">
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
      </div>
      <div className="row md:row-span-1 mt-4 ">
        <Card className="m-1 md:m-0">
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
            <div>
              <ChartComponent data={CHART_DATA} />
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default DashBoardCart;
