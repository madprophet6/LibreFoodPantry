const Orders = require("../data/orders.js");

module.exports = {
  method: 'get',
  path: '/orders/:id',
  async handler(request, response) {
    const id = request.params.id;
    const order = await Orders.getOne(id);
    if (order !== null) {
      response.status(200).json(order);
    } else {
      response.status(404).json({
        status: 404,
        error: "Order not found",
        message: "Email does not exist"
      })
    }
  }
};
