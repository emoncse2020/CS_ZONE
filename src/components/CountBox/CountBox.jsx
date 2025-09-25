import lines from "../../assets/img/vector1.png";
import Container from "../Container/Container";

const CountBox = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-16 my-8">
          <div className="relative w-full h-64 flex flex-col items-center justify-center rounded-md overflow-hidden bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
            {/* left image */}
            <div
              className="absolute inset-0 bg-no-repeat bg-[position:left_top] "
              style={{ backgroundImage: `url(${lines})` }}
            ></div>
            {/* Right Image */}
            <div
              className="absolute inset-0 bg-no-repeat bg-[position:right_top] scale-x-[-1] translate-x-1/2"
              style={{ backgroundImage: `url(${lines})` }}
            ></div>

            <h1 className="relative z-10 text-2xl text-white mb-4">
              In-Progress
            </h1>
            <h3 className="relative z-10 text-6xl text-white">0</h3>
          </div>
          {/* copy of first div */}
          <div className="relative w-full h-64 flex flex-col items-center justify-center rounded-md overflow-hidden bg-[linear-gradient(90.00deg,rgba(84,207,103.68001556396484,1),rgba(0,130,122.20001220703125,1)_100%))]">
            <div
              className="absolute inset-0 bg-no-repeat bg-[position:left_top] "
              style={{ backgroundImage: `url(${lines})` }}
            ></div>
            <div
              className="absolute inset-0 bg-no-repeat bg-[position:right_top] scale-x-[-1] translate-x-1/2"
              style={{ backgroundImage: `url(${lines})` }}
            ></div>
            <h1 className="relative z-10 text-2xl text-white mb-4">Resolved</h1>
            <h3 className="relative z-10 text-6xl text-white">0</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CountBox;
