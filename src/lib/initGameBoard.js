import { reactive } from 'vue'

function InitGameBoard() {
  return reactive([
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ])
}

function InitGameBoard2() {
  return reactive([
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'],
    ['A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A'],
    ['A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A'],
    ['A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A'],
    ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A']
  ])
}

export { InitGameBoard, InitGameBoard2 }
