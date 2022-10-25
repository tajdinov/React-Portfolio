import "bootstrap/dist/css/bootstrap.min.css";
import './styles/app.css';
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from './components/Footer';

function App() {
    return (
        <div className="mainBody">
        <PortfolioContainer />
        <Footer />
        </div>
    )
}

export default App;
