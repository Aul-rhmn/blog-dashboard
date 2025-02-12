import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.tsx';
import Sidebar from './components/Sidebar.tsx';
import AllPosts from './pages/AllPosts.tsx';
import AddNew from './pages/AddNew.tsx';
import PreviewPage from './pages/PreviewPage.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <Header />
          <main className="container-fluid mt-3">
            <Routes>
              <Route path="/" element={<AllPosts />} />
              <Route path="/add-new" element={<AddNew />} />
              <Route path="/preview" element={<PreviewPage />} />
              <Route path="/edit/:id" element={<AddNew />} />
            </Routes>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;