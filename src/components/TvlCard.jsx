

const TvlCard = ({symbol, name, tvl}) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-full max-w-sm">
    <h2 className="text-xl font-semibold">{name}</h2>
    <p className="text-lg">
      TVL: <span className="font-bold">${tvl.toLocaleString()}</span>
    </p>
    <p className="text-sm text-gray-400">Token: {symbol}</p>
    </div>
  )
}

export default TvlCard;
