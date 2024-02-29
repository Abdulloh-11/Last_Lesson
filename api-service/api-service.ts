import { $apiAuth } from "@/api/interceptors";
import { ISignUpPayload, IAuthPromise, ISignInPayload } from "@/app/types/auth.types";
import { cookies } from 'next/headers'
export const signUp =  async (data:ISignUpPayload): Promise<IAuthPromise | undefined> => {
    try{
        const response = await $apiAuth.post("auth/signup", data)
        return response?.data
    }catch(err){
        console.log(err);
        
    }
}

export const signIn =  async (data:ISignInPayload): Promise<IAuthPromise | undefined>  => {
    try{
        const response = await $apiAuth.post("auth/signin", data)
        return response?.data
    }catch(err){
        console.log(err);
        
    }
}



