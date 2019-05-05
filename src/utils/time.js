function getTime (tarTime) {
  var tarDate = new Date(tarTime)
  var nowDate = new Date()
  //   相差的总秒数
  var totalSeconds = parseInt((tarDate - nowDate) / 1000)
  //   小时
  var hours = Math.floor(totalSeconds / (60 * 60))
  //   获取剩余秒数
  var modulo = totalSeconds % (60 * 60)
  //  分钟
  var minutes = Math.floor(modulo / 60)
  modulo = modulo % 60
  // 秒
  var seconds = Math.floor(modulo)

  return {
    'hours': hours < 10 ? ('0' + hours) : hours,
    'minutes': minutes < 10 ? ('0' + minutes) : minutes,
    'seconds': seconds < 10 ? ('0' + seconds) : seconds
  }
}

export default getTime
