import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  
  {
    name: "Amit",
    username: "@amit",
    body: "Exportseese provided incredible guidance for my export business. A truly knowledgeable team!",
    img: "https://i.pinimg.com/736x/2b/4a/0b/2b4a0b51b6b1d5a0d51edadfe685a7b3.jpg",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "They helped me scale my business beyond India. Highly professional and efficient service.",
    img: "https://i.pinimg.com/736x/ef/00/31/ef00312d685e58f5f1692a0bed8b12c2.jpg",
  },
  {
    name: "Rahul",
    username: "@rahul",
    body: "Exportseese knows the ins and outs of international trade. Their advice was a game changer for me.",
    img: "https://i.pinimg.com/736x/a9/45/fc/a945fc8019d7c6abc5c4e49b97ca66a8.jpg",
  },
  {
    name: "Sneha",
    username: "@sneha",
    body: "I was struggling with export documentation, but Exportseese made the process smooth and easy.",
    img: "https://i.pinimg.com/736x/8f/75/0d/8f750d7e782e64d048d1229cbafe8a7c.jpg",
  },
  {
    name: "Vikram",
    username: "@vikram",
    body: "With their help, I was able to establish strong trade partnerships overseas. Absolutely worth it!",
    img: "https://i.pinimg.com/736x/e0/97/32/e09732eecf2d3d43ff0e578b1d640724.jpg",
  },
  {
    name: "Ananya",
    username: "@ananya",
    body: "Exportseese has been a reliable partner for my business growth. Highly recommended!",
    img: "https://i.pinimg.com/736x/c8/c1/aa/c8c1aabe0bdb3bd73eb1201ee21d7ad2.jpg",
  },
];




export default reviews;


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-6",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full object-cover h-8 w-8"  alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <div className="relative flex w-full flex-col py-28 mb-10 items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
