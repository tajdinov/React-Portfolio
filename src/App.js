import "bootstrap/dist/css/bootstrap.min.css";
import { lazy,Suspense } from 'react';
import './styles/app.css';
import Footer from './components/Footer';

const PortfolioContainer = lazy(() => import('./components/PortfolioContainer'));

function App() {
    return (
        <div className="mainBody">
        <Suspense fallback={<div>loading...</div>}>
            <PortfolioContainer />
        </Suspense>
        <Footer />
        </div>
    )
}

export default App;
