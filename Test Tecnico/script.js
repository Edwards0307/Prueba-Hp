function cuadroMagico(N) {
  if (N % 2 === 0) {
    console.log("El numero ingresado es PAR");
  } else {
    let cuadrado = [];
    for (let i = 0; i < N; i++) {
      cuadrado[i] = [];
      for (let j = 0; j < N; j++) {
        cuadrado[i][j] = 0;
      }
    }

    let fila = 0;
    let col = Math.floor(N / 2);

    for (let i = 1; i <= N * N; i++) {
      if (cuadrado[fila][col] === 0) {
        cuadrado[fila][col] = i;
      }
      fila--;
      col++;

      if (fila < 0) {
        fila = N - 1;
      }

      if (col >= N) {
        col = 0;
      }

      if (cuadrado[fila][col] !== 0) {
        fila++;
        if (fila >= N) {
          fila = 0;
        }
      }
    }

    console.log(cuadrado);
  }
}

cuadroMagico(5);
