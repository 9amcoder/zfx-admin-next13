import { DollarSign, Package, TrendingUp, Wallet } from "lucide-react";

export const CHART_DATA = [
    {
      name: 'Jan',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Mar',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'May',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Jul',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Sep',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Nov',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];


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