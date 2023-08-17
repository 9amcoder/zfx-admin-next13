import { FunctionComponent } from "react";
import { Button } from "./ui/button";
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
  buttonTwoVariant 
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-5">
      <div className="flex flex-row md:flex-row justify-start items-center md:mr-5">
        <span className="mr-2 md:text-md">{blockName}</span>
      </div>
      <div className="flex flex-col md:flex-row justify-end items-center mt-2 md:mt-0">
        <Button variant={buttonOneVariant}className="mr-2 md:mr-5 rounded-full">
          <span className="whitespace-nowrap">{firstButtonLabel}</span>
          {firstButtonIcon} 
        </Button>
        <Button variant={buttonTwoVariant} className="mr-2 md:mr-5 rounded-full">
          <span>{secondButtonLabel}</span>
          {secondButtonIcon}
        </Button>
      </div>
    </div>
  );
};

export default DashboardButtonGroup;