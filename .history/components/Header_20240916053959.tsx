import { Bars3Icon } from '@heroicons/react/24/outline'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header() {
    return (
      import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@your-ui-library'; // Update with your UI library

export default function Header() {
  return (
    <header className="sticky top-0 bg-white text-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-14" />
          <h1 className="text-4xl text-emerald-600 font-bold mb-4">
            Welcome to the Official Campaign of <span className="text-orange-800">Galadima</span>
          </h1>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Bars3Icon className="h-8 w-8 text-gray-800 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/billing">Billing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/team">Team</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/subscription">Subscription</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}


    )
}

export default Header;