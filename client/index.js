const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const name = niceList[1];
  const index = niceList.findIndex(n => n === name);
  const tree = new MerkleTree(niceList);
  const proof = tree.getProof(index);

  console.log("Client Name:", `"${name}"`);
  console.log("Index found:", index);
  console.log("Merkle Root:", tree.getRoot());
  console.log("Proof:", proof);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof
  });

  console.log("Server Response:", gift);
}

main();
