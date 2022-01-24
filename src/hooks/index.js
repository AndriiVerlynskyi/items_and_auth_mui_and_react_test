import axios from 'axios';
import { baseUrl } from '../routes/routes';

export const useAuth = () => {
    //auth request on server
    return ( async ({loginData}) => {
        const resp = await axios(`${baseUrl}/users/1`)
        .then ( resp => {
            // if ( resp.status === 200 ){
            //     return true
            // }
            return true
        })
        return resp
    })
}