import { useState } from "react";
import { Safari } from "@/components/magicui/SafariMock";

export function Carousel({ items, className }: { items: any[]; className?: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={`relative ${className}`}>
            {/* Media Display */}
                <div className="relative overflow-hidden rounded-lg">
                    {items[currentIndex].type === "image" ? (
                        <img
                            src={items[currentIndex].src}
                            alt={items[currentIndex].alt}
                            className="w-full h-auto"
                        />
                    ) : (
                        <video
                            src={items[currentIndex].src}
                            controls
                            className="w-full h-auto"
                        />
                    )}
                </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
            >
                &larr;
            </button>
            <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
            >
                &rarr;
            </button>

            {/* Indicators */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {items.map((_, index) => (
                    <span
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                            index === currentIndex
                                ? "bg-white"
                                : "bg-gray-400"
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
}
