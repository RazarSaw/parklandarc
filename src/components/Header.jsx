import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="grid place-items-center gap-8 px-8 py-16 bg-[url('./stolen-header.png')] bg-cover bg-bottom min-h-[40vh] bg-blend-multiply bg-gray-500 text-center">
        <Link to={"/"} className="hover:scale-[1.05] transition-all">
          <img src="./header.png" />
        </Link>
        <p className="text-3xl text-white font-semibold">
          Interested In Our Network?
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://ve5ufo-radiospace.godaddysites.com/"
            className="bg-blue-400 hover:bg-blue-500 rounded-[8px] p-4 text-white font-semibold hover:scale-[1.05] transition-all"
          >
            <p>Visit SASKWARN (Wireless Amateur Radio Network)</p>
          </a>
          <a
            href="#"
            className="bg-blue-400 hover:bg-blue-500 rounded-[8px] p-4 text-white font-semibold hover:scale-[1.05] transition-all"
          >
            <p>Membership</p>
          </a>
        </div>
      </header>
    </>
  );
}
