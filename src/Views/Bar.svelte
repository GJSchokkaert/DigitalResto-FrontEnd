<script>
  import io from "socket.io-client";
  import serverUrl from "../globals";
  import { getOrders } from "../Scripts/apiCalls";

  let orders;

  // get orders from db
  let ordersPromise = getOrders("bar");
  ordersPromise.then(data => (orders = data));

  // add order if posted to the database
  const socket = io(serverUrl + "bar");
  socket.on("connect", function() {
    console.log("connected to io server");
  });

  socket.on("order", function(newOrders) {
    orders = [...orders, ...newOrders];
  });
</script>

<style type="text/scss">

</style>

<p>Items that are order from the waiter view:</p>
<ul>
  {#if orders}
    {#each orders as order}
      <li>{order.message}</li>
    {/each}
  {:else}
    {#await ordersPromise then orders}
      {#each orders as order}
        <li>{order.message}</li>
      {/each}
    {/await}
  {/if}
</ul>
