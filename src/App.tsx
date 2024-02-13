"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure, lil kitty?",
      "What if I asked really nicely?",
      "Pretty please",
      "I will give you your daily dose of milk :)",
      "What about a matcha frostie top with a bit of my di...",
      "You are such a fucking cat :>",
      "But :*(",
      "Kylie, you better stop clicking no u fucking cat",
      "Hais.",
      "LOOK BEHIND YOU",
      "You are so weird...",
      ":((((",
      "I could fu.. you after dinner?",
      "THANK ABOUT IT",
      ":(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media1.tenor.com/m/5bulV6844-MAAAAd/puppy-disturb.gif" />
          <div className="my-4 text-4xl font-bold">WOOOO Good job kitty! ;)</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine, Special friend?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
