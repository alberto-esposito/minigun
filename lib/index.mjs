<<<<<<< HEAD
import { Worker } from 'worker_threads'


function runService (workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./lib/httpClient.mjs', { workerData })
    worker.on('message', resolve)
    worker.on('error', reject)
    worker.on('exit', (code) => {
      if (code !== 0) { reject(new Error(`Worker stopped with exit code ${code}`)) }
    })
  })
}

async function run () {
  const result = await runService('world')
  console.log(result)
}
=======
import { run } from './mainThread.mjs'
>>>>>>> f70b83cc00aaef86d76ee2af7f3afcad0ee80c2e

run().catch(err => console.error(err))
