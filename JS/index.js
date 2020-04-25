  document.addEventListener('DOMContentLoaded', function () {
    // var elems = document.querySelectorAll('.parallax');
    // var instances = M.Parallax.init(elems);
    M.AutoInit();
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'right'
    });
  });