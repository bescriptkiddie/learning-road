import Kxios from './libs/Kxios';

let kxios = new Kxios({
    baseURL: '/api'
});

interface getUserQuery {
    id: number;
}

interface getUsersQuery {
    isVip: boolean;
}

interface getUserResult {
    id: number;
    name: string;
    email: string;
}

// 获取指定用户信息的接口
export const getUser = (query: getUserQuery) => {
    return kxios.get<getUserQuery, getUserResult>('/getUser', query);
}

// 获取指定类型的所有用户列表信息
export const getUsers = (query: getUsersQuery) => {
    return kxios.get<getUsersQuery, Array<getUserResult>>('/getUsers', query);
}