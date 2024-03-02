import Providers from './providers/Providers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
    return (
        <Providers>
            <Navbar />
            {children}
            <Footer />
        </Providers>
    );
};

export default Layout;
