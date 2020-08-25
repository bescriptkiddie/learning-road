import {axios, APIURL} from './base';

// 用户登陆
export async function login(data) {
    return await axios({
        method: 'post',
        url: APIURL.user.login,
        data
    });
}