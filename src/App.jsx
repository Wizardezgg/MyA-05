import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load data from public/technologies.json
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Technologies section container */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {loading && <LoadingSpinner />}
        </section>
      </main>
    </div>
  );
}
