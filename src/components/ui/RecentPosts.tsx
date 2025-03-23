import { BlogPost } from "@/data/blogPost";
import BlogCard from "./BlogCard";

interface RecentPostsProps {
  posts: BlogPost[];
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  // Show more recent posts (9 instead of 6)
  const recentPosts = posts
    .filter(post => !post.isFeatured)
    .slice(0, 9);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Recent Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
