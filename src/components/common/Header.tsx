'use client';
import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { signInGoogle } from '@/lib/auth/actions';

// UI
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <Link href={'/'} className="flex items-center">
              <MapPin className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">VisitMap</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-6">
            <form action={signInGoogle}>
              <Button type="submit" variant="primary" className="text-base px-6 py-3">
                Login
              </Button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Menu
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <div className="flex justify-center py-3">
              <Button onClick={() => console.log('Login clicked')} variant="primary" fullWidth>
                Login
              </Button>
            </div>
          </div>
        </div>
      )} */}
    </header>
  );
};

export default Header;
