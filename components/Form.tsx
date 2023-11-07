import React from "react";
import Image from "next/image";
import formIcon from "../public/formulaire/4.svg";
import infoIcon from "../public/formulaire/5.svg";

export default function Form() {
  return (
    <>
      <div className="h-full flex gap-8">
        <div className="w-full flex flex-col p-4 ">
          <form className="p-4 border rounded relative">
            <Image
              src={formIcon}
              alt="form-icon"
              height={50}
              width={50}
              className="absolute -top-8 -right-4"
            />
            <input type="text" className="border" />
            <input type="submit" value="submit" />
          </form>
        </div>
        <div className="flex flex-col items-center justify-center p-4 border-l border-black relative">
          <Image
            src={infoIcon}
            alt="info-icon"
            height={30}
            width={30}
            className="absolute right-4 -top-0"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            ipsum sed qui architecto libero eum deserunt illo delectus iusto
            doloremque accusantium, consequatur est magni fuga totam molestias
            porro at beatae.
          </p>
        </div>
      </div>
    </>
  );
}
