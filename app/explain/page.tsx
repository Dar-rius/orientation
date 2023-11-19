import Image from "next/image";
import txt from "../../public/explain/1.svg";
import orientation from "../../public/explain/2.svg";
import conseil from "../../public/explain/3.svg";
import temps from "../../public/explain/4.svg";
import exp from "../../public/explain/5.svg";

export default function Explain() {
  return (
    <>
      <header className="flex items-center justify-center py-20 bg-gradient-to-r from-pink-100 to-blue-100">
        <h1 className="text-blue-500 text-5xl tracking-widest">
          Parlez nous de vous
        </h1>
      </header>
      <div className="flex px-16 pb-4">
        <div className="flex flex-col gap-4 w-full items-start justify-center">
          <h2 className="text-blue-500 text-3xl">txt</h2>
          <p>
            votre reussite educative est notre priorite absolue, et pourvous
            offir une experience d&apos;orientation vraiment personnalisee, nous
            avons besoin de vous connaitre. Les informations que vous partagez
            avec nous sont la cle pour vous guider vers un avenir educatif qui
            vous correspond parfaitement
          </p>
        </div>
        <div className="w-full flex items-start justify-center">
          <Image width={206} height={206} src={txt} alt="" />
        </div>
      </div>

      <hr className="py-8" />
      <section className="px-32 pb-16 flex flex-col gap-8 items-center">
        <div className="flex">
          <div className="flex flex-col gap-4 w-full items-start justify-center">
            <h3 className="text-red-300">Orientation Ciblee</h3>
            <p>
              Vos détails personnels nous aident à comprendre vos intérêts, vos
              objectifs académiques et professionnels, ainsi que vos
              préférences. Grâce à ces informations, nous pouvons vous suggérer
              des écoles, des programmes et des ressources qui répondent
              précisément à vos besoins.
            </p>
          </div>
          <div className="w-full flex items-start justify-center">
            <Image width={206} height={206} src={orientation} alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="w-full flex items-start justify-center">
            <Image width={206} height={206} src={conseil} alt="" />
          </div>
          <div className="flex flex-col gap-4 w-full items-start justify-center">
            <h3 className="text-cyan-300">Conseil avisee</h3>
            <p>
              En connaissant votre situation, nous sommes en mesure de vous
              offrir des conseils et des recommandations spécifiques qui
              tiennent compte de votre contexte. Cela signifie que vous recevrez
              des informations pertinentes et adaptées à votre situation
              individuelle.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-4 w-full items-start justify-center">
            <h3 className="text-red-400">Gain de temps</h3>
            <p>
              En nous fournissant des informations sur vos intérêts, votre
              niveau scolaire, et vos aspirations, vous nous aidez à filtrer et
              à présélectionner les options qui correspondent à votre profil.
              Cela vous fait gagner du temps et vous permet de vous concentrer
              sur ce qui compte vraiment.
            </p>
          </div>
          <div className="w-full flex items-start justify-center">
            <Image width={206} height={206} src={temps} alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="w-full flex items-start justify-center">
            <Image width={206} height={206} src={exp} alt="" />
          </div>
          <div className="flex flex-col gap-4 w-full items-start justify-center">
            <h3 className="text-yellow-500">Experience sur mesure</h3>
            <p>
              En comprenant qui vous êtes, nous pouvons personnaliser votre
              expérience sur notre plateforme, en vous proposant du contenu
              éducatif, des ressources et des opportunités qui vous parleront
              vraiment.
            </p>
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-300 rounded-full ">
          C&apos;est parti!
        </button>
      </section>
    </>
  );
}
