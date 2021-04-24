interface IMatching {
  matching(a: string, b: string): number
}

export class CosineSimilarity implements IMatching {
  termFrequecyMap(str: string): Record<string, number> {
    const words: string[] = str.split(' ')
    const frequency: Record<string, number> = {}

    words.forEach((w) => {
      frequency[w] = (frequency[w] || 0) + 1
    })

    return frequency
  }

  addKeysToDict(
    map: Record<string, number>,
    dict: Record<string, boolean>
  ): void {
    for (const key in map) {
      dict[key] = true
    }
  }

  termFrequencyMapToVector(
    map: Record<string, number>,
    dict: Record<string, boolean>
  ): number[] {
    const vector: number[] = []

    for (const term in dict) {
      vector.push(map[term] || 0)
    }

    return vector
  }

  vectorDotProduct(a: number[], b: number[]): number {
    let product: number = 0

    for (let i = 0; i < a.length; i++) {
      product += a[i] * b[i]
    }

    return product
  }

  vectorMagnitude(vector: number[]): number {
    let sum: number = 0

    for (let i = 0; i < vector.length; i++) {
      sum += vector[i] * vector[i]
    }

    return Math.sqrt(sum)
  }

  matching(a: string, b: string): number {
    const termFrequencyA: Record<string, number> = this.termFrequecyMap(a)
    const termFrequencyB: Record<string, number> = this.termFrequecyMap(b)
    const dict: Record<string, boolean> = {}

    this.addKeysToDict(termFrequencyA, dict)
    this.addKeysToDict(termFrequencyB, dict)

    const termFrequencyVectorA = this.termFrequencyMapToVector(
      termFrequencyA,
      dict
    )
    const termFrequencyVectorB = this.termFrequencyMapToVector(
      termFrequencyB,
      dict
    )

    return (
      this.vectorDotProduct(termFrequencyVectorA, termFrequencyVectorB) /
      (this.vectorMagnitude(termFrequencyVectorA) *
        this.vectorMagnitude(termFrequencyVectorB))
    )
  }
}

export class JaroWrinker implements IMatching {
  matching(a: string, b: string): number {
    let m: number = 0

    // Exit early if either are empty.
    if (a.length === 0 || b.length === 0) return 0

    // Exit early if they're an exact match.
    if (a === b) return 1

    const range = Math.floor(Math.max(a.length, b.length) / 2) - 1
    const matchesA: (number | boolean)[] = [a.length]
    const matchesB: (number | boolean)[] = [b.length]

    for (let i = 0; i < a.length; i++) {
      const low = i >= range ? i - range : 0
      const high = i + range <= b.length ? i + range : b.length - 1

      for (let j = low; j <= high; j++) {
        if (matchesA[i] !== true && matchesB[j] !== true && a[i] === b[j]) {
          ++m
          matchesA[i] = matchesB[j] = true

          break
        }
      }
    }

    // Exit early if no matches were found.
    if (m === 0) return 0

    // Count the transpositions.
    let trans: number = 0
    let k: number = 0

    for (let i: number = 0; i < a.length; i++) {
      if (matchesA[i] === true) {
        let j: number = k

        for (j; j < b.length; j++) {
          if (matchesB[j] === true) {
            k = j + 1

            break
          }
        }

        if (a[i] !== b[j]) ++trans
      }
    }

    let w: number = (m / a.length + m / b.length + (m - trans / 2) / m) / 3
    let l: number = 0
    const p: number = 0.1

    if (w > 0.7) {
      while (a[l] === b[l] && l < 4) {
        ++l
      }

      w = w + l * p * (1 - w)
    }

    return w
  }
}
