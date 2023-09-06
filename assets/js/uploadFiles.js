// * upload file
// * convert bytes to KB/MB
//============================================================================================
$(function(){
  var $fileListTemplate = $('#fileListTemplate'),
      $fileElemTemplate = $('#fileElemTemplate'),
      $fileList = $('#fileList'),
      $fileField = $('.file-field__label');

  /**
   * Init file
   */
  $(document).on('change', '#fileElem', handleFiles);

  $(document).on('click', '.file-field__remove', function(){
    $(this).parent().remove();
  });

  $fileField.append($fileElemTemplate.text());


  /**
   * event file
   */
  function handleFiles() {
    var fd = new FormData();
    for (let i = 0; i < this.files.length; i++) {
      $li = $($fileListTemplate.text());
      $fileList.append($li);

      let _name = this.files[i].name;
      let _ext = _name.substr(_name.lastIndexOf('.') + 1);

      $li.find('.file-field__fileicon').addClass('icon-' + _ext);
      $li.find('.file-field__filetext').text(_name);
      $li.find('.file_size').val(convertFileSize(this.files[i].size));
      $li.find('.file-field__filesize').text(convertFileSize(this.files[i].size));

      fd.append("resume[]", this.files[i]);
    }
  }
});

const convertFileSize = function($size) {
  var convertSizeKB = parseFloat($size / Math.pow(1024,1)).toFixed(3);
  var convertSizeMB = parseFloat($size / Math.pow(1024,2)).toFixed(3);
  var convertSizeGB = parseFloat($size / Math.pow(1024,3)).toFixed(3);

  var returnSizeKB = convertSizeKB + 'KB';
  var returnSizeMB = convertSizeMB + 'MB';

  if (convertSizeMB > 1) {
    return returnSizeMB;
  } else {
    return returnSizeKB;
  }
}
