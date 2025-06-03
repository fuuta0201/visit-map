import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// UI
import ArrowButton from '@/components/common/ArrowButton';

type Props = {
  title: string;
  addr: string;
  createdAt: string;
  userName: string;
  figure: string;
  link: string;
  rate: number;
};

const Card = ({ title, addr, createdAt, userName, figure, link, rate }: Props) => {
  const formatDate = (date: string) => {
    const createdAtDate = new Date(date);
    const formattedCreatedAt = createdAtDate.toLocaleString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    return formattedCreatedAt;
  };
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
      <Link href={link}>
        <Image
          src={figure}
          width={320}
          height={170}
          sizes="100%"
          className="rounded-t-lg w-full h-auto"
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link href={link}>
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
        </Link>
        <dl className="mb-3 font-normal text-gray-700">
          <div className="flex">
            <dt>所在地：</dt>
            <dd>{addr}</dd>
          </div>
          <div className="flex">
            <dt>投稿日：</dt>
            <dd>{formatDate(createdAt)}</dd>
          </div>
          <div className="flex">
            <dt>投稿者：</dt>
            <dd>{userName}</dd>
          </div>
        </dl>
        <div className="flex justify-between items-center">
          <p className="w-8 h-8 bg-gray-400 rounded-full flex justify-center items-center">
            <span className="text-white">{rate}</span>
          </p>
          <Link href={link}>
            <ArrowButton variant="primary" className="text-base px-6 py-3">
              Read more
            </ArrowButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
