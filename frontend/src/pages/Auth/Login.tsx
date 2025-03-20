import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../images/logo.png';

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import historiaImg from "../../images/1sn.jpeg";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Aquí iría la lógica para conectar con tu API de NestJS
      // const response = await loginService.authenticate(formData.email, formData.password);
      
      // Simulación de autenticación exitosa (reemplazar con tu implementación real)
      setTimeout(() => {
        setLoading(false);
        // Aquí deberás implementar la lógica para redireccionar según el rol que devuelva la API
        // Por ejemplo:
        // if (response.data.role === 'cliente') {
        //   navigate('/dashboard/cliente');
        // } else if (response.data.role === 'empresa') {
        //   navigate('/dashboard/empresa');
        // } else {
        //   navigate('/dashboard/admin');
        // }
        
        // Por ahora, redireccionamos a una ruta genérica
        navigate('/dashboard');
      }, 1000);
      
    } catch (err) {
      setLoading(false);
      setError('Credenciales incorrectas. Por favor intenta nuevamente.');
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex rounded-2xl shadow-lg overflow-hidden bg-white">
        {/* Imagen lateral */}
        <div className="hidden md:block w-1/2 bg-blue-900 p-8 relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-60" 
               style={{ backgroundImage: `url(${historiaImg})`  }} />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-white text-3xl font-bold">Club de Running</h2>
              <p className="text-blue-100 mt-4">
                Accede a beneficios exclusivos, descuentos y una comunidad apasionada por correr.
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
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
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
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
                  Contraseña
                </label>
                <a href="/recuperar-password" className="text-sm text-blue-600 hover:underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center mb-6">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
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
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Ingresando...
                </span>
              ) : (
                'Ingresar'
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              ¿No tienes una cuenta?{' '}
              <a href="/registro" className="text-blue-600 hover:underline font-medium">
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