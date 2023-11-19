import React from "react";

export default function Step2() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="passion">passion</label>
      <input type="text" name="passion" id="passion" required />
      <label htmlFor="futureCariere">futureCariere</label>
      <input type="text" name="futureCariere" id="futureCariere" required />
      <label htmlFor="objectifVie">objectifVie</label>
      <input type="text" name="objectifVie" id="objectifVie" required />
      <label htmlFor="passion">passion</label>
      <input type="text" name="passion" id="passion" required />
    </div>
  );
}
