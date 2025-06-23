function triangle(c, h) {
  const lines = []
  for (let i = 1; i <= h; i++) {
    lines.push(c.repeat(i))
  }
  return lines.join('\n')
}
