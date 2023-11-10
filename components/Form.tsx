"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import formIcon from "../public/formulaire/4.svg";
import infoIcon from "../public/formulaire/5.svg";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import next from "next";

type formData = {
  id: number;
  serie: string;
  mention: string;
  matDominante: string;
  noteDominante: number;
  matFaible: string;
  noteFaible: number;
  passion: string;
  cariere: string;
  objectif: string;
  domaine: string;
  soutien: string;
  info: string;
};

const initialData: formData = {
  id: 0,
  serie: "",
  mention: "",
  matDominante: "",
  noteDominante: 0,
  matFaible: "",
  noteFaible: 0,
  passion: "",
  cariere: "",
  objectif: "",
  domaine: "",
  soutien: "",
  info: "",
};

export default function Form() {
  const [step, setStep] = useState(0);
  const [datas, setDatas] = useState<any>([]);

  const forms = [<Step1 key={0} />, <Step2 key={1} />, <Step3 key={2} />];

  async function nextStep(e) {
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

  function handleSubmit(e) {
    e.preventDefault();
    nextStep(e);
  }

  return (
    <>
      <div className="flex gap-8">
        <div className="w-full flex flex-col p-8 border rounded relative gap-4">
          <Image
            src={formIcon}
            alt="form-icon"
            height={50}
            width={50}
            className="absolute -top-8 -right-4"
          />
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {forms[step]}

            <button className="px-4 py-2 rounded bg-green-400" type="submit">
              {step === 2 ? "finish" : "next"}
            </button>
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
