"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placeholder = exports.disabled = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  component: _["default"],
  title: 'Design System/Input'
};
exports["default"] = _default;

var placeholder = function placeholder() {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    id: "email",
    label: "Email",
    placeholder: "user@gmail.com"
  });
};

exports.placeholder = placeholder;

var disabled = function disabled() {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    disabled: true,
    id: "email",
    label: "Email",
    placeholder: "user@gmail.com"
  });
};

exports.disabled = disabled;