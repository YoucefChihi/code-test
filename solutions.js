export const f1 = (a, b) => {
  let deletions = 0
  let aLetters = {}
  let bLetters = {}

  // count appearences of letters in a
  for (let i = 0; i < a.length; i++) {
    let letter = a[i]
    if (!aLetters[letter]) {
      aLetters[letter] = 1
    } else {
      aLetters[letter]++
    }
  }

  // count appearences of letters in b
  for (let i = 0; i < b.length; i++) {
    let letter = b[i]
    if (!bLetters[letter]) {
      bLetters[letter] = 1
    } else {
      bLetters[letter]++
    }
  }

  // calculate deletions for letters in a found or not in b
  for (const l in aLetters) {
    if (aLetters.hasOwnProperty(l)) {
      const lCountA = aLetters[l]
      if (bLetters[l]) {
        let lCountB = bLetters[l]
        deletions += Math.abs(lCountA - lCountB)
      } else {
        deletions += lCountA
      }
    }
  }

  // calculate deletions for letters in b not found in a
  for (const l in bLetters) {
    if (bLetters.hasOwnProperty(l)) {
      const lCountB = bLetters[l]
      if (!aLetters[l]) {
        deletions += lCountB
      }
    }
  }
  return deletions
}

export const f2 = (a, b) => {
  let count = []
  for (let i = 0; i < b.length; i++) {
    let bElement = b[i]
    let bInA = 0
    for (let j = 0; j < a.length; j++) {
      let aElement = a[j]
      if (bElement === aElement) { bInA++ }
    }
    count.push(bInA)
  }
  return count
}

export const f3 = (a) => {
  let match = a.match(/[a-z0-9-_.]+/gi)
  if (match) {
    let joinedMatch = match.join(' ')
    let validChars = joinedMatch === a
    if (!validChars) return 0
    let parts = joinedMatch.split('.')
    let cleanParts = []
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      if (part !== '') cleanParts.push(part)
    }
    return cleanParts.length
  } else {
    return 0
  }
}

export const f4 = (cb) => {
  this.x = 0
  clearTimeout(this.timeout)
  this.timeout = setTimeout(() => {
    cb()
  }, 300)
}
