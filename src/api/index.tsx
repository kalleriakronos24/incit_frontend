import Crypto from "./crypto";

class ApiProvider { 
    crypto (){
        return new Crypto()
    }
};


export default ApiProvider;