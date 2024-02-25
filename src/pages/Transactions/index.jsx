import React, { useState, useEffect } from "react";
import blockchainData from "D:/Model/supply chain/blockchain_data.json"; // Adjust the path as necessary

const Transactions = () => {
  const [blocks, setBlocks] = useState(blockchainData);
  const [searchTerm, setSearchTerm] = useState("");

  // Sorting function (example: by timestamp)
  const sortByTimestamp = () => {
    const sorted = [...blocks].sort((a, b) => a.timestamp - b.timestamp);
    setBlocks(sorted);
  };

  // Handle search (simple implementation)
  useEffect(() => {
    const filtered = blockchainData.filter((block) =>
      block.transactions.some(
        (tx) =>
          tx.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tx.recipient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setBlocks(filtered);
  }, [searchTerm]);

  return (
    <div className="p-5">
      <div className="flex gap-2 mb-4">
        <button
          onClick={sortByTimestamp}
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Sort by Time
        </button>
        {/* Implement other sorting buttons similarly */}
        <input
          type="text"
          placeholder="Search..."
          className="border rounded p-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4">
        {blocks.map((block, index) => (
          <div
            key={index}
            className="border rounded-md p-4"
          >
            {/* <strong>Index:</strong> {block.index}
            <br /> */}
            <strong>Timestamp:</strong>{" "}
            {new Date(block.timestamp * 1000).toLocaleString()}
            <br />
            {/* <strong>Payment:</strong> {block.proof}
<br /> */}
            {/* <strong>Previous Hash:</strong> {block.previous_hash}
<br /> */}
            <strong>Transactions:</strong>
            <br />
            <ul>
              {block.transactions.map((tx, txIndex) => (
                <li key={txIndex}>
                  <div className="border m-1 rounded-md font-semibold p-1 w-1/6">
                    {tx.sender} → {tx.recipient}: <br />
                    Transaction Amount: {tx.amount}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

// Corrected the typo in the comment and ensured the component is correctly defined and exported
export default Transactions;
