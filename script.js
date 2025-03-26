fetch("mods.json")
.then(response => response.json())
.then(mods => {
    const table = document.getElementById("modsTable");
    mods.forEach(mod => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${mod.name}</td>
            <td>${mod.description}</td>
            <td>${mod.version}</td>
            <td><a href="${mod.download}" target="_blank">Download</a></td>
        `;
        table.appendChild(row);
    });
})
.catch(error => console.error("Error loading mods:", error));