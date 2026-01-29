// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   SignUpButton,
//   UserButton,
// } from "@clerk/nextjs";
// import logo from "../public/hyrstackklogo.png"
// import { LayoutGrid, ChevronDown } from "lucide-react";
// import { FileText, Mail, Mic } from "lucide-react";
// import { Rocket } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50">
//       <div className="mx-auto max-w-7xl px-6">
//         <div
//           className="flex h-16 items-center justify-between rounded-2xl mt-4
//           bg-white/5 backdrop-blur-xl border border-white/10
//           shadow-lg shadow-black/20"
//         >
//           {/* Logo */}
//           <Link href="/" className="flex items-center pl-4">
//             <Image
//               src={logo}
//               alt="HyrStack Logo"
//               width={120}
//               height={40}
//               className="object-contain"
//               priority
//             />
//           </Link>

//           {/* Right Section */}
//           <div className="flex items-center gap-4 pr-4">
//             {/* Industry Insights */}
//             <Link href="/dashboard" className="no-underline">
//   <button
//     className="flex items-center gap-2 px-4 py-2 rounded-lg
//     text-sm text-white/80 hover:text-white
//     bg-white/5 hover:bg-white/15
//     border border-white/15
//     transition"
//   >
//     <LayoutGrid size={16} />
//     Industry Insights
//   </button>
// </Link>

//             {/* Dropdown Menu */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <button
//                   className="flex items-center gap-1 px-4 py-2 rounded-lg
//                   text-sm text-white/80 hover:text-white
//                   bg-white/5
// hover:bg-white/15
// border border-white/15
//  transition"
//                 >
//                   <Rocket size={16} className="text-white/80" />
//                   Launchpad
//                   <ChevronDown size={16} />
//                 </button>
//               </DropdownMenuTrigger>

//               <DropdownMenuContent
//                 align="end"
//                 className="bg-black/80 backdrop-blur-xl border border-white/10 text-white"
//               >
//                 <DropdownMenuItem asChild>
//                   <Link
//                     href="/resumebuilder"
//                     className="flex items-center gap-3 cursor-pointer"
//                   >
//                     <FileText size={16} className="text-white/70" />
//                     <span>Resume Builder</span>
//                   </Link>
//                 </DropdownMenuItem>

//                 <DropdownMenuItem asChild>
//                   <Link
//                     href="/coverletter"
//                     className="flex items-center gap-3 cursor-pointer"
//                   >
//                     <Mail size={16} className="text-white/70" />
//                     <span>Cover Letter</span>
//                   </Link>
//                 </DropdownMenuItem>

//                 <DropdownMenuItem asChild>
//                   <Link
//                     href="/interview"
//                     className="flex items-center gap-3 cursor-pointer"
//                   >
//                     <Mic size={16} className="text-white/70" />
//                     <span>Mock Interview</span>
//                   </Link>
//                 </DropdownMenuItem>

//               </DropdownMenuContent>
//             </DropdownMenu>

//             {/* Auth */}
//             <SignedOut>
//               <SignInButton>
//                 <button className="text-sm text-white/80 hover:text-white transition">
//                   Sign In
//                 </button>
//               </SignInButton>

//               <SignUpButton>
//                 <button
//                   className="rounded-full px-5 py-2 text-sm font-medium
//                   bg-white/10 text-white
//                   border border-white/20
//                   hover:bg-white/20 transition backdrop-blur-md"
//                 >
//                   Get Started
//                 </button>
//               </SignUpButton>
//             </SignedOut>

//             <SignedIn>
//               <UserButton
//                 appearance={{
//                   elements: {
//                     avatarBox: "w-9 h-9",
//                   },
//                 }}
//               />
//             </SignedIn>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import logo from "../public/hyrstackklogo.png";
import { LayoutGrid, ChevronDown, FileText, Mail, Mic, Rocket } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { checkUser } from "../lib/checkUser";

const Header = async() => {
  await checkUser();
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="flex h-16 items-center justify-between rounded-2xl mt-4
          bg-white/5 backdrop-blur-xl border border-white/10
          shadow-lg shadow-black/20"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center pl-4">
            <Image
              src={logo}
              alt="HyrStack Logo"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Right Section */}
          <div className="flex items-center gap-4 pr-4">
            {/* Only for SignedOut Users */}
            <SignedOut>
              <SignInButton>
                <button className="text-sm text-white/80 hover:text-white transition cursor-pointer">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton>
                <button
                  className="rounded-full px-5 py-2 text-sm font-medium
                  bg-white/10 text-white
                  border border-white/20
                  hover:bg-white/20 transition backdrop-blur-md
                  cursor-pointer"
                >
                  Get Started
                </button>
              </SignUpButton>
            </SignedOut>

            {/* Only for SignedIn Users */}
            <SignedIn>
              {/* Industry Insights */}
              <Link href="/dashboard" className="no-underline">
                <button
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                  text-sm text-white/80 hover:text-white
                  bg-white/5 hover:bg-white/15
                  border border-white/15
                  transition cursor-pointer"
                >
                  <LayoutGrid size={16} />
                  Industry Insights
                </button>
              </Link>

              {/* Launchpad Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-1 px-4 py-2 rounded-lg
                    text-sm text-white/80 hover:text-white
                    bg-white/5 hover:bg-white/15
                    border border-white/15 transition cursor-pointerff"
                  >
                    <Rocket size={16} className="text-white/80" />
                    Launchpad
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="bg-black/80 backdrop-blur-xl border border-white/10 text-white"
                >
                  <DropdownMenuItem asChild>
                    <Link
                      href="/resumebuilder"
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <FileText size={16} className="text-white/70" />
                      <span>Resume Builder</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/coverletter"
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <Mail size={16} className="text-white/70" />
                      <span>Cover Letter</span>
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link
                      href="/interview"
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <Mic size={16} className="text-white/70" />
                      <span>Mock Interview</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Profile Avatar */}
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
