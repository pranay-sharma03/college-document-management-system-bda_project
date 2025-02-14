import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import FileUpload from './components/FileUpload';
import ContractState from './context/contract/ContractState';
import AccountState from './context/account/AccountState';
import ProviderState from './context/provider/providerState';
import Gallery from './components/Gallery';
import TypeState from './context/type/TypeState';

function App() {

  return (
    <>
      <div className="main bg-white text-white">
        <ContractState>
          <ProviderState>
            <AccountState>
              <TypeState >
                <BrowserRouter>
                  <NavBar />
                  <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/" element={<FileUpload />} />
                    <Route path="/gallery" element={<Gallery />} />
                  </Routes>
                </BrowserRouter>
              </TypeState>
            </AccountState>
          </ProviderState>
        </ContractState>
      </div>
    </>
  );
}

export default App;