

var currentPlayer = 'x';
var x_score = 0;
var o_score = 0;
var win_combinations = [7, 56, 448, 73, 146, 292, 273, 84];

// Alternate players and draw shape
$('#board').on('click', '.cell', function() {
	var $current_cell = $(event.target);
	$current_cell.addClass('cell-' + currentPlayer);

	// Keep track of each player's score
    window[currentPlayer + '_score'] +=  parseInt(event.target.id);

    // Determine if current player position wins
    for (var i = 0; i < win_combinations.length; i += 1) {
            if ((win_combinations[i] & window[currentPlayer + '_score']) === win_combinations[i]) {
                alert(currentPlayer + " wins!");
                location.reload();
            }
        };

    // Swap player
	currentPlayer = currentPlayer === 'x' ? 'o' : 'x';

});
