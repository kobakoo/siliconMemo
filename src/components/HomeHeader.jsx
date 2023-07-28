import Link from "next/link";
import React from "react";

function HomeHeader() {
  return (
    <div className="sticky top-0 py-3 lg:w-6/12 mx-auto bg-white/70 backdrop-saturate-200 backdrop-blur-xl">
      <div className="justify-between flex md:mx-0.5 mx-5">
        <div className="py-0.5 z-10">
          <h2 className=" text-lg font-bold">Silicon memo</h2>
        </div>
        <Link
          className="z-10 bg-[#0071e3] py-2  text-white rounded-full font-normal text-center px-4 text-base"
          href="/signin"
          aria-label="sign in tom account"
        >
          登録
        </Link>
      </div>
    </div>
  );
}

export default HomeHeader;
