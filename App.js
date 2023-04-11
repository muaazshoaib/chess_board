// Muaaz Shoaib
// FA20-BCS-074
// Design a chess board

import { StyleSheet, View } from "react-native";

const BOARD_SIZE = 8;

export default function App() {
  const renderSquare = (row, col) => {
    const isDark = (row + col) % 2 === 1;
    const squareColor = isDark ? "green" : "white";

    return <View style={[styles.square, { backgroundColor: squareColor }]} />;
  };

  const renderRow = (row) => {
    const squares = [];

    for (let col = 0; col < BOARD_SIZE; col++) {
      squares.push(renderSquare(row, col));
    }

    return <View style={styles.row}>{squares}</View>;
  };

  const rows = [];

  for (let row = 0; row < BOARD_SIZE; row++) {
    rows.push(renderRow(row));
  }

  return <View style={styles.board}>{rows}</View>;
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  square: {
    width: 42,
    height: 42,
  },
});
