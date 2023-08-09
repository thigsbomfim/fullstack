DROP DATABASE IF EXISTS resonance_ink;

CREATE DATABASE resonance_ink;
USE resonance_ink;

-- Criação da tabela "Cliente"
CREATE TABLE clientes (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE,
    genero ENUM('Masculino', 'Feminino', 'Outro'),
    endereco VARCHAR(200),
    email VARCHAR(100),
    numero_telefone VARCHAR(20),
    status ENUM('off', 'on', 'del') DEFAULT 'on',
    date_created DATETIME  DEFAULT NOW(),
    date_updated DATETIME,
    date_deleted DATETIME
);

-- Criação da tabela "imagens"
CREATE TABLE imagens (
	ID INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(200) DEFAULT "user.png",
    name_hash VARCHAR(200) DEFAULT "user.png",
    size INT,
    url VARCHAR(255),
    cliente_ID INT,
    date_created DATETIME DEFAULT NOW(),
    FOREIGN KEY (cliente_ID) REFERENCES clientes(ID)
);

-- Criação da tabela "Tatuador"
CREATE TABLE tatuadores (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE,
    genero ENUM('Masculino', 'Feminino', 'Outro'),
    especialidade VARCHAR(100),
    contato VARCHAR(100),
    horario_trabalho VARCHAR(100)
);

-- Criação da tabela "Tatuagem"
CREATE TABLE tatuagens (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    titulo_descricao VARCHAR(200) NOT NULL,
    tamanho VARCHAR(50),
    estilo VARCHAR(100),
    data_realizacao DATE,
    preco DECIMAL(10, 2),
    cliente_ID INT,
    tatuador_ID INT,
    FOREIGN KEY (cliente_ID) REFERENCES clientes(ID),
    FOREIGN KEY (tatuador_ID) REFERENCES tatuadores(ID)
);

-- Criação da tabela "Agendamento"
CREATE TABLE agendamentos (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    data_hora_agendamento DATETIME,
    cliente_ID INT,
    tatuador_ID INT,
    status VARCHAR(20),
    FOREIGN KEY (cliente_ID) REFERENCES clientes(ID),
    FOREIGN KEY (tatuador_ID) REFERENCES tatuadores(ID)
);

-- Criação da tabela "Material"
CREATE TABLE materiais (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    nome_material VARCHAR(100) NOT NULL,
    descricao VARCHAR(200),
    quantidade_estoque INT,
    fornecedor VARCHAR(100),
    preco_compra DECIMAL(10, 2)
);

-- Criação da tabela "Venda"
CREATE TABLE vendas (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    data_venda DATE,
    cliente_ID INT,
    tatuador_ID INT,
    tatuagem_ID INT,
    total_venda DECIMAL(10, 2),
    FOREIGN KEY (cliente_ID) REFERENCES clientes(ID),
    FOREIGN KEY (tatuador_ID) REFERENCES tatuadores(ID),
    FOREIGN KEY (tatuagem_ID) REFERENCES tatuagens(ID)
);

-- Inserindo informações na tabela "Cliente"
INSERT INTO clientes (nome, data_nascimento, genero, endereco, email, numero_telefone)
VALUES
    ('João Silva', '1990-05-15', 'Masculino', 'Rua A, 123', 'joao.silva@email.com', '(11) 98765-4321'),
    ('Maria Souza', '1985-08-20', 'Feminino', 'Avenida B, 456', 'maria.souza@email.com', '(21) 99999-8888'),
    ('Pedro Santos', '1995-01-10', 'Masculino', 'Rua X, 789', 'pedro.santos@email.com', '(31) 3333-7777'),
    ('Ana Pereira', '2000-11-25', 'Feminino', 'Travessa Y, 321', 'ana.pereira@email.com', '(41) 4444-2222');

-- Inserindo informações na tabela "Tatuador"
INSERT INTO tatuadores (nome, data_nascimento, genero, especialidade, contato, horario_trabalho)
VALUES
    ('Fernanda Rodrigues', '1988-04-05', 'Feminino', 'Realismo', 'fernanda.tattoo@email.com', 'Seg-Sex: 10:00 - 19:00'),
    ('Carlos Oliveira', '1992-09-12', 'Masculino', 'Aquarela', 'carlos.tattoo@email.com', 'Seg-Qua: 14:00 - 22:00'),
    ('Mariana Santos', '1990-03-20', 'Feminino', 'Tribal', 'mariana.tattoo@email.com', 'Ter-Sex: 09:00 - 18:00'),
    ('Rafael Lima', '1985-07-30', 'Masculino', 'Neo-tradicional', 'rafael.tattoo@email.com', 'Seg-Sab: 12:00 - 20:00');

-- Inserindo informações na tabela "Tatuagem"
INSERT INTO tatuagens (titulo_descricao, tamanho, estilo, data_realizacao, preco, cliente_ID, tatuador_ID)
VALUES
    ('Dragão Oriental', 'Grande', 'Oriental', '2023-07-10', 550.00, 1, 3),
    ('Flor de Lótus', 'Pequena', 'Aquarela', '2023-07-12', 180.00, 2, 2),
    ('Fênix', 'Média', 'Realismo', '2023-07-15', 400.00, 4, 1),
    ('Tigre', 'Grande', 'Tribal', '2023-07-20', 600.00, 3, 4);

-- Inserindo informações na tabela "Agendamento"
INSERT INTO agendamentos (data_hora_agendamento, cliente_ID, tatuador_ID, status)
VALUES
    ('2023-07-25 14:00:00', 1, 2, 'Confirmado'),
    ('2023-07-28 15:30:00', 2, 1, 'Pendente'),
    ('2023-07-30 11:00:00', 3, 3, 'Confirmado'),
    ('2023-08-05 10:00:00', 4, 4, 'Pendente');

-- Inserindo informações na tabela "Material"
INSERT INTO materiais (nome_material, descricao, quantidade_estoque, fornecedor, preco_compra)
VALUES
    ('Tinta de Tatuagem', 'Tinta para tatuagem preta', 100, 'Fornecedor A', 50.00),
    ('Agulha de Tatuagem', 'Agulhas esterilizadas para tatuagem', 200, 'Fornecedor B', 2.50),
    ('Papel Hectográfico', 'Papel para transferência de desenhos', 50, 'Fornecedor C', 10.00),
    ('Luvas Descartáveis', 'Luvas de proteção descartáveis', 300, 'Fornecedor D', 0.80);

-- Inserindo informações na tabela "Venda"
INSERT INTO vendas (data_venda, cliente_ID, tatuador_ID, tatuagem_ID, total_venda)
VALUES
    ('2023-07-26', 2, 3, 1, 550.00),
    ('2023-07-29', 4, 1, 3, 400.00),
    ('2023-08-02', 3, 2, 2, 180.00),
    ('2023-08-06', 1, 4, 4, 600.00);
