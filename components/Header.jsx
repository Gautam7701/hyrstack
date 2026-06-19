import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import {
  BriefcaseBusiness,
  ChevronDown,
  FileText,
  LayoutGrid,
  Mail,
  Menu,
  Mic,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { checkUser } from "../lib/checkUser";
import logo from "../public/hyrstackklogo.png";

const productLinks = [
  { href: "/dashboard", label: "Industry Insights", icon: LayoutGrid },
  { href: "/resumebuilder", label: "Resume Builder", icon: FileText },
  { href: "/coverletter", label: "Cover Letter", icon: Mail },
  { href: "/interview", label: "Mock Interview", icon: Mic },
];

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-4 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-black/75 px-3 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:px-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="HyrStack"
              width={132}
              height={42}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            <SignedIn>
              <Link
                href="/dashboard"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white/75 transition hover:border-sky-200/45 hover:bg-white/[0.08] hover:text-white"
              >
                <LayoutGrid size={16} />
                Industry Insights
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white/75 transition hover:border-sky-200/45 hover:bg-white/[0.08] hover:text-white">
                    <Rocket size={16} />
                    Launchpad
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 border-white/10 bg-black/95 p-2 text-white shadow-2xl shadow-black/40 backdrop-blur-xl"
                >
                  {productLinks.slice(1).map(({ href, label, icon: Icon }) => (
                    <DropdownMenuItem key={href} asChild>
                      <Link
                        href={href}
                        className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-white/80 focus:text-white"
                      >
                        <Icon size={16} className="text-sky-200" />
                        <span>{label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </SignedIn>
          </nav>

          <div className="flex items-center gap-2">
            <SignedOut>
              <SignInButton>
                <button className="hidden h-10 rounded-xl px-4 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white sm:inline-flex sm:items-center">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="h-10 rounded-xl bg-white px-4 text-sm font-semibold text-black shadow-lg shadow-white/10 transition hover:bg-sky-100">
                  Get Started
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="hidden md:block">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "h-10 w-10 ring-2 ring-white/10",
                    },
                  }}
                />
              </div>
            </SignedIn>

            <Sheet>
              <SheetTrigger asChild>
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white md:hidden">
                  <Menu size={18} />
                  <span className="sr-only">Open navigation</span>
                </button>
              </SheetTrigger>
              <SheetContent className="border-white/10 bg-black/95 text-white backdrop-blur-xl">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-left text-white">
                    <BriefcaseBusiness className="h-5 w-5 text-sky-200" />
                    HyrStack
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 grid gap-3">
                  <SignedIn>
                    {productLinks.map(({ href, label, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/80 transition hover:bg-white/10 hover:text-white"
                      >
                        <Icon size={17} className="text-sky-200" />
                        {label}
                      </Link>
                    ))}
                    <div className="mt-4">
                      <UserButton />
                    </div>
                  </SignedIn>
                  <SignedOut>
                    <SignInButton>
                      <button className="rounded-xl border border-white/10 px-4 py-3 text-left text-white/80">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton>
                      <button className="rounded-xl bg-white px-4 py-3 text-left font-semibold text-black">
                        Get Started
                      </button>
                    </SignUpButton>
                  </SignedOut>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
