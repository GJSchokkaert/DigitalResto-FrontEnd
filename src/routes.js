import Bar from "./routes/Bar.svelte";
import Waiter from "./routes/Waiter.svelte";
import NotFound from "./routes/NotFound.svelte";

const routes = {
  // Bar
  "/bar": Bar,

  // Waiter
  "/waiter": Waiter,

  // Catch-all
  // This is optional, but if present it must be the last
  "*": NotFound
};

export default routes;
