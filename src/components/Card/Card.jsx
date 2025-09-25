const Card = ({ customerInfo, setStat }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    customerInfo;

  const handleClick = () => {
    setStat((prevStat) => {
      if (!prevStat.some((item) => item.id === id)) {
        return [...prevStat, customerInfo];
      }
      return prevStat;
    });
  };
  return (
    <article
      onClick={handleClick}
      className="rounded-[10px] border border-gray-200 bg-white p-4 shadow"
    >
      <div className="flex justify-between items-center">
        <h3 className="mt-0.5 text-lg font-medium text-gray-900">{title}</h3>
        <div className="bg-green-200 px-3 py-1 rounded-2xl">
          <button className="flex justify-center items-center gap-1">
            <div className="bg-green-500 w-4 h-4 rounded-full"></div>
            <span className="text-green-500">{status}</span>
          </button>
        </div>
      </div>
      <p className="text-gray-400">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <span>#{id}</span>
          <span className="uppercase text-red-500">{priority} Priority</span>
        </div>
        <div>
          <div className="flex justify-between items-center gap-4">
            <span>{customer}</span>
            <span className="uppercase text-red-500">
              {new Date(createdAt).toDateString()}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
