import config from "../config/config";

import {Client, Account, ID} from 'appwrite'

export class AuthService {
    client = new Client();
    account; 

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProductID)
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
            throw new error('Account Creation Failed')
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailSession(email , password)
        } catch (error) {
            throw new error('email or password not matched')
        }
    }

    async getCurrUser(){
      try {
       return await this.account.get()
      } catch (error) {
        throw new error('LogIn Failed')
      }
      return null
    }

    async userlogOut(){
        try {
         return await this.account.deleteSessions()
        } catch (error) {
            throw new error('LogOut Failed')
        }
    }
}

const authservice  = new AuthService()

export default authservice











