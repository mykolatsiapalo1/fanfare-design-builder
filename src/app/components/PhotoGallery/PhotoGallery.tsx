import React from "react";
import { Photo } from "../../types/index";
import PhotoCard from "./PhotoCard";

const PhotoGallery: React.FC = () => {
  const photos: (Photo | null)[] = [
    {
      url: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg",
    },
    {
      url: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg",
    },
    {
      url: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg",
    },
    {
      url: "https://civilrights.msu.edu/_assets/images/placeholder/placeholder-200x200.jpg",
    },
    null,
    null,
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        {photos.map((photo, index) => (
          <PhotoCard key={index} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
