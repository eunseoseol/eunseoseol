// Page.js
"use client";

import { loadTossPayments } from "@tosspayments/payment-sdk";

export default function Page() {
  const handleClick = async () => {
    const tossPayments = await loadTossPayments(
      "test_ck_OAQ92ymxN34j1YX5p0ArajRKXvdk"
    );

    await tossPayments.requestPayment("카드", {
      amount: 10000,
      orderId: Math.random().toString(36).slice(2),
      orderName: "It from bit.",
      successUrl: `${window.location.origin}/api/payments`,
      failUrl: `${window.location.origin}/api/payments/fail`,
    });
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <video autoPlay loop muted style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: -1 }}>
        <source src="/background.mov" type="video/mp4" />
      </video>

      <div style={{ position: 'relative', zIndex: 1, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src="/book.png" alt="Book" style={{ maxWidth: '100px', marginBottom: '20px' }} />
        <button onClick={handleClick}>
          Continue
        </button>
      </div>
    </div>
  );
}

