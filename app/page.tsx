"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "./cart-context";

export default function Home() {
  const { items } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navigation = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Consultation", href: "/consultation" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white text-[#641010]">

      {/* HEADER */}
      <header className="relative z-20 border-b border-[#641010]/10 bg-white">

        <div className="grid grid-cols-[1fr_auto] items-center gap-2 px-4 py-3 sm:px-6 md:px-8 md:py-5 lg:grid-cols-[1fr_auto_1fr]">

          {/* LOGO */}
          <Link
            href="/"
            className="flex min-w-0 items-center justify-self-start"
            onClick={(event) => {
              setMenuOpen(false);

              if (window.location.pathname === "/") {
                event.preventDefault();
                window.location.reload();
              }
            }}
          >
            <Image
              src="/Images/logo/PNG/7.png"
              alt="Deep Radiance Skincare"
              width={300}
              height={100}
              priority
              className="h-auto w-42 object-contain sm:w-54"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center justify-center gap-5 text-sm lg:flex xl:gap-7">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CART AND ACTIONS */}
          <div className="flex shrink-0 items-center justify-self-end gap-2 sm:gap-4">

            {/* CART */}
            <Link
              href="/cart"
              className="whitespace-nowrap text-xs font-medium transition-opacity hover:opacity-60 sm:text-sm"
            >
              Cart ({cartCount})
            </Link>

            {/* SHOP BUTTON */}
            <Link
              href="/shop"
              className="whitespace-nowrap rounded-full bg-[#641010] px-3 py-2.5 text-xs text-white transition-colors hover:bg-[#4e0c0c] sm:px-5 sm:text-sm"
            >
              Shop now
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-[#641010]/20 transition-colors hover:bg-[#641010]/5 lg:hidden"
            >
              <span
                className={`h-0.5 w-4 bg-[#641010] transition-transform ${
                  menuOpen ? "translate-y-1 rotate-45" : ""
                }`}
              />

              <span
                className={`h-0.5 w-4 bg-[#641010] transition-opacity ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`h-0.5 w-4 bg-[#641010] transition-transform ${
                  menuOpen ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full border-b border-[#641010]/10 bg-white px-6 py-5 shadow-lg lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#641010]/10 py-4 text-sm transition-colors hover:bg-[#641010]/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#faf7f3] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* HERO TEXT */}
          <div className="text-center md:text-left">

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#641010]/70">
              The art of thoughtful skincare
            </p>

            <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Reveal the beauty
              <br />
              of your natural
              <br />
              <span className="italic">radiance.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-lg text-sm leading-8 text-[#641010]/75 md:mx-0 md:text-base">
              Discover thoughtfully selected skincare and personalized
              consultations designed to make caring for your skin a more
              meaningful experience.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">

              <Link
                href="/shop"
                className="rounded-full bg-[#641010] px-8 py-4 text-center text-sm font-medium text-white transition-colors hover:bg-[#4e0c0c]"
              >
                Explore the collection
              </Link>

              <Link
                href="/consultation"
                className="rounded-full border border-[#641010] px-8 py-4 text-center text-sm font-medium text-[#641010] transition-colors hover:bg-[#641010]/5"
              >
                Book a consultation
              </Link>
            </div>
          </div>

          {/* HERO BRAND VISUAL */}
          <div className="relative mx-auto flex aspect-4/5 w-full max-w-lg items-center justify-center overflow-hidden bg-[#eadfd5]">

            <div className="absolute h-64 w-64 rounded-full border border-[#641010]/15" />

            <div className="relative flex flex-col items-center text-center">

              <span className="font-serif text-7xl italic text-[#641010]">
                DR
              </span>

              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#641010]/70">
                Deep Radiance
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#641010]/50">
                Skincare & Consultation
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BRAND INTRODUCTION */}
      <section className="px-6 py-20 text-center md:px-12 md:py-28">
        <div className="mx-auto max-w-3xl">

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#641010]/60">
            Welcome to Deep Radiance
          </p>

          <h2 className="font-serif text-3xl leading-tight md:text-5xl">
            Skincare is more than a routine.
            <span className="italic"> It is self-care.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#641010]/70">
            We believe that understanding your skin is the beginning of
            a thoughtful skincare journey. Discover a space where
            simplicity, care, and confidence come together.
          </p>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-[#faf7f3] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#641010]/60">
              The Deep Radiance collection
            </p>

            <h2 className="font-serif text-3xl md:text-5xl">
              Skincare essentials
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#641010]/70">
              Explore our upcoming collection of skincare essentials,
              thoughtfully selected to complement your everyday routine.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                name: "The Daily Essential",
                category: "Everyday skincare",
                background: "bg-[#eadfd5]",
              },
              {
                name: "The Radiance Ritual",
                category: "Skincare essentials",
                background: "bg-[#e6e0d9]",
              },
              {
                name: "The Skin Companion",
                category: "Your skincare journey",
                background: "bg-[#e9dada]",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden bg-white"
              >

                <div
                  className={`relative flex aspect-4/5 items-center justify-center ${product.background}`}
                >

                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#641010]/25">

                    <span className="font-serif text-4xl italic text-[#641010]">
                      DR
                    </span>
                  </div>

                  <span className="absolute left-5 top-5 bg-white/90 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-[#641010]">
                    Coming soon
                  </span>
                </div>

                <div className="px-5 py-6 text-center">

                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#641010]/60">
                    {product.category}
                  </p>

                  <h3 className="mt-3 font-serif text-2xl">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-xs text-[#641010]/60">
                    Product details coming soon
                  </p>

                  <button
                    type="button"
                    disabled
                    className="mt-6 w-full cursor-not-allowed rounded-full border border-[#641010]/20 py-3 text-xs text-[#641010]/50"
                  >
                    Coming soon
                  </button>
                </div>
              </div>
            ))}

          </div>

          <div className="mt-14 text-center">

            <Link
              href="/shop"
              className="inline-flex rounded-full bg-[#641010] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#4e0c0c]"
            >
              View all products
            </Link>
          </div>
        </div>
      </section>

      {/* CONSULTATION SECTION */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl bg-[#641010] px-8 py-16 text-center text-white md:px-16 md:py-24">

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            A more personal approach
          </p>

          <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
            Your skincare journey begins with understanding your skin.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/80">
            Explore personalized skincare consultations designed to
            help you understand your skin and make more informed choices.
          </p>

          <Link
            href="/consultation"
            className="mt-10 inline-flex rounded-full bg-white px-8 py-4 text-sm font-medium text-[#641010] transition-colors hover:bg-[#f5eeee]"
          >
            Book a consultation
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#641010]/10 bg-[#faf7f3] px-6 py-12 md:px-12">

        <div className="mx-auto grid max-w-7xl gap-10 text-center md:grid-cols-3 md:text-left">

          {/* BRAND */}
          <div>

            <p className="font-serif text-2xl">
              Deep Radiance
            </p>

            <p className="mt-3 text-xs leading-6 text-[#641010]/60">
              Thoughtful skincare. Natural confidence.
            </p>
          </div>

          {/* FOOTER NAVIGATION */}
          <div>

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em]">
              Explore
            </p>

            <div className="flex flex-col gap-3 text-sm text-[#641010]/70">

              <Link href="/shop">
                Shop
              </Link>

              <Link href="/consultation">
                Consultation
              </Link>

              <Link href="/about">
                About us
              </Link>

              <Link href="/reviews">
                Reviews
              </Link>
            </div>
          </div>

          {/* BRAND PROMISE */}
          <div>

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em]">
              Our promise
            </p>

            <p className="text-sm leading-7 text-[#641010]/70">
              A thoughtful approach to skincare, self-care, and confidence.
            </p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mx-auto mt-12 max-w-7xl border-t border-[#641010]/10 pt-6 text-center">

          <p className="text-xs text-[#641010]/50">
            © 2026 Deep Radiance Skincare. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}