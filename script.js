function convertCoordinates() {
    const latitudeInput = document.getElementById("latitude").value.trim();
    const longitudeInput = document.getElementById("longitude").value.trim();

    // Validate input
    if (!latitudeInput || !longitudeInput) {
        alert("Please enter both Latitude and Longitude in DDM format.");
        return;
    }

    try {
        // Latitude conversion
        let latDegrees = parseInt(latitudeInput.slice(0, 2)); // First 2 digits for degrees
        let latMinutes = parseFloat(latitudeInput.slice(2, -1)); // Rest for minutes
        if (latitudeInput.endsWith("S")) {
            latDegrees = -latDegrees; // Negative for South
        }
        const decimalLatitude = latDegrees + (latMinutes / 60);

        // Longitude conversion
        let lonDegrees = parseInt(longitudeInput.slice(0, 3)); // First 3 digits for degrees
        let lonMinutes = parseFloat(longitudeInput.slice(3, -1)); // Rest for minutes
        if (longitudeInput.endsWith("W")) {
            lonDegrees = -lonDegrees; // Negative for West
        }
        const decimalLongitude = lonDegrees + (lonMinutes / 60);

        // Display results
        document.getElementById("resultLatitude").innerText = `Latitude: ${decimalLatitude.toFixed(5)}°`;
        document.getElementById("resultLongitude").innerText = `Longitude: ${decimalLongitude.toFixed(5)}°`;

        // Generate Google Maps link
        const googleMapsLink = `https://www.google.com/maps?q=${decimalLatitude.toFixed(5)},${decimalLongitude.toFixed(5)}`;
        document.getElementById("googleMapsLink").innerHTML = `<a href="${googleMapsLink}" target="_blank">Open in Google Maps</a>`;
    } catch (error) {
        alert("Error converting coordinates. Please check the format of your input.");
    }
}
