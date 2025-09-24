import Container from "../Container/Container";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="shadow-md py-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-3xl">CS — Ticket System</h1>
          </div>
          <div className="hidden md:flex justify-between items-center gap-8">
            <a href="#">Home</a>
            <a href="#">FAQ</a>
            <a href="#">Changelog</a>
            <a href="#">Blog</a>
            <a href="#">Download</a>
            <a href="#">Contact</a>
            <button className="text-white px-4 py-3 rounded bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
              + New Ticket
            </button>
          </div>
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
