import axios from "axios";
import serverUrl from "../globals";

export async function postOrder(orderToPost) {
  let res = await axios.post(serverUrl + "order", orderToPost);
}

export async function getOrders() {
  let res = await axios.get(serverUrl + "orders");
  return res.data;
}
