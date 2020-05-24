<script>
  import io from "socket.io-client";
  import serverUrl from "../globals";
  import { getOrders } from "../Scripts/apiCalls";

  let ordersPromise = getOrders();
  let orders;
  ordersPromise.then(data => (orders = data));
  const socket = io(serverUrl);

  socket.on("connect", function() {
    console.log("connected to io server");
  });

  socket.on("order", function(order) {
    console.log("add  new order to the orders array");
    orders = orders.concat(order);
    console.log(orders);
  });
</script>

<style>
  /* your styles go here */
</style>

Items that are order from the waiter view:
<ul>
  {#await ordersPromise then items}
    {#each items as item}
      <li>{item.message}</li>
    {/each}
  {/await}
</ul>
