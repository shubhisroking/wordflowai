import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient();

// const signIn = async () => {
//   const data = await authClient.signIn.social({
//     provider: "google",
//   });
// };

export const { signIn, signUp, signOut, useSession } = authClient;