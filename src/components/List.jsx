const List = ({ arr, onclick }) => {
  return (
    <ul>
      {arr.map((token) => (
        <li
          key={token.name}
          className="flex items-center gap-6 py-1 hover:bg-[#0D121B] cursor-pointer"
          onClick={onclick}
        >
          <img src={token.logoURI} alt={token.name} className="w-12" />
          <div className="text-[#636468] hover:text-white w-full">
            <p className="text-2xl">{token.name}</p>
            <p>{token.symbol}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
