// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

(function(){
  "use strict";

  $(function() {
    bindSubmit();
  });

  function bindSubmit() {
    $('#form-tweet').on('submit', function(event){
      event.preventDefault();
      var info = $('#tweet-text').val();
      var userId = $('#user-id').val();

      tweet(info, userId);

    });
  }

  function tweet(info, userId){
    var url = '/posts'
    var data = {
      content: info,
      user_id: userId

    };

    var postInfo = {
      dataType: 'json',
      url: url,
      data: JSON.stringify(data),
      success: addTweet,
      contentType: 'application/json'

    };

    $.post(postInfo);
  }

  function addTweet(result){
    // TODO: refresh tweet;
    $('.media').prepend('<a class="pull-left" href="#"><img class="media-object" src="http://placehold.it/64x64" alt=""></a><div class="media-body"><h4 class="media-heading"><small>August 25, 2014 at 9:30 PM</small></h4><p class="tweet_content"></p></div><hr>');
  }

})();
