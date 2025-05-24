'use client';
import React from 'react';
import { MapPinned, Navigation, Compass } from 'lucide-react';
import Button from '@/components/common/Button';

const Hero: React.FC = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-blue-500 opacity-20 rounded-full blur-xl"></div>
                <div className="relative bg-white p-3 rounded-full">
                  <MapPinned className="h-12 w-12 text-blue-600" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Discover & Share
              <span className="text-blue-600 block md:inline"> Amazing Places</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Map your journeys, share your discoveries, and find inspiration for your next
              adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => console.log('Login clicked')}
                variant="primary"
                className="text-base px-6 py-3"
              >
                Start Exploring
              </Button>
              <Button
                onClick={() => console.log('Learn more clicked')}
                variant="outline"
                className="text-base px-6 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MapPinned className="h-6 w-6 text-blue-600" />}
              title="Track Your Visits"
              description="Mark places you've visited and create beautiful visualizations of your journeys."
            />
            <FeatureCard
              icon={<Navigation className="h-6 w-6 text-blue-600" />}
              title="Discover New Places"
              description="Get personalized recommendations based on your travel preferences."
            />
            <FeatureCard
              icon={<Compass className="h-6 w-6 text-blue-600" />}
              title="Share Adventures"
              description="Share your favorite locations and travel stories with friends and family."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Hero;
