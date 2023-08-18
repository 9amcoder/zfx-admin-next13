"use client";
import { FunctionComponent } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown, EyeOff, User } from "lucide-react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { WALLET_DETAILS_DATA } from "./walletDetailsComponent";
import { Card, CardDescription, CardHeader } from "../ui/card";

interface WalletTransactionHistoryComponentProps {}

const WalletTransactionHistoryComponent: FunctionComponent<
  WalletTransactionHistoryComponentProps
> = () => {
  return (
    <>
      <div className="flex flex-row">
        <span className="basis-full ml-5 md:text-xl md:font-bold">
          {" "}
          Transaction History{" "}
        </span>
      </div>
      <div className="flex flex-row">
        <span className="text-md mt-5 ml-10 text-slate-400">
          {" "}
          Current balance:{" "}
        </span>
        <span className="text-md mt-5 ml-2 text-black"> $12,426 </span>
        <EyeOff
          className="ml-3 mt-6 cursor-pointer"
          color="#94A3B8"
          size={16}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
        {WALLET_DETAILS_DATA.map((card) => (
          <div className="md:m-2" key={card.id}>
            <Card className="m-1 md:m-2 border-none">
              <CardHeader>
                {card.isAmount ? (
                  <CardDescription>
                    {card.cardLabel} <span className="text-red-500">*</span>
                  </CardDescription>
                ) : (
                  <CardDescription>{card.cardLabel}</CardDescription>
                )}

                <div className="grid grid-cols-1 gap-3 md:flex md:flex-row">
                  {card.isAmount ? (
                    <>
                      <div className="md:flex md:flex-row md:w-full">
                        <div className="border rounded-full bg-none md:w-11/12">
                          <Input
                            className="m-2 bg-none border-none w-11/12 rouded-full md:text-xs"
                            placeholder="Please enter amount to transfer"
                            endContent={
                              <div className="flex items-center">
                                <Image
                                  src="/us-flag.png"
                                  width={20}
                                  height={20}
                                  alt="Picture of the author"
                                />
                                <label className="sr-only" htmlFor="currency">
                                  Currency
                                </label>
                                <select
                                  className="outline-none border-0 bg-transparent text-default-400 md:text-xs"
                                  id="currency"
                                  name="currency"
                                >
                                  <option>USD</option>
                                  <option>ARS</option>
                                  <option>EUR</option>
                                </select>
                              </div>
                            }
                            type="number"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="md:basis-9/12">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="w-11/12 ">
                          <Button
                            variant="outline"
                            className="rounded-full w-full bg-slate-100"
                          >
                            <div className="flex flex-row w-full">
                              <span className="text-xs text-[#94A3B8] basis-9/12">
                                {card.dropdownLabel}
                              </span>
                              <ChevronDown
                                color="#94A3B8"
                                className="ml-2 h-4 w-4 basis-1/4"
                              />
                            </div>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuGroup>
                            <DropdownMenuItem>
                              <User className="mr-2 h-4 w-4" />
                              <span>Profile A ZFX Trading 0022</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <User className="mr-2 h-4 w-4" />
                              <span>Profile B ZFX Trading 0011</span>
                            </DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )}
                  <div className="flex flex-col md:basis-1/5">
                    <Button variant="outlineBlue" className="rounded-full">
                      <span>Confirm</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default WalletTransactionHistoryComponent;
