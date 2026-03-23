const topRowPartners = [
  { name: "Meta", style: "text-[#2f3440] font-semibold" },
  { name: "Google", style: "text-[#3b5fcc] font-semibold" },
  { name: "Microsoft", style: "text-[#6b7280] font-semibold" },
  { name: "PhonePe", style: "text-[#5b2dab] font-semibold" },
  { name: "zomato", style: "text-[#dc2626] font-bold" },
  { name: "coinbase", style: "text-[#2563eb] font-semibold" },
  { name: "Paytm", style: "text-[#1e3a8a] font-semibold" },
  { name: "Uber", style: "text-[#111827] font-semibold" },
  { name: "salesforce", style: "text-[#0ea5e9] font-semibold" },
  { name: "amazon", style: "text-[#111827] font-bold" },
];

const bottomRowPartners = [
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

      <div className="partners-marquee-surface w-full border-b border-white/15 bg-[#eef0f2] px-3 py-10 md:px-4 md:py-20">
        <MarqueeTrack partners={topRowPartners} />
        <div className="mt-13.5">
          <MarqueeTrack partners={bottomRowPartners} reverse />
        </div>
      </div>
    </div>
  );
}
