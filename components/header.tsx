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
        paddingTop: "2%",
      }}
    >
        <Link href={"/"}>
            <Image src={Logo} alt="Logo" width={90} height={90} />
        </Link>
      <div>
        <Link
          href={"/conseiller"}
          style={{
            fontSize: 18,
          }}
        >
          Conseiller
        </Link>

          <Link
              href={"/domaine"}
              style={{
                  marginRight: 20,
                  marginLeft: 60,
                  fontSize: 18,
              }}
          >
              Domaines
          </Link>

        <Link
          href={"/explain"}
          style={{
            marginRight: 20,
            marginLeft: 60,
            fontSize: 18,
          }}
        >
          A propos
        </Link>
      </div>
    </header>
  );
}
