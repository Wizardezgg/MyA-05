import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import MyStack from './components/MyStack';
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

  // Remove single item from stack
  const handleRemoveFromStack = (id) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  // Remove all items from stack
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Technologies and Stack layout */}
        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Technology cards grid */}
              <div className="lg:col-span-8 xl:col-span-9 order-2 lg:order-1">
                <TechGrid
                  technologies={technologies}
                  stack={stack}
                  onAddToStack={handleAddToStack}
                />
              </div>

              {/* My Stack sidebar */}
              <div className="lg:col-span-4 xl:col-span-3 order-1 lg:order-2">
                <MyStack
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
