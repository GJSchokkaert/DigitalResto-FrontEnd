import Home from "./Views/Home.svelte";
import Bar from "./Views/Bar.svelte";
import Waiter from "./Views/Waiter.svelte";
import Kitchen from "./Views/Kitchen.svelte";
import NotFound from "./Views/NotFound.svelte";

const routes = {
  // Index page for now just Bar
  "/": Home,
  "/bar": Bar,
  "/waiter": Waiter,
  "/kitchen": Kitchen,

  // Catch-all
  // This is optional, but if present it must be the last
  "*": NotFound,
};

export default routes;
