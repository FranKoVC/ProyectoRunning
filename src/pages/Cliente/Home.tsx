import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-3xl font-bold text-gray-800">Inicio</h1>
                <p className="text-gray-600 mt-4">Bienvenido a la página de inicio.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
