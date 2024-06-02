CREATE TABLE fornecedores (
    id SERIAL PRIMARY KEY,
    razao_social VARCHAR(255) NOT NULL,
    nome_fantasia VARCHAR(255),
    cnpj VARCHAR(18),
    logradouro VARCHAR(255),
    numero VARCHAR(10),
    bairro VARCHAR(100),
    uf CHAR(2),
    pais VARCHAR(100),
    cep VARCHAR(10),
    telefone VARCHAR(20),
    email VARCHAR(255),
    ramo_atividade VARCHAR(255),
    responsavel VARCHAR(255)
);

INSERT INTO fornecedores (
    razao_social, nome_fantasia, cnpj, logradouro, numero, bairro, uf, pais, cep, telefone, email, ramo_atividade, responsavel
) VALUES (
    'Fornecedor Exemplo LTDA', 'Exemplo', '12.345.678/0001-99', 'Rua Exemplo', '123', 'Bairro Exemplo', 'SP', 'Brasil', '12345-678', '(11) 1234-5678', 'contato@exemplo.com', 'Comércio', 'João Silva'
);
