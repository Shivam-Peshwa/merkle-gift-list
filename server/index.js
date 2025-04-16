const express = require('express');
const { keccak256 } = require('ethereum-cryptography/keccak');
const verifyProof = require('../utils/verifyProof');
const niceList = require('../utils/niceList.json');

const port = 1225;
const app = express();
app.use(express.json());

const MERKLE_ROOT = 'ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa';

app.post('/gift', (req, res) => {
  const { name, proof } = req.body;

  const hashedName = keccak256(Buffer.from(name));
  console.log("Server received name:", name);
  console.log("Hashed name:", hashedName.toString('hex'));
  console.log("Server Merkle Root:", MERKLE_ROOT);

  const isInTheList = verifyProof(proof, hashedName, MERKLE_ROOT);

  if(isInTheList) {
    res.send("You got a toy robot!");
  } else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});




