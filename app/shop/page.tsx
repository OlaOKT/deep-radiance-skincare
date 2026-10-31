"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../cart-context";

const categories = [
  "All Products",
  "Cleansers",
  "Moisturizers",
  "Serums",
  "Sunscreen",
];

const products = [
  {
    id: 1,
    name: "Skincare Essential One",
    category: "Cleansers",
    description:
      "Product details will be added once the official catalogue is available.",
    number: "01",
  },
  {
    id: 2,
    name: "Skincare Essential Two",
    category: "Moisturizers",
    description:
      "Product details will be added once the official catalogue is available.",
    number: "02",
  },
  {
    id: 3,
    name: "Skincare Essential Three",
    category: "Serums",
    description:
      "Product details will be added once the official catalogue is available.",
    number: "03",
  },
  {
    id: 4,
    name: "Skincare Essential Four",
    category: "Sunscreen",
    description:
      "Product details will be added once the official catalogue is available.",
    number: "04",
  },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] =
    useState("All Products");

  const [addedProduct, setAddedProduct] = useState("");

  const { addToCart, items } = useCart();

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter(
          (product) =>
            product.category === activeCategory
        );

  function handleAddToCart(
    product: (typeof products)[number]
  ) {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
    });

    setAddedProduct(product.name);
  }

  return (
    <main className="min-h-screen bg-lotus-white text-wine-red">
      {/* SHOP INTRODUCTION */}
      <section className="relative overflow-hidden border-b border-wine-red/10 px-5 py-16 text-center sm:px-8 sm:py-20 md:px-12 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-48 w-48 -translate-x-1/2 rounded-full bg-[#eadedb]/50 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <p className="mb-5 font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-wine-red/60 sm:text-xs">
            The Deep Radiance collection
          </p>

          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Your skincare journey,
            <span className="mt-1 block italic">
              thoughtfully curated.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-7 text-wine-red/70 sm:text-base sm:leading-8">
            Discover skincare essentials selected to complement
            your everyday routine. Our official product
            catalogue is coming soon.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#collection"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-wine-red px-7 py-3 font-sans text-xs font-medium text-lotus-white transition-colors hover:bg-wine-red/85 sm:w-auto"
            >
              Explore the collection
            </a>

            <Link
              href="/cart"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-wine-red/20 px-7 py-3 font-sans text-xs font-medium transition-colors hover:bg-wine-red/5 sm:w-auto"
            >
              View cart ({cartCount})
            </Link>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section
        id="collection"
        className="scroll-mt-8 px-4 py-12 sm:px-6 sm:py-16 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          {/* SECTION HEADING */}
          <div className="mb-8 text-center sm:mb-10">
            <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-wine-red/50">
              Discover your essentials
            </p>

            <h2 className="font-serif text-3xl font-medium sm:text-4xl">
              The collection
            </h2>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="mb-10 flex flex-wrap justify-center gap-2 sm:mb-12 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setAddedProduct("");
                }}
                aria-pressed={activeCategory === category}
                className={`min-h-10 rounded-full border px-4 py-2.5 font-sans text-[11px] font-medium transition-colors sm:min-h-11 sm:px-5 sm:text-xs ${
                  activeCategory === category
                    ? "border-wine-red bg-wine-red text-lotus-white"
                    : "border-wine-red/15 bg-white text-wine-red/75 hover:border-wine-red/50 hover:text-wine-red"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PRODUCT COUNT */}
          <div className="mb-6 flex items-center justify-between border-b border-wine-red/10 pb-4">
            <p className="font-sans text-xs text-wine-red/60">
              {filteredProducts.length} products
            </p>

            <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-wine-red/40 sm:text-xs">
              Catalogue coming soon
            </p>
          </div>

          {/* ADD TO CART SUCCESS MESSAGE */}
          {addedProduct && (
            <div
              role="status"
              aria-live="polite"
              className="mb-8 rounded-2xl border border-wine-red/10 bg-[#f7f1ef] px-5 py-5 sm:px-6"
            >
              <p className="font-sans text-sm font-medium">
                Added to your cart
              </p>

              <p className="mt-1 font-sans text-xs leading-6 text-wine-red/70">
                {addedProduct} has been added to your cart.
              </p>

              <Link
                href="/cart"
                className="mt-3 inline-flex min-h-10 items-center font-sans text-xs font-medium underline underline-offset-4"
              >
                View your cart
              </Link>
            </div>
          )}

          {/* PRODUCTS */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group min-w-0"
              >
                {/* PRODUCT IMAGE PLACEHOLDER */}
                <div className="relative flex aspect-4/5 items-center justify-center overflow-hidden rounded-2xl bg-[#f1e8e5]">
                  <div className="absolute inset-0 bg-linear-to-b from-white/30 via-transparent to-wine-red/4" />

                  <div className="relative flex flex-col items-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-wine-red/15 transition-transform duration-500 group-hover:scale-105 sm:h-28 sm:w-28">
                      <span className="font-serif text-4xl text-wine-red/40 sm:text-5xl">
                        DR
                      </span>
                    </div>

                    <p className="mt-5 font-sans text-[9px] font-medium uppercase tracking-[0.25em] text-wine-red/40">
                      Deep Radiance
                    </p>
                  </div>

                  {/* PLACEHOLDER LABEL */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/75 px-3.5 py-2 font-sans text-[9px] font-medium uppercase tracking-[0.15em] text-wine-red/65 backdrop-blur-sm">
                    Coming soon
                  </span>

                  {/* PRODUCT NUMBER */}
                  <span className="absolute bottom-4 right-4 font-serif text-xs text-wine-red/35">
                    {product.number}
                  </span>
                </div>

                {/* PRODUCT DETAILS */}
                <div className="pt-5">
                  <p className="font-sans text-[9px] font-medium uppercase tracking-[0.22em] text-wine-red/50">
                    {product.category}
                  </p>

                  <h3 className="mt-2 font-serif text-xl font-medium leading-snug sm:text-2xl">
                    {product.name}
                  </h3>

                  <p className="mt-3 font-sans text-xs leading-6 text-wine-red/60 sm:text-sm sm:leading-7">
                    {product.description}
                  </p>

                  {/* PRICE AND CART */}
                  <div className="mt-5 flex flex-col gap-3 border-t border-wine-red/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="font-sans text-xs text-wine-red/50">
                      Price coming soon
                    </span>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-wine-red px-6 py-3 font-sans text-xs font-medium text-lotus-white transition-colors hover:bg-wine-red/85 active:scale-[0.98] sm:w-auto"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION PROMOTION */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 md:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-wine-red px-6 py-12 text-center text-lotus-white sm:px-10 sm:py-14 md:px-16">
          <p className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-lotus-white/65 sm:text-xs">
            A little personal guidance
          </p>

          <h2 className="font-serif text-3xl font-medium leading-tight sm:text-4xl">
            Your skin deserves
            <span className="block italic">thoughtful care.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl font-sans text-xs leading-7 text-lotus-white/75 sm:text-sm sm:leading-8">
            Not sure where to begin? A personalized skincare
            consultation can help you make more informed
            choices about your routine.
          </p>

          <Link
            href="/consultation"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-lotus-white px-8 py-3.5 font-sans text-xs font-medium text-wine-red transition-colors hover:bg-lotus-white/90 sm:text-sm"
          >
            Book a consultation
          </Link>
        </div>
      </section>
    </main>
  );
}