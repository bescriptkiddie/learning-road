import axios from 'axios';

// 方便后期的维护和管理
const BASEURL = '/api';
const APIURL = {
    item: {
        getItems: BASEURL + '/items'
    }
}

export async function getItems() {
    return await axios({
        url: APIURL.item.getItems
    });
}