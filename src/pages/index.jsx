import React, { useState } from "react";

export default function Home() {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission to the server
    const response = await fetch("http://localhost:5000/transactions/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender,
        recipient,
        amount,
      }),
    });
    const json = await response.json();
    console.log(json);
    // You might want to clear the form or navigate the user to a different page after submission
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
        <h2 className="text-2xl text-sky-900 font-bold mb-6">
          Create a Transaction
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600"
              for="sender"
            >
              Sender's Name
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md text-gray-600"
              type="text"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              id="sender"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600"
              for="recipient"
            >
              Recipient Name
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md text-gray-600"
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              id="recipient"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-600"
              for="amount"
            >
              Amount
            </label>
            <input
              className="mt-1 p-2 w-full border rounded-md text-gray-600"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              id="amount"
            />
          </div>

          <div className="flex justify-end">
            <button
              className="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              type="submit"
            >
              Submit
            </button>
            <a
              className="text-black"
              href="http://localhost:5000/mine"
              target="_blank"
            >
              Twitter
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
