
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="flex-1 bg-white">
      <section className="bg-[#641010] px-6 py-20 text-center text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/75">
          Your skin journey starts here
        </p>

        <h1 className="font-serif text-4xl md:text-5xl">
          Personalised Skincare Consultation
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/85 md:text-base">
          Tell us a little about your skin, your concerns and your skincare
          goals. We will use this information to understand the kind of
          guidance you are looking for.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        {submitted ? (
          <div className="border border-[#641010]/20 bg-[#faf7f5] px-8 py-12 text-center">
            <h2 className="font-serif text-3xl text-[#641010]">
              Thank you!
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Your demo consultation form has been completed. No information
              has been sent or stored.
            </p>

            <Link
              href="/"
              className="mt-8 inline-block bg-[#641010] px-8 py-3 text-sm text-white transition hover:bg-[#4d0c0c]"
            >
              Return Home
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-10 text-center">
              <h2 className="font-serif text-3xl text-[#641010]">
                Tell Us About Your Skin
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                This is a demonstration form. Please do not enter real
                personal or medical information.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h3 className="mb-5 font-serif text-xl text-[#641010]">
                  Your Details
                </h3>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      required
                      className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#641010]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      required
                      className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#641010]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-5 font-serif text-xl text-[#641010]">
                  Your Skin
                </h3>

                <div className="mb-5">
                  <label className="mb-2 block text-sm text-gray-700">
                    How would you describe your skin type?
                  </label>

                  <select
                    required
                    defaultValue=""
                    className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#641010]"
                  >
                    <option value="" disabled>
                      Select your skin type
                    </option>
                    <option>Oily</option>
                    <option>Dry</option>
                    <option>Combination</option>
                    <option>Normal</option>
                    <option>Sensitive</option>
                    <option>Not sure</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className="mb-2 block text-sm text-gray-700">
                    What are your main skincare concerns?
                  </label>

                  <textarea
                    rows={4}
                    placeholder="For example: dryness, uneven skin tone, breakouts..."
                    className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#641010]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-700">
                    What would you like to achieve with your skincare routine?
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Tell us about your skincare goals..."
                    className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#641010]"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs leading-6 text-gray-500">
                  This prototype is for presentation purposes only. It does
                  not provide medical advice or submit consultation
                  information.
                </p>

                <button
                  type="submit"
                  className="mt-6 w-full bg-[#641010] px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition hover:bg-[#4d0c0c]"
                >
                  Preview Consultation Submission
                </button>
              </div>
            </form>
          </>
        )}
      </section>
    </main>
  );
}
