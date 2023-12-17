import AppRoutes from './AppRoutes';
import Layout from './Layout';

function App() {
    return (
        <div className=' w-[85%] m-auto bg-white'>
            <Layout>
                <AppRoutes />
            </Layout>
        </div>
    );
}

export default App;
