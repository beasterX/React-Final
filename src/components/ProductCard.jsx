export default function ProductCard({ product }) {
  const [addToCart, setAddToCart] = useState(null);

  const handleAddToCart = (productId, size) => {
    // Simulate sending data to a cart service (replace with your logic)
    console.log("Adding to cart:", { productID: productId, size });
    // You can call a real cart service function here
  };

  return <Product product={product} addToCart={handleAddToCart} />;
}
