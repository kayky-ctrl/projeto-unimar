import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Events from './components/Events';
import Login from './components/Login';
import Register from './components/Register';
import Services from './components/Services';
import Contact from './components/Contact';
import CampusMap from './components/CampusMap';
import Breadcrumbs from './components/Breadcrumbs';
import { useApp } from './hooks/useApp';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const { currentPage, user, isLoading } = useApp();

  const renderPage = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }

    switch (currentPage) {
      case 'home':
        return <Dashboard />;
      case 'courses':
        return <Courses />;
      case 'events':
        return <Events />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      case 'campus-map':
        return <CampusMap />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="main-container">
          {/* Não mostrar breadcrumbs na página inicial e login */}
          {!['home', 'login', 'register'].includes(currentPage) && <Breadcrumbs />}
          {renderPage()}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;