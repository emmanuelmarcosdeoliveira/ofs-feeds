import { posts } from '../../../utils/posts';
import { Post } from '../../post/Post';

export function Postlist() {
  return (
    <main>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </main>
  );
}
