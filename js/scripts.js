$( document ).ready(function() {
    initSourceEditor();

    $('#sm').click(testServerMessage);
    $('#cm').click(testClientMessage);

    document.addEventListener('DOMContentLoaded', function () {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
});
});

// Setup application

function initSourceEditor() {
    var editor = ace.edit("editorScreen");

    // https://github.com/ajaxorg/ace/tree/master/lib/ace/theme
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
    editor.setShowPrintMargin(false);
    editor.setValue('function foo(items) { var x = "All this is syntax highlighted"; return x;}');

    setChatAndCodeContainers();
}

function setChatAndCodeContainers() {
    var codeConWidth = $("#editorScreen").width() + 30;
    console.log("Code Container Width:" + codeConWidth);
    $("#messageScreen").css('margin-left',codeConWidth +'px');
    // $("#messageScreen").width(chatScreenWidth);
}

// Message Sending Tests

function testServerMessage(){
var messageHead = '<div class="col-md-12 focus1 messageHolder">';
var messageContent = 'message content';
var messageTail = '</div>';

$('#conversation').append(messageHead + messageContent + messageTail);
}

function testClientMessage(){
    if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Notification title', {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: "Hey there! You've been notified!",
    });

    notification.onclick = function () {
      window.open("http://stackoverflow.com/a/13328397/1269037");      
    };

  }
}