import React from "react";
import userSvg from "../public/conseiller/User.svg";
import Image from "next/image";

export default function contactCard() {
  return (
    <div className="p-4 max-h-[88px] border border-black flex justify-between rounded-lg items-center">
      <div className="flex items-center justify-center gap-4">
        <Image src={userSvg} alt="user-profile-img" className="rounded-full" />
        <div>
          <h3>nom</h3>
          <p>age / sexe</p>
        </div>
      </div>
      <hr className="w-8 h-full border-black rotate-90 " />
      <div>
        <p>profession : nom profession</p>
        <p>experience : nombre experience</p>
      </div>
      <hr className="w-8 border-black h-full rotate-90 " />
      <div className="flex gap-4 items-center h-4">
        <p className="max-w-md overflow-hidden max-h-12">
          Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet consectetur
          izflefofjkojzjfzoefjizepfzflzoggholgozhgerhgeofzekofjzpeofzlpfopfzopfzofjefzpfef
          feoifjzoeiozeoij
        </p>
        <div className="bg-red-200 w-8 h-8 rounded"></div>
      </div>
    </div>
  );
}
