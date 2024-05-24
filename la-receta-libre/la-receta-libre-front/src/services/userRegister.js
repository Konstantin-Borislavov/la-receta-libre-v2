import axios from "axios";
import api from "./api";


export default function createUser(){
    const new_user = async () =>{
        try{
            const url = 'http://127.0.0.1:8000/api/register';
            const body = {
                'name':'konstantin',
                'username':'kosio3',
                'email':'kosio@kosio.com',
                'password':'hola',
                'password2':'hola',
            }

            const response = await axios.post(url,body);

        }catch (error){
            console.error(error);
        }

    }

}