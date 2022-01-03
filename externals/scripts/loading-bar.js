$(function () {
  prettyPrint()
  function resetToDefaults() {
    topbar.config({
      autoRun: true,
      barThickness: 6,
      barColors: {
        '0': 'rgba(33, 168, 33, 1)',
        '.25': 'rgba(33, 168, 33, 1)',
        '.50': 'rgba(33, 168, 33, 1)',
        '.75': 'rgba(33, 168, 33, 1)',
        '1.0': 'rgba(33, 168, 33, 1)'
      },
      shadowBlur: 10,
      shadowColor: 'rgba(0,   0,   0,   .6)',
      className: 'topbar'
    })
  }

  resetToDefaults()
  topbar.show()
  setTimeout(function () {
    $('#main_content').fadeIn('slow')
    topbar.hide()
  }, 1500)

  // Simple Demo
  $('#btnStartSimple').click(function () {
    resetToDefaults()
    topbar.show()
  })
  $('#btnStopSimple').click(function () {
    topbar.hide()
  })

})