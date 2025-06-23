import React from 'react';
import { getUserData, getSpotsByUserId } from '@/lib/dummyData';
import Link from 'next/link';

const page = async () => {
  const user = await getUserData(1);
  const spots = await getSpotsByUserId(1);

  const imageUrl1 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDUaEFJHF0YOcGeQsTAdqkaKwFtQV2GSqtDfHo_WeG6PeNW4dsPG4ziBjH3H5FMNaEQSJjQlG_vYn8TfRJC9_fyjIrO7WEJdn8Zu9JMyPfVI1OtSgQOfGmwkaJXSRMjW-8-aDo3mjeM0OCeAQxSu73So7ZMRO4QOdjBDQpx0u4kF2TVg8L5afiixWMdjpMigBEDbdPeENCGL8RYQU4Htl_b8rh14x0aCrKOxgu6oC62wiKyfqyB6toTOFBKPDQI_-rlN77RVaPUT0KW';
  const imageUrl2 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDyH6kdyYshxIcTXsxqkalzRwLwjz-9tKPRvcu_ORMH-N3-gzLnBcZmnmM9ZYZPA7NZ48ZidrBNbswI7aIq2iGWH9RCCtE20YXQVjhWuUBJtkKglqEslNEgCGeQSt3qKccxQdyRKklbBvHJoDVr3GPpHBwAT4BRGzqHlYxLcwRALvaoZogn7XyjwbpOXUV7R1jyLXkKH8uvxkUX6z-h2steMnE1vJdXXs9br_yi6TZ71saPkOusbVzmUMinirQLUZGBNLfhYFzqB92E';
  const imageUrl3 =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCu4gLoCxkyJSY8xZhfZva0BKv1t3lflWOaoBb7T4lZb6GxtzESOc0r846E3BMc-0Y3a4ZYuXn0nKwI9QbcgztONPNPv2DvP0AnBYcKAFEKHWDj-4zWBrN__P9pCI2q7dOKqALG8NyrVlS1Q5PtJ0jqb033zpLT8BJ5o42XSsF0WxHSXXN8qT22MBa-gJg1Fi1Ds-PeYoEHUcHwt9wGvBKAbw2ykjf0TOkRDBvqDvkQH_i8tVI2IsYQaUrcZw3gJ15ImdlSJGPEkMwf';

  if (!user) return <div>Error: ユーザーデータを読み込めませんでした</div>;

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex px-4 py-12 @container">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{ backgroundImage: `url("${user.imageUrl}")` }}
              ></div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                  {user.name}
                </p>
                <p className="text-[#5f728c] text-base font-normal leading-normal text-center">
                  <span>Email：{user.email}</span>
                </p>
              </div>
            </div>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto">
              <span className="truncate">Edit profile</span>
            </button>
          </div>
        </div>
        {spots && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {spots.map((spot) => (
              <div className="flex flex-col gap-3" key={spot.id}>
                <Link href={`/spots/${spot.id}`}>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${spot.imageUrl}")` }}
                  ></div>
                </Link>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center justify-center p-4">
          <a href="#" className="flex size-10 items-center justify-center">
            <div
              className="text-[#111418]"
              data-icon="CaretLeft"
              data-size="18px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
              </svg>
            </div>
          </a>
          <a
            className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#111418] rounded-full bg-[#f0f2f5]"
            href="#"
          >
            1
          </a>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
            href="#"
          >
            2
          </a>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
            href="#"
          >
            3
          </a>
          <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full">
            ...
          </span>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full"
            href="#"
          >
            10
          </a>
          <a href="#" className="flex size-10 items-center justify-center">
            <div
              className="text-[#111418]"
              data-icon="CaretRight"
              data-size="18px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18px"
                height="18px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
