const getPersistence = (data, valueField, diedIndex, bornIndex) => diedIndex === undefined
  ? Infinity
  : data[bornIndex][valueField] - data[diedIndex][valueField]

const getPersistentHomology = (seq, field) => {
  let peaks = []
  // Maps indices to peaks
  let idxtopeak = Array(seq.length).fill(undefined)
  // Sequence indices sorted by values
  let indices = [...Array(seq.length).keys()]
  indices.sort((a, b) => seq[b][field] - seq[a][field])

  // Process each sample in descending order
  for (let idx of indices) {
    let lftdone = ((idx > 0) && (idxtopeak[idx - 1] !== undefined))
    let rgtdone = ((idx < seq.length - 1) && (idxtopeak[idx + 1] !== undefined))
    let il = lftdone
      ? idxtopeak[idx - 1]
      : undefined
    let ir = rgtdone
      ? idxtopeak[idx + 1]
      : undefined

    // New peak born
    if (!lftdone && !rgtdone) {
      peaks.push({
        field,
        index: idx,
        born: idx,
        left: idx,
        right: idx,
        died: undefined,
      })
      idxtopeak[idx] = peaks.length - 1
    }

    // Directly merge to next peak left
    if (lftdone && !rgtdone) {
      peaks[il].right += 1
      idxtopeak[idx] = il
    }

    // Directly merge to next peak right
    if (!lftdone && rgtdone) {
      peaks[ir].left -= 1
      idxtopeak[idx] = ir
    }

    // Merge left and right peaks
    if (lftdone && rgtdone) {
      // Left was born earlier: merge right to left
      if (seq[peaks[il].born][field] > seq[peaks[ir].born][field]) {
        peaks[ir].died = idx
        peaks[il].right = peaks[ir].right
        idxtopeak[peaks[il].right] = idxtopeak[idx] = il
      } else {
        peaks[il].died = idx
        peaks[ir].left = peaks[il].left
        idxtopeak[peaks[ir].left] = idxtopeak[idx] = ir
      }
    }
  }
  return peaks.map(p => ({
                           ...seq[p.index],
                           index: p.index,
                           persistence: getPersistence(seq, field, p.died, p.born)
                         }))
              .sort((a, b) => b.persistence - a.persistence)
}

export const getPeaks = (data, fields) => fields.flatMap(f => getPersistentHomology(data, f))
