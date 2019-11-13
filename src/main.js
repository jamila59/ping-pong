import {Entry} from './ping-pong';
import './styles.css';

$(document).ready(function() {
  $(".formOne").submit(function(event) {
    event.preventDefault();

    var journalInput = $("input#journalInput").val().split(" ");
    var titleInput = $("input#titleInput").val();
    var journalEntry = new Entry(titleInput, journalInput);

    journalEntry.countVowels(journalInput);
    journalEntry.countConsonants(journalInput);
    journalEntry.getTeaser(journalInput);

    $("#titleDisplay").text("Hello");
    $("#entryDisplay").text("Hello");
  });
});
