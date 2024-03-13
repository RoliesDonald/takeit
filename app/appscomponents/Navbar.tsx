import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "../../public/images/desktoplogo.png";
import MobileLogo from "../../public/images/mobilelogo.png";
import { UserNav } from "./UserNav";

export function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href={"/"}>
          <Image
            src={DesktopLogo}
            alt="Desktop Logo"
            className="w-28 hidden lg:block"
          ></Image>
          <Image
            src={MobileLogo}
            alt="Mobil Logo"
            className="block lg:hidden w-7"
          ></Image>
        </Link>
        <div className="rounded-full border px-5 py-2">Search Box</div>
        <UserNav></UserNav>
      </div>
    </nav>
  );
}
