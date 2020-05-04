$('body')
  .append('<button id="test_btn">Test</button>')

$('head').append(`<style>
* {
  box-sizing: border-box;
}
#test_btn {
  position: fixed;
  left: 10px;
  bottom: 10px;
}
</style>`);

$('#test_btn')
  .on('mouseover',function() {
    $('body').addClass('debug');
  })
  .on('mouseout', function() {
    $('body').removeClass('debug');
  });
