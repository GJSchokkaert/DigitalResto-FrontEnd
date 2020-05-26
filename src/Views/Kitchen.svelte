<script>
  import io from "socket.io-client";
  import serverUrl from "../globals";
  import { getOrders } from "../Scripts/apiCalls";

  let orders;

  // get orders from db
  let ordersPromise = getOrders("kitchen");
  ordersPromise.then(data => (orders = data));

  // add order if posted to the database
  const socket = io(serverUrl + "kitchen");
  socket.on("connect", function() {
    console.log("connected to io server");
  });

  socket.on("order", function(newOrders) {
    orders = [...orders, ...newOrders];
  });
</script>

<style>
  /* your styles go here */
</style>

Items that are order from the waiter view:
<ul>
  {#if orders}
    {#each orders as item}
      <li>{item.message}</li>
    {/each}
  {:else}
    {#await ordersPromise then items}
      {#each items as item}
        <li>{item.message}</li>
      {/each}
    {/await}
  {/if}
</ul>
