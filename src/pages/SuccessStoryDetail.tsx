import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SectionBackground } from '../components/common/SectionBackground';
import { Footer } from '../components/Footer/Footer';
import { successStories } from '../data/successStories';

export function SuccessStoryDetail() {
  const { id } = useParams();
  const story = successStories.find(s => s.id === Number(id));

  if (!story) {
    return <div>Story not found</div>;
  }

  const [location, instructor] = story.location.split(' - ');

  return (
    <>
      <SectionBackground className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4">