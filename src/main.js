import { pingPong } from './ping-pong';
import './styles.css';

$(document).ready(function() {
	$('#ping-pong-form').submit(function(e) {
		e.preventDefault();
		const goal = $('#goal').val();
		const output = pingPong(goal);
		output.forEach(function(element) {
			$('#solution').append(`<li> ${element} </li>`);
		});
	});
});
