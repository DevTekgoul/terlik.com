import Link from "next/link"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  id: string
  title: string
  price: number
  image: string
  vendor: string
  rating?: number
  reviewCount?: number
  isNew?: boolean
}

export function ProductCard({ id, title, price, image, vendor, rating = 0, reviewCount = 0, isNew }: ProductCardProps) {
  return (
    <Link href={`/urun/${id}`} className="group">
      <Card className="overflow-hidden border-border/40 hover:border-border hover:shadow-md transition-all duration-300">
        <div className="relative aspect-square bg-secondary/30 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
          {isNew && (
            <Badge className="absolute top-2 md:top-3 left-2 md:left-3 bg-foreground text-background text-xs">
              Yeni
            </Badge>
          )}
        </div>
        <CardContent className="p-3 md:p-4">
          <p className="text-xs text-muted-foreground mb-1">{vendor}</p>
          <h3 className="font-medium text-sm md:text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-base md:text-lg">{price.toFixed(2)} ₺</p>
            {rating > 0 && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{rating.toFixed(1)}</span>
                <span className="hidden sm:inline">({reviewCount})</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
