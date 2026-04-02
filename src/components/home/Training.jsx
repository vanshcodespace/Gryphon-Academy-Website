import trainEvaImage from "../../assets/02 1.png";

export default function Training() {
  return (
    <section className="w-full bg-[#f4f5f9]">
      <div className="mx-auto w-full max-w-480">
        <div className="w-full overflow-hidden bg-white">
          <img
            src={trainEvaImage}
            alt="Training and evaluation"
            className="w-full h-screen object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
