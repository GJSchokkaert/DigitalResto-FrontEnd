<script>
  import io from "socket.io-client";
  import serverUrl from "../globals";

  const socket = io(serverUrl);

  socket.on("connect", function() {
    console.log("connected to io server");
  });

  socket.on("order", function(data) {
    console.log("date emmited to this view");
    console.log(data);
  });
</script>

<style>
  /* your styles go here */
</style>

Hello, this is the bar view.
