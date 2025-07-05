const defaultCurry = (o1) => (o2) => ({
  ...o1,
  ...o2,
})

const mapCurry = (fn) => (o) => { return Object.fromEntries(Object.entries(o).map(fn)) }
const reduceCurry = (fn) => (o, init) => { return Object.entries(o).reduce(fn, init) }
const filterCurry = (fn) => (o) => { return Object.fromEntries(Object.entries(o).filter(fn)) }

const reduceScore = (personnel, init = 0) => {
  const filterF = filterCurry(([, v]) => v.isForceUser)
  const reducer = (acc, [, v]) => { return acc + v.pilotingScore + v.shootingScore }
  const fUsers = filterF(personnel)
  return reduceCurry(reducer)(fUsers, init)
}

const filterForce = (personnel) => {
  const filterHS = filterCurry(([k, v]) => v.isForceUser && v.shootingScore >= 80)
  return filterHS(personnel)
}

const mapAverage = (personnel) => {
  const addAvg = mapCurry(([k, v]) => {
    const avg = (v.pilotingScore + v.shootingScore) / 2
    return [k, { ...v, averageScore: avg }]
  })
  return addAvg(personnel)
}


// const personnel = {
//   lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//   sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//   zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//   ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//   calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// }


// console.log("--- reduceScore ---")
// console.log(reduceScore(personnel))

// console.log("\n--- filterForce ---")
// console.log(filterForce(personnel))

// console.log("\n--- mapAverage ---")
// console.log(mapAverage(personnel))
