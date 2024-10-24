import type { Product } from '@/interfaces/product.interface'
import CruzVerdeProducts from '@/temp/cruzverdeProducts.json'

export const getProducts = async (): Promise<Product[]> => {
  return Promise.resolve(CruzVerdeProducts)
}
