<script>
  import { postOrder } from "../Scripts/apiCalls";
  import { loremIpsum } from "lorem-ipsum";
  function handleClick() {
    let sources = ["bar", "bar", "kitchen", "kitchen", "kitchen"];
    const exampleOrder = sources.map(function(d) {
      let tmp = {};
      tmp.source = d;
      tmp.message = loremIpsum();
      return tmp;
    });
    postOrder(exampleOrder);
  }
</script>

<style>

</style>

Hello this is the waiter view.
<button on:click={handleClick}>Place Order</button>
