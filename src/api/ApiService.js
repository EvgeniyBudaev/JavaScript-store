export class ApiService {
  async getProducts() {
    try {
      const result = await fetch('./src/api/products.json')
      const data = await result.json()
      const products = data.items
      return products.map(item => {
        const {name, subname, price} = item.fields
        const {id} = item.sys
        const image = item.fields.image.fields.file.url
        return {name, subname, price, id, image}
      })
    } catch (error) {
      console.log(error)
    }
  }
}
