import React from "react";

const BannerSection = () => {
  const banners = [
    {
      img: "/images/chair1.webp",
      title: "Design Creative",
      subtitle: "Chair Collection",
      link: "https://wscubetech.co/Assignments/furniture/top-rated",
    },
    {
      img: "/images/chair2.webp",
      title: "Bestselling Products",
      subtitle: "Chair Collection",
      link: "https://wscubetech.co/Assignments/furniture/best-selling",
    },
    {
      img: "/images/chair1.webp",
      title: "Onsale Products",
      subtitle: "Chair Collection",
      link: "https://wscubetech.co/Assignments/furniture/on-sale",
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((banner, index) => (
            <div key={index} className="relative group">
              <a href={banner.link}>
                <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={banner.img}
                    alt={banner.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white p-4 rounded-lg">
                <p className="text-sm">{banner.title}</p>
                <h2 className="text-lg font-semibold">{banner.subtitle}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
