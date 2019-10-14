const axios = require("axios");

const Sessions = [];

async function get(UserToken = String, UserInfo = String) {
  let Session = Sessions.filter(session =>
    String(session.Token).includes(UserToken)
  )[0];
  if (!Session) {
    console.error("[sky.js] Nenhuma sessão encontrada com este token.");
  } else {
    return Session.Dados[UserInfo]
      ? Session.Dados[UserInfo]
      : console.error(
          "[sky.js] Informação não encontrada. As informações disponpiveis são: " +
            Object.getOwnPropertyNames(Session)
        );
  }
}

async function authenticate(cpf = String, password = String) {
  let reqPostfields = {
    login: cpf,
    senha: password
  };
  let reqInstance = await axios({
    url: "https://api.skybr.digital/prd/login",
    method: "post",
    headers: {
      Host: "api.skybr.digital",
      Connection: "keep-alive",
      "Sec-Fetch-Mode": "cors",
      "X-User-Id": "SiteSKY",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36",
      "X-Consumer-System": "SiteSKY",
      Accept: "*/*",
      "Content-Type": "application/json",
      "X-Api-Key": "Ugoqp7DgDO6tjhCUXLaZClNGpMFNwn975IbtZIx6",
      Origin: "https://www.sky.com.br",
      "Sec-Fetch-Site": "cross-site",
      Referer: "https://www.sky.com.br/minha-sky/login"
    },
    data: JSON.stringify(reqPostfields)
  }).catch(() => {
    return { error: "Erro na requisição." };
  });

  let reqResponse = reqInstance.data;

  if (reqResponse.SKYException) {
    return { error: reqResponse.SKYException };
  } else if (reqResponse.Token) {
    // SUCCESS LOGIN
    let DadosBasicos = JSON.parse(reqResponse.ResultString).DadosBasicos;
    let DadosUsuario = DadosBasicos.Assinaturas[0];
    Sessions.push({
      Token: reqResponse.Token,
      Dados: DadosUsuario
    });
    return {
      success: true,
      token: reqResponse.Token
    };
  } else {
    return { error: "Erro desconhecido." };
  }
}

module.exports.authenticate = authenticate;
module.exports.Sessions = Sessions;
module.exports.get = get;
