import React from "react";

export default function Step3() {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="domaineInteress">domaineInteress</label>
      <input type="text" name="domaineInteress" id="domaineInteress" required />
      <label htmlFor="soutien">soutien</label>
      <input type="text" name="soutien" id="soutien" required />
      <label htmlFor="infoSup">infoSup</label>
      <input type="text" name="infoSup" id="infoSup" required />
    </div>
  );
}
