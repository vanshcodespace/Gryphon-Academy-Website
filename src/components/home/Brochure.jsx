export default function Brochure() {
  return (
    <section className="bg-[#01295f] py-0">
      <div className="w-full px-0">
        <div
          className="relative flex min-h-[180px] w-full items-center overflow-hidden rounded-none px-5 py-5 sm:px-7 md:min-h-[210px] md:px-10"
          style={{
            backgroundColor: "#022a63",
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(66,117,196,0.22) 0 1px, transparent 1px 68px), repeating-linear-gradient(60deg, rgba(66,117,196,0.24) 0 1px, transparent 1px 92px), repeating-linear-gradient(-60deg, rgba(66,117,196,0.24) 0 1px, transparent 1px 92px)"
          }}
        >

          <div className="relative z-10 grid w-full items-center gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:gap-6">
            <div className="text-left">
              <h3 className="text-[1.45rem] font-extrabold leading-tight text-[#f1f1ed] md:text-[2.2rem]">
                Download Brochure for More Information
              </h3>
            </div>

            <div className="mx-auto md:mx-0">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 rounded-xl bg-[#2f67e6] px-5 py-3 text-base font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.28)] transition hover:bg-[#2458cf]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 4v9" />
                  <path d="m8.5 10.5 3.5 3.5 3.5-3.5" />
                  <rect x="4" y="17" width="16" height="3.5" rx="1.2" />
                </svg>
                <span>Download Brochure</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
