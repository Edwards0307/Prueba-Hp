# Recomendaciones para probar el backend

1.- Crear una base de datos con el nombre de su preferencia

2.- Crear un archivo .env que va contener lo siguiente:

PORT = Aqui va el puerto que quieras usar puede ser 8001

DB_NAME = Aqui va el nombre de la base de datos que creaste

DB_USER = Aqui va el nombre del usuario de la base de datos por default es postgres

DB_PASSWORD = Aqui va la contraseña que tienes en tu postgres

DB_HOST = Aqui va donde se va levantar este servicio si se hace local entonces seria localhost

DB_PORT = aqui va el puerto que va usar la base de datos por default es 5432

3.- Para hacer peticiones al Backend se pueden probar con las siguientes rutas (Recordar esta conectado a la base de datos)

http://localhost:8001/pokemons (Esta trae todos los Pokemon) GET

http://localhost:8001/pokemons/4 (Esta trae un pokemon por id) GET

http://localhost:8001/types (Esta trae los tipos de pokemon) GET

http://localhost:8001/pokemons?name=pikachu (Esta busca por nombre) GET

http://localhost:8001/pokemons (Esta para crear un pokemon) POST

Se debe enviar por body la informacion del pokemon a crear por ejemplo:

{
  "Nombre": "Edwards",
  "Vida": "50",
  "Ataque": "20",
  "Defensa": "32",
  "Velocidad": "25",
  "Altura": "11",
  "Peso": "52",
  "Tipo": ["water"]
} 





