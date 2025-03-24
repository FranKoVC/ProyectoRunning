import { useState } from "react";
import { User, Mail, MapPin, Phone, Calendar, CreditCard, Save, Camera } from "lucide-react";

const EditarPerfil = () => {
  const [celular, setCelular] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [imagenPerfil, setImagenPerfil] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para guardar los cambios
    console.log({ celular, direccion, correo, imagenPerfil });
  };

  const handleImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagenPerfil(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-xl shadow-xl p-8 max-w-2xl mx-auto border border-blue-100">
      <div className="flex flex-col items-center mb-8">
        {/* Nuevo componente para foto de perfil */}
        <div className="mb-6 relative">
          <div className="h-32 w-32 rounded-full bg-gray-200 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center">
            {imagenPerfil ? (
              <img 
                src={imagenPerfil} 
                alt="Foto de perfil" 
                className="h-full w-full object-cover" 
              />
            ) : (
              <User size={64} className="text-gray-400" />
            )}
          </div>
          <label 
            htmlFor="upload-photo" 
            className="absolute bottom-0 right-0 h-10 w-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-indigo-700 transition-colors"
          >
            <Camera size={18} className="text-white" />
            <input 
              type="file"
              id="upload-photo"
              accept="image/*"
              onChange={handleImagenChange}
              className="hidden"
            />
          </label>
        </div>
        
        <div className="flex items-center justify-between w-full">
          <h2 className="text-3xl font-bold text-indigo-800">Editar Perfil</h2>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-inner mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
          <CreditCard className="mr-2 text-indigo-600" size={20} />
          Información Personal
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-xs text-gray-500 mb-1">DNI</p>
            <p className="text-gray-800 font-medium">12345678</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-xs text-gray-500 mb-1">Nombres</p>
            <p className="text-gray-800 font-medium">Juan</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-xs text-gray-500 mb-1">Apellidos</p>
            <p className="text-gray-800 font-medium">Pérez</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-xs text-gray-500 mb-1">Fecha de Nacimiento</p>
            <div className="flex items-center">
              <Calendar size={16} className="text-indigo-600 mr-2" />
              <p className="text-gray-800 font-medium">1990-01-01</p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
          <Mail className="mr-2 text-indigo-600" size={20} />
          Información de Contacto
        </h3>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Celular</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-indigo-500" />
            </div>
            <input
              type="text"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              className="pl-10 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="+51 999 888 777"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-indigo-500" />
            </div>
            <input
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="pl-10 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Av. Ejemplo 123, Lima"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-indigo-500" />
            </div>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="pl-10 block w-full rounded-lg border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="ejemplo@correo.com"
            />
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center shadow-lg transform hover:-translate-y-1"
          >
            <Save className="mr-2" size={20} />
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarPerfil;