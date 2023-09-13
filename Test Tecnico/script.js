function cuadroMagico(N) {
  // Creamos un arreglo vacío de tamaño NxN relleno de 0
  let cuadrado = [];
  for (let i = 0; i < N; i++) {
    cuadrado[i] = [];
    for (let j = 0; j < N; j++) {
      cuadrado[i][j] = 0;
    }
  }

  // Iniciamos en la fila superior, la columna central con el numero 1
  let fila = 0;
  let col = Math.floor(N / 2);
  let num = 1;

  // Mientras el numero sea menor o igual al cuadro esto se sigue ejecutando
  while (num <= N * N) {
    // Colocamos un numero en la celda actual
    cuadrado[fila][col] = num;

    // Incrementamos el número
    num++;

    // Calcular la siguiente posición
    let filaSig = (fila - 1 + N) % N;
    let colSig = (col + 1) % N;

    // Verificar si la celda tiene un numero diferente a cero
    if (cuadrado[filaSig][colSig] != 0) {
      // Usar la celda de la fila que está debajo
      filaSig = (fila + 1) % N;
      colSig = col;
    }

    // Actualizar la posición actual
    fila = filaSig;
    col = colSig;
  }

  // Mostrar el cuadrado resultante
  console.log(cuadrado);
}

cuadroMagico(5);
