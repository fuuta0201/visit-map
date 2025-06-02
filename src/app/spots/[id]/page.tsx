import React from 'react';
import { getPostById } from '@/lib/dummyData';

interface PostPageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: PostPageProps) => {
  const { id } = await params;
  const post = await getPostById(parseInt(id, 10));

  if (!post) {
    return;
  }

  const createdAtDate = new Date(post.createdAt);
  const formattedCreatedAt = createdAtDate.toLocaleString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 lg:px-20">
        <article className="prose lg:prose-xl max-w-none">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 text-sm mb-2">
            作成者: {post.userName} | 作成日時: {formattedCreatedAt} {/* ★ 表示を修正 */}
          </p>
          <div className="mt-4">
            <p>{post.message}</p>
          </div>
        </article>

        <div className="mt-8">
          <a href="/" className="text-blue-600 hover:underline">
            &larr; ホームに戻る
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
