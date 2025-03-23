import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "./dialog";
  import { BlogPost } from "@/data/blogPost";
  
  interface BlogModalProps {
    post: BlogPost;
    isOpen: boolean;
    onClose: () => void;
  }
  
  const BlogModal = ({ post, isOpen, onClose }: BlogModalProps) => {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{post.title}</DialogTitle>
            <div className="flex items-center mt-2 text-sm text-gray-500">
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
          </DialogHeader>
  
          <div className="relative aspect-video mt-4">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blog-purple text-white text-xs font-medium px-2.5 py-1 rounded-full">
                {post.category}
              </span>
            </div>
          </div>
  
          <div className="mt-6">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
  
          <div className="flex flex-wrap gap-2 mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blog-lightGray text-gray-700 text-xs px-2.5 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default BlogModal;