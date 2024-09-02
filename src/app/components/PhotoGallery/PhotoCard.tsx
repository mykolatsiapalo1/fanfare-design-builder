import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { PhotoCardProps } from "../../types/index";

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

export default PhotoCard;
