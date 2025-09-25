import { use, useState } from "react";
import Container from "../Container/Container";
import Card from "../Card/Card";
import CountBox from "../CountBox/CountBox";

const CustomerSupport = ({ csDataPromise }) => {
  const csData = use(csDataPromise);
  //   console.log(csData);
  //   const [data, setData] = useState(csData);
  const [stat, setStat] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleClick = (progStat) => {
    setResolved((preRes) => {
      if (!preRes.some((item) => item.id === progStat.id)) {
        return [...preRes, progStat];
      }
      return preRes;
    });
    setStat((prevStat) => prevStat.filter((item) => item.id !== progStat.id));
  };
  return (
    <>
      <CountBox stat={stat} resolved={resolved} />
      <Container>
        <main className="flex flex-col md:flex-row justify-between gap-8 my-8">
          <div className="w-9/12 mx-auto">
            <h1 className="text-2xl text-gray-600 mb-4">Customer Tickets</h1>
            <div className="grid  md:grid-cols-2 gap-6">
              {csData.map((customerInfo) => (
                <Card
                  key={customerInfo.id}
                  customerInfo={customerInfo}
                  setStat={setStat}
                ></Card>
              ))}
            </div>
          </div>
          {/* Task Status */}
          <div className="w-3/12 mx-auto">
            <h3 className="text-2xl text-gray-500">Task Status</h3>
            <div>
              {stat.map((progStat) => (
                <div key={progStat.id} className="p-4 shadow rounded">
                  <h1 className="text-xl mb-3">Payment Failed</h1>
                  <button
                    onClick={() => handleClick(progStat)}
                    className="w-full mx-auto px-3 py-2 text-white bg-green-400 rounded-md"
                  >
                    Completed
                  </button>
                </div>
              ))}
            </div>
            {/* resolved Task */}
            <div className="my-10">
              <h1 className="text-2xl text-gray-400 mb-4">Resolved Task</h1>
              {resolved.length === 0 ? (
                <p>No resolved tasks yet</p>
              ) : (
                resolved.map((solved) => (
                  <div
                    key={solved.id}
                    className="shadow-md rounded-md font-semibold w-full px-3 py-2 mx-auto my-5"
                  >
                    {solved.title}
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
      </Container>
    </>
  );
};

export default CustomerSupport;
