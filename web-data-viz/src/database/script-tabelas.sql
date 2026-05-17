CREATE DATABASE parfumLab;
USE parfumLab;

CREATE TABLE Perfume (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL
);


CREATE TABLE Usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
email VARCHAR(50) UNIQUE NOT NULL, 
senha VARCHAR(255) NOT NULL,     
fkPerfumeFavorito INT,            
FOREIGN KEY (fkPerfumeFavorito) REFERENCES Perfume(id)
);


CREATE TABLE Avaliacao (
id INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT NOT NULL,
fkPerfume INT NOT NULL,
qtdEstrela INT NOT NULL CHECK (qtdEstrela >= 0 AND qtdEstrela <= 5), 
descricao VARCHAR(400),
dataAvaliacao DATETIME DEFAULT CURRENT_TIMESTAMP, 
FOREIGN KEY (fkUsuario) REFERENCES Usuario(id),
FOREIGN KEY (fkPerfume) REFERENCES Perfume(id)
);


INSERT INTO Perfume (nome) VALUES 
('Sauvage Dior Eau de Parfum'),
('Yves Saint Laurent Le Parfum'),
('Egeo Bomb Black'),
('Jean Paul Gaultier Le Male');


INSERT INTO Usuario (nome, email, senha, fkPerfumeFavorito) VALUES 
('Gustavo', 'gustavo@email.com', 'senha123', 1);


INSERT INTO Avaliacao (fkUsuario, fkPerfume, qtdEstrela, descricao) VALUES 
(1, 3, 5, 'Fragrância incrível e ótima durabilidade!');


SELECT * FROM Perfume;
SELECT * FROM Usuario;
SELECT * FROM Avaliacao;


SELECT 
u.nome AS 'Usuário',
p.nome AS 'Perfume Avaliado',
a.qtdEstrela AS 'Estrelas',
a.descricao AS 'Comentário'
FROM Avaliacao a
JOIN Usuario u ON a.fkUsuario = u.id
JOIN Perfume p ON a.fkPerfume = p.id;


SELECT * FROM Usuario;

TRUNCATE TABLE Avaliacao;



