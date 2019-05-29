export default class DataUtils {

    public static getPublicURL(): string {
        let path = "";
        // console.log("DataUtils NODE_ENV: " + process.env.NODE_ENV);
        // if (process.env.NODE_ENV === 'development') {
        //     path = '..';
        // } else {
        //     path = '/geo-mapp-app';
        // }
        return path;
    }

}
