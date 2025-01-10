import React from 'react';
import { Link } from 'react-router-dom';
import { SignUpForm } from '../components/auth/SignUpForm';
import { SectionBackground } from '../components/common/SectionBackground';
import { Footer } from '../components/Footer';

export function SignUp() {
  return (
    <>
      <SectionBackground className="pt-32 pb-20">
        <div className="max-w-md mx-auto px-4">
          <SignUpForm />
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="text-[#5de0e6] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </SectionBackground>
      <Footer />
    </>
  );
}