import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import dulcinelly from "../../images/dulcinelly.jpg";
import chinawok from "../../images/chinawok.png";
import starbucks from "../../images/starbucks.jpg";

const Beneficio = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-12 grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="relative text-white p-8 rounded-xl flex flex-col justify-between bg-cover bg-center h-48"
          style={{ backgroundImage: `url(${dulcinelly})` }}>
          <h2 className="text-2xl font-extrabold">DESCUENTO</h2>
          <p className="text-4xl font-extrabold">10%</p>
          <p className="text-lg font-extrabold">DULCINELLY</p>
        </div>

        <div
          className="relative text-white p-6 rounded-xl flex flex-col justify-between bg-cover bg-center h-48"
          style={{ backgroundImage: `url(${chinawok})` }}
        >
          <h2 className="text-2xl font-extrabold">DESCUENTO</h2>
          <p className="text-4xl font-extrabold">10%</p>
          <p className="text-lg font-extrabold">CHINAWOK</p>
        </div>
        <div
          className="relative text-white p-6 rounded-xl flex flex-col justify-between bg-cover bg-center h-48"
          style={{ backgroundImage: `url(${starbucks})` }}
        >
          <h2 className="text-2xl font-extrabold">DESCUENTO</h2>
          <p className="text-4xl font-extrabold">15%</p>
          <p className="text-lg font-extrabold">STARBUCKS</p>
        </div>

        <div className="relative bg-green-700 text-white p-6 rounded-xl flex flex-col justify-between">
          <h2 className="text-xl font-bold">DESCUENTO</h2>
          <p className="text-4xl font-extrabold">20%</p>
          <p className="text-lg">TAILOY</p>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Ver beneficio →
          </button>
        </div>

        <div className="relative bg-yellow-700 text-white p-6 rounded-xl flex flex-col justify-between">
          <h2 className="text-xl font-bold">DESCUENTO</h2>
          <p className="text-4xl font-extrabold">25%</p>
          <p className="text-lg">LA PANKA</p>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Ver beneficio →
          </button>
        </div>

        <div className="relative bg-blue-700 text-white p-6 rounded-xl flex flex-col justify-between">
          <h2 className="text-xl font-bold">DESCUENTO</h2>
          <p className="text-4xl font-extrabold">50%</p>
          <p className="text-lg">ENTEL CONVINE</p>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Ver beneficio →
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Beneficio;
