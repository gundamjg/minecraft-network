document.addEventListener("DOMContentLoaded", function() {
    let playersOnline = Math.floor(Math.random() * 100); // Simulated online players
    document.body.innerHTML += `<p>Players Online: ${playersOnline}</p>`;
});
