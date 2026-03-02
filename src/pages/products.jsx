import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import products from './productsData'

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    if (!normalizedSearch) {
      return products
    }

    return products.filter((product) => {
      const searchableText = `${product.name} ${product.category} ${product.description}`.toLowerCase()
      return searchableText.includes(normalizedSearch)
    })
  }, [searchTerm])

  return (
    <section className="container section">
      <div className="products-head">
        <h2>Products</h2>
        <p className="products-count">{filteredProducts.length} items</p>
      </div>
      <input
        type="search"
        className="search-input"
        placeholder="Search by product name, category, or description"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div className="grid">
        {filteredProducts.map((product) => (
          <article key={product.id} className="card">
            <p className="category">{product.category}</p>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">₹{product.price}</p>
            <Link to={`/products/${product.id}`} className="button-link">
              View Product
            </Link>
          </article>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="search-empty">No products found for your search.</p>
      )}
    </section>
  )
}
