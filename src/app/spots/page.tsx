import React from 'react';

// UI
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Card from '@/components/spots/Card';

const page = () => {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 lg:px-20">
        <ul className="flex flex-col gap-3 w-full md:w-96 mb-10">
          <li className="w-full flex flex-col justify-start gap-2">
            <Label htmlFor="prefecture">都道府県</Label>
            <Input name="prefecture" placeholder="東京都" />
          </li>
          <li className="w-full flex flex-col justify-start gap-2">
            <Label htmlFor="city">市区町村</Label>
            <Input name="city" placeholder="新宿区" />
          </li>
        </ul>
        <ul className="flex flex-col gap-7">
          <li>
            <Card
              title="長岡高専"
              body="ニキたちの集まりです。ニキたちの集まりです。ニキたちの集まりです。ニキたちの集まりです。ニキたちの集まりです。ニキたちの集まりです。ニキたちの集まりです。"
              addr="新潟県長岡市西片貝町888"
              figure="/images/dummy-image.png"
            />
          </li>
          <li>
            <Card
              title="長岡高専"
              body="ニキたちの集まりです。ニキたちの集まりです。ニキたちの集まりです。ニキたちの集まりです。ニキたちの集まりです。ニキたちの集まりです。ニキたちの集まりです。"
              addr="新潟県長岡市西片貝町888"
              figure="/images/dummy-image.png"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
