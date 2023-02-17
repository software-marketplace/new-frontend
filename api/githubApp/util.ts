// import { readFileSync } from "fs";
// import { createSign, Sign } from "crypto";
// import * as jwt from "jsonwebtoken";

// import { Octokit } from "@octokit/core";

// // Octokit class has a type of any
// let octokit: Octokit;

// const setOctokit = (token: string) => {
//   octokit = new Octokit({ auth: token });
// }

// const getOctokit = (): Octokit => {
//   return octokit;
// }

// const getAuthToken = (): string => {
//   const privateKey: string = readFileSync(process.env.GITHUB_APP_PRIVATE_KEY_PATH as string, "utf-8");
//   const sign: Sign = createSign("RSA-SHA256");
//   sign.update(privateKey);
//   sign.end();

//   // Generate the JWT
//   const payload = {
//     // GitHub App's identifier
//     iss: process.env.GITHUB_APP_ID,
//   }

//   let token: string = jwt.sign(payload, privateKey, { algorithm: "RS256", expiresIn: '10m' });
//   setOctokit(token);
//   return token;
// }

// export {
//   getAuthToken,
//   getOctokit
// }
