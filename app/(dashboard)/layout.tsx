import AccountComponent from "@/components/accountComponent";
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
        <div className="flex justify-between items-center mt-5 mx-3">
          <div className="flex justify-start">
            <AccountComponent /> 
          </div>
          <div className="flex justify-end">
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
