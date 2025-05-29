import React from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  body: string;
  addr: string;
  figure: string;
};

const Card = ({ title, body, addr, figure }: Props) => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-4">
      <div>
        <h2 className="text-xl lg:text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm font-normal mb-1">{body}</p>
        <dl className="flex items-center gap-2 text-sm text-gray-500">
          <dt>所在地：</dt>
          <dd>{addr}</dd>
        </dl>
      </div>
      <figure className="w-full md:w-80">
        <Image src={figure} className="rounded-md" width={320} height={170} alt="" />
      </figure>
    </div>
  );
};

export default Card;
