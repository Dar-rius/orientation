import { type } from "os";
import React from "react";

type userData = {
  id: number;
  serie: string;
  mention: string;
  matDominante: string;
  noteDominante: number;
  matFaible: string;
  noteFaible: number;
};

type formProps = userData & {
  getFormData: (fields: Partial<userData>) => void;
};

export default function Step1() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="id">id</label>
      <input type="number" name="id" id="id" required />
      <label htmlFor="serie">serie</label>
      <input type="text" name="serie" id="serie" required />
      <label htmlFor="mention">mention</label>
      <input type="text" name="mention" id="mention" required />
      <div className="flex gap-16">
        <div>
          <label htmlFor="matiereDominante">matiereDominante</label>
          <input
            type="text"
            name="matiereDominante"
            id="matiereDominante"
            required
          />
        </div>
        <div>
          <label htmlFor="noteDominante">noteDominante</label>
          <input
            type="number"
            name="noteDominante"
            id="noteDominante"
            required
          />
        </div>
      </div>
      <label htmlFor="matiereFaible">matiereFaible</label>
      <input type="text" name="matiereFaible" id="matiereFaible" required />
      <label htmlFor="noteFaible">noteFaible</label>
      <input type="number" name="noteFaible" id="noteFaible" required />
    </div>
  );
}
