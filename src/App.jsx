import { Suspense } from "react";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CustomerSupport from "./components/CustomerSupport/CustomerSupport";
import { ToastContainer } from "react-toastify";

const fetchCSData = async () => {
  const res = await fetch("db.json");
  return res.json();
};
const csDataPromise = fetchCSData();

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />

      <Suspense fallback={"loading..."}>
        <CustomerSupport csDataPromise={csDataPromise}></CustomerSupport>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
