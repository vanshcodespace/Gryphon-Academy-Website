import trainEvaImage from "../../assets/training.jpg";

export default function Training() {
  return (
    <section className="w-full bg-[#D6E8F2]">
      <div className="mx-auto w-full max-w-480">
        <h2
          className="mb-8 text-center text-4xl font-bold tracking-tight sm:mb-10 sm:text-5xl lg:mb-6 lg:text-5xl"
          style={{
            background: "linear-gradient(to right, #1B3A6B, #7B1B2A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          How It Works — A Model Built for All Three.
        </h2>
        <p className="mb-8 text-center text-base sm:text-lg text-black">
          Gryphon Academy operates as a three-sided ecosystem. Every step of our model is designed to create simultaneous value for institutions, students, and organisations — with no financial burden on any party.
        </p>
        <div className="w-full overflow-hidden bg-white">
          <img
            src={trainEvaImage}
            alt="Training and evaluation"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
