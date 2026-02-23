CREATE DATABASE IF NOT EXISTS danonepapelaria;
USE danonepapelaria;

CREATE TABLE produtos (
    id CHAR(36) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    categoria VARCHAR(100),
    imagemUrl VARCHAR(500),
    estoque INT NOT NULL DEFAULT 0,
    preco DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    PRIMARY KEY (id)
);

CREATE TABLE usuario (
    id CHAR(36) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senhaHash VARCHAR(255) NOT NULL,
    perfilAdmin BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
);

CREATE TABLE carrinho (
    id CHAR(36) NOT NULL,
    idUsuario CHAR(36) NOT NULL,
    
    PRIMARY KEY (id),
    
    CONSTRAINT fk_carrinho_usuario
        FOREIGN KEY (idUsuario)
        REFERENCES usuario(id)
        ON DELETE CASCADE
);

CREATE TABLE carrinhoItem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idCarrinho CHAR(36) NOT NULL,
    idProduto CHAR(36) NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    
    CONSTRAINT fk_item_carrinho
        FOREIGN KEY (idCarrinho)
        REFERENCES carrinho(id)
        ON DELETE CASCADE,
        
    CONSTRAINT fk_item_produto
        FOREIGN KEY (idProduto)
        REFERENCES produtos(id)
        ON DELETE CASCADE
);

CREATE TABLE faqPergunta (
    id CHAR(36) NOT NULL DEFAULT (UUID()),
    pergunta VARCHAR(500) NOT NULL,
    resposta TEXT NOT NULL,
    
    PRIMARY KEY (id)
);

CREATE TABLE feedback (
    id CHAR(36) NOT NULL DEFAULT (UUID()),
    idUsuario CHAR(36) NOT NULL,
    mensagem TEXT NOT NULL,
    nota INT CHECK (nota BETWEEN 1 AND 5),
    dataCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    respondido BOOLEAN NOT NULL DEFAULT FALSE,
    
    PRIMARY KEY (id),
    
    CONSTRAINT fk_feedback_usuario
        FOREIGN KEY (idUsuario)
        REFERENCES usuario(id)
        ON DELETE CASCADE
);

CREATE TABLE EmailContato (
    id CHAR(36) NOT NULL DEFAULT (UUID()),
    email VARCHAR(255) NOT NULL UNIQUE,
    
    PRIMARY KEY (id)
);

