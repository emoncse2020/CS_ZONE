const Card = ({ customer }) => {
  console.log({ customer });
  return (
    <article className="rounded-[10px] border border-gray-200 bg-white p-4 shadow">
      <div className="flex justify-between items-center">
        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
          How to center an element using JavaScript and jQuery
        </h3>
        <div className="bg-green-200 px-3 py-1 rounded-2xl">
          <button className="flex justify-center items-center gap-1">
            <div className="bg-green-500 w-4 h-4 rounded-full"></div>
            <span className="text-green-500">Open</span>
          </button>
        </div>
      </div>
      <p className="text-gray-400">
        Customer is unable to log in to their account. They've tried resetting
        their password multiple times but still...
      </p>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-4">
          <span>#1001</span>
          <span className="uppercase text-red-500">High Priority</span>
        </div>
        <div>
          <div className="flex justify-between items-center gap-4">
            <span>John Snow</span>
            <span className="uppercase text-red-500">2025-12-25</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
