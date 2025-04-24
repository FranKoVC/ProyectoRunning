import { useState, FormEvent, ChangeEvent, useRef } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import acuerdoImg from "../../images/acuerdo.jpeg";

interface FormData {
    ruc: string;                // Para empresa.ruc y usuario.contrasena
    contacto: string;            // Para empresa.contacto y usuario.correo
    razonSocial: string;
    celular: string;             // Para usuario.celular
    vigenciaInicio: string;
    vigenciaFin: string;
    ciudad: string;
    direccion: string;
    logoEmpresa: File | null;
}

const RegistroEmpresa = () => {
    const [formData, setFormData] = useState<FormData>({
        ruc: '',
        contacto: '',
        razonSocial: '',
        celular: '',
        vigenciaInicio: '',
        vigenciaFin: '',
        ciudad: '',
        direccion: '',
        logoEmpresa: null,
    });
    
    const [previewLogo, setPreviewLogo] = useState<string | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                logoEmpresa: file
            }));
            
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewLogo(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validaciones mejoradas
        if (!formData.logoEmpresa) {
            swal.fire("Error", "Debe subir un logo para la empresa", "error");
            return;
        }

        if (!/^\d{9}$/.test(formData.ruc)) {
            swal.fire("Error", "El RUC debe tener exactamente 9 dígitos", "error");
            return;
        }

        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.contacto)) {
            swal.fire("Error", "Ingrese un correo electrónico válido", "error");
            return;
        }

        if (formData.vigenciaInicio > formData.vigenciaFin) {
            swal.fire("Error", "La fecha de inicio no puede ser mayor a la fecha fin", "error");
            return;
        }

        try {
            const formPayload = new FormData();
            // Campos para usuario
            formPayload.append('ruc', formData.ruc);          // Será la contraseña
            formPayload.append('contacto', formData.contacto); // Será el correo
            formPayload.append('celular', formData.celular);
            
            // Campos para empresa
            formPayload.append('razonsocial', formData.razonSocial);
            formPayload.append('ciudad', formData.ciudad);
            formPayload.append('direccion', formData.direccion);
            formPayload.append('vigenciaInicio', formData.vigenciaInicio);
            formPayload.append('vigenciaFin', formData.vigenciaFin);
            
            // Archivo (nombre debe coincidir con el esperado por NestJS)
            if (formData.logoEmpresa) {
                formPayload.append('foto', formData.logoEmpresa);
            }

            const response = await axios.post(
                'http://localhost:3000/empresas/registro', 
                formPayload,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            if (response.status === 201) {
                swal.fire("Éxito", "Empresa registrada exitosamente", "success");
                setFormData({
                    ruc: '',
                    contacto: '',
                    razonSocial: '',
                    celular: '',
                    vigenciaInicio: '',
                    vigenciaFin: '',
                    ciudad: '',
                    direccion: '',
                    logoEmpresa: null,
                });
                setPreviewLogo(null);
                if (formRef.current) formRef.current.reset();
            }
        } catch (error: any) {
            console.error('Error:', error);
            const errorMessage = error.response?.data?.message || "Error al registrar la empresa";
            swal.fire("Error", errorMessage, "error");
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow flex items-center justify-center bg-gray-100 p-4">
                <div className="w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-lg flex">
                    {/* Lado Izquierdo - Formulario */}
                    <div className="w-1/2 bg-[#FDF6E6] flex flex-col items-center justify-center p-10">
                        <h1 className="text-4xl font-bold text-[#922D26]">
                            Registro de Empresa
                        </h1>

                        <div className="mt-6 w-full max-w-md">
                            <form ref={formRef} onSubmit={handleSubmit} className="mt-4 space-y-4">
                                {/* Campo para logo de empresa */}
                                <div className="flex flex-col items-center mb-4">
                                    <label className="text-[#922D26] font-medium mb-2">Logo de la Empresa</label>
                                    <div className="w-40 h-40 bg-white flex items-center justify-center overflow-hidden mb-2 border-2 border-[#922D26] rounded-md">
                                        {previewLogo ? (
                                            <img src={previewLogo} alt="Logo de empresa" className="w-full h-full object-contain" />
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        )}
                                    </div>
                                    <label htmlFor="logo-empresa" className="bg-[#922D26] text-white py-2 px-4 rounded-md font-medium cursor-pointer hover:bg-[#7a2520]">
                                        Subir logo
                                    </label>
                                    <input
                                        id="logo-empresa"
                                        name="logoEmpresa"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleLogoChange}
                                        required
                                    />
                                </div>

                                <input
                                    type="text"
                                    name="ruc"
                                    placeholder="RUC"
                                    className="w-full p-3 bg-white border border-white rounded-md"
                                    value={formData.ruc}
                                    onChange={handleChange}
                                    pattern="\d{9}"
                                    required
                                />
                                
                                <input
                                    type="email"
                                    name="contacto"
                                    placeholder="Correo electrónico"
                                    className="w-full p-3 bg-white border border-white rounded-md"
                                    value={formData.contacto}
                                    onChange={handleChange}
                                    required
                                />
                                
                                <input
                                    type="text"
                                    name="razonSocial"
                                    placeholder="Razón Social"
                                    className="w-full p-3 bg-white border border-white rounded-md"
                                    value={formData.razonSocial}
                                    onChange={handleChange}
                                    required
                                />
                                
                                <input
                                    type="tel"
                                    name="celular"
                                    placeholder="Celular (Ej: +51 987654321)"
                                    className="w-full p-3 bg-white border border-white rounded-md"
                                    value={formData.celular}
                                    onChange={handleChange}
                                    required
                                />
                                
                                <input
                                    type="text"
                                    name="direccion"
                                    placeholder="Dirección"
                                    className="w-full p-3 bg-white border border-white rounded-md"
                                    value={formData.direccion}
                                    onChange={handleChange}
                                    required
                                />

                                <label className="text-[#922D26] font-medium">
                                    Vigencia del contrato
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="date"
                                        name="vigenciaInicio"
                                        className="w-1/2 p-3 bg-white border border-white rounded-md"
                                        value={formData.vigenciaInicio}
                                        onChange={handleChange}
                                        required
                                    />
                                    <span className="self-center">-</span>
                                    <input
                                        type="date"
                                        name="vigenciaFin"
                                        className="w-1/2 p-3 bg-white border border-white rounded-md"
                                        value={formData.vigenciaFin}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <input
                                    type="text"
                                    name="ciudad"
                                    placeholder="Ciudad"
                                    className="w-full p-3 bg-white border border-white rounded-md"
                                    value={formData.ciudad}
                                    onChange={handleChange}
                                    required
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-[#922D26] text-white py-3 rounded-md font-bold mt-4 hover:bg-[#7a2520]"
                                >
                                    Registrar
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="w-1/2 flex items-center justify-center bg-gray-200">
                        <img
                            src={acuerdoImg}
                            alt="Registro Empresa"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RegistroEmpresa;