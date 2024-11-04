// References to HTML elements
const ticketContainer = document.getElementById('ticketContainer');
const errorMessage = document.getElementById('errorMessage');

// Task #2: Fetch Tickets Using Async/Await and Handle Errors
async function fetchTickets() {
    try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fetch ticket data from API

        
        if (!response.ok) {
            throw new Error('Failed to fetch tickets'); // Check respose
        }

        
        const tickets = await response.json(); // Parse response to json

        
        if (!tickets.length) {
            throw new Error('No unresolved tickets available'); // Check tickets
        }

        
        ticketContainer.innerHTML = ''; // Clear the container and display tickets
        displayTickets(tickets);

    } catch (error) {
        
        errorMessage.style.display = 'block';
        errorMessage.textContent = `Error: ${error.message}`; // Display error message if needed 
    } finally { 

        // Task #4: Use finally to Ensure Cleanup

        if (ticketContainer.innerHTML === 'Loading tickets...') {
            ticketContainer.innerHTML = 'No tickets to display.';
        }
    }
}

// Task #3: Display Tickets Dynamically on the Page

function displayTickets(tickets) {
    tickets.forEach(ticket => {
        const ticketDiv = document.createElement('div'); // div for each ticket
        ticketDiv.classList.add('ticket');
        ticketDiv.innerHTML = `
            <h3>Ticket ID: ${ticket.id}</h3>
            <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
            <p><strong>Issue Description:</strong> ${ticket.title}</p>
            <p><strong>Details:</strong> ${ticket.body}</p>`;
        ticketContainer.appendChild(ticketDiv);
    });
}

// Call function to fetch tickets on page
fetchTickets();

