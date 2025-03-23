import { BlogPost } from "@/data/blogPost";
import BlogCard from "./BlogCard";

interface FeaturedPostsProps {
  posts: BlogPost[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  // Get up to 3 featured posts
  const featuredPosts = posts.filter(post => post.isFeatured).slice(0, 3);
  
  if (featuredPosts.length === 0) return null;
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 dark:text-white text-gray-900">Featured Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              featured={index === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
