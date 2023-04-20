import { useState } from "react";
import TokenPicker from "../components/TokenPicker";
import tokens from "../assets/tokens.json";

const Playground = () => {
  const [address, setAddress] = useState("");

  return (
    <TokenPicker
      value={address}
      tokens={tokens}
      onChange={(address) => setAddress(address)}
    />
  );
};

export default Playground;
