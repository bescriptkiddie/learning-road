// import axios from 'axios'

class Axios {

    get<R>(url: string, query: {}): Promise<R> {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.onload = function() {
                let data = xhr.responseText as any;
                resolve(data);
            }

            xhr.open('get', url, true);
            xhr.send();
        })

    }

}

let axios = new Axios();

interface User {
    username: string;
    age: number;
}


// getUser 在封装的过程中，并不清楚具体使用中会传入的参数类型是什么？
// 范型：为类型定义的参数
export function getUser<T>(query: T) {

    return axios.get< User >('/user', {
        query
    });

}

export function getUsers() {
    return new Promise< User[] >(() => {
        //....
    });
}