import Bar from "./Views/Bar.svelte";
import Waiter from "./Views/Waiter.svelte";
import NotFound from "./Views/NotFound.svelte";

const routes = {
  // Index page for now just Bar
  "/": Bar,
  // Bar
  "/bar": Bar,

  // Waiter
  "/waiter": Waiter,

  // Catch-all
  // This is optional, but if present it must be the last
  "*": NotFound,
};

export default routes;
