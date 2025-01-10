import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SectionBackground } from '../components/common/SectionBackground';
import { Footer } from '../components/Footer/Footer';
import { BlogList } from '../components/blog/BlogList';
import { PremiumContentTimer } from '../components/auth/PremiumContentTimer';
import { DonateSection } from '../components/DonateSection';
import { PremiumContentPopup } from '../components/blog/PremiumContentPopup';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

// Fallback data in case of connection issues
const FALLBACK_POSTS = [
  {
    id: '1',
    title: 'Maximizing Your School\'s Fundraising Potential',
    slug: 'maximizing-school-fundraising-potential',
    content: '# Maximizing Your School\'s Fundraising Potential\n\nIn today\'s educational landscape...',
    excerpt: 'Discover proven strategies to enhance your school\'s fundraising efforts through year-round spirit wear sales.',
    author: 'Sarah Johnson',
    category: 'School Spirit',
    image_url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    published: true,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Building School Spirit Through Custom Merchandise',
    slug: 'building-school-spirit-merchandise',
    content: '# Building School Spirit Through Custom Merchandise\n\nSchool spirit is more than just wearing team colors...',
    excerpt: 'Learn how custom spirit wear can strengthen your school\'s identity and community bonds.',
    author: 'Michael Chen',
    category: 'School Spirit',
    image_url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    published: true,
    created_at: new Date().toISOString()
  }
];

type Post = Database['public']['Tables']['posts']['Row'];

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPosts(data || FALLBACK_POSTS);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts(FALLBACK_POSTS);
        setError('Unable to connect to the server. Showing sample content.');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const handlePostClick = async (post: Post) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (post.category === 'Fundraising Tips' && !session) {
        setShowPremiumPopup(true);
      } else {
        navigate(`/blog/${post.slug}`);
      }
    } catch (error) {
      console.error('Auth error:', error);
      setShowPremiumPopup(true);
    }
  };

  return (
    <>
      <div className="relative min-h-screen">
        <SectionBackground className="pt-32 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-6">
                <div className="relative">
                  <img
                    src="https://i.ibb.co/hKRkZ6s/Untitled-design-11.png"
                    alt="Fundy Mascot"
                    className="w-24 h-24 object-contain animate-bounce-slow relative z-10"
                  />
                  <div className="absolute -bottom-4 left-4 w-16 h-4 bg-black/20 rounded-full blur-sm animate-bounce-slow transform -skew-x-12"></div>
                </div>
                <div className="inline-block relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 blur-lg opacity-50 animate-pulse" />
                  <div className="relative bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 p-1 rounded-2xl">
                    <div className="bg-white px-8 py-4 rounded-xl">
                      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                        Fundy's Tips & News
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                Discover the latest <strong>fundraising news</strong> through our <strong>learning platform</strong>
              </p>
            </div>

            {loading ? (
              <div className="text-center">
                <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-lg">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5de0e6]" />
                </div>
              </div>
            ) : error ? (
              <div className="text-center mb-8">
                <div className="inline-block bg-amber-50 text-amber-800 px-4 py-2 rounded-lg">
                  {error}
                </div>
              </div>
            ) : null}

            <BlogList posts={posts} onPostClick={handlePostClick} />
          </div>
        </SectionBackground>
      </div>
      <DonateSection />
      <PremiumContentTimer />
      {showPremiumPopup && <PremiumContentPopup onClose={() => setShowPremiumPopup(false)} />}
      <Footer />
    </>
  );
}