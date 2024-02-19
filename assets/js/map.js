//Map Pin Change Js
$(document).ready(function () {
  if (window.screen.width > 639) {
    var $map = $('#africa .location-map svg g').click(function () {
      var $mapid = this.id;
      if (this.id == 'contry') {
        $('#africa .location-map .contry').addClass('active');
        var $el23 = $('#africa .location-map > .' + this.id);
        $('#africa .location-map .contry').not($el23).addClass('active');
      } else {
        var $el23 = $('#africa .location-map > .' + this.id).addClass('active');
        $('#africa .location-map .contry').not($el23).addClass('active');
      }

      $map.parent().parent().find('.contry_detail' + "#" + $mapid).addClass('active');

      $map.parent().parent().find('.contry_detail' + "#" + $mapid).siblings().removeClass('active')

      $map.parent().parent().find('.contry_detail' + "#" + $mapid).closest('.location-map').removeClass('active')

      $map.removeClass('active');
      $(this).addClass('active');
    });
  }
});