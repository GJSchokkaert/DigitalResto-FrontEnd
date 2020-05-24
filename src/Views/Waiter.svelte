<script>
  import { postOrder } from "../Scripts/apiCalls";
  import { loremIpsum } from "lorem-ipsum";
  function handleClick() {
    const randomSentence = loremIpsum();
    const exampleOrder = {
      message: randomSentence
    };
    postOrder(exampleOrder);
  }
</script>

<style>

</style>

Hello this is the waiter view.
<button on:click={handleClick}>Place Order</button>
