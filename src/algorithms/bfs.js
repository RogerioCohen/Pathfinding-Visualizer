

var Queue = require('@btmills/queue')


function bfs(idBeginning, idEnd, matrix){
    let ibeg, jbeg, iend, jend;
    ibeg = Number(idBeginning.split('-')[0])
    jbeg = Number(idBeginning.split('-')[1])
    iend = Number(idEnd.split('-')[0])
    jend = Number(idEnd.split('-')[1])

    function valid(i, j){
      if(i >= 31 || i < 0) return false
      if(j >= 61 || j < 0) return false
      if(seen[i][j]) return false
      if(matrix[i][j] === 'wall') return false
      return true
    } 
    let seen = []
    for(let i = 0; i <= 30; i++){
      seen[i] = new Array(61)
    }
    const diri = [0, 1, 0, -1]
    const dirj = [1, 0, -1, 0]
    let visitList = []
    let queue = new Queue()

    queue.enqueue([ibeg, jbeg])
    while(queue.length > 0){
      let iFirst = queue.peek()[0]
      let jFirst = queue.peek()[1]
      queue.dequeue()
      
      //console.log(`${iFirst}-${jFirst} to ${iend}-${jend}`)
      if(iFirst === iend && jFirst === jend){
          return visitList
      }
      let visitInTheIteration = []

      for(let dir = 0; dir < 4; dir++){
        let newDiri = iFirst + diri[dir]
        let newDirj = jFirst + dirj[dir]

        if(valid(newDiri, newDirj)){
          seen[newDiri][newDirj] = true
          queue.enqueue([newDiri, newDirj])
          visitInTheIteration.push(`${newDiri}-${newDirj}`)
          
        }
      }
      visitList.push(visitInTheIteration)

    }
    return visitList
}


export default bfs


