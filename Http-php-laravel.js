/**
 * Created by Andres on 28-11-2015.
 * For Laravel PHP
 */
function Http() {
    var xhr = new XMLHttpRequest();
    var response = new Object();
    this.send = function(method,url,object,callBack){
        xhr.open(method,url+JSON.stringify(object),true);
        xhr.responseType = "application/JSON";
        xhr.onload = function(){
            if(this.readyState==4){ 
                callBack(this.response);
            }
        }
        xhr.send();
    };
}


/*
function Http() {
    var xhr = new XMLHttpRequest();
    var resonse = new Object();
    this.send = function(method,url,object,callBack){
        xhr.open(method,url+JSON.stringify(object),true);
        xhr.responseType = "application/JSON";
        xhr.onload = function(){
            if(this.readyState==4){ 
                callBack(this.response);
            }
        }
        xhr.send();
    };
}
*/