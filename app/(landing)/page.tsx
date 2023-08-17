import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FunctionComponent } from "react";

interface LandingPageProps {}

const LandingPage: FunctionComponent<LandingPageProps> = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1>Welcome to ZFX admin</h1>
        <Link href="/dashboard">
          <Button className="mt-5">Go to dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;