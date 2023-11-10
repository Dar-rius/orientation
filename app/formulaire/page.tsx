import Header from "@/components/header";
import Footer from "@/components/footer";
import Form from "@/components/Form";

export default function Formulaire() {
  return (
    <>
      <Header />

      <main className="p-16">
        <Form />
      </main>
      <Footer />
    </>
  );
}
