# Merkle Gift List 🎁

This project demonstrates how to use **Merkle Trees** to verify whether someone is on a “nice list” — without having to store the entire list on the server. It was built as part of the Alchemy University blockchain development course.

Using Merkle proofs, the client can prove their name is in the list, and if the server verifies the proof, they receive a toy robot 🎉

---

## 🔧 How It Works

- The **client** builds a Merkle Tree locally and generates a proof for a name.
- It sends that name + proof to the **server**.
- The **server** stores only the **Merkle Root**, not the whole list.
- It uses the proof to verify the name is on the list.

If the name is verified, the server sends a gift. If not, the request is denied.

---

## 🛠 Tech Stack

- JavaScript (Node.js)
- Express.js
- [ethereum-cryptography](https://www.npmjs.com/package/ethereum-cryptography)

---

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Shivam-Peshwa/merkle-gift-list.git
cd merkle-gift-list
npm install

🖥 Run the App
Start the Server:
node server/index.js

Start the Client:
node client/index.js

This will send a proof to the server and log the response:
✅ "You got a toy robot!"
❌ "You are not on the list :("

📁 Project Structure
GiftList/
├── client/
│   └── index.js         # Sends name + Merkle proof to server
│
├── server/
│   └── index.js         # Verifies proof and responds
│
├── utils/
│   ├── MerkleTree.js    # Builds Merkle tree + generates proof
│   ├── verifyProof.js   # Verifies proof against Merkle root
│   └── niceList.json    # List of eligible names
│
├── .gitignore
├── package.json
└── README.md

💡 What I Learned
How Merkle Trees reduce on-chain data storage

How proofs allow verification without revealing the full dataset

How to implement client-server verification logic using cryptographic hashes



