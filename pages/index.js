import { useState } from "react";
import styles from "../styles/Home.module.css";
import { getStarknet } from "@argent/get-starknet";

/**
 * Sign an order hashed message. This needs to match the exchange contract domain
 */
export async function signOrderHashMessage(signer, message) {
  return signer.signMessage({
    domain: {
      name: "Oasis NFT Exchange",
      version: "1.0.0",
    },
    types: {
      StarkNetDomain: [
        { name: "name", type: "felt" },
        { name: "version", type: "felt" },
      ],
      Message: [{ name: "message", type: "felt" }],
    },
    primaryType: "Message",
    message: {
      message,
    },
  });
}

export default function Home() {
  // const signer = getStarknet().signer;
  const [inputTxt, setIn] = useState("");
  const [data, setData] = useState(["starting"]);

  const fn = async (message) => {
    await getStarknet().enable();
    const signer = getStarknet().signer;
    return await signOrderHashMessage(signer, message);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={inputTxt}
        onChange={(e) => {
          setIn(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={async () => {
          const signedMessage = await fn(inputTxt);
          setData((old) => [...old, signedMessage]);
        }}
      />
      {data.map((item, index) => (
        <div key={index}> {item} </div>
      ))}
    </div>
  );
}
