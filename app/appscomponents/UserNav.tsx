/* eslint-disable @next/next/no-img-element */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export async function UserNav() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 items-center gap-x-3 flex ">
          <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
          <img
            src={
              user?.picture ??
              "https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-thumbnail.png"
            }
            alt="Default User Img"
            className="rounded-full h-8 w-8 hidden lg:block"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {user ? (
          <>
            <DropdownMenuItem>
              <form className="w-full">
                <button type="submit" className="w-full text-start">
                  Taket it Your Home{" "}
                </button>
              </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/my-homes" className="w-full">
                My Listing
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/favorites" className="w-full">
                My Favorite
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/reservations" className="w-full">
                My Reservation
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="mr-2 ml-2" />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>
              <LogoutLink>Log Out</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <LoginLink>Sign in</LoginLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RegisterLink>Register</RegisterLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
