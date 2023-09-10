// * upload file
// * convert bytes to KB/MB
//============================================================================================
$(function(){
  var $fileListTemplate = $('#fileListTemplate'),
      $fileElemTemplate = $('#fileElemTemplate'),
      $fileList = $('#fileList'),
      $fileField = $('.file-field__label');

  /**
   * upload again
   */
  $(document).on('change', '#fileElem', handleFiles);

  $(document).on('click', '.file-field__remove', function(){
    $(this).parent().remove();
  });

  $fileField.append($fileElemTemplate.text());

  /**
   * create thumbnail
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

      //
      var permit_type = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp'];
      if (fileprop && permit_type.indexOf(fileprop.type) == -1) {
        alert('There are some errors.');
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

