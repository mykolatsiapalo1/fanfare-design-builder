import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

interface Photo {
  url: string;
  text?: string;
}

interface PhotoCardProps {
  photo: Photo | null;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => (
  <div className="border rounded-lg overflow-hidden">
    {photo ? (
      <>
        <div className="w-full h-48 bg-gray-200 relative">
          <Image
            src={photo.url}
            alt={photo.text || "Photo"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {photo.text && (
          <div className="p-2">
            <span className="text-sm text-gray-600">{photo.text}</span>
          </div>
        )}
      </>
    ) : (
      <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
        <Plus className="text-gray-400" size={24} />
      </div>
    )}
  </div>
);

const PhotoGallery: React.FC = () => {
  const photos: (Photo | null)[] = [
    { url: "/api/placeholder/200/200" },
    { url: "/api/placeholder/200/200" },
    { url: "/api/placeholder/200/200" },
    { url: "/api/placeholder/200/200" },
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
