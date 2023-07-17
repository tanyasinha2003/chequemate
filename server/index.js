// import "ignore-styles";
// import "@babel/register";

// import "./server.js";

require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("./server");
