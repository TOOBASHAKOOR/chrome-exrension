async function fetchData() {
    try {
        const res = await fetch("https://api.coronavirus.data.gov.uk/v1/data");
        if (!res.ok) {
            throw new Error('Network response was not ok ' + res.statusText);
        }
        const record = await res.json();

        // Ensure these fields match the API response structure
        const data = record.data[0];
        
        document.getElementById("date").innerText = data.date || 'N/A';
        document.getElementById("areaName").innerText = data.areaName || 'N/A';
        document.getElementById("latestBy").innerText = data.latestBy || 'N/A';
        document.getElementById("deathNew").innerText = data.deathNew || 'N/A';
    } catch (error) {
        console.error('Error fetching data:', error);
        document.querySelector('tbody').innerHTML = '<tr><td colspan="4">Error fetching data. Please try again later.</td></tr>';
    }
}

fetchData();