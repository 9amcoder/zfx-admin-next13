import AccountSwitcherComponent from "@/components/accountSwitcherComponent";
import BellIconComponent from "@/components/belliconComponent";
import LanguageDropdown from "@/components/languageDropdown";
import Navbar from "@/components/navbar";
import NotificationIcon from "@/components/notificationIconComponent";
import Sidebar from "@/components/sidebar";
import UserProfileComponent from "@/components/userProfileComponent";

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