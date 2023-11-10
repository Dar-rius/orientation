import React from "react";
import ContactCard from "@/components/contactCard";

export default function Contact() {
  return (
    <>
      <div className="p-16 flex flex-col gap-12">
        <h1>Contactez nos conseillers</h1>
        <ContactCard />
      </div>
    </>
  );
}
