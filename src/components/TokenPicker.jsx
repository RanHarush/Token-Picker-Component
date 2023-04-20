import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Modal from "./Modal";

const TokenPicker = ({ value, tokens }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <>
      <div className="h-screen max-w-full flex justify-center items-center bg-[#0F1522]">
        <button
          onClick={() => setVisibleModal(true)}
          className="flex items-center gap-2 btn btn-lg bg-[#04339D] text-white text-2xl font-semibold px-3 rounded-full"
        >
          Select token
          <ChevronDownIcon className="w-3 stroke-2" />
        </button>
      </div>
      <div>
        <Modal visible={visibleModal} onClose={() => setVisibleModal(false)} />
      </div>
    </>
  );
};

export default TokenPicker;
