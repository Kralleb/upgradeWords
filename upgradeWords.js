// Big huge labs API Key 009d95b324a99bfcbbd5bf9574f8e2e6 .
let textResultsDiv = document.getElementById( 'textResults' );
let word;
$( "#wordInput" ).keypress(function( event ) {
  if ( event.which === 13 ) {
     word = document.getElementById( 'wordInput' ).value;
    let nounHtml = '<h2 class="text-center">Nouns</h2>';
    let verbHtml = '<h2 class="text-center">Verbs</h2>';
    let url = 'http://words.bighugelabs.com/api/2/009d95b324a99bfcbbd5bf9574f8e2e6/' + word + '/json';
    $.getJSON( url, function(synonyms) {
        let nounSyn = synonyms.noun.syn;
        let verbSyn = synonyms.verb.syn;
        for( let i  = 0; i < nounSyn.length; i++ ) {
        nounHtml += '<div class="divResultsAttribs text-center"><p class="pResultsAttribs">' + nounSyn[i] + '</p></div>';
        }
        for( let i = 0; i < verbSyn.length; i++ ) {
        verbHtml += '<div class="divResultsAttribs text-center"><p class="pResultsAttribs">' + verbSyn[i] + '</p></div>';
        }
        textResultsDiv.innerHTML = nounHtml + verbHtml;
    }); //end of getJSON
   } // end of event function
}) //end of keypress