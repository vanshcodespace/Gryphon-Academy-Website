export default function Hero({ showTopLeftLogo, logoSrc }) {
  return (
    <section
      id="home"
      className="relative h-screen min-h-170 w-full overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://www.iima.ac.in/sites/default/files/2024-06/IIMA%20Home%20page%20video%202024-06-06%20Compressed%20%281%29.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,16,42,0.25)_0%,rgba(1,16,42,0.25)_42%,rgba(1,16,42,0.25)_100%)]" />

      {showTopLeftLogo ? (
        <a
          href="#home"
          className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6 md:left-8 md:top-8"
        >
          <img
            src={logoSrc}
            alt="Gryphon Academy"
            className="h-16 w-auto sm:h-20 md:h-24"
          />
        </a>
      ) : null}

      <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
        <div className="text-center">
          <h1
            className="whitespace-nowrap font-bold leading-tight text-white"
            style={{ fontSize: "clamp(1.05rem, 4.8vw, 4.5rem)" }}
          >
            Build Your Career With Industry Ready Skills
          </h1>

          <p
            className="mt-4 whitespace-nowrap text-white"
            style={{ fontSize: "clamp(0.82rem, 1.75vw, 1.5rem)" }}
          >
            Professional training programs in aviation, hospitality and
            corporate sectors with placement support.
          </p>
        </div>
      </div>
    </section>
  );
}
