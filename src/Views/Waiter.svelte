<script>
  import { postOrder } from "../Scripts/apiCalls";
  function handleClick() {
    let exampleOrder = {
      message: "does this work?"
    };
    postOrder(exampleOrder);
  }
</script>

<style>

</style>

Hello this is the waiter view.
<button on:click={handleClick}>Place Order</button>
