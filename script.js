const handleKeyPress = (event) => {
    document.querySelector(".keyPressed").textContent = `Key pressed: ${event.key}`;
    document.querySelector(".keyCode").textContent = `Key code: ${event.code}`;
    document.querySelector(".charCode").textContent = `Char code: ${event.key.charCodeAt(0)}`;
    document.querySelector(".eventType").textContent = `Key type: ${event.type}`;
};

document.getElementById("myInput").addEventListener("keydown", handleKeyPress);
