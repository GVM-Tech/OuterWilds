var database = require("../database/config");

function listar() {
  var instrucao = `select email from usuario;`;
  return database.executar(instrucao);
}

function entrar(email, senha) {
  var instrucao = ''
  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucao = `SELECT 
    (SELECT SUBSTRING(nome, 1, CHARINDEX(' ', nome + ' ') - 1) AS primeiro_nome FROM usuario WHERE email = '${email}' AND senha = (HASHBYTES('SHA2_256','${senha}'))) as nome,nome as nomeCompleto, idUsuario, email, cpf, senha, cargo, fkEmpresa FROM usuario WHERE email = '${email}' AND senha = (HASHBYTES('SHA2_256','${senha}'));`;
  } else {
    instrucao = `SELECT * FROM usuario WHERE email = '${email}' AND senha = sha2('${senha}', 256);`;
  }
  return database.executar(instrucao);
}

function cadastrar(nome, email, cpf, senha) {
  var instrucao = ''
  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucao = `insert into [dbo].[usuario] (nome, email, cpf, senha, cargo) values ('${nome}','${email}','${cpf}',HASHBYTES('SHA2_256','${senha}'),'Dono');`;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucao = `INSERT INTO usuario (nome, email, cpf, senha, cargo ) VALUES ('${nome}', '${email}','${cpf}',sha2('${senha}', 256),'Dono');`;
  } else {
    return
  }
  return database.executar(instrucao);
}



module.exports = {
  cadastrar,
  entrar,
  listar,
};
