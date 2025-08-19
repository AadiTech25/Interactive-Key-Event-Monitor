# Interactive Key Event Monitor

A JavaScript interactive project that tracks keyboard input and displays information in real time, including the event type, key code, pushed key, and character code. Helpful for novices learning about DOM events.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen)](https://aaditech25.github.io/Interactive-Key-Event-Monitor/)

## Example Code

```javascript
document.addEventListener("keydown", function(event) {
  console.log("Key pressed:", event.key);
});
