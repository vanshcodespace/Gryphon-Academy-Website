const collegeRowOne = [
  { name: "IIT Bombay", style: "text-[#1e3a8a] font-semibold" },
  { name: "IIT Delhi", style: "text-[#0f2b5c] font-semibold" },
  { name: "IIT Madras", style: "text-[#1d4ed8] font-semibold" },
  { name: "IIT Kharagpur", style: "text-[#2563eb] font-semibold" },
  { name: "NIT Trichy", style: "text-[#1e40af] font-semibold" },
  { name: "BITS Pilani", style: "text-[#1d4ed8] font-semibold" },
  { name: "VIT", style: "text-[#2563eb] font-bold tracking-wide" },
  { name: "SRM", style: "text-[#1e3a8a] font-semibold" },
  { name: "MIT Manipal", style: "text-[#0f2b5c] font-semibold" },
];

const collegeRowTwo = [
  { name: "IISc", style: "text-[#1e3a8a] font-semibold" },
  { name: "IIIT Hyderabad", style: "text-[#2563eb] font-semibold" },
  { name: "NIT Surathkal", style: "text-[#1d4ed8] font-semibold" },
  { name: "PEC", style: "text-[#0f2b5c] font-semibold" },
  { name: "Thapar", style: "text-[#2563eb] font-semibold" },
  { name: "COEP", style: "text-[#1e40af] font-semibold" },
  { name: "RVCE", style: "text-[#1d4ed8] font-bold tracking-wide" },
  { name: "DTU", style: "text-[#1e3a8a] font-semibold" },
  { name: "NSUT", style: "text-[#2563eb] font-semibold" },
];

const corporateRowOne = [
  { name: "zomato", style: "text-[#dc2626] font-bold" },
  { name: "coinbase", style: "text-[#2563eb] font-semibold" },
  { name: "Paytm", style: "text-[#1e3a8a] font-semibold" },
  { name: "Uber", style: "text-[#111827] font-semibold" },
  { name: "salesforce", style: "text-[#0ea5e9] font-semibold" },
  { name: "amazon", style: "text-[#111827] font-bold" },
  { name: "Meta", style: "text-[#6b7280] font-semibold" },
  { name: "Google", style: "text-[#3b5fcc] font-semibold" },
  { name: "Microsoft", style: "text-[#6b7280] font-semibold" },
];

const corporateRowTwo = [
  { name: "cisco", style: "text-[#38bdf8] font-semibold" },
  { name: "stripe", style: "text-[#4f46e5] font-semibold" },
  { name: "NETFLIX", style: "text-[#dc2626] font-bold tracking-wide" },
  { name: "Flipkart", style: "text-[#2563eb] font-semibold" },
  { name: "Razorpay", style: "text-[#1d4ed8] font-semibold" },
  { name: "VISA", style: "text-[#1d4ed8] font-bold tracking-wide" },
  { name: "ATLASSIAN", style: "text-[#1d4ed8] font-bold tracking-wide" },
  { name: "PayPal", style: "text-[#2563eb] font-semibold" },
  { name: "CRED", style: "text-[#4b5563] font-semibold" },
];

const MarqueeTrack = ({ partners, reverse = false }) => {
  const repeatedPartners = [...partners, ...partners];

  return (
    <div className="partners-marquee-track-wrap">
      <div
        className={`partners-marquee-track ${
          reverse ? "partners-marquee-track-reverse" : ""
        }`}
      >
        {repeatedPartners.map((partner, idx) => (
          <span
            key={`${partner.name}-${idx}`}
            className={`partners-marquee-item ${partner.style}`}
          >
            {partner.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function PartnersMarquee() {
  return (
    <div className="partners-marquee-shell relative w-full">
      <div className="partners-marquee-wave partners-marquee-wave-top" />
      <div className="partners-marquee-wave partners-marquee-wave-bottom" />

      <div className="partners-marquee-surface w-full">
        <h2 className="partners-main-title mb-6 text-center font-bold tracking-tight md:mb-8">
          Our Partners
        </h2>

        <div className="partners-group-block partners-group-block-college partners-glass-card">
          <div className="partners-group-layout">
            <div className="partners-group-heading">
              <span className="partners-group-heading-text">College</span>
              <span className="partners-group-heading-line" />
            </div>

            <div className="partners-group-marquees">
              <MarqueeTrack partners={collegeRowOne} reverse />
              <MarqueeTrack partners={collegeRowTwo} reverse />
            </div>
          </div>
        </div>

        <div className="partners-group-block partners-group-block-corporate partners-glass-card mt-9 md:mt-12">
          <div className="partners-group-layout partners-group-layout-right">
            <div className="partners-group-marquees">
              <MarqueeTrack partners={corporateRowOne} />
              <MarqueeTrack partners={corporateRowTwo} />
            </div>

            <div className="partners-group-heading partners-group-heading-right">
              <span className="partners-group-heading-text">Corporate</span>
              <span className="partners-group-heading-line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
