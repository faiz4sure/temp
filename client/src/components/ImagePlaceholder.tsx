import { Image, Play } from "lucide-react";

interface ImagePlaceholderProps {
  title: string;
  description: string;
  type?: "image" | "video";
  className?: string;
  height?: string;
}

const ImagePlaceholder = ({ 
  title, 
  description, 
  type = "image", 
  className = "", 
  height = "300px" 
}: ImagePlaceholderProps) => {
  const Icon = type === "video" ? Play : Image;
  
  return (
    <div 
      className={`image-placeholder flex items-center justify-center ${className}`}
      style={{ minHeight: height }}
    >
      <div className="text-center space-y-4 p-8">
        <Icon className="w-16 h-16 text-purple-400 opacity-50 mx-auto" />
        <p className="text-gray-400 font-semibold text-lg">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ImagePlaceholder;
