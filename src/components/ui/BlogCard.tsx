import { useState } from "react";
import { BlogPost } from "../../data/blogPost";
import BlogModal from "./BlogModal";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <article
        onClick={() => setIsModalOpen(true)}
        className={`group  rounded-xl overflow-hidden border shadow-md hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer ${
          featured ? "md:col-span-2 lg:col-span-2" : ""
        }`}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-purple-400 text-white text-xs font-medium px-2.5 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center mb-3 text-sm text-gray-500">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-6 h-6 rounded-full mr-2"
            />
            <span>{post.author.name}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>

          <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-blog-purple transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 dark:bg-white text-gray-700 text-xs px-2.5 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <BlogModal
        post={post}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default BlogCard;
