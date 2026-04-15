import trainEvaImage from "../../assets/training.jpg";

export default function Training() {
  return (
    <section className="w-full bg-[#D6E8F2] pt-12 md:pt-16">
      <div className="mx-auto w-full max-w-480 px-4 sm:px-6">
        <h2
          className="mb-6 text-center text-4xl font-bold tracking-tight sm:mb-8 md:mb-10 sm:text-5xl lg:text-5xl"
          style={{
            background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          How It Works?
        </h2>
        <h3
          className="mb-10 mx-auto max-w-6xl text-center text-lg font-medium tracking-tight wrap-break-word whitespace-normal sm:mb-8 md:mb-12 sm:text-xl lg:text-xl"
          style={{
            background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Gryphon Academy operates as a three-sided ecosystem. Every step of our
          model is designed to create simultaneous value for institutions,
          students, and organisations - with no financial burden on any party.
        </h3>
      </div>
      <div className="w-full overflow-hidden bg-white">
        <img
          src={trainEvaImage}
          alt="Training and evaluation"
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}
