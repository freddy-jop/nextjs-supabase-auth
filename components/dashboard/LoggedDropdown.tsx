import { singOutAction } from "@/features/auth/auth.action";
import { useDropdownStore } from "@/store/dropdown.store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Check, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

export type LoggedDropdownType = PropsWithChildren;

export const LoggedDropdown = ({
  children,
  user,
}: LoggedDropdownType & any) => {
  const toggleDropdown = useDropdownStore((state) => state.toggleDropdown);
  const router = useRouter();

  const logoutAction = async () => {
    singOutAction();
    return router.push("/login");
  };
  return (
    <div className="mb-4">
      <DropdownMenu onOpenChange={() => toggleDropdown()}>
        {/* <DropdownMenuTrigger asChild>hello</DropdownMenuTrigger> */}
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-900 border-gray-400 border-2 pt-2 rounded-md w-56">
          <DropdownMenuItem className="w-full hover:bg-gray-700 outline-none py-1">
            <div className="flex items-center w-full px-2">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full overflow-hidden mr-3">
                {/* Image de l'utilisateur, si disponible */}
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <p className="text-xl font-mono">F</p>
                </div>
              </div>

              {/* Texte avec deux lignes */}
              <div className="text-left">
                <span className="block font-semibold text-gray-300 text-sm">
                  FredSquare
                </span>
                <span className="block text-sm text-gray-500">Personal</span>
              </div>
              <Check className="w-5 h-5 ml-auto text-gray-400" />
            </div>
          </DropdownMenuItem>
          <div className="w-full flex flex-col items-center mt-2">
            <div className="h-[2px] w-48 bg-gray-800 space-y-1 mb-2"></div>
          </div>
          <DropdownMenuItem className="w-full hover:bg-gray-700 outline-none">
            <div className="space-y-1">
              <Link
                href="/profile"
                className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer text-white transition"
              >
                <div className="flex items-center flex-1">
                  <Settings className="h-6 w-6 mr-3 text-gray-400" />
                  Settings
                </div>
              </Link>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="w-full hover:bg-gray-700 outline-none">
            <div className="space-y-1">
              <div
                onClick={logoutAction}
                className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer text-white transition"
              >
                <div className="flex items-center flex-1">
                  <LogOut className="h-6 w-6 mr-3 text-gray-400" />
                  Logout
                </div>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="w-full bg-gray-800 outline-none py-2">
            <div className="space-y-1">
              <div className="flex flex-col items-center flex-1">
                <p className="text-sm text-white">{user.email}</p>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
