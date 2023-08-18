import AccountSwitcherComponent from "@/components/header/accountSwitcherComponent";
import BellIconComponent from "@/components/header/belliconComponent";
import LanguageDropdown from "@/components/header/languageDropdown";
import Navbar from "@/components/nav/navbar";
import NotificationIcon from "@/components/header/notificationIconComponent";
import Sidebar from "@/components/nav/sidebar";
import UserProfileComponent from "@/components/header/userProfileComponent";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72 pb-10">
        <div className="hidden md:flex flex-col md:flex-row justify-between items-center mx-5 mt-5">
          <div className="flex flex-row md:flex-row justify-start items-center md:mr-5">
            <AccountSwitcherComponent />
          </div>
          <div className="flex flex-col md:flex-row justify-end items-center mb-5">
            <LanguageDropdown />
            <NotificationIcon />
            <BellIconComponent />
            <UserProfileComponent />
          </div>
        </div>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;