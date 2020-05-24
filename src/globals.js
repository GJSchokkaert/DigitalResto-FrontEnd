const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

const serverUrl = prod
  ? "https://digitalresto-backend.herokuapp.com/"
  : "http://localhost:3000/";

export default serverUrl;
