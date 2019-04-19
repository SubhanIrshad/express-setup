"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var app = (0, _express["default"])();
var port = 3000;

var OP = function OP() {
  _classCallCheck(this, OP);

  _defineProperty(this, "print",
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('Hello');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
};

app.get('/', function (req, res) {
  return res.send('Hello');
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port, "!"));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJwb3J0IiwiT1AiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsR0FBRyxHQUFHLDBCQUFaO0FBQ0EsSUFBTUMsSUFBSSxHQUFHLElBQWI7O0lBRU1DLEU7Ozs7Ozs7MEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNOQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaOztBQURNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7OztBQUtWSixHQUFHLENBQUNLLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEsU0FBY0EsR0FBRyxDQUFDQyxJQUFKLENBQVMsT0FBVCxDQUFkO0FBQUEsQ0FBYjtBQUVBUixHQUFHLENBQUNTLE1BQUosQ0FBV1IsSUFBWCxFQUFpQjtBQUFBLFNBQU1FLE9BQU8sQ0FBQ0MsR0FBUix5Q0FBNkNILElBQTdDLE9BQU47QUFBQSxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcG9ydCA9IDMwMDA7XG5cbmNsYXNzIE9QIHtcbiAgcHJpbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0hlbGxvJyk7XG4gIH07XG59XG5cbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHJlcy5zZW5kKCdIZWxsbycpKTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiBjb25zb2xlLmxvZyhgRXhhbXBsZSBhcHAgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fSFgKSk7XG4iXX0=