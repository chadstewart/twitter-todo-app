if(process.env.ENV === "production"){
  module.exports = prod.js
} else {
  module.exports = dev.js
}