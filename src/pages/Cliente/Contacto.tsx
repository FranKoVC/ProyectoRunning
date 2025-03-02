import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Contacto = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gradient-to-b from-gray-100 to-gray-300">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Contacto
          </h2>
          <p className="text-sm text-gray-600 text-center">
            Déjanos tu mensaje y te responderemos lo antes posible.
            IMAGINO QUE ES UNA BRRRRRRRRRRRRRROMA
          </p>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tu nombre"
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tucorreo@example.com"
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition transform hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacto;
