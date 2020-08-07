/**
 * 定义对象格式的数据类型结构
 */



interface KxiosConstructorOptions {
    baseURL: string;
}


export default class Kxios {

    private options: KxiosConstructorOptions;

    constructor(
        opts: KxiosConstructorOptions
    ) {
        this.options = Object.assign(this.options, opts);
    }

    get<T, R>(
        url: string,
        query?: T  // get方法中能够知道query的具体类型吗？
    ): Promise<R> {

        return new Promise( (resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.onload = function() {
                resolve(xhr.responseText as any);
            }

            // 把对象转成queryString格式
            if (query) {
                url += '?';
                for (let key in query) {
                    url += `${key}=${query[key]}`;
                }
            }

            xhr.open('get', url, true);
            xhr.send();
        } );

    }

}