import { JobsContextProvider } from '../context/JobsContext';
import { AuthContextProvider } from '../context/AuthContext';

const Providers = ({ children }) => {
    return (
        <JobsContextProvider>
            <AuthContextProvider>{children}</AuthContextProvider>
        </JobsContextProvider>
    );
};

export default Providers;
