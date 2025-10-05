"use client"

import { useState } from "react"

interface ProductGalleryProps {
  images: Array<{ url: string }>
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
        <img
          src={images[selectedImage]?.url || "/placeholder.svg?height=600&width=600"}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square bg-secondary rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImage === index ? "border-primary" : "border-transparent"
              }`}
            >
              <img
                src={image.url || "/placeholder.svg?height=150&width=150"}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
