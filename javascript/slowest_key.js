var slowestKey = function (releaseTimes, keysPressed) {
  let output = keysPressed[0]
  let maxDiff = releaseTimes[0]

  for (let i = 1; i < releaseTimes.length; i++) {
    let diff = releaseTimes[i] - releaseTimes[i - 1]

    if (diff > maxDiff) {
      output = keysPressed[i]
      maxDiff = diff
    } else if (diff === maxDiff) {
      if (keysPressed[i] > output) {
        output = keysPressed[i]
        maxDiff = diff
      }
    }
  }

  return output
}
