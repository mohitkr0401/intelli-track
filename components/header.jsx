import { SignInButton, UserButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { LayoutDashboard, LogOut, PenBox } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function Header() {
  return (
    <div className="fixed top-0 w-full bg-white  z-10 border-b">
      {/* <nav className="container mx-auto  py-4 flex items-center justify-between"> */}
      <nav className="px-0 sm:px-4 md:px-8 py-4 flex items-center justify-between w-full max-w-screen-2xl mx-auto">
        <Link href="/">
          <Image
            src={"/logo3.png"}
            alt="intelli-track logo"
            height={60}
            width={200}
            className="h-16 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="mr-2 text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline" className="mr-2">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button className="mr-2 flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Log in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
}

export default Header;
