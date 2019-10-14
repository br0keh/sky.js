# :fire: sky.js

SKY.COM.BR API Wrapper

---

### Usage

```javascript
const Sky = require("./sky");

async function example() {
  let SkyAuthentication = await Sky.authenticate("CPF", "PASSWORD");

<<<<<<< HEAD
  if (SkyAuthentication.error) return console.error(SkyAuthentication.error);
=======
  if (SkyAuthentication.error) return console.error(error);
>>>>>>> 980e737d29675506bbe260934b5cae9e6639f52f

  let Token = SkyAuthentication.token;

  let UserCEP = await Sky.get(Token, "CEP");
  let UserEmail = await Sky.get(Token, "Email");

  console.log(`CEP: ${UserCEP}`);
  console.log(`EMAIL: ${UserEmail}`);
  // CEP: 0000000
  // EMAIL: user@email.com
}

example();
```

---

### Functions

- Sky.**authenticate**(cpf = String, password = String)

* Sky.**get**(token = String, **info** = String)

      -   info:  "Id", "ParentId", "Email", "DNA", "StatusAssinatura", "ValorEmAberto", "CEP", "TipoAssinatura", "ModoEntrega", "Produtos", "Equipamentos", "IlhaMaster", "Tier1", "PrincipalId", "Enderecos", "Telefones", "TipoOrganizacao", "PassoRegua", "GeoCode", "Fidelizado", "PossuiInteratividadePrePago", "PossuiSKYDigitalCortesia", "PossuiCanaisCortesiaLivre", "DataAtivacao", "DataFidelizacao", "TipoCliente", "Segmento", "Pacote", "GloboCongelada", "ListaDeCanais", "CodigoTipoAssinatura", "CanceladoAteSeisMeses", "DataCancelamento"
