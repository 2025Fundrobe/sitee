import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartHandshake, Home } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSupportClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    {
      label: 'Home',
      path: '/',
      icon: Home,
      isShimmering: true
    },
    { 
      label: 'About Us', 
      path: '/about',
      isShimmering: true 
    },
    { 
      label: "Fundy's Tips", 
      path: '/blog',
      isShimmering: true 
    },
    { 
      label: 'Success Stories', 
      path: '/success',
      isSpecial: true 
    },
    { 
      label: 'Instructor Support', 
      path: '/support',
      icon: HeartHandshake,
      isPurple: true,
      isShiny: true,
      onClick: handleSupportClick
    }
  ];

  const handleGetStarted = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#contact-form';
    } else {
      const contactForm = document.getElementById('contact-form');
      contactForm?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className={`relative flex items-center justify-between rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/20 backdrop-blur-lg shadow-lg border border-white/20 py-2 px-6' 
            : 'bg-transparent py-2 px-6'
        }`}>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#5de0e6] animate-gradient bg-gradient-to-r from-blue-400 via-[#5de0e6] to-blue-400 bg-clip-text" />
            ) : (
              <Menu className="w-6 h-6 text-[#5de0e6] animate-gradient bg-gradient-to-r from-blue-400 via-[#5de0e6] to-blue-400 bg-clip-text" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-[#5de0e6] to-blue-400 opacity-20 blur-lg group-hover:opacity-30 transition-opacity" />
          </button>

          {/* Logo/Text - Centered on mobile */}
          <div className="flex items-center justify-center space-x-4 absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none">
            {/* Desktop Logo */}
            <div className="md:block hidden relative">
              <img 
                src="https://i.im.ge/2025/01/06/zp6jNc.Animated-Fundrobe-Logo-2.png"
                alt="Fundrobe Logo"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#5de0e6] opacity-40 blur-2xl group-hover:opacity-70 transition-all duration-300" />
              <div className="absolute inset-0 bg-blue-400 opacity-30 blur-3xl group-hover:opacity-60 transition-all duration-300" />
              <div className="absolute inset-[-50%] bg-[#5de0e6] opacity-20 blur-3xl animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#5de0e6] to-[#4bc5cb] bg-clip-text text-transparent">
              Fundrobe
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={item.onClick}
                className={`text-sm font-medium transition-colors ${
                  item.isShimmering
                    ? 'relative group'
                    : item.isSpecial
                    ? 'text-amber-400 hover:text-amber-300'
                    : item.isPurple && item.isShiny
                    ? 'relative group'
                    : 'text-white hover:text-[#5de0e6]'
                } ${location.pathname === item.path ? 'text-[#5de0e6]' : ''}`}
              >
                {item.isPurple && item.isShiny ? (
                  <div className="relative flex items-center space-x-1">
                    {item.icon && <item.icon className="w-4 h-4 text-purple-500" />}
                    <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent font-semibold relative">
                      {item.label}
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-purple-500/20 to-purple-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-purple-500/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ) : item.isShimmering ? (
                  <>
                    <span className="relative z-10 bg-gradient-to-r from-blue-400 via-[#5de0e6] to-blue-400 bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent font-semibold flex items-center space-x-1">
                      {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                      <span>{item.label}</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-[#5de0e6] to-blue-400 opacity-20 blur-lg group-hover:opacity-30 transition-opacity" />
                  </>
                ) : (
                  <span className="flex items-center space-x-1">
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Get Started Button - Hidden on mobile */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={handleGetStarted}
              className="bg-[#5de0e6] text-gray-900 px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-all duration-200 shadow-[0_4px_20px_rgb(93,224,230,0.3)] hover:shadow-[0_6px_30px_rgb(93,224,230,0.4)]"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Logo */}
          <div className="md:hidden flex items-center">
            <img 
              src="https://i.im.ge/2025/01/06/zp6jNc.Animated-Fundrobe-Logo-2.png"
              alt="Fundrobe Logo"
              className="h-6 w-auto"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-x-0 top-[4.5rem] p-4 transition-all duration-300 transform ${
          isMobileMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        }`}>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 overflow-hidden">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (item.onClick) item.onClick();
                }}
                className={`block px-6 py-3 text-sm transition-colors ${
                  item.isSpecial
                    ? 'text-amber-400 hover:bg-white/10'
                    : item.isPurple
                    ? 'text-purple-500 hover:bg-white/10'
                    : item.isShimmering
                    ? 'bg-gradient-to-r from-blue-400 via-[#5de0e6] to-blue-400 bg-clip-text text-transparent font-semibold'
                    : 'text-white hover:bg-white/10'
                } ${location.pathname === item.path ? 'bg-white/5 text-[#5de0e6]' : ''}`}
              >
                <span className="flex items-center space-x-1">
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </span>
              </Link>
            ))}
            <div className="border-t border-white/10 p-4">
              <button 
                onClick={handleGetStarted}
                className="w-full bg-[#5de0e6] text-gray-900 px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-all duration-200 shadow-[0_4px_20px_rgb(93,224,230,0.3)] hover:shadow-[0_6px_30px_rgb(93,224,230,0.4)]"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}