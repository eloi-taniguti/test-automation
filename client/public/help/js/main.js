$(function() {
  // Enable search
  if($('#search-input').length != 0) {
    SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/help/search.json',
      searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
      noResultsText: '<li class="no-results">No Results</li>'
    });

    $('#search-input').blur(function(){
      var _t = $(this);
      if(_t.val() == '') {
        $('#results-container').html('');
      }
    });
  }

  // Show List of Topics on pages with h2 elements
  if( ($('h2').length != 0) && ($('.masthead').length == 0) ) {
    var html = '<h3>List of topics:</h3><ul>';

    $('h2').each(function(){
      var _t = $(this);
      html += '<li><a href="#'+ _t.attr('id') +'">'+ _t.text() +'</a></li>';
    });

    html += '</ul>';

    $('h1').after(html);
  }

  // Show year in footer
  $('#year').text( new Date().getFullYear() );
});
