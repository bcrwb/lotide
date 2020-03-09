const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]);
const array = ["Lighthouse", "Labs"]
assertEqual(result.toString(result), array.toString(array));

