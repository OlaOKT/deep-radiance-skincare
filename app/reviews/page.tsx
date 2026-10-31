
import Link from "next/link";
import { reviewsContent } from "./content";

export default function ReviewsPage() {
  return (
    <main className="flex-1 bg-white text-[#641010]">

      {/* Page Introduction */}
      <section className="px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.2em]">
            The Deep Radiance Experience
          </p>

          <h1 className="font-serif text-3xl sm:text-5xl">
            {reviewsContent.pageTitle}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#641010]/75 sm:text-lg">
            {reviewsContent.introduction}
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.2em]">
              Experiences
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl">
              {reviewsContent.sectionTitle}
            </h2>
          </div>

          {/* Sample Review Notice */}
          <div className="mb-10 border border-[#641010]/20 bg-[#f8f3f1] px-5 py-4 text-center">
            <p className="text-sm leading-6 text-[#641010]/80">
              {reviewsContent.notice}
            </p>
          </div>

          {/* Review Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviewsContent.reviews.map((review) => (
              <article
                key={review.id}
                className="flex h-full flex-col border border-[#641010]/15 bg-white p-6 transition duration-300 hover:border-[#641010]/40 hover:shadow-lg sm:p-8"
              >
                {/* Star Rating */}
                <div
                  className="mb-5 flex gap-1 text-lg text-[#641010]"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }, (_, index) => (
                    <span key={index} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="flex-1 text-sm leading-7 text-[#641010]/80 sm:text-base">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Customer Name */}
                <div className="mt-8 border-t border-[#641010]/15 pt-5">
                  <p className="font-serif text-xl">
                    {review.name}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#641010]/60">
                    Sample review
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-[#f8f3f1] px-6 py-16 text-center sm:px-10 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em]">
            Your skincare journey
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl">
            {reviewsContent.closingTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#641010]/75 sm:text-lg">
            {reviewsContent.closingText}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center bg-[#641010] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#4d0c0c]"
            >
              {reviewsContent.shopButton}
            </Link>

            <Link
              href="/consultation"
              className="inline-flex items-center justify-center border border-[#641010] px-7 py-3 text-sm font-medium text-[#641010] transition hover:bg-[#641010] hover:text-white"
            >
              {reviewsContent.consultationButton}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

