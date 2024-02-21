import './App.css';
import Main from './components/Content/main';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';

function App() {
  return (
    <div className=' w-screen h-screen flex flex-col items-center'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
