function formatTime(sec) {
  let minutes = parseInt(sec / 60, 10)
  let seconds = parseInt(sec % 60, 10)
  return `${leftPad(minutes.toString())}:${leftPad(seconds.toString())}`
}

function leftPad(number) {
  const pad = '00'
  return pad.substring(0, pad.length - number.length) + number
}
export default formatTime
