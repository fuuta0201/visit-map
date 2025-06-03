import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  addr: string;
  createdAt: string;
  userName: string;
  figure: string;
  link: string;
};

const Card = ({ title, addr, createdAt, userName, figure, link }: Props) => {
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
        <Image src={figure} width={320} height={170} className="rounded-t-lg" alt="" />
      </Link>
      <div className="p-5">
        <Link href={link}>
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h3>
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
        <Link
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
