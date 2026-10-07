import { Link } from "react-router-dom";

export interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
  /** Route to the industry's page. Omit it while no page exists. */
  path?: string | null;
}

const IndustryCard = ({
  title,
  description,
  image,
  path,
}: IndustryCardProps) => {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white
                 shadow-[0_18px_50px_rgba(0,8,81,0.12)]
                 transition-[transform,box-shadow] duration-[350ms] ease-out
                 hover:-translate-y-2.5 hover:shadow-[0_28px_70px_rgba(0,8,81,0.22)]"
    >
      <div className="relative h-[200px] overflow-hidden upto-768:h-[170px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.08]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-card lg:p-card-lg">
        <h3 className="text-[1.35rem] font-bold text-[#0d1b2a]">{title}</h3>
        <p className="flex-1 text-[0.95rem] leading-[1.7] text-[#4a5568]">
          {description}
        </p>
        {path ? (
          <Link
            to={path}
            className="self-start text-[0.9rem] font-bold text-[#1cb5e0] no-underline
                       transition-colors duration-300 after:content-['_→'] hover:text-[#ff6b35]"
          >
            Explore {title}
          </Link>
        ) : (
          <span className="self-start rounded-full bg-[rgba(28,181,224,0.12)] px-3 py-[5px] text-[0.78rem] font-semibold tracking-[0.02em] text-[#0d6b85]">
            Talk to us
          </span>
        )}
      </div>
    </article>
  );
};

export default IndustryCard;
