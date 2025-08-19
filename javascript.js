document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // == EDIT THIS SECTION TO ADD, REMOVE, OR CHANGE YOUR GAMES/APPS ==
    // =========================================================================
    const games = [
        {
            title: 'fruite',
            imageUrl: 'https://github.com/DroidOmi/Shape-Ninja-Neon/blob/main/icon.jpg/400x250/03DAC6/121212?text=fruite',
            gameUrl: 'https://droidomi.github.io/Shape-Ninja-Neon/' // Replace with your actual game URL
        },
        {
            title: 'Weather App',
            imageUrl: 'https://via.placeholder.com/400x250/FF4081/121212?text=WeatherApp',
            gameUrl: 'https://your-username.github.io/weather-app/' // Replace with your actual game URL
        },
        {
            title: 'Memory Game',
            imageUrl: 'https://via.placeholder.com/400x250/FFC107/121212?text=MemoryGame',
            gameUrl: 'https://your-username.github.io/memory-game/' // Replace with your actual game URL
        },
        // To add another game, copy the block above and paste it here.
        // For example:
        // {
        //     title: 'New Awesome Game',
        //     imageUrl: 'path/to/your/image.jpg',
        //     gameUrl: 'https://your-username.github.io/new-game/'
        // },
    ];
    // =========================================================================
    // == END OF EDITABLE SECTION ==
    // =========================================================================


    // Get references to DOM elements
    const gameGrid = document.getElementById('game-grid');
    const fullscreenView = document.getElementById('fullscreen-view');
    const gameIframe = document.getElementById('game-iframe');
    const closeBtn = document.getElementById('close-btn');

    // Function to create and add game cards to the grid
    function populateGrid() {
        // Clear any existing content
        gameGrid.innerHTML = '';

        // Loop through the games array and create a card for each
        games.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            // Store the game URL in a data attribute for easy access
            card.dataset.gameUrl = game.gameUrl;

            card.innerHTML = `
                <img src="${game.imageUrl}" alt="${game.title} preview">
                <div class="game-card-content">
                    <h3>${game.title}</h3>
                </div>
            `;
            gameGrid.appendChild(card);
        });
    }

    // Function to open the fullscreen viewer
    function openFullscreen(url) {
        gameIframe.src = url;
        fullscreenView.classList.add('active');
    }

    // Function to close the fullscreen viewer
    function closeFullscreen() {
        fullscreenView.classList.remove('active');
        // IMPORTANT: Set src to blank to stop game sound/processes
        gameIframe.src = '';
    }

    // Event listener for clicks on the game grid
    gameGrid.addEventListener('click', (event) => {
        // Find the closest parent that is a game card
        const card = event.target.closest('.game-card');
        if (card) {
            const url = card.dataset.gameUrl;
            if (url) {
                openFullscreen(url);
            }
        }
    });

    // Event listener for the close button
    closeBtn.addEventListener('click', closeFullscreen);

    // Initial population of the grid when the page loads
    populateGrid();
});