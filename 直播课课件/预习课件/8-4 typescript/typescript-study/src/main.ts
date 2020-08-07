// import kkb from './libs/kkb';

// 静态类型语言 
// 强类型

import {
    getUser,
    getUsers
} from './api';

// kkb();

(async function() {
    
    let user = await getUser({id: 1});
    // user.email;
    // user.ii;

    let users = await getUsers({isVip: true});
    users[0].email;

    users.forEach( user => {
        user.email;
    } );

})();


console.log('');