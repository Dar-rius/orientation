"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import formIcon from "../public/formulaire/4.svg";
import infoIcon from "../public/formulaire/5.svg";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import schoolIcon from "../public/formulaire/1.svg";
import bookIcon from "../public/formulaire/2.svg";
import trousseau from "../public/formulaire/3.svg";

export default function Form() {
  const [step, setStep] = useState(0);
  const [datas, setDatas] = useState<any>([]);

  const forms = [<Step1 key={0} />, <Step2 key={1} />, <Step3 key={2} />];

  async function nextStep(e:any) {
    let Donnees = datas;
    const formLenght =
      step === 0 ? e.target.elements.length - 1 : e.target.elements.length - 2;
    console.log(formLenght);
    for (let i = 0; i < formLenght; i++) {
      Donnees.push(e.target.elements[i].value);
    }
    setDatas(Donnees);
    console.log(Donnees, datas);
    await Donnees;
    if (step > 1) return step;
    setStep(step + 1);
  }

  function backStep() {
    if (step === 0) return step;
    setStep(step - 1);
  }

  function handleSubmit(e:any) {
    e.preventDefault();
    nextStep(e);
  }


  return (
    <>
      <header className="mb-8">
        <nav className="flex gap-8 p-4 justify-center items-center">
          <div
            className={
              (step === 0 ? "text-orange-300" : "") +
              " flex flex-col items-center justify-center gap-4 "
            }
          >
            <div className="bg-blue-100 rounded-full p-4 border border-black">
              <Image
                src={schoolIcon}
                alt="school-image"
                width={26}
                height={26}
              />
            </div>
            <p>Ecole</p>
          </div>
          <span className="block w-1 h-1 bg-black rounded-full -translate-y-4 before:-translate-x-4 before:bg-black before:w-1 before:h-1 before:block before:rounded-full after:translate-x-4 after:bg-black after:w-1 after:h-1 after:block after:rounded-full after:-translate-y-1"></span>
          <div
            className={
              (step === 1 ? "text-orange-300" : "") +
              " flex flex-col items-center justify-center gap-4 "
            }
          >
            <div className="bg-yellow-100 rounded-full p-4 border border-black">
              <Image src={bookIcon} alt="book-image" width={26} height={26} />
            </div>

            <p>Vous</p>
          </div>
          <span className="block w-1 h-1 bg-black rounded-full -translate-y-4 before:-translate-x-4 before:bg-black before:w-1 before:h-1 before:block before:rounded-full after:translate-x-4 after:bg-black after:w-1 after:h-1 after:block after:rounded-full after:-translate-y-1"></span>

          <div
            className={
              (step === 2 ? "text-orange-300" : "") +
              " flex flex-col items-center justify-center gap-4 "
            }
          >
            <div className="bg-purple-500 rounded-full p-4 border border-black">
              <Image
                src={trousseau}
                alt="trousseau-image"
                width={26}
                height={26}
              />
            </div>
            <p>Ensuite</p>
          </div>
        </nav>
      </header>
      <div className="flex gap-8">
        <div className="w-full flex flex-col p-8 border-2 rounded-lg relative gap-4 border-indigo-300">
          <Image
            src={formIcon}
            alt="form-icon"
            height={50}
            width={50}
            className="absolute -top-8 -right-4"
          />
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {forms[step]}

            <button className="px-4 py-2 rounded-full bg-indigo-300" type="submit">
              {step === 2 ? "finish" : "Valider"}
            </button>
          </form>
        </div>
        <div className="p-4 border-l border-black relative">
          <Image
            src={infoIcon}
            alt="info-icon"
            height={40}
            width={40}
            className="absolute right-4 -top-0"
          />
          <p style={{
            marginTop:100,
            width:"95%"
        }}>
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
