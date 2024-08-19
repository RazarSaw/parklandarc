import Link from "next/link";

export default function repeaterEcholinkAndIRLP() {
  return (
    <>
      <header
        className={`bg-[url('/parc/micor_radio.jpg')] bg-no-repeat bg-fixed bg-cover  min-h-[40vh] grid grid-cols-1 grid-rows-1 justify-center bg-blue-300 bg-blend-multiply`}
      >
        <div className="backdrop-blur-md flex flex-col justify-center">
          <div className="container mx-auto p-8">
            <h1>Repeaters, EchoLink, & IRLP</h1>
          </div>
        </div>
      </header>
      <main className="bg-neutral-800">
        <div className="container mx-auto py-16 p-8 flex flex-col gap-16">
          <section className="flex flex-col gap-8">
            <h2>Our Repeater System</h2>
            <p>
              {" "}
              The Parkland Amateur Radio Club boasts a great repeater network
              system, which provides several different modes of communication,
              to a expanded coverage area. We are continuously updating our
              equipment and repeater network.
            </p>
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1hhj566FHT62oBQi-0ETpRZiKpja1_yf7&ehbc=2E312F"
                height="480"
                className="w-full"
              ></iframe>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=17ofkEFonsS4s7nLT0yQfRQ33v__5Mo8&ehbc=2E312F"
                height="480"
                className="w-full"
              ></iframe>
              <img
                src="/parc/coverage.png"
                alt="Parkland Amateur Radio Club repeater coverage"
                className="h-full w-full object-cover object-left"
              />
            </div>
            <p>
              The Parkland amateur Radio Club hosts a great system, integrating
              both VHF / UHF and V.O.I.P. communication systems, that can be
              linked to other systems around the world. Our club achieved this
              through many volunteer hours from all our members, donations from
              fellow ham operators from far and wide and through the people and
              organizations around our local coverage area. We are continuing to
              grow, by new members coming on board, and we are constantly
              upgrading and adding to our already proven reliable system.
            </p>
          </section>
        </div>
        <section className="bg-[url('/parc/cloudy-sky.webp')] bg-cover bg-bottom bg-fixed bg-black/70 bg-blend-multiply">
          <div className="backdrop-blur-sm">
            <div className="container mx-auto px-8 py-16 flex flex-col gap-8 ">
              <h2>PARC Linking Project</h2>
              <p>
                PARC Linking project has been an ongoing project since early
                2008, and hopefully will be completed, 2011-2012. We had hoped
                for it to be completed sooner, but with problems we had
                previously, and SARL, denying our club any funding for this
                project, it is taking longer than we had hoped for.
              </p>
              <p>
                The linking project&apos;s main goal is to expand our local coverage
                area to be province wide, and also link into Manitoba, the DARC
                System, which will give coverage expanded to Eastern Canada.
                This is a major project taken on solely by a local club to
                improve our current communication system. Since all our repeater
                sites are on battery backup power, we can deliver uninterrupted
                communication even when our power grid fails, conditions are
                poor for HF Communication, or when internet services are down.
                Yes our goal is high but with a high commitment from our
                members, volunteers, municipal support, and individual
                donations, we are confident, we can achieve.
              </p>
              <p>
                When completed the following sites will be linked: Yorkton,
                Endeavour, Leroy, and Baldy Mountain / Swan River. This will be
                able to link the PARC System with other systems currently in
                Operation.{" "}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
