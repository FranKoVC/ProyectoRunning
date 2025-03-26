import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService"; // Importa el servicio de autenticación
import Logo from "../../images/logo.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import historiaImg from "../../images/1sn.jpeg";
import { jwtDecode } from "jwt-decode";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false); // Estado para mostrar/ocultar contraseña

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login(formData.email, formData.password);
      console.log("Respuesta del servidor:", response);

      // Guardar el token en localStorage
      localStorage.setItem("access_token", response.access_token);

      // Decodificar el token para verificar el rol
      const decodedToken: any = jwtDecode(response.access_token);
      console.log("Token decodificado:", decodedToken);

      // Verifica el valor del rol en el token decodificado
      const userRole = decodedToken.role || decodedToken.rol; // Depende de cómo lo envíe el backend
      console.log("Rol del usuario (desde el token):", userRole);

      // Guardar el rol en localStorage
      localStorage.setItem("userRole", JSON.stringify(userRole));

      // Redirigir según el rol del usuario
      if (userRole.idRol === 3) {
        navigate("/cliente/clienteinfo");
      } else if (userRole.idRol === 1) {
        navigate("/empresa/registrovisita");
      } else if (userRole.idRol === 2) {
        navigate("/admin/areportes");
      } else {
        navigate("/home"); // Ruta genérica si no hay un rol específico
      }
    } catch (err) {
      setLoading(false);
      setError("Credenciales incorrectas. Por favor intenta nuevamente.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white flex items-center justify-center p-2">
        <div className="max-w-4xl w-full flex rounded-2xl shadow-lg overflow-hidden bg-white">
          {/* Imagen lateral */}
          <div className="hidden md:block w-1/2 bg-blue-900 p-8 relative">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{ backgroundImage: `url(${historiaImg})` }}
            />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-white text-3xl font-bold">
                  Club de Running
                </h2>
                <p className="text-blue-100 mt-4">
                  Accede a beneficios exclusivos, descuentos y una comunidad
                  apasionada por correr.
                </p>
              </div>
              <div className="text-blue-100">
                <p className="font-light italic">
                  "Cada paso cuenta en el camino hacia tus metas."
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="w-full md:w-1/2 p-8">
            <div className="mb-6 flex justify-center">
              <img src={Logo} alt="Logo Club de Running" className="h-16" />
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Iniciar Sesión
            </h1>

            {error && (
              <div className="mb-4 bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 text-sm font-medium"
                  >
                    Contraseña
                  </label>
                  <a
                    href="/recuperar-password"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"} // Cambia el tipo de input
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)} // Alternar visibilidad
                    className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-blue-600"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <input
                  id="remember"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-700"
                >
                  Recordar mi sesión
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Ingresando...
                  </span>
                ) : (
                  "Ingresar"
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                ¿No tienes una cuenta?{" "}
                <a
                  href="/cliente/registro"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Regístrate ahora
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
