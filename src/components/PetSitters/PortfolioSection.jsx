import React, { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem";


const portfolioItems = [
  {
    id: 1,
    name: "Pawsome Pet Sitting",
    description: "A vibrant website redesign for a local pet sitting service.",
    image: "/images/11.gif",
    
  },
  {
    id: 2,
    name: "Whisker Walkers",
    description: "Mobile-friendly site for professional dog walkers.",
    image: "/images/16.png",

  },
  {
    id: 3,
    name: "Furry Friends Daycare",
    description: "Playful and informative website for a pet daycare center.",
    image: "/images/1one.png",

  },
  {
    id: 4,
    name: "Bark & Meow Grooming",
    description: "Sleek design for a high-end pet grooming salon.",
    image: "/images/7.png",

  },
];

const PortfolioSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex items-center justify-between w-full max-w-7xl mx-auto my-12 px-6">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          Past Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Rendering Items in Pairs (2 per row) */}
          {portfolioItems.map((item, index) => {
            const isHovered = hoveredId === item.id;
            const isLeft = index % 2 === 0; // Determine if the item is on the left side
            const oppositeItem =
              index % 2 === 0 ? portfolioItems[index + 1] : portfolioItems[index - 1];

            return (
              <div
                key={item.id}
                className="flex w-full mx-auto flex-col"
                onMouseEnter={() => !isMobileView && setHoveredId(oppositeItem.id)}
                onMouseLeave={() => !isMobileView && setHoveredId(null)}
                onClick={() => isMobileView && setHoveredId(item.id)} // For mobile, show details on tap
              >
                {/* Portfolio Item */}
                <PortfolioItem
                  project={item}
                  isHovered={isHovered}
                  showDetails={isHovered || (isMobileView && hoveredId === item.id)}
                  isLeft={isLeft}
                  isMobileView={isMobileView}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;