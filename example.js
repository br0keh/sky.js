const Sky = require("./sky");

async function example() {
  let SkyAuthentication = await Sky.authenticate("CPF", "PASSWORD");

  console.log(SkyAuthentication);
  // SkyAuthentication = { error: ERROR MESSAGE }
  // SkyAuthentication = { success: true, token: TOKEN }
}

example();
