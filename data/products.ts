export type Product = {
  id: number
  slug: string
  name: string
  price: number
  image: string
  tag?: string
  description: string
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'signature-oversized-tee',
    name: 'Signature Oversized Tee',
    price: 39,
    image: 'https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Bestseller',
    description:
      'Heavyweight cotton T‑shirt with a relaxed, boxy fit. Finished with a soft touch wash for an elevated everyday feel.'
  },
  {
    id: 2,
    slug: 'everyday-wide-leg-pants',
    name: 'Everyday Wide‑Leg Pants',
    price: 79,
    image: 'https://images.pexels.com/photos/7671255/pexels-photo-7671255.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'New',
    description:
      'High‑rise wide‑leg trousers cut from a breathable twill. Clean lines that dress up or down easily.'
  },
  {
    id: 3,
    slug: 'soft-structure-blazer',
    name: 'Soft Structure Blazer',
    price: 129,
    image: 'https://images.pexels.com/photos/7671292/pexels-photo-7671292.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Lightweight blazer with soft shoulders and minimal detailing. Designed for layering over tees, shirts or knits.'
  },
  {
    id: 4,
    slug: 'everyday-crew-knit',
    name: 'Everyday Crew Knit',
    price: 89,
    image: 'https://images.pexels.com/photos/7671162/pexels-photo-7671162.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Fine‑gauge crew‑neck knit in a breathable blend. A clean layer that works across seasons.'
  },
  {
    id: 5,
    slug: 'minimal-leather-sneaker',
    name: 'Minimal Leather Sneaker',
    price: 149,
    image: 'https://images.pexels.com/photos/6311650/pexels-photo-6311650.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Limited',
    description:
      'Low‑profile leather sneakers with tonal laces and rubber sole. Designed to pair with denim, tailoring, or sweats.'
  },
  {
    id: 6,
    slug: 'everyday-tote-bag',
    name: 'Everyday Canvas Tote',
    price: 39,
    image: 'https://images.pexels.com/photos/7671390/pexels-photo-7671390.jpeg?auto=compress&cs=tinysrgb&w=800',
    description:
      'Structured canvas tote with internal pocket and reinforced handles. Fits a laptop, notebook, and daily essentials.'
  }
]

export function findProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
