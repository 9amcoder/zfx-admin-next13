import { FunctionComponent } from "react";
import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";

interface DashboardButtonGroupProps {
  blockName: string;
  firstButtonLabel: string;
  secondButtonLabel: string;
  firstButtonIcon?: any;
  secondButtonIcon?: any;
  buttonOneVariant?: any;
  buttonTwoVariant?: any;
}

const DashboardButtonGroup: FunctionComponent<DashboardButtonGroupProps> = ({
  blockName,
  firstButtonLabel,
  secondButtonLabel,
  firstButtonIcon,
  secondButtonIcon,
  buttonOneVariant,
  buttonTwoVariant,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center md:mx-5">
      <div className="ml-4 grid grid-rows-2 gap-4 grid-flow-col md:flex-row md:justify-start md:items-center md:mr-5">
        <div className="row-start-1 row-span-2">
          <span className="mr-2 md:text-xl md:font-bold">{blockName}</span>
        </div>
        <div className="hidden row-end-3 row-span-2 ">
          <span className="text-sm text-sky-600 mx-2 underline cursor-pointer"></span>
        </div>
        <div className="hidden row-start-1 row-end-4">
          <Button
            variant="ghost"
            className="pb-5 text-sm text-sky-600 underline cursor-pointer"
          ></Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-end md:items-center">
        <Button
          variant={buttonOneVariant}
          className="my-3 mx-3 md:mr-2 md:mr-5 rounded-full border-sky-500"
        >
          <span className="whitespace-nowrap text-sky-500">
            {firstButtonLabel}
          </span>
          {firstButtonIcon}
        </Button>
        <Button
          variant={buttonTwoVariant}
          className="mx-3 md:mr-5 rounded-full"
        >
          {buttonTwoVariant === "ghost" ? (
            <span className="text-sky-500">{secondButtonLabel}</span>
          ) : (
            <span>{secondButtonLabel}</span>
          )}

          {secondButtonIcon}
        </Button>
      </div>
    </div>
  );
};

export default DashboardButtonGroup;
