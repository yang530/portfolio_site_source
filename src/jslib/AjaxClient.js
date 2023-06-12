export class AjaxClient{

    //bool is either true / false
    //obj2urlencode indicates whether to convert inData to urlencoded string before sending
    //urlencoded string such as: param1="something"&param2="something"&param3="something"
    constructor(bool=false){
        this.obj2urlencode = bool;
    }

    //callback: must be a function accepting ONE parameter: function (param)
    //this function passes the result of the request to callback function via
    //the parameter of the callback function
    ajaxGet(url, callback){

        this.#ajaxRequest("GET", url, null).then((resVal)=>{
            //console.log(resVal);
            callback(resVal);
        }).catch((err)=>{console.log(err);});

    }

    //callback: must be a function accepting ONE parameter: function (param)
    //inData: must be an object like {data1: "something", data2: "something"}
    //this function passes the result of the request to callback function via
    //the parameter of the callback function
    ajaxPost(url, inData, callback){

        this.#ajaxRequest("POST", url, inData).then((resVal)=>{
            //console.log(resVal);
            callback(resVal);
        }).catch((err)=>{console.log(err);});

    }

    //action: string, "GET" or "POST"
    //url: must be a string of request url
    //inData: must be an object like {data1: "something", data2: "something"}
    #ajaxRequest(action, url, inData){

        //prepare action string
        action = action.toString();
        action = action.toUpperCase();

        let request = new XMLHttpRequest();
        let sendstr = ""; //string to send for POST method
        let headerStr = "application/json;charset=UTF-8";

        if(action == "POST"){
            if(this.obj2urlencode == true){
                headerStr = "application/x-www-form-urlencoded";
                sendstr = this.#convertObj(inData);
            }else{
                sendstr = JSON.stringify(inData);
                console.log(sendstr);
            }
        }

        request.open(action.toString(), url.toString(), true);
        request.setRequestHeader("Content-type", headerStr);
        //add following lines of code to avoid blocks by CORS policy of browser
        //request.setRequestHeader("Access-Control-Allow-Headers", "*");
        //request.setRequestHeader("Access-Control-Allow-Origin", "*");

        request.send(sendstr);

        //return promise when ajax fetch is successful
        return new Promise((resolve, reject)=>{

            request.addEventListener("readystatechange", ()=>{
                if(request.readyState === 4){
                    try{
                        resolve(request.responseText);
                    }catch(err){
                        reject(err);
                    }
                }
            });

        });

    }

    //convert json object into urlencoded string
    #convertObj(obj){

        let datArray = {keys: Object.keys(obj), vals: Object.values(obj)};
        let loopEnd = datArray.keys.length;
        let result = "";

        for(let i=0; i<loopEnd; i++){
            result += `${datArray.keys[i]}=${datArray.vals[i]}`;
            if(i < loopEnd - 1){
                result += "&";
            }
        }
        //console.log("urlencoded: ", result);

        return result;
    }


}