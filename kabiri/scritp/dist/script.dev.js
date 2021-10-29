"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// read more btn script
var parentContainer = document.querySelector('.content-about');
parentContainer.addEventListener('click', function (event) {
  var current = event.target;
  var isReadMoreBtn = current.className.includes('read-more-btn');
  if (!isReadMoreBtn) return;
  var currentText = event.target.parentNode.querySelector('.read-more-text');
  currentText.classList.toggle('read-more-text--show');
  current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";
}); // email form

var sendFeedback = function sendFeedback(emailjs, serviceID, templateId, variables, userId) {
  emailjs.send(serviceID, templateId, variables, userId).then(function (res) {
    console.log('Email successfully sent!');
  })["catch"](function (err) {
    return console.error('There has been an error.  Here some thoughts on the error that occured:', err);
  });
};

$("form-contact").submit(function (e) {
  e.preventDefault();
  var name = e.target[0].value;
  var email = e.target[1].value;
  var message = e.target[2].value;
  alert("Thank you for your message from ".concat(email));
  var templateId = 'template_ga13ufz';
  var serviceID = 'service_6yqhq29';
  var userId = "user_6uDwTYCySYHyDYjqRGDnu";
  var data = {
    from_name: name,
    message: message,
    from_email: email,
    to_name: 'omar'
  };
  Promise.resolve().then(function () {
    return _interopRequireWildcard(require('emailjs-com'));
  }).then(function (emailjs) {
    return sendFeedback(emailjs, serviceID, templateId, data, userId);
  });
});