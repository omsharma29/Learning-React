import config from "../config/config";

import {Client, Account, ID} from 'appwrite'

export class AuthService {
    client = new Client();
    account; 

    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProductID)
        this.account =new Account(this.client)
    }
    async creatAccount({email, name, password}){
        try {
           const userAccount= await this.account.create(ID.unique,email,name,password)
           if(userAccount){
            return this.login({email,password})
           }else{
            return userAccount
           }
        } catch (error) {
            throw new Error('Account Creation Failed')
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailSession(email , password)
        } catch (error) {
            throw new Error('email or password not matched')
        }
    }

    async getCurrUser(){
      try {
       return await this.account.get()
      } catch (error) {
        throw new Error ('LogIn Failed')
      }
      return null
    }

    async userlogOut(){
        try {
         return await this.account.deleteSessions()
        } catch (error) {
            throw new Error('LogOut Failed')
        }
    }
}

const authservice  = new AuthService()

export default authservice











