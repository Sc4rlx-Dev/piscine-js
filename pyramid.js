function pyramid(c, h) {
    const lines = [];
    const charLen = c.length;
    const b = (h * 2) - 1;
    const t = b * charLen;

    for (let i = 1; i <= h; i++) {
        const num = (i * 2) - 1;
        const w = num * charLen;
        const nb_s = (t - w) / 2;
        const spaces = ' '.repeat(nb_s);
        const chars = c.repeat(num);

        lines.push(spaces + chars);
    }

    return lines.join('\n');
}
