let thisYear = new Date().getFullYear();
let footer = `<footer class="l-footer">
    <button type="button" class="l-footer-pagetop js-pagetop">
      <div class="l-footer-pagetop__trriger">
        <span class="l-footer-pagetop__txt">PAGETOP</span>
        <i class="l-footer-pagetop__ico c-ico-white"><svg viewBox="0 0 8.49 14.14"><polygon points="7.07 5.66 7.07 5.66 1.41 0 0 1.41 5.66 7.07 0 12.73 1.41 14.14 7.07 8.48 8.48 7.07 7.07 5.66"/></svg></i>
      </div>
    </button>
    <small class="l-footer-copyright">Copyright &copy; ${thisYear}.</small>
  </footer>
  <!-- /.l-footer -->`;
document.write(footer);