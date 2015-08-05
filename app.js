

var currentPlayer = 'x';
var x_score = 0;
var o_score = 0;
var turns = 0;
var win_combinations = [7, 56, 448, 73, 146, 292, 273, 84];

// Alternate players and draw shape
$('#board').on('click', ".cell:not('.cell-x, .cell-o')", function() {
	var $current_cell = $(event.target);
	$current_cell.addClass('cell-' + currentPlayer);
    turns++;

	// Keep track of each player's score
    window[currentPlayer + '_score'] +=  parseInt(event.target.id);

    // Determine if current player position wins
    for (var i = 0; i < win_combinations.length; i += 1) {
            if ((win_combinations[i] & window[currentPlayer + '_score']) === win_combinations[i]) {
                alert(currentPlayer + " wins!");
                location.reload();
                return false;
            }
        };

    if (turns > 8) {
        alert("It's a Tie!");
        location.reload();
        return false;
    }
        // Swap player
    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
});
