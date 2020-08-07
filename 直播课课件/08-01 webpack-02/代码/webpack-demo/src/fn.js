import axios from 'axios';

// export default 100;

export default async function fn() {
    console.log('开课吧~~~~~!!');

    let rs = await axios({
        url: '/api/getUser'
    });
    console.log(rs);
}