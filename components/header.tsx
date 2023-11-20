import Image from "next/image";
import Logo from "@/public/header/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 50,
        marginRight: 50,
        marginBottom: "4%",
        paddingTop: "3%",
      }}
    >
      <Image src={Logo} alt="Logo" width={90} height={90} />

      <div>
        <Link
          href={""}
          style={{
            fontSize: 20,
          }}
        >
          Accueil
        </Link>

        <Link
          href={""}
          style={{
            marginRight: 20,
            marginLeft: 60,
            fontSize: 20,
          }}
        >
          A propos
        </Link>
      </div>
    </header>
  );
}
