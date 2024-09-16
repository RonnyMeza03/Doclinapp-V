SELECT Usuarios.id, Usuarios.nombre, Aplicacion.nombre AS nombre_aplicacion
FROM Usuarios
JOIN Aplicacion ON Usuarios.aplicacion_id = Aplicacion.id
WHERE Aplicacion.nombre = 'Invitado';