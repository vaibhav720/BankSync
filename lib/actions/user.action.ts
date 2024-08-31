"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { parseStringify } from "../utils";
import { error } from "console";
import { cookies } from "next/headers";


export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);
    
    await cookies().set("appwrite-session", session.secret, {
      // domain: "localhost",
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: false, 
    });

    
    return parseStringify(session);
  } catch (error) {
    console.error('Error', error);
    return null;
  }
}




export const signUp = async (userData: SignUpParams) => {
    const {email, password, firstName, lastName} = userData
  
    try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });


    return parseStringify(newUserAccount);
  } catch (error) {
    console.error("Error", error);
  } finally {
  }
};

// ... your initilization functions

export async function getLoggedInUser() {
  

  // Proceed with retrieving user data
  try {
    const { account } = await createSessionClient();
    const user = await account.get();

    return parseStringify(user);
  } catch (error) {
    console.error("Error during session retrieval:", error);
    return null;
  }
}


export const logoutAccount = async()=>{
  try{
    const {account} = await createSessionClient();
    await cookies().delete('appwrite-session');
    await account.deleteSession('current');
  }catch(error){
    console.error("logout error",error);
    return null;
  }
}