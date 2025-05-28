'use client';
import React from 'react';
import { MapPinned, Navigation, Compass } from 'lucide-react';
import Button from '@/components/common/Button';

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
              <br />
              <span className="text-blue-600 block md:inline"> Amazing Places</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              素敵な場所を見つけ、共有しましょう
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="primary" className="text-base px-6 py-3">
                    Login with Google
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-left">Login</DialogTitle>
                    <DialogDescription className="text-left">
                      Gmailアドレスでログインしてください。
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="gmail" className="text-right">
                        gmail
                      </Label>
                      <Input id="gmail" placeholder="example@gmail.com" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="pass" className="text-right">
                        password
                      </Label>
                      <Input id="pass" defaultValue="" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Login</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MapPinned className="h-6 w-6 text-blue-600" />}
              title="訪問場所を記録"
              description="訪れた場所にマークを付けて、旅の可視化を美しく作成しましょう。"
            />
            <FeatureCard
              icon={<Navigation className="h-6 w-6 text-blue-600" />}
              title="新しい場所を発見"
              description="旅行の好みに基づいて、パーソナライズされたおすすめを受け取りましょう。"
            />
            <FeatureCard
              icon={<Compass className="h-6 w-6 text-blue-600" />}
              title="冒険を共有"
              description="お気に入りの場所や旅行の思い出を、友人や家族と共有しましょう。"
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
