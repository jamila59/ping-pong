import {Entry} from './ping-pong';
import countVowels from './ping-pong';
import from countConsonants './ping-pong';
import from  getTeaser './ping-pong';
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
    $("#entryDisplay").text(journalEntry.countVowels);
    $("#entryDisplay").text(journalEntry.countConsonants);
    $("#entryDisplay").text(journalEntry.getTeaser);
  });
});
