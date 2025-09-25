import { Suspense } from "react";
import CountBox from "./components/CountBox/CountBox";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CustomerSupport from "./components/CustomerSupport/CustomerSupport";

const fetchCSData = async () => {
  const res = await fetch("db.json");
  return res.json();
};
const csDataPromise = fetchCSData();

const App = () => {
  return (
    <>
      <Navbar />
      <CountBox />

      <Suspense fallback={"loading..."}>
        <CustomerSupport csDataPromise={csDataPromise}></CustomerSupport>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
