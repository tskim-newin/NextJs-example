import { Post } from "../../types/Post";

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // const { data } = await fetch(`${process.env.POST_URL}/post/`) // your fetch function here 

    return {
        props: {
            
        }
    }
}
export default function PostItem({post}: {post: Post}) {
  return (
    <div>
      <p>{post.title}</p>
      {post.body}
    </div>
  );
}

