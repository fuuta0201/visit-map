import React from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  addr: string;
  userName: string;
  figure: string;
};

const Card = ({ title, addr, userName, figure }: Props) => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row md:justify-between gap-4">
      <div>
        <h2 className="text-xl lg:text-2xl font-bold mb-2">{title}</h2>
        <dl className="text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <dt>所在地：</dt>
            <dd>{addr}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt>投稿者：</dt>
            <dd>{userName}</dd>
          </div>
        </dl>
      </div>
      <figure className="w-full md:w-80">
        <Image
          src={figure}
          className="rounded-md w-full h-auto"
          width={320}
          height={170}
          sizes="100%"
          alt=""
        />
      </figure>
    </div>
  );
};

export default Card;
