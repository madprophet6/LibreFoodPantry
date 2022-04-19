const Orders = require("../data/orders.js");

module.exports = {
  method: 'post',
  path: '/orders/:orderId/items',
  async handler(request, response) {
    const id = request.params.orderId;
    const orderData = request.body;
    const order = await Orders.addItemToOrder(id, orderData);
    const resourceUri = `${request.originalUrl}/${order._id}`;
    response.status(201).location(resourceUri).json(order);
  }
};