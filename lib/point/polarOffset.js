module.exports = (p, distance, angle) => {
  // @nudged.point.polarOffset(p, distance, angle)
  //
  // Create a point away from p at the given distance and angle.
  //
  // Parameters
  //   p
  //     a point, the pole.
  //   distance
  //     a number
  //   angle
  //     a number, angle in radians.
  //     The angle *0* corresponds to the positive x-axis and *π/2* to the positive y-axis.
  //
  // Return
  //   a point
  //
  // Example
  // ```
  // > nudged.point.polarOffset({ x: 1, y: 0 }, 5, Math.PI / 2)
  // { x: 1, y: 5 }
  // ```
  //
  return {
    x: p.x + distance * Math.cos(angle),
    y: p.y + distance * Math.sin(angle)
  }
}
