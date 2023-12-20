<template>
  <div class="game-board">
    <div class="board-row" v-for="(row, index) in GameBoard" :key="index">
      <div
        class="board-cell"
        :class="{ 'cell-empty': cell == 0, 'cell-wall': cell == 1 }"
        v-for="(cell, index) in row"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { InitGameBoard } from '@/lib/initGameBoard.js'

const GameBoard = InitGameBoard()
</script>

<style>
.game-board {
  display: inline-block;
  border-left: 1px solid black;
  border-top: 1px solid black;
}

.board-row {
  margin: 0;
  padding: 0;
  height: 21px;
}

.board-cell {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

.cell-empty {
  background-color: #f9f9f9;
}

.cell-wall {
  background-color: rgba(255, 111, 0, 0.774);
}
</style>
