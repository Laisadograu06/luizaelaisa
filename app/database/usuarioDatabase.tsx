import { useSQLiteContext } from "expo-sqlite";

export type UsuarioDatabase = {
  complemento(complemento: any): unknown;
  nome: string;
  email: string;
  telefone: string;
  senha: string;
};


export function usuarioDatabase() {
  const database = useSQLiteContext();

  async function listar() {
    try {
      const resultado = await database.getAllAsync<UsuarioDatabase>("SELECT * FROM cliente;");
      return resultado;
    } catch (error) {
      throw error;
    }
  }

  async function cadastrar(data: UsuarioDatabase) {
    try {
      console.log(data.complemento);
      await database.execAsync(`
          INSERT INTO cliente (nome, email, telefone, senha ) 
          VALUES('${data.nome}', '${data.email}','${data.telefone}', '${data.senha}')
      `);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async function autenticarUsuario(email: string, senha: string) {
    try {
      const resultado = await database.getAllAsync<UsuarioDatabase>(
        "SELECT * FROM cliente WHERE email = ? AND senha = ?;",
        [email, senha]
      );
      return resultado.length > 0;
    } catch (error) {
      throw error;
    }
  }

  async function inserirDepoimento(email: string, depoimento: string) {
    try {
      await database.execAsync(
        `UPDATE cliente SET depoimento = ${depoimento} WHERE email = ${email};`,
      );
      return true;
    } catch (error) {
      console.error("Erro ao inserir depoimento:", error);
      throw error;
    }
  }
  async function criarDepoimento(nome, idade, depoimento) {
    try {
      await database.execAsync(`
          INSERT INTO depoimento (nome,idade,depoimento) 
          VALUES('${nome}', '${idade}', '${depoimento}')
      `);
      return true;
    } catch (error) {
      throw error;
    }
  }

  async function listarDepoimento() {
    try {
      const resultado = await database.getAllAsync<UsuarioDatabase>("SELECT * FROM depoimento;");
      return resultado;
    } catch (error) {
      throw error;
    }
  }


  return { listar, cadastrar, autenticarUsuario, inserirDepoimento, criarDepoimento, listarDepoimento };
}