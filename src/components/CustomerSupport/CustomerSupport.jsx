import { use } from "react";
import Container from "../Container/Container";
import Card from "../Card/Card";

const CustomerSupport = ({ csDataPromise }) => {
  const csData = use(csDataPromise);
  console.log(csData);
  return (
    <>
      <Container>
        <main className="flex flex-col md:flex-row justify-between gap-8 my-8">
          <div className="w-9/12 mx-auto">
            <h1 className="text-2xl text-gray-600 mb-4">Customer Tickets</h1>
            <div className="grid  md:grid-cols-2 gap-6">
              {csData.map((customer) => (
                <Card key={customer.id} customer={customer}></Card>
              ))}
            </div>
          </div>
          <div className="w-3/12 mx-auto">
            <p>hisdff</p>
          </div>
        </main>
      </Container>
    </>
  );
};

export default CustomerSupport;
