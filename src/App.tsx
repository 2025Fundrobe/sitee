import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { SuccessStories } from './pages/SuccessStories';
import { SuccessStoryDetail } from './pages/SuccessStoryDetail';
import { Support } from './pages/Support';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Donate } from './pages/Donate';
import { LoadingScreen } from './components/common/LoadingScreen';
import { CursorShine } from './components/common/CursorShine';
import { ChatBot } from './components/chat/ChatBot';
import { useScrollToTop } from './hooks/useScrollToTop';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <CursorShine />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/success" element={<SuccessStories />} />
          <Route path="/success/:id" element={<SuccessStoryDetail />} />
          <Route path="/support" element={<Support />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  );
}