# Mini-Aplicación de Usuarios - Concept BPO

## Decisiones de diseño

- Se utilizó PHP como backend únicamente para servir el HTML.
- Se integró Bootstrap para estilos rápidos, modales y responsividad.
- El consumo de la API y lógica de interacción se manejó con JavaScript Vanila.
- Los favoritos se hacen usando `localStorage` ya que esto.

## Diseño de Base de Datos para "Favoritos"

Si se utilizara una base de datos real (por ejemplo, MySQL):

### Tabla: `favoritos`
| Campo       | Tipo         | Descripción                         |
|-------------|--------------|-------------------------------------|
| id          | INT, PK      | Clave primaria autoincremental      |
| user_id     | INT          | ID del usuario marcado como favorito|
| marked_at   | TIMESTAMP    | Fecha y hora de marcado             |

- `user_id` podría ser FK a una tabla `users` local.
- También se puede agregar `session_id` o `user_ip` para identificar usuarios anónimos.


Si se utilizara una base de datos real (por ejemplo, PostgreSQL):
-------------------------------------------------------------------------------------------
| Campo       | Tipo                                | Descripción                         |
|-------------|-------------------------------------|-------------------------------------|
| id          | SERIAL PRIMARY KEY                  | Clave primaria autoincremental      |
| user_id     | INT                                 | ID del usuario marcado como favorito|
| marked_at   | TIMESTAMP DEFAULT CURRENT_TIMESTAMP | Fecha y hora de marcado             |
| session_id  | VARCHAR(255)                        | (Opcional) ID de sesión anónima     |
| user_ip     | INET                                | (Opcional) Dirección IP del usuario |
-------------------------------------------------------------------------------------------

