import { GetServerSideProps } from "next";
import Link from "next/link";
import { Post } from "../../types/Post";

export const makeServerSideProps = async (posts: Post[]) => {
  return {
    props: {
      posts: posts,
    },
  };
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const postUrl = `${process.env.POST_URL}/posts`;
    
  const res = await fetch(postUrl);
  const data: Post[] = await res.json();

  return makeServerSideProps(data);
};

export default function SSR({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts?.map((post) => (
        <p key={post.id}>
          {
            <Link href={`/ssr/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          }
        </p>
      ))}
    </div>
  );
}
