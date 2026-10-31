
"use client";

import Link from "next/link";
import { useCart } from "../cart-context";

export default function CartPage() {
  const {
    items,
    isLoaded,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();
    console.log("CART PAGE STATE:", {
    isLoaded,
    items,
  });

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (!isLoaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-lotus-white text-wine-red">
        <p className="font-sans text-sm">Loading your cart...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-lotus-white text-wine-red">

      {/* PAGE HEADER */}
      <section className="border-b border-wine-red/10 px-6 py-14 text-center md:px-12">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.25em] text-wine-red/70">
          Your Deep Radiance selection
        </p>

        <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">
          Shopping cart
        </h1>

        <p className="mt-4 font-sans text-sm text-wine-red/70">
          You have {cartCount} {cartCount === 1 ? "item" : "items"} in your cart.
        </p>
      </section>

      {/* CART CONTENT */}
      <section className="px-6 py-14 md:px-12">
        <div className="mx-auto max-w-7xl">

          {items.length === 0 ? (

            /* EMPTY CART */
            <div className="py-20 text-center">
              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#faf7f5]">
                <span className="font-serif text-3xl text-wine-red/50">
                  DR
                </span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl">
                Your cart is currently empty.
              </h2>

              <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-7 text-wine-red/70">
                Explore our skincare collection and discover products
                to complement your everyday routine.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-flex rounded-full bg-wine-red px-8 py-3.5 font-sans text-sm font-medium text-lotus-white transition-colors hover:bg-wine-red/90"
              >
                Explore skincare
              </Link>
            </div>

          ) : (

            /* CART WITH ITEMS */
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr]">

              {/* CART ITEMS */}
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="font-serif text-2xl">
                    Your items
                  </h2>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="font-sans text-xs text-wine-red/60 underline underline-offset-4 transition-opacity hover:opacity-60"
                  >
                    Clear cart
                  </button>
                </div>

                <div className="space-y-6">
                  {items.map((item) => (
                    <article
                      key={item.id}
                      className="flex flex-col gap-5 border-b border-wine-red/10 pb-6 sm:flex-row sm:items-center"
                    >

                      {/* PRODUCT IMAGE PLACEHOLDER */}
                      <div className="flex aspect-square w-full shrink-0 items-center justify-center rounded-2xl bg-[#eadedb] sm:w-32">
                        <span className="font-serif text-3xl text-wine-red/50">
                          DR
                        </span>
                      </div>

                      {/* PRODUCT DETAILS */}
                      <div className="flex-1">
                        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-wine-red/60">
                          {item.category}
                        </p>

                        <h3 className="mt-2 font-serif text-xl">
                          {item.name}
                        </h3>

                        <p className="mt-2 font-sans text-xs text-wine-red/50">
                          Product details and pricing coming soon.
                        </p>

                        {/* QUANTITY CONTROLS */}
                        <div className="mt-5 flex flex-wrap items-center gap-5">
                          <div className="flex items-center rounded-full border border-wine-red/20">
                            <button
                              type="button"
                              aria-label={`Decrease quantity of ${item.name}`}
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="px-4 py-2 text-sm transition-opacity hover:opacity-50"
                            >
                              −
                            </button>

                            <span className="min-w-8 text-center font-sans text-sm">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              aria-label={`Increase quantity of ${item.name}`}
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="px-4 py-2 text-sm transition-opacity hover:opacity-50"
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="font-sans text-xs text-wine-red/60 underline underline-offset-4 transition-opacity hover:opacity-60"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* PRICE PLACEHOLDER */}
                      <div className="sm:text-right">
                        <p className="font-sans text-xs text-wine-red/50">
                          Price coming soon
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                {/* CONTINUE SHOPPING */}
                <Link
                  href="/shop"
                  className="mt-8 inline-flex font-sans text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
                >
                  ← Continue shopping
                </Link>
              </div>

              {/* ORDER SUMMARY */}
              <aside className="h-fit rounded-3xl bg-[#faf7f5] p-7 md:p-9">
                <h2 className="font-serif text-2xl">
                  Order summary
                </h2>

                <div className="mt-8 space-y-5 border-b border-wine-red/10 pb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm text-wine-red/70">
                      Total items
                    </span>

                    <span className="font-sans text-sm font-medium">
                      {cartCount}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm text-wine-red/70">
                      Subtotal
                    </span>

                    <span className="font-sans text-sm font-medium">
                      To be confirmed
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-sans text-sm text-wine-red/70">
                      Delivery
                    </span>

                    <span className="font-sans text-sm font-medium">
                      To be confirmed
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-serif text-lg">
                    Total
                  </span>

                  <span className="font-sans text-sm font-medium">
                    To be confirmed
                  </span>
                </div>

                <button
                  type="button"
                  disabled
                  className="mt-8 w-full cursor-not-allowed rounded-full bg-wine-red/40 px-6 py-4 font-sans text-sm font-medium text-lotus-white"
                >
                  Checkout coming soon
                </button>

                <p className="mt-5 text-center font-sans text-xs leading-6 text-wine-red/60">
                  Product prices and delivery charges will be confirmed
                  when the official catalogue becomes available.
                </p>
              </aside>

            </div>
          )}

        </div>
      </section>
    </main>
  );
}
