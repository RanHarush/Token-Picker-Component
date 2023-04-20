import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Filter = ({ filterFunc }) => {
  const [filterInput, setFilterInput] = useState("");

  const handleFilterOnKeyUp = (e) => {
    if (e.code === "Enter") filterFunc(filterInput);
  };

  return (
    <>
      <MagnifyingGlassIcon className="text-white w-6 min-w-[25px] m-3 absolute" />
      <input
        type="text"
        placeholder="Search name or past address"
        value={filterInput}
        onKeyUp={handleFilterOnKeyUp}
        onChange={(e) => setFilterInput(e.target.value)}
        className="w-full bg-transparent rounded-2xl border border-[#091736] p-2 text-xl text-white placeholder:text-[#46392C] text-center"
      />
    </>
  );
};

export default Filter;
