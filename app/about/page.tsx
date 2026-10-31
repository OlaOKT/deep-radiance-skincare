
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#641010]">

      {/* HEADER */}
      <header className="border-b border-[#641010]/10 px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <Link href="/" className="font-serif text-xl">
            Deep Radiance
          </Link>

          <Link
            href="/"
            className="text-sm transition-opacity hover:opacity-60"
          >
            Back to Home
          </Link>

        </div>
      </header>

      {/* INTRODUCTION */}
      <section className="bg-[#faf7f3] px-6 py-20 text-center md:px-12 md:py-28">
        <div className="mx-auto max-w-3xl">

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#641010]/60">
            Our story
          </p>

          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            A thoughtful approach
            <br />
            to <span className="italic">skincare.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-center text-sm leading-8 text-[#641010]/70 md:text-base">
            Deep Radiance Skincare is a skincare consultancy dedicated
            to helping you understand your skin, discover suitable
            skincare products, and build a routine that works for you.
          </p>

        </div>
      </section>

      {/* ABOUT THE BUSINESS */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#641010]/60">
              What we do
            </p>

            <h2 className="font-serif text-3xl leading-tight md:text-5xl">
              Your skincare journey,
              <br />
              made more personal.
            </h2>

          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-sm leading-8 text-[#641010]/70">

            <p>
              We believe skincare should feel thoughtful, approachable,
              and personal. Understanding your skin is an important
              first step toward making informed skincare choices.
            </p>

            <p>
              Through skincare consultations and carefully selected
              products from established skincare brands, Deep Radiance
              aims to help you find options that complement your
              individual skincare needs.
            </p>

            <p>
              Our focus is on guidance, education, and helping you
              feel more confident in your skincare routine.
            </p>

          </div>

        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[#faf7f3] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#641010]/60">
              The Deep Radiance approach
            </p>

            <h2 className="font-serif text-3xl md:text-5xl">
              Skincare with intention
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {/* FIRST APPROACH */}
            <div className="bg-white p-8 text-center">

              <p className="font-serif text-2xl">
                01
              </p>

              <h3 className="mt-5 font-serif text-xl">
                Understand your skin
              </h3>

              <p className="mt-4 text-center text-sm leading-7 text-[#641010]/70">
                Learn about your skincare concerns and explore
                routines that make sense for your needs.
              </p>

            </div>

            {/* SECOND APPROACH */}
            <div className="bg-white p-8 text-center">

              <p className="font-serif text-2xl">
                02
              </p>

              <h3 className="mt-5 font-serif text-xl">
                Discover suitable products
              </h3>

              <p className="mt-4 text-center text-sm leading-7 text-[#641010]/70">
                Explore skincare products from different brands
                with thoughtful guidance and recommendations.
              </p>

            </div>

            {/* THIRD APPROACH */}
            <div className="bg-white p-8 text-center">

              <p className="font-serif text-2xl">
                03
              </p>

              <h3 className="mt-5 font-serif text-xl">
                Build your routine
              </h3>

              <p className="mt-4 text-center text-sm leading-7 text-[#641010]/70">
                Create a skincare routine that feels manageable,
                consistent, and suited to your everyday life.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-5xl bg-[#641010] px-8 py-16 text-center text-white md:px-16">

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            Begin your journey
          </p>

          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl leading-tight md:text-5xl">
            Let&apos;s make your skincare routine more personal.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-8 text-white/80">
            Explore our skincare consultations and discover a more
            thoughtful approach to caring for your skin.
          </p>

          <Link
            href="/consultation"
            className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-[#641010] transition-colors hover:bg-[#f5eeee]"
          >
            Explore consultations
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#641010]/10 bg-[#faf7f3] px-6 py-8 md:px-12">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">

          <Link href="/" className="font-serif text-lg">
            Deep Radiance Skincare
          </Link>

          <Link
            href="/shop"
            className="text-sm transition-opacity hover:opacity-60"
          >
            Explore skincare
          </Link>

          <p className="text-center text-xs text-[#641010]/50">
            © 2026 Deep Radiance Skincare
          </p>

        </div>

      </footer>

    </main>
  );
}
