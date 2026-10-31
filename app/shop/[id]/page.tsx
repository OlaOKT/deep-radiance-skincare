"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../cart-context";

const products = [
  {
    id: 1,
    name: "Skincare Essential One",
    category: "Cleansers",
    description:
      "A placeholder cleanser description. Official product information will be added once the Deep Radiance catalogue is confirmed.",
    details: [
      "Product ingredients to be confirmed.",
      "Directions for use to be confirmed.",
      "Suitable skin types to be confirmed.",
    ],
  },
  {
    id: 2,
    name: "Skincare Essential Two",
    category: "Moisturizers",
    description:
      "A placeholder moisturizer description. Official product information will be added once the Deep Radiance catalogue is confirmed.",
    details: [
      "Product ingredients to be confirmed.",
      "Directions for use to be confirmed.",
      "Suitable skin types to be confirmed.",
    ],
  },
  {
    id: 3,
    name: "Skincare Essential Three",
    category: "Serums",
    description:
      "A placeholder serum description. Official product information will be added once the Deep Radiance catalogue is confirmed.",
    details: [
      "Product ingredients to be confirmed.",
      "Directions for use to be confirmed.",
      "Suitable skin types to be confirmed.",
    ],
  },
  {
    id: 4,
    name: "Skincare Essential Four",
    category: "Sunscreen",
    description:
      "A placeholder sunscreen description. Official product information will be added once the Deep Radiance catalogue is confirmed.",
    details: [
      "Product ingredients to be confirmed.",
      "Directions for use to be confirmed.",
      "Suitable skin types to be confirmed.",
    ],
  },
];

type ProductDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { addToCart } = useCart();

  const [productId, setProductId] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // Resolve the dynamic product ID on the client.
  useState(() => {
    params.then(({ id }) => setProductId(Number(id)));
  });

  const product =
    productId === null
      ? undefined
      : products.find((item) => item.id === productId);

  if (productId === null) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-lotus-white text-wine-red">
        <p className="font-sans text-sm">Loading product...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-lotus-white px-6 text-center text-wine-red">
        <div>
          <h1 className="font-serif text-3xl">Product not found</h1>

          <p className="mt-4 font-sans text-sm text-wine-red/70">
            We could not find the product you are looking for.
          </p>

          <Link
            href="/shop"
            className="mt-7 inline-flex rounded-full bg-wine-red px-7 py-3 font-sans text-sm text-white"
          >
            Return to shop
          </Link>
        </div>
      </main>
    );
  }

  function handleAddToCart() {
  if (!product) return;

  for (let i = 0; i < quantity; i++) {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
    });
  }

  setAddedToCart(true);
}

  return (
    <main className="min-h-screen bg-lotus-white text-wine-red">
      <section className="px-6 pt-8 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/shop"
            className="font-sans text-xs text-wine-red/60 transition-colors hover:text-wine-red"
          >
            Shop / {product.category} / {product.name}
          </Link>
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex aspect-4/5 items-center justify-center rounded-3xl bg-[#eadedb]">
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-wine-red/20">
                <span className="font-serif text-5xl text-wine-red/50">
                  DR
                </span>
              </div>

              <p className="font-sans text-xs uppercase tracking-[0.2em] text-wine-red/50">
                Product image placeholder
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-wine-red/60">
              {product.category}
            </p>

            <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 font-sans text-sm leading-7 text-wine-red/70">
              {product.description}
            </p>

            <div className="mt-8 border-y border-wine-red/10 py-6">
              <p className="font-sans text-sm font-medium">
                Price coming soon
              </p>

              <p className="mt-2 font-sans text-xs text-wine-red/50">
                Official pricing will be confirmed with the brand.
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-3 font-sans text-xs font-medium uppercase tracking-wider">
                Quantity
              </p>

              <div className="flex w-fit items-center rounded-full border border-wine-red/20">
                <button
                  type="button"
                  onClick={() => {
                    setQuantity((current) => Math.max(1, current - 1));
                    setAddedToCart(false);
                  }}
                  className="px-5 py-3 font-sans text-lg"
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span className="min-w-8 text-center font-sans text-sm">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    setQuantity((current) => current + 1);
                    setAddedToCart(false);
                  }}
                  className="px-5 py-3 font-sans text-lg"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-7 w-full rounded-full bg-wine-red px-8 py-4 font-sans text-sm font-medium text-lotus-white transition-colors hover:bg-wine-red/85"
            >
              Add to cart
            </button>

            {addedToCart && (
              <div
                role="status"
                className="mt-4 rounded-xl bg-[#f5eeee] px-5 py-3 font-sans text-sm"
              >
                {quantity} × {product.name} added to your cart.

                <Link
                  href="/cart"
                  className="ml-2 font-medium underline underline-offset-4"
                >
                  View cart
                </Link>
              </div>
            )}

            <div className="mt-10">
              <h2 className="font-serif text-xl">Product information</h2>

              <ul className="mt-5 space-y-3">
                {product.details.map((detail) => (
                  <li
                    key={detail}
                    className="font-sans text-sm leading-6 text-wine-red/70"
                  >
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 text-center">
        <Link
          href="/shop"
          className="font-sans text-sm underline underline-offset-4"
        >
          Continue browsing
        </Link>
      </section>
    </main>
  );
}