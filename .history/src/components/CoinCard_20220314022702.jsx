import { Link } from 'react-router-dom';

// import { ImArrowUpRight, ImArrowDownRight } from 'react-icons/im';
import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

const CoinCard = ({
  id,
  name,
  price,
  change,
  image,
  sparline,
  symbol,
  rank,
  color,
  desc,
}) => {
  const { coinId } = useParams();

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 5,
  });

  return (
    <Link to={`cryptos/${id}`}>
      <div
        className={`flex  flex-col justify-between w-[241px] h-auto rounded-lg relative text-[#8B7F50] p-4 cursor-pointer shadow-md m-5 ${
          desc ? 'bg-green-100' : 'bg-red-100'
        }`}
      >
        <div
          className={`absolute   text-md rounded-lg p-2 font-bold top-2 right-3  flex  items-center  ${
            desc ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'
          }`}
        >
          <div>{change} %</div>
          <div className="text-xl">
            {desc ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
          </div>
        </div>
        <h1 className="text-2xl ">{symbol}</h1>
        <p className="text-md">{name}</p>

        <img src={image} alt="" className="h-10 w-10 shadow-lg" />

        <p className={`text-[20px] font-bold text-black font-sans`}>
          {formatter.format(price)}
        </p>
      </div>
    </Link>
  );
};

export default CoinCard;
