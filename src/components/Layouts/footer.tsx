import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/images/logo/logo-dark.png";

const Footer: React.FC = () => (
  <>
    <div className="mx-auto text-white max-screen">
      <div className="flex flex-col md:flex-row justify-between items-center bg-slate-800 gap-5 py-6 md:py-2">
        <div className="w-5/6 flex flex-col md:flex-row mx-auto items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="/policy" target="_blank" rel="noopener noreferrer" className="text-white text-sm sm:text-base hover:text-green-500">
              Privacy Policy
            </a>
            <a href="/termsAndConditions" target="_blank" rel="noopener noreferrer" className="text-white text-sm sm:text-base hover:text-green-500">
              Terms and Conditions
            </a>
          </div>

          <div className="pt-4 md:pt-0 flex flex-col sm:flex-row items-center gap-4 text-left">
            <Link href="https://myportfolio-renanvzd.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-green-500 text-left">
              Made by RVD.
            </Link>
            <p className="text-white text-sm text-left">© 2023 Template. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export { Footer };
