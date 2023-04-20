import { XMarkIcon } from "@heroicons/react/24/outline";
import Filter from "./Filter";
import List from "./List";
import { useEffect, useState } from "react";
import handleFilter from "../functions/handleFilter";
import tokens from "../assets/tokens.json";

let initTokensArr = [];

const Modal = ({ visible, onClose }) => {
  const [tokensArr, setTokensArr] = useState(initTokensArr);

  useEffect(() => {
    initTokensArr = tokens;
    setTokensArr(initTokensArr);
  }, []);

  const handleFilterInput = (input) =>
  handleFilter(input, initTokensArr, setTokensArr);

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 flex justify-center items-center"
    >
      <div className="bg-[#0A0E16] h-2/3 w-1/4 rounded-3xl border-2 border-[#161B27] shadow-xl p-8 overflow-y-hidden max-sm:w-fit">
        <div className="text-white flex justify-between">
          <p className="text-xl">Select a token</p>
          <XMarkIcon onClick={onClose} className="w-6 hover:cursor-pointer" />
        </div>
        <div className="my-5 relative">
          <Filter filterFunc={handleFilterInput} />
        </div>
        <div className="h-full overflow-y-auto scrollbar-hide">
          <List arr={tokensArr} onclick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
