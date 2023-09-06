// * upload file
// * convert bytes to KB/MB
//============================================================================================
$(function(){
  var $fileListTemplate = $('#fileListTemplate'),
      $fileElemTemplate = $('#fileElemTemplate'),
      $fileList = $('#fileList'),
      $fileField = $('.file-field__label');

  /**
   * 初期化関連
   */
  $(document).on('change', '#fileElem', handleFiles);

  $(document).on('click', '.file-field__remove', function(){
    $(this).parent().remove();
  });

  $fileField.append($fileElemTemplate.text());

  /**
   * イベント系
   */
  function handleFiles() {
    try{
      var fileprop = $(this).prop('files')[0],
      find_img = $(this).parent().prev('img'),
      fileRdr = new FileReader();

      if (find_img.length) {
        find_img.prevAll().remove();
        find_img.remove();
      }

      // 指定の拡張子以外の場合はアラート
      var permit_type = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp'];
      if (fileprop && permit_type.indexOf(fileprop.type) == -1) {
        alert('この形式のファイルはアップロードできません');
        $(this).val('');
        return
      }

      fileRdr.onload = function () {
        var img = '<img alt="" class="img_view">';
        $li = $($fileListTemplate.text());
        $fileList.append($li);
        
        $li.find('.file-field__filethumb').prepend(img);
        $li.find('.file-field__filethumb').children('img').attr('src', fileRdr.result);
      }
      fileRdr.readAsDataURL(fileprop);
    } catch (e) {}
  }

});

