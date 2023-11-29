export function generateFakeCardFunction(number: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < number; i++) {
      indexes.push(i);
    }
    return indexes;
  }
