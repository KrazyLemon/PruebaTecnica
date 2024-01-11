CREATE DATABASE IF NOT EXISTS 'BANCO' /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `BANCO`;

CREATE TABLE cliente(
  idCliente int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(255) NOT NULL,
  aPaterno varchar(255) NOT NULL,
  aMaterno varchar(255) NOT NULL,
  edad INT NOT NULL,
  sexo varchar(1) NOT NULL, -- M = Masculino, F = Femenino
  email varchar(255) NOT NULL,
  curp varchar(18) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE cuentas (
  idCuenta int(11) NOT NULL AUTO_INCREMENT,
  idCliente int(11) NOT NULL,
  numeroCuenta varchar(16) NOT NULL,
  saldo DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (idCliente) REFERENCES cliente(idCliente),
  PRIMARY KEY (idCuenta)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO cliente (nombre, aPaterno, aMaterno, edad, sexo, email, curp)
VALUES ('John', 'Doe', 'Smith', 30, 'M', 'john.doe@example.com', 'curp123456789');

INSERT INTO cliente (nombre, aPaterno, aMaterno, edad, sexo, email, curp)
VALUES ('Jane', 'Smith', 'Doe', 28, 'F', 'jane.smith@example.com', 'curp987654321');
INSERT INTO cuentas (idCliente,numeroCuenta,saldo)
VALUES (1, '0987654321098765', 1000.00);

{
  "cliente": [
    {
      "nombre": "John",
      "aPaterno": "Doe",
      "aMaterno": "Smith",
      "edad": 30,
      "sexo": "M",
      "email": "john.doe@example.com",
      "curp": "curp123456789"
    },
    {
      "nombre": "Jane",
      "aPaterno": "Smith",
      "aMaterno": "Doe",
      "edad": 28,
      "sexo": "F",
      "email": "jane.smith@example.com",
      "curp": "curp987654321"
    }
  ],
  "cuentas": [
    {
      "idCliente": 1,
      "NUMERO_CUENTA": "0987654321098765",
      "SALDO": 1000.00
    }
  ]
}

INSERT INTO cliente (nombre, aPaterno, aMaterno, edad, sexo, email, curp)
VALUES ('John', 'Doe', 'Smith', 30, 'M', 'john.doe@example.com', 'curp123456789');

INSERT INTO cliente (nombre, aPaterno, aMaterno, edad, sexo, email, curp)
VALUES ('Jane', 'Smith', 'Doe', 28, 'F', 'jane.smith@example.com', 'curp987654321');

INSERT INTO cliente (nombre, aPaterno, aMaterno, edad, sexo, email, curp)
VALUES ('Michael', 'Johnson', 'Brown', 35, 'M', 'michael.johnson@example.com', 'curp456789123');

INSERT INTO cliente (nombre, aPaterno, aMaterno, edad, sexo, email, curp)
VALUES ('Emily', 'Davis', 'Wilson', 32, 'F', 'emily.davis@example.com', 'curp789123456');

INSERT INTO cliente (nombre, aPaterno, aMaterno, edad, sexo, email, curp)
VALUES ('David', 'Anderson', 'Taylor', 40, 'M', 'david.anderson@example.com', 'curp321654987');

INSERT INTO cliente (nombre, aPaterno, aMaterno, edad, sexo, email, curp)
VALUES ('Sophia', 'Martinez', 'Hernandez', 27, 'F', 'sophia.martinez@example.com', 'curp654987321');

INSERT INTO cliente (nombre, aPaterno, aMaterno, edad, sexo, email, curp)
VALUES ('Daniel', 'Garcia', 'Lopez', 33, 'M', 'daniel.garcia@example.com', 'curp987321654');

INSERT INTO cliente (nombre, aPaterno, aMaterno, edad, sexo, email, curp)
VALUES ('Olivia', 'Rodriguez', 'Gonzalez', 29, 'F', 'olivia.rodriguez@example.com', 'curp321987654');

INSERT INTO cliente (nombre, aPaterno, aMaterno, edad, sexo, email, curp)
VALUES ('Ethan', 'Hernandez', 'Sanchez', 37, 'M', 'ethan.hernandez@example.com', 'curp654321987');

INSERT INTO cliente (nombre, aPaterno, aMaterno, edad, sexo, email, curp)
VALUES ('Ava', 'Lopez', 'Gomez', 31, 'F', 'ava.lopez@example.com', 'curp987654321');

SELECT c.idCliente, c.nombre, c.aPaterno, c.aMaterno, c.edad, c.sexo, c.email, c.curp, cu.numeroCuenta, cu.saldo
FROM cliente c
INNER JOIN cuentas cu ON c.idCliente = cu.idCliente;
