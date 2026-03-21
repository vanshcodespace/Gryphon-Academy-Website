import teamImage from "../assets/Ps.png";

export default function WhoAreWe() {
  return (
    <section className="relative overflow-hidden bg-[#eceff3] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -top-40 -left-24 h-96 w-96 rounded-full bg-[#0b3d7a]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#3f8efc]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 sm:mb-12">
          <p className="mb-3 inline-flex rounded-full border border-[#0f2b4e]/20 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#244f82] sm:text-sm">
            Gryphon Academy
          </p>
          <h2 className="max-w-xl text-4xl font-bold leading-tight text-[#0a0f18] sm:text-5xl lg:text-6xl">
            Who we are
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#2d3748] sm:text-lg">
            We don&apos;t just train students. We transform institutions, empower
            graduates, and build the workforce India&apos;s industry demands.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <article className="h-full rounded-[28px] border border-[#b8c7de]/50 bg-gradient-to-br from-white to-[#e4ebf5] p-7 shadow-[0_30px_80px_-48px_rgba(7,29,59,0.55)] sm:p-10">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.26em] text-[#2f5f9a] sm:text-sm">
              Info
            </p>

            <p className="text-base leading-relaxed text-[#1f2937] sm:text-lg">
              Gryphon Academy Pvt. Ltd. is a Pan-India professional training,
              placement facilitation, and institutional development organisation
              founded in 2020. We partner with MBA, Engineering, MCA, and
              Diploma institutions to embed structured industry readiness
              training directly into their academic curriculum — delivered
              offline, on-campus, by 350+ certified industry practitioners.
            </p>

            <p className="mt-6 text-base leading-relaxed text-[#1f2937] sm:text-lg">
              We are not a coaching institute. We are not an edtech platform. We
              are the operating bridge between academia and industry — training
              students inside their colleges, connecting institutions to
              corporate networks, and placing graduates with India&apos;s top
              employers at zero cost.
            </p>
          </article>

          <div className="mx-auto h-full w-full max-w-[28rem] lg:max-w-none">
            <div className="h-full min-h-[420px] overflow-hidden rounded-[28px] border border-[#b8c7de]/50 bg-white shadow-[0_20px_45px_-30px_rgba(11,61,122,0.5)]">
              <img
                src={teamImage}
                alt="Gryphon Academy team members"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
