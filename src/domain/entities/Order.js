class Order {
  constructor({ userId, products, totalPrice, status = 'pending', createdAt = new Date() }) {
    this.userId = userId; 
    this.products = products; 
    this.totalPrice = totalPrice;
    this.status = status; 
    this.createdAt = createdAt;
  }
}

module.exports = Order;