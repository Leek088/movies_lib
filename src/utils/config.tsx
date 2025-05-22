interface RequestOptions {
  method: string;
  headers: HeadersInit;
}

/**
 * Gera um objeto de configuração para requisições HTTP.
 *
 * @param method O método HTTP a ser utilizado (ex: 'GET', 'POST', 'PUT', 'DELETE').
 * @param token O token de autorização Bearer (opcional).
 * @param additionalHeaders Headers adicionais a serem incluídos na requisição (opcional).
 * @returns Um objeto de configuração para a função fetch ou bibliotecas HTTP.
 */
const getRequestOptions = (
  method: string,
  token?: string | null,
  additionalHeaders?: Record<string, string>
): RequestOptions => {
  const headers: HeadersInit = {
    "Content-Type": "application/json", // Define o tipo de conteúdo padrão como JSON
    ...additionalHeaders, // Adiciona quaisquer headers personalizados
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return {
    method: method.toUpperCase(), // Garante que o método esteja em maiúsculas
    headers: headers,
  };
};

export default getRequestOptions;
