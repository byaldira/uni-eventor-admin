import { makeApiRequest } from './App.Request';

export var token = {};

export function login(username, password, onsuccess, onfailure) {
    debugger;
    var userData = 'grant_type=password&username=' + username + '&password=' + password;
    var loginSuccess = function (data) {
        token = data;
        onsuccess();
    };
    makeApiRequest('POST', '/token', userData, loginSuccess, onfailure, (xhr) => {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    });
}

export function authorize(xhr) {
    if (token.access_token && xhr.readyState === 1) {
        xhr.withCredentials = true;
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer ' + token.access_token);
    }
    return xhr;
}