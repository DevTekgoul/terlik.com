"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Review {
  id: string
  author: string
  rating: number
  date: string
  comment: string
  verified?: boolean
}

interface ProductReviewsProps {
  reviews: Review[]
  rating: number
  reviewCount: number
}

export function ProductReviews({ reviews, rating, reviewCount }: ProductReviewsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [newRating, setNewRating] = useState(5)

  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    percentage: (reviews.filter((r) => r.rating === star).length / reviews.length) * 100,
  }))

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-bold">Değerlendirmeler</h2>
        <Button onClick={() => setShowReviewForm(!showReviewForm)}>Değerlendirme Yaz</Button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Puanınız</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => setNewRating(star)}>
                    <Star
                      className={`h-6 w-6 ${star <= newRating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Yorumunuz</label>
              <Textarea placeholder="Ürün hakkındaki düşüncelerinizi paylaşın..." rows={4} />
            </div>
            <div className="flex gap-2">
              <Button>Gönder</Button>
              <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                İptal
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Rating Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Overall Rating */}
        <div className="text-center md:text-left">
          <div className="text-5xl font-bold mb-2">{rating.toFixed(1)}</div>
          <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">{reviewCount} değerlendirme</p>
        </div>

        {/* Rating Distribution */}
        <div className="space-y-2">
          {ratingDistribution.map(({ star, count, percentage }) => (
            <div key={star} className="flex items-center gap-3">
              <span className="text-sm w-8">{star} ⭐</span>
              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400" style={{ width: `${percentage}%` }} />
              </div>
              <span className="text-sm text-muted-foreground w-8">{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{review.author}</span>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Onaylı Alıcı
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(review.date).toLocaleDateString("tr-TR")}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
