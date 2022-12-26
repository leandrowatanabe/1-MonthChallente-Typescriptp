export default function diagonalDifference(arr: number[][]): number {
  // Write your code here
  const mainDiagonal = arr.map((arrayElement, arrayIndex) =>  arrayElement[arrayIndex]).reduce((element, current) => element + current, 0 )
  const secondDiagonal = arr.map((arrayElement, arrayIndex) =>  {
    let index = arr.length - arrayIndex - 1
    return arrayElement[index]
  }).reduce((element, current) => element + current, 0)
  
  return (Math.abs(mainDiagonal - secondDiagonal))
}
