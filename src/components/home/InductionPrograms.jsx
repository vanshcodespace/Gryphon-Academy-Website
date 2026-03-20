export default function InductionPrograms() {
  const programs = [
    {
      title: "College Induction Programmes",
      description: "Comprehensive induction for freshers to get them ready for their academic journey",
      features: [
        "Orientation on campus facilities",
        "Academic planning and guidance",
        "Soft skills development",
        "Career path introduction",
        "Peer mentoring setup"
      ]
    },
    {
      title: "Corporate Employee Onboarding",
      description: "Smooth transition for new employees into your organization",
      features: [
        "Company culture immersion",
        "Role-specific training",
        "Team integration activities",
        "Compliance and policies",
        "Mentorship programs"
      ]
    },
    {
      title: "Faculty Orientation",
      description: "Professional development programme for faculty members",
      features: [
        "Teaching methodologies",
        "Industry exposure",
        "Curriculum updates",
        "Leadership skills",
        "Technology integration"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#01224F] border-t border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Induction Programmes
          </h2>
          <p className="text-xl text-white">
            Structured programmes to kickstart careers and integrations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white bg-opacity-5 backdrop-blur p-8 hover:bg-opacity-10 transition rounded-xl border border-white border-opacity-10"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {program.title}
              </h3>
              <p className="text-black mb-6">{program.description}</p>
              <ul className="space-y-3">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-green-400 mr-3 font-bold text-lg">✓</span>
                    <span className="text-black">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white bg-opacity-5 backdrop-blur rounded-xl p-8 md:p-12 border border-white border-opacity-10">
          <h3 className="text-2xl font-bold mb-6 text-black">
            How Our Induction Programmes Work
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Assessment", desc: "Understand needs & goals" },
              { step: "2", title: "Design", desc: "Create custom programme" },
              { step: "3", title: "Execute", desc: "Deliver comprehensive training" },
              { step: "4", title: "Support", desc: "Ongoing mentorship & follow-up" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-400 text-[#01224F] flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-black mb-2">{item.title}</h4>
                <p className="text-sm text-black">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
