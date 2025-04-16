const { keccak256 } = require('ethereum-cryptography/keccak');
const { hexToBytes, bytesToHex } = require('ethereum-cryptography/utils');

const concat = (left, right) => keccak256(Buffer.concat([left, right]));

function verifyProof(proof, leaf, root) {
  proof = proof.map(({ data, left }) => ({
    left,
    data: hexToBytes(data)
  }));

  let currentHash = leaf;

  for (let i = 0; i < proof.length; i++) {
    if (proof[i].left) {
      currentHash = concat(proof[i].data, currentHash);
    } else {
      currentHash = concat(currentHash, proof[i].data);
    }
  }

  const isValid = bytesToHex(currentHash) === root;
  return isValid;
}

module.exports = verifyProof;
