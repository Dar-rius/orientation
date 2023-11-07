import schoolIcon from "../../public/formulaire/1.svg";
import bookIcon from "../../public/formulaire/2.svg";
import trousseau from "../../public/formulaire/3.svg";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Form from "@/components/Form";

export default function Formulaire() {
  return (
    <>
      <>
        <Header />
        <header>
          <nav className="flex gap-8 p-8 justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-4 ">
              <div className="bg-blue-100 rounded-full p-4 border border-black">
                <Image
                  src={schoolIcon}
                  alt="school-image"
                  width={36}
                  height={36}
                />
              </div>
              <p>Ecole</p>
            </div>
            <span className="block w-1 h-1 bg-black rounded-full -translate-y-4 before:-translate-x-4 before:bg-black before:w-1 before:h-1 before:block before:rounded-full after:translate-x-4 after:bg-black after:w-1 after:h-1 after:block after:rounded-full after:-translate-y-1"></span>
            <div className="flex flex-col items-center justify-center gap-4 ">
              <div className="bg-yellow-100 rounded-full p-4 border border-black">
                <Image
                  src={bookIcon}
                  alt="school-image"
                  width={36}
                  height={36}
                />
              </div>

              <p>Vous</p>
            </div>
            <span className="block w-1 h-1 bg-black rounded-full -translate-y-4 before:-translate-x-4 before:bg-black before:w-1 before:h-1 before:block before:rounded-full after:translate-x-4 after:bg-black after:w-1 after:h-1 after:block after:rounded-full after:-translate-y-1"></span>

            <div className="flex flex-col items-center justify-center gap-4 ">
              <div className="bg-purple-500 rounded-full p-4 border border-black">
                <Image
                  src={trousseau}
                  alt="school-image"
                  width={36}
                  height={36}
                />
              </div>
              <p>Ensuite</p>
            </div>
          </nav>
        </header>
        <main className="p-16">
          <Form />
        </main>
        <Footer />
      </>
    </>
  );
}
