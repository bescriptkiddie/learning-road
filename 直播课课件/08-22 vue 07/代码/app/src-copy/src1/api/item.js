import {axios, APIURL} from './base';

// 获取所有商品
export async function getItems() {
    return await axios({
        url: APIURL.item.getItems
    });
}