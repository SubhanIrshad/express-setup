"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 3000;
app.get('/', function (req, res) {
  return res.send('Hello');
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJwb3J0IiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQSxJQUFNQSxHQUFHLEdBQUcsMEJBQVo7QUFDQSxJQUFNQyxJQUFJLEdBQUcsSUFBYjtBQUVBRCxHQUFHLENBQUNFLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEsU0FBY0EsR0FBRyxDQUFDQyxJQUFKLENBQVMsT0FBVCxDQUFkO0FBQUEsQ0FBYjtBQUVBTCxHQUFHLENBQUNNLE1BQUosQ0FBV0wsSUFBWCxFQUFpQjtBQUFBLFNBQU1NLE9BQU8sQ0FBQ0MsR0FBUix5Q0FBNkNQLElBQTdDLE9BQU47QUFBQSxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcG9ydCA9IDMwMDA7XG5cbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHJlcy5zZW5kKCdIZWxsbycpKTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiBjb25zb2xlLmxvZyhgRXhhbXBsZSBhcHAgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fSFgKSk7XG4iXX0=