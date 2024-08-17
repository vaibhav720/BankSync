import MobileNav from "@/components/ui/MobileNav";
import SideBar from "@/components/ui/Sidebar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName: 'Vaibhav', lastName: 'Parikh'};


  return (
    <main className="flex h-screen w-full font-inter">
        <SideBar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon"/>
            <div>
              <MobileNav user={loggedIn}/>
            </div>
          </div>

        </div>
        {children}
    </main>
  );
}
