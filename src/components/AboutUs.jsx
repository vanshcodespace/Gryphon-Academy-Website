export default function AboutUs() {
  return (
    <section className="py-20 bg-[#01224F]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">
              About Gryphon Academy
            </h2>
            <p className="text-lg text-white mb-4">
              Gryphon Academy is your one-stop destination for professional development, corporate training, and placement assistance across multiple sectors including aviation, hospitality, and corporate industries.
            </p>
            <p className="text-lg text-white mb-4">
              With over a decade of experience, we've trained thousands of students and partnered with hundreds of leading organizations to bridge the gap between education and industry requirements.
            </p>
            <p className="text-lg text-white">
              Our mission is simple: to empower individuals and organizations through cutting-edge training, digital transformation, and meaningful recruitment partnerships.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="mb-6 text-black">
              To create a world where every individual has access to industry-relevant skills and every organization has access to talented, trained professionals ready to make an impact.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-black">
              Delivering exceptional training, recruitment, and corporate solutions that transform careers and accelerate business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
