import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import MyStack from './components/MyStack';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';

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

  // Add technology to stack with duplicate check
  const handleAddToStack = (tech) => {
    const alreadyExists = stack.some((item) => item.id === tech.id);
    if (alreadyExists) {
      toast.warning(`${tech.name} is already in your stack!`, {
        toastId: `dup-${tech.id}`,
      });
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`);
  };

  // Remove single technology from stack
  const handleRemoveFromStack = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    toast.info(`Removed ${itemToRemove?.name || 'item'} from stack`);
  };

  // Clear all technologies from stack
  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('Cleared all technologies from your stack!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Toast notification container */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

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

      {/* Footer */}
      <Footer />
    </div>
  );
}
