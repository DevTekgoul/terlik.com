"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

interface ProductFiltersProps {
  currentCategory?: string
  currentPrice?: string
}

export function ProductFilters({ currentCategory, currentPrice }: ProductFiltersProps) {
  const searchParams = useSearchParams()

  const categories = [
    { value: "ayakkabi", label: "Ayakkabı" },
    { value: "terlik", label: "Terlik" },
    { value: "corap", label: "Çorap" },
  ]

  const priceRanges = [
    { value: "0-50", label: "0 - 50 ₺" },
    { value: "50-100", label: "50 - 100 ₺" },
    { value: "100-200", label: "100 - 200 ₺" },
    { value: "200+", label: "200 ₺ ve üzeri" },
  ]

  const createFilterUrl = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (params.get(key) === value) {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    return `?${params.toString()}`
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filtreler</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3">Kategori</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.value} className="flex items-center space-x-2">
                <Checkbox id={category.value} checked={currentCategory === category.value} />
                <Label htmlFor={category.value} className="text-sm font-normal cursor-pointer flex-1">
                  <Link href={createFilterUrl("kategori", category.value)}>{category.label}</Link>
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-3">Fiyat Aralığı</h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <div key={range.value} className="flex items-center space-x-2">
                <Checkbox id={range.value} checked={currentPrice === range.value} />
                <Label htmlFor={range.value} className="text-sm font-normal cursor-pointer flex-1">
                  <Link href={createFilterUrl("fiyat", range.value)}>{range.label}</Link>
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Clear Filters */}
        {(currentCategory || currentPrice) && (
          <Link href="/urunler" className="block text-sm text-primary hover:underline text-center">
            Filtreleri Temizle
          </Link>
        )}
      </CardContent>
    </Card>
  )
}
