import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute -top-24 -right-50 w-87.5 h-87.5 rounded-full bg-[#F3F0FB]" />

      {/* Hero */}
      <main className="relative w-[90%] mx-auto mt-5 min-h-96 border-l-2 border-[#7763F9] flex flex-col lg:flex-row items-center justify-between gap-10 px-5 sm:px-8 lg:px-10">

        <div>
          <h1 className="text-5xl lg:text-7xl font-bold text-[#2D3750]">
            Nexora
          </h1>

          <h1 className="ml-6 sm:ml-8 text-5xl lg:text-7xl font-bold text-[#7763F9]">
            Technology.
          </h1>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-3">
            <p className="text-gray-600 max-w-xl">
              We create modern digital experiences and scalable technology
              solutions that help businesses grow, connect, and stand out.
            </p>

            <button className="w-fit rounded bg-[#7763F9] px-4 py-2 text-white">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Decorative line */}
        <span className="hidden lg:block absolute bottom-8 w-9/12 border border-[#C3BFE8]" />

      </main>

      {/* Selected Work */}
      <section className="my-15 px-5 sm:px-8 lg:px-17">

        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3750]">
            Selected work
          </h2>

          <p className="text-[#C3BFE8]">
            2026
          </p>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row gap-6">

          {/* Main project */}
          <div className="flex-1">
            <Card number={'01'} />
          </div>

          {/* Smaller projects */}
          <div className="flex w-full flex-col gap-4 lg:w-auto">
            <Card number={'02'} />
            <Card number={'03'} />
          </div>

        </div>

      </section>

    </div>
  );
}