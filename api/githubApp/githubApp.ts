// // https://kryptoblack.github.io/?code=ea91df1b2827d9b87929&installation_id=30478302&setup_action=install

// import { Router, Request, Response } from "express";

// import { GithubApp } from "../../model";

// const router = Router();

// router.post('/new_installation', async (req: Request, res: Response) => {
//   const newInstallation = new GithubApp({
//     installation_id: req.body?.installation_id || 1,
//     username: "",
//     user_type: ""
//   })

//   try {
//     newInstallation.save()
//     res.status(200).json({ message: `Installation ID ${newInstallation.installation_id} Successfully Added` });
//   } catch (error) {
//     if (typeof error == "string") error.toUpperCase()
//     else if (error instanceof Error) res.status(400).json({ message: error.message });
//   }
// });

// router.post('/push', async (req: Request, res: Response) => {
// })


// export {
//   router
// };
