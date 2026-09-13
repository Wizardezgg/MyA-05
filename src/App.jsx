import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import LoadingSpinner from './components/LoadingSpinner';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch technologies from public/technologies.json
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

  // Add technology to stack
  const handleAddToStack = (tech) => {
    const alreadyExists = stack.some((item) => item.id === tech.id);
    if (!alreadyExists) {
      setStack((prev) => [...prev, tech]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Technologies section */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <TechGrid
              technologies={technologies}
              stack={stack}
              onAddToStack={handleAddToStack}
            />
          )}
        </section>
      </main>
    </div>
  );
}
