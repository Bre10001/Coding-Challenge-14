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

