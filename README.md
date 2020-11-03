# Ventunpo-test-back

###Descripcion del proyecto

Login y registro de usuarios, con posterior CRUD de compañias, siempre que el usuario este autenticado por json web tokens (JWT).

Una vez registraro o logueado el usuario la API devuelve un JWT que debe ser almacenado por local storage o session storage y ser enviado en la cabezera de la peticon para tener accedo al CRUD de compañias bajo el nombre authorization

###Inicar proyecto

1. Descargar dependencias
   npm install
2. Iniciar servidor
   npm start

###Tencologias utilizadas

- Express.js
- Json Web Token (JWT)
- MongoDB

####Dependencias

- morgan
- cors
- express-validator
- moongose
- mongoose-unique-validator
- winston
- dotenv
- jwt-simple
- moment

####Dependencias de desarrollo

- nodemon

###Peticiones por Postman:
####Listar empresas:
![](http://imgfz.com/i/xiv63HJ.png)

####Registrar empresa:
![](http://imgfz.com/i/cyMdgLO.png)

####Actualizar empresa:
![](http://imgfz.com/i/5bMZHt8.png)
![](http://imgfz.com/i/uTKlBmG.png)

####Eliminar Empresa:
![](http://imgfz.com/i/CgZ6T3f.png)

####Login:
![](http://imgfz.com/i/wt9Nl3V.png)

####Registro usuario:
![](http://imgfz.com/i/mvfb7Yr.png)

##Fin de la documentacion
