import Image from "next/image";

interface ImageModalProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  onClose: () => void;
}

function ImageModal({ src, alt, width, height, onClose }: ImageModalProps) {
  return (
    <div
      className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 cursor-pointer text-black transition-colors hover:text-gray-700"
        aria-label="Close modal"
      >
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Image container */}
      <div
        className="relative max-h-[calc(100vh-4rem)] max-w-[90vw] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={width ?? 1200}
          height={height ?? 800}
          className="max-h-full max-w-full object-contain"
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}

export default ImageModal;
