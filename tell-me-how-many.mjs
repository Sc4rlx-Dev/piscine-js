import fs from 'node:fs/promises';

(async () => {
    try {
        const files = await fs.readdir(process.argv[2])
        console.log(files.length)
    } catch (error) {
        console.log('error')
    }
})()
