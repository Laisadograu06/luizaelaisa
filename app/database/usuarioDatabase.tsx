import { useSQLiteContext } from "expo-sqlite";

export type UsuarioDatabase = {
  meta: any;
  transporte: any;
  lazer: any;
  saude: any;
  fixos: any;
  renda: any;
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
  async function inseririnformacao(email: string, informacao: string) {
    try {
      await database.execAsync(
        `UPDATE cliente SET informacao = ${informacao} WHERE email = ${email};`,
      );
      return true;
    } catch (error) {
      console.error("Erro ao inserir informação:", error);
      throw error;
    }
  }
  async function informacao (data: UsuarioDatabase) {
    try {
      await database.execAsync(`
          INSERT INTO informacao (renda, fixos, saude, lazer, transporte, meta ) 
          VALUES('${data.renda}', '${data.fixos}','${data.saude}', '${data.lazer}', '${data.transporte}', '${data.meta}')
      `);
      return true;
    } catch (error) {
      throw error;
    }
  }

  return { listar, cadastrar, autenticarUsuario, informacao,inseririnformacao};
}