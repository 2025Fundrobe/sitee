import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { SectionBackground } from '../components/common/SectionBackground';
import { Footer } from '../components/Footer/Footer';
import { PremiumContentTimer } from '../components/auth/PremiumContentTimer';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type Post = Database['public']['Tables']['posts']['Row'];

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('slug', slug)
          .eq('published', true)
          .single();

        if (error) throw error;
        setPost(data);

        // Show subscribe modal for premium content after 20 seconds
        if (data?.category === 'Fundraising Tips' && window.showSubscribeModal) {
          const timer = setTimeout(() => {
            window.showSubscribeModal();
          }, 20000);
          return () => clearTimeout(timer);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <SectionBackground className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center text-gray-600">Loading post...</div>
        </div>
      </SectionBackground>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <>
      <SectionBackground className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center text-[#5de0e6] hover:text-[#4bc5cb] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tips
          </button>

          <article>
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />

            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span className="flex items-center mr-4">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {format(new Date(post.created_at), 'MMMM d, yyyy')}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>
        </div>
      </SectionBackground>
      <PremiumContentTimer />
      <Footer />
    </>
  );
}