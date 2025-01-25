export interface Book {
  id: number
  title: string
  author: string
  genre: string
  description: string
  rating: number
  stock: number
  price: number
  image: string
}

export interface CartItem {
  id: number
  title: string
  author: string
  price: number
  units: number
  image: string
}