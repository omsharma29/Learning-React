import config from "../config/config";

import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class service {
    client = new Client()
    databases
    Storage

    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProductID)
        this.databases = new Databases(this.client)
        this.Storage = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImg,
        status, userID }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDataBaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userID,
                }
            )
        } catch (error) {
            throw new Error('Something happened')
        }

    }

    async updatePost(slug, { title, content, featuredImg, status,
         }){
        try {
           return await  this.databases.updateDocument(
            config.appwriteDataBaseID,
            config.appwriteCollectionID,
            slug,
            {
                title, content,featuredImg, status
            }
           )
        } catch (error) {
            throw new Error('Something happened')
        }
    }
    async deletePost(slug){
        try {
            await  this.databases.deleteDocument(
            config.appwriteDataBaseID,
            config.appwriteCollectionID,
            slug,
           )
           return true 
        } catch (error) {
            throw new Error('Something happened');
            return false
        }
    }
    async getPost(slug){
        try {
            await  this.databases.getDocument(
            config.appwriteDataBaseID,
            config.appwriteCollectionID,
            slug,
           )
        } catch (error) {
            throw new Error('Something happened');
            
        }
    }
    async listPost(quries = Query.equal('status', 'active')){
        try {
            return await this.databases.listDocuments(
                config.appwriteDataBaseID,
                config.appwriteCollectionID,
                quries,
               
            )
        } catch (error) {
            throw new Error('Something happened');
            return false 
        }
        
       
    }

    // upload and delete the file

    async uploadFile(file){
        try {
            return await this.Storage.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            throw new Error('Service Down')
        }
    }

    async deleteFile(fileId){
        try {
             await this.Storage.deleteFile(
                config.appwriteBucketID,
                fileId
            )
            return true 
        } catch (error) {
            throw new Error('Service Down')
            return false 
        }
    }

    getFilePreview(fileId){
        return this.Storage.getFilePreview(
            config.appwriteBucketID,
            fileId
        )
    }
}

const service = new Service()
export default service

