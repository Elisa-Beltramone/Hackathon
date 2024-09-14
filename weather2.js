// Sample data
const data = [
    {
        location: 'A Coruña',
        measurements: {
            GL: [0, 1, 37, 93, 127, 152, 187, 175, 293, 264, 229, 172, 105, 37, 1, 0, 1873],
            DF: [0, 1, 16, 38, 61, 90, 115, 127, 47, 49, 31, 28, 22, 13, 1, 0, 639],
            DT: [0, 2, 113, 166, 139, 100, 98, 64, 315, 292, 310, 288, 244, 142, 0, 0, 2273],
            UVB: [0, 0, 0, 0, 3, 9, 21, 40, 65, 74, 105, 119, 126, 205, 177, 173, 255, 245, 223, 191, 163, 129, 96, 65, 40, 22, 10, 4, 1, 0, 0, 0, 2560],
            IR: [112, 123, 115, 119, 111, 110, 111, 112, 115, 125, 127, 130, 116, 117, 114, 114, 113, 112, 110, 109, 109, 108, 108, 108, 2748]
        }
    },
    // Add other locations in the same format
];

// Function to generate table for each location
function generateTables() {
    const container = document.getElementById('tables-container');
    
    data.forEach(locationData => {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        
        // Create header row
        const headerRow = document.createElement('tr');
        const headers = ['Tipo', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 'SUMA'];
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        // Add data rows
        Object.entries(locationData.measurements).forEach(([type, values]) => {
            const row = document.createElement('tr');
            const typeCell = document.createElement('td');
            typeCell.textContent = type;
            row.appendChild(typeCell);

            let sum = 0;
            values.forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
                sum += value;
            });

            const sumCell = document.createElement('td');
            sumCell.textContent = sum;
            row.appendChild(sumCell);

            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        container.appendChild(table);
    });
}

// Call function to generate tables
generateTables();
