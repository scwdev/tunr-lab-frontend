// input should be a string with mm:ss format
const toSeconds = (input) => {
    const [ minutes, seconds ] = input.split(":")
    return (
      (parseInt(minutes) * 60) + parseInt(seconds)
    )
  }
  
  // input should be a whole number of seconds
  const toMinutes = (input) => {
    const seconds = input%60
    const minutes = (input-seconds)/60
    return (
      `${minutes}:${seconds}`
    )
  }