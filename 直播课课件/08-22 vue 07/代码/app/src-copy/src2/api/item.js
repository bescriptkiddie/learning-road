import {axios, APIURL} from './base';

// 获取所有商品
export async function getItems(params={
    page: 1,
    prepage: 10
}) {
    return await axios({
        url: APIURL.item.getItems,
        params
    });
}