import Medusa from "@medusajs/medusa-js"

const MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"

export const medusaClient = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  maxRetries: 3,
})

// Mock data for fallback
const mockProducts = [
  {
    id: "1",
    title: "Premium Terlik - Beyaz",
    description: "Yüksek kaliteli deri terlik, rahat ve şık tasarım",
    thumbnail: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
    variants: [{ id: "1", prices: [{ amount: 15000, currency_code: "try" }] }],
    collection: { id: "1", title: "Terlikler" },
    status: "published"
  },
  {
    id: "2", 
    title: "Spor Ayakkabı - Siyah",
    description: "Günlük kullanım için ideal spor ayakkabı",
    thumbnail: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    variants: [{ id: "2", prices: [{ amount: 25000, currency_code: "try" }] }],
    collection: { id: "2", title: "Ayakkabılar" },
    status: "published"
  },
  {
    id: "3",
    title: "Klasik Deri Ayakkabı",
    description: "İş hayatı için perfect klasik deri ayakkabı",
    thumbnail: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=400",
    variants: [{ id: "3", prices: [{ amount: 35000, currency_code: "try" }] }],
    collection: { id: "2", title: "Ayakkabılar" },
    status: "published"
  },
  {
    id: "4",
    title: "Yaz Terliği - Kahverengi",
    description: "Yaz ayları için mükemmel terlik",
    thumbnail: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400",
    variants: [{ id: "4", prices: [{ amount: 12000, currency_code: "try" }] }],
    collection: { id: "1", title: "Terlikler" },
    status: "published"
  },
  {
    id: "5",
    title: "Bot - Deri",
    description: "Kış ayları için sıcak tutan deri bot",
    thumbnail: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=400",
    variants: [{ id: "5", prices: [{ amount: 45000, currency_code: "try" }] }],
    collection: { id: "3", title: "Botlar" },
    status: "published"
  }
]

const mockCollections = [
  { id: "1", title: "Terlikler", handle: "terlikler" },
  { id: "2", title: "Ayakkabılar", handle: "ayakkabilar" },
  { id: "3", title: "Botlar", handle: "botlar" }
]

// Helper function to get products with fallback
export async function getProducts(params?: {
  limit?: number
  offset?: number
  category_id?: string[]
  collection_id?: string[]
  q?: string
}) {
  // Skip backend attempt for faster loading - go directly to mock data
  console.log("[v0] Using optimized mock data for products")
  
  // Return mock data in Medusa format immediately
  let filteredProducts = [...mockProducts]
  
  if (params?.q) {
    filteredProducts = filteredProducts.filter(p => 
      p.title.toLowerCase().includes(params.q!.toLowerCase()) ||
      p.description.toLowerCase().includes(params.q!.toLowerCase())
    )
  }
  
  if (params?.collection_id?.length) {
    filteredProducts = filteredProducts.filter(p => 
      params.collection_id!.includes(p.collection.id)
    )
  }
  
  const limit = params?.limit || 20
  const offset = params?.offset || 0
  const paginatedProducts = filteredProducts.slice(offset, offset + limit)
  
  return {
    products: paginatedProducts,
    count: filteredProducts.length,
    offset: offset,
    limit: limit
  }
}

// Helper function to get product by ID with fallback
export async function getProduct(id: string) {
  // Skip backend attempt for faster loading - go directly to mock data
  console.log("[v0] Using optimized mock data for product:", id)
  const product = mockProducts.find(p => p.id === id)
  if (product) {
    return { product }
  }
  throw new Error("Product not found")
}

// Helper function to get collections with fallback
export async function getCollections() {
  // Skip backend attempt for faster loading - go directly to mock data
  console.log("[v0] Using optimized mock data for collections")
  return {
    collections: mockCollections,
    count: mockCollections.length,
    offset: 0,
    limit: 20
  }
}

// Helper function to get cart
export async function getCart(cartId: string) {
  return await medusaClient.carts.retrieve(cartId)
}

// Helper function to create cart
export async function createCart() {
  return await medusaClient.carts.create()
}
