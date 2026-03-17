import React from "react";
import { Routes, Route } from "react-router-dom";
import { AICareerCoach } from "./components/AICareerCoach";
import { ResourcesPage } from "./pages/ResourcesPage";
import Header from "@/components/Header";
import HomePage from "./pages/HomePage";
import ImpactPage from "./pages/ImpactPage";
import JobBoard from "./pages/JobBoard";
import JobDetailsPage from "./pages/JobDetailsPage";
import GetInvolvedPage from "./pages/GetInvolvedPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='min-h-screen bg-slate-50 flex flex-col font-sans'>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/impact' element={<ImpactPage />} /> */}
          <Route path='/jobs' element={<JobBoard />} />
          <Route path='/jobs/:id' element={<JobDetailsPage />} />
          <Route path='/resources' element={<ResourcesPage />} />
          <Route path='/involved' element={<GetInvolvedPage />} />
        </Routes>
      </main>
      <Footer />

      {/* Global AI Assistant */}
      <AICareerCoach />
    </div>
  );
}

export default App;
