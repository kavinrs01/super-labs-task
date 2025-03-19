import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useRef, useState } from "react";

import { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  scrollStep?: number;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  scrollStep = 600,
  className = "",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const updateArrowVisibility = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setIsAtStart(scrollLeft <= 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollStep, behavior: "smooth" });
      setTimeout(updateArrowVisibility, 500);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollStep, behavior: "smooth" });
      setTimeout(updateArrowVisibility, 500);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", updateArrowVisibility);
      updateArrowVisibility(); // Initial check
    }
    return () => {
      scrollRef.current?.removeEventListener("scroll", updateArrowVisibility);
    };
  }, []);

  return (
    <div className={`relative p-5 ${className}`}>
      {!isAtStart && (
        <Button
          onClick={scrollLeft}
          shape="circle"
          icon={<LeftOutlined />}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg"
        />
      )}

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {children}
      </div>

      {!isAtEnd && (
        <Button
          onClick={scrollRight}
          shape="circle"
          icon={<RightOutlined />}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg"
        />
      )}
    </div>
  );
};

export { Carousel };

const CarouselCard: React.FC<{ url: string }> = ({ url }) => {
  return (
    <div className="w-[540px] rounded-lg flex-shrink-0">
      <img
        src={url}
        alt="Carousel"
        className="w-[540px] h-[300px] rounded-t-lg"
      />
      <div className="p-5 bg-black text-white rounded-b-lg">
        <h3>New &amp; Clean at Sephora</h3>
        <p>Indulge in buttery, silky, juicy makeup.</p>
        <p>
          <b>SHOP NOW ▸</b>
        </p>
      </div>
    </div>
  );
};

const demoData = [
  "https://www.sephora.com/contentimages/2025-feb-mu-texture-story-site-desktop-home-page-rwd-hero-banner-clean-1200x800-us-2946.jpg?imwidth=1090",
  "https://www.sephora.com/contentimages/2025-03-11-slotting-just-arrived-v3-site-rwd-home-page-hero-banner-english-AMIKA-US-handoff_01.jpg?imwidth=1090",
  "https://www.sephora.com/contentimages/2025-3-16-tower-28-getset-blur-set-matte-powder-blush-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=1090",
  "https://www.sephora.com/contentimages/2025-3-15-kayali-fleur-majesty-rose-royale-eau-de-parfum-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=1090",
];

const HomeCarousel: React.FC = () => {
  return (
    <Carousel>
      {demoData.map((url) => (
        <CarouselCard key={url} url={url} />
      ))}
    </Carousel>
  );
};

export { HomeCarousel };
