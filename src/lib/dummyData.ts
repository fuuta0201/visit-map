// lib/dummyData.ts

export interface Spot {
  id: number;
  userId: string;
  userName: string;
  title: string;
  message: string;
  imageUrl: string;
  rating: number;
  latitude: number;
  longitude: number;
  prefecture: string;
  city: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
  createdAt: string;
}

export const dummyPosts: Spot[] = [
  {
    id: 1,
    userId: '1',
    userName: 'たかし',
    title: 'Cozy Cabin Retreat',
    message:
      "Nestled in the heart of Mountain View, this cozy cabin offers a tranquil escape from the city bustle. With its rustic charm and modern amenities, it's the perfect spot for a weekend getaway or a longer retreat. Enjoy the warmth of the fireplace, the comfort of the plush furnishings, and the serene views of the surrounding landscape. Whether you're looking to relax by the fire, explore the nearby trails, or simply unwind in a peaceful setting, this cabin provides an idyllic backdrop for your stay.",
    imageUrl: '/images/dummy-image.png',
    rating: 4,
    latitude: 35.681382,
    longitude: 139.76608399999998,
    prefecture: '東京都',
    city: '千代田区',
    createdAt: '2025-05-20T10:00:00Z',
    updatedAt: '2025-05-20T10:00:00Z',
  },
  {
    id: 2,
    userId: '2',
    userName: 'たつこ',
    title: 'Cozy Cabin Retreat',
    message:
      "Nestled in the heart of Mountain View, this cozy cabin offers a tranquil escape from the city bustle. With its rustic charm and modern amenities, it's the perfect spot for a weekend getaway or a longer retreat. Enjoy the warmth of the fireplace, the comfort of the plush furnishings, and the serene views of the surrounding landscape. Whether you're looking to relax by the fire, explore the nearby trails, or simply unwind in a peaceful setting, this cabin provides an idyllic backdrop for your stay.",
    imageUrl: '/images/dummy-image.png',
    rating: 5,
    latitude: 35.681382,
    longitude: 139.76608399999998,
    prefecture: '東京都',
    city: '千代田区',
    createdAt: '2025-05-14T10:00:00Z',
    updatedAt: '2025-05-19T10:00:00Z',
  },
  {
    id: 3,
    userId: '1',
    userName: 'たかし',
    title: 'Cozy Cabin Retreat',
    message:
      "Nestled in the heart of Mountain View, this cozy cabin offers a tranquil escape from the city bustle. With its rustic charm and modern amenities, it's the perfect spot for a weekend getaway or a longer retreat. Enjoy the warmth of the fireplace, the comfort of the plush furnishings, and the serene views of the surrounding landscape. Whether you're looking to relax by the fire, explore the nearby trails, or simply unwind in a peaceful setting, this cabin provides an idyllic backdrop for your stay.",
    imageUrl: '/images/dummy-image.png',
    rating: 4,
    latitude: 35.681382,
    longitude: 139.76608399999998,
    prefecture: '東京都',
    city: '千代田区',
    createdAt: '2025-04-20T10:00:00Z',
    updatedAt: '2025-04-22T10:00:00Z',
  },
  {
    id: 4,
    userId: '3',
    userName: '吉郎',
    title: 'Cozy Cabin Retreat',
    message:
      "Nestled in the heart of Mountain View, this cozy cabin offers a tranquil escape from the city bustle. With its rustic charm and modern amenities, it's the perfect spot for a weekend getaway or a longer retreat. Enjoy the warmth of the fireplace, the comfort of the plush furnishings, and the serene views of the surrounding landscape. Whether you're looking to relax by the fire, explore the nearby trails, or simply unwind in a peaceful setting, this cabin provides an idyllic backdrop for your stay.",
    imageUrl: '/images/dummy-image.png',
    rating: 1,
    latitude: 35.681382,
    longitude: 139.76608399999998,
    prefecture: '東京都',
    city: '千代田区',
    createdAt: '2025-03-20T10:00:00Z',
    updatedAt: '2025-03-22T10:00:00Z',
  },
  {
    id: 5,
    userId: '3',
    userName: '吉郎',
    title: 'Cozy Cabin Retreat',
    message:
      "Nestled in the heart of Mountain View, this cozy cabin offers a tranquil escape from the city bustle. With its rustic charm and modern amenities, it's the perfect spot for a weekend getaway or a longer retreat. Enjoy the warmth of the fireplace, the comfort of the plush furnishings, and the serene views of the surrounding landscape. Whether you're looking to relax by the fire, explore the nearby trails, or simply unwind in a peaceful setting, this cabin provides an idyllic backdrop for your stay.",
    imageUrl: '/images/dummy-image.png',
    rating: 4,
    latitude: 35.681382,
    longitude: 139.76608399999998,
    prefecture: '東京都',
    city: '千代田区',
    createdAt: '2023-04-20T10:00:00Z',
    updatedAt: '2023-04-22T10:00:00Z',
  },
  {
    id: 6,
    userId: '2',
    userName: 'たつこ',
    title: 'Cozy Cabin Retreat',
    message:
      "Nestled in the heart of Mountain View, this cozy cabin offers a tranquil escape from the city bustle. With its rustic charm and modern amenities, it's the perfect spot for a weekend getaway or a longer retreat. Enjoy the warmth of the fireplace, the comfort of the plush furnishings, and the serene views of the surrounding landscape. Whether you're looking to relax by the fire, explore the nearby trails, or simply unwind in a peaceful setting, this cabin provides an idyllic backdrop for your stay.",
    imageUrl: '/images/dummy-image.png',
    rating: 2,
    latitude: 35.681382,
    longitude: 139.76608399999998,
    prefecture: '東京都',
    city: '千代田区',
    createdAt: '2023-03-20T10:00:00Z',
    updatedAt: '2023-03-22T10:00:00Z',
  },
  {
    id: 7,
    userId: '1',
    userName: 'たかし',
    title: 'Cozy Cabin Retreat',
    message:
      "Nestled in the heart of Mountain View, this cozy cabin offers a tranquil escape from the city bustle. With its rustic charm and modern amenities, it's the perfect spot for a weekend getaway or a longer retreat. Enjoy the warmth of the fireplace, the comfort of the plush furnishings, and the serene views of the surrounding landscape. Whether you're looking to relax by the fire, explore the nearby trails, or simply unwind in a peaceful setting, this cabin provides an idyllic backdrop for your stay.",
    imageUrl: '/images/dummy-image.png',
    rating: 4,
    latitude: 35.681382,
    longitude: 139.76608399999998,
    prefecture: '東京都',
    city: '千代田区',
    createdAt: '2023-02-20T10:00:00Z',
    updatedAt: '2023-02-22T10:00:00Z',
  },
  {
    id: 8,
    userId: '2',
    userName: 'たつこ',
    title: 'Cozy Cabin Retreat',
    message:
      "Nestled in the heart of Mountain View, this cozy cabin offers a tranquil escape from the city bustle. With its rustic charm and modern amenities, it's the perfect spot for a weekend getaway or a longer retreat. Enjoy the warmth of the fireplace, the comfort of the plush furnishings, and the serene views of the surrounding landscape. Whether you're looking to relax by the fire, explore the nearby trails, or simply unwind in a peaceful setting, this cabin provides an idyllic backdrop for your stay.",
    imageUrl: '/images/dummy-image.png',
    rating: 5,
    latitude: 35.681382,
    longitude: 139.76608399999998,
    prefecture: '東京都',
    city: '千代田区',
    createdAt: '2023-01-20T10:00:00Z',
    updatedAt: '2023-01-22T10:00:00Z',
  },
  {
    id: 9,
    userId: '3',
    userName: '吉郎',
    title: 'Cozy Cabin Retreat',
    message:
      "Nestled in the heart of Mountain View, this cozy cabin offers a tranquil escape from the city bustle. With its rustic charm and modern amenities, it's the perfect spot for a weekend getaway or a longer retreat. Enjoy the warmth of the fireplace, the comfort of the plush furnishings, and the serene views of the surrounding landscape. Whether you're looking to relax by the fire, explore the nearby trails, or simply unwind in a peaceful setting, this cabin provides an idyllic backdrop for your stay.",
    imageUrl: '/images/dummy-image.png',
    rating: 3,
    latitude: 35.681382,
    longitude: 139.76608399999998,
    prefecture: '東京都',
    city: '千代田区',
    createdAt: '2022-12-20T10:00:00Z',
    updatedAt: '2023-12-22T10:00:00Z',
  },
  {
    id: 10,
    userId: '3',
    userName: '吉郎',
    title: 'Cozy Cabin Retreat',
    message:
      "Nestled in the heart of Mountain View, this cozy cabin offers a tranquil escape from the city bustle. With its rustic charm and modern amenities, it's the perfect spot for a weekend getaway or a longer retreat. Enjoy the warmth of the fireplace, the comfort of the plush furnishings, and the serene views of the surrounding landscape. Whether you're looking to relax by the fire, explore the nearby trails, or simply unwind in a peaceful setting, this cabin provides an idyllic backdrop for your stay.",
    imageUrl: '/images/dummy-image.png',
    rating: 4,
    latitude: 35.681382,
    longitude: 139.76608399999998,
    prefecture: '東京都',
    city: '千代田区',
    createdAt: '2022-11-20T10:00:00Z',
    updatedAt: '2022-11-22T10:00:00Z',
  },
];

export const dummyUsers: User[] = [
  {
    id: 1,
    name: 'たかし',
    email: 'takashi@example.com',
    imageUrl: '/images/dummy-image.png/',
    createdAt: '2024-12-20T10:00:00Z',
  },
  {
    id: 2,
    name: 'たつこ',
    email: 'tatsuko@example.com',
    imageUrl: '/images/dummy-image.png/',
    createdAt: '2025-1-20T10:00:00Z',
  },
  {
    id: 3,
    name: '吉郎',
    email: 'yoshiro@example.com',
    imageUrl: '/images/dummy-image.png/',
    createdAt: '2025-10-20T10:00:00Z',
  },
];

export const getSpots = async (): Promise<Spot[] | undefined> => {
  return dummyPosts;
};

export const getSpotById = async (id: number): Promise<Spot | undefined> => {
  return dummyPosts.find((post) => post.id === id);
};

export const getRelatedSpots = async (pref: string): Promise<Spot[] | undefined> => {
  const relatedSpot = dummyPosts.filter((spot: Spot) => spot.prefecture === pref);
  return relatedSpot
    .sort((a: Spot, b: Spot) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, 3);
};

export const getUserData = async (userId: number): Promise<User | undefined> => {
  return dummyUsers.find((user) => user.id === userId);
};

export const getSpotsByUserId = async (userId: number): Promise<Spot[] | undefined> => {
  const spot = dummyPosts.filter((spot: Spot) => parseInt(spot.userId) === userId);
  return spot.sort((a: Spot, b: Spot) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
};
