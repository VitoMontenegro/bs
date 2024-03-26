import { v4 as uuid } from 'uuid';
let AsyncStorage = undefined;
export default class Server {
    constructor(serverUrls) {
        this.serverUrls = serverUrls;
        this.uuidClient = false;
        this.device = false;
        this.Profile = false;

        this
            .addDevice()
            .then(()=>this.ondevice())
            .catch((e)=>this.ondeviceerror(e))
    }

    ondevice(e){}

    ondeviceerror(e){}

    async addDevice(){
        return this.Storage.getItem('uuid').then(uuidClient => {
            if (uuidClient === null || uuidClient === false) {
                this.uuidClient = this.getUuid();
                this.Storage
                    .setItem('uuid', this.uuidClient);
            }else{
                this.uuidClient = uuidClient;
            }
            return fetch(this.serverUrls.devices + '/device', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: JSON.stringify({ uuid :this.uuidClient })
            })
                .then(response => {
                    return response.text().then(resp => {
                        resp = JSON.parse(resp);
                        if(resp.error){
                            throw new Error(resp.error);
                        }else{
                            this.device = resp;
                            return resp;
                        }
                    });
                })
        })
    }

    Auth(url,data = {}){
        data.uuid = this.uuidClient;
        return new Promise((resolve, reject)=> {
            fetch(this.serverUrls.auth + url, { method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body: JSON.stringify(data), })
                .then(response => {
                    return response.text().then(resp => {
                        resp = JSON.parse(resp);
                        if(resp.error){
                            reject(resp.error);
                        }else{
                            resolve(resp);
                        }
                    });
                })
                .catch((e)=>reject(e))
        })
    }

    Post(url,data = {}){
        data.uuid = this.uuidClient;
        return new Promise((resolve, reject)=> {
            fetch(this.serverUrls.api + url, { method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body: JSON.stringify(data), })
                .then(response => {
                    return response.text().then(resp => {
                        resp = JSON.parse(resp);
                        if(resp.error){
                            reject(resp.error);
                        }else{
                            resolve(resp);
                        }
                    });
                })
                .catch((e)=>reject(e))
        })
    }

    Storage  = {
        getItem:async (key)=>{
            if(typeof AsyncStorage !== 'undefined'){
                return  AsyncStorage.getItem(key);
            }else{
                return  localStorage.getItem(key);
            }
        },
        setItem:async (key,value)=>{
            if(typeof AsyncStorage !== 'undefined'){
                return  AsyncStorage.setItem(key,value);
            }else{
                return  localStorage.setItem(key,value);
            }
        }
    }

    getUuid() {
        if(typeof uuid !== 'undefined'){
            return uuid();
        }else{
            return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
    }
};