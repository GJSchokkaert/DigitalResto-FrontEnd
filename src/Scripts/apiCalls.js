import axios from "axios";
import serverUrl from "../globals";

export async function postOrder(orderToPost) {
  let res = await axios.post(serverUrl + "order", orderToPost);
}
