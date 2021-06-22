import axios from 'axios';
import Config from './Config';
// import { reactLocalStorage } from 'reactjs-localstorage';
class AuthHandler {
    static AddEmployee(empdata, callback) {
        console.log("Add Data function", empdata)
        axios.post(Config.AddEmpDataUrl, empdata)
            .then(function (response) {
                console.log(response)
                if (response.status === 200) {
                    // reactLocalStorage.set("token", response.data.access);
                    // reactLocalStorage.set("refresh", response.data.refresh);
                    callback({ error: false, message: "Data Saved Successfully" });
                }
            })
            .catch(function (error) {
                callback({ error: true, message: "Error During Data Insertion" })
            })
    }

    static GetEmployee(callback) {
        axios.get(Config.AddEmpDataUrl)
            .then(function (response) {
                console.log(response)
                if (response.status === 200) {
                    // reactLocalStorage.set("token", response.data.access);
                    // reactLocalStorage.set("refresh", response.data.refresh);
                    callback({ error: false, isLoading: false, empdata: response.data.data });
                }
            })
            .catch(function (error) {
                callback({ error: true, message: "Error During Data Fetching" })
            })
    }

    static DeleteEmployee(empid, callback) {
        var deleteurl = Config.AddEmpDataUrl + String(empid + "/")
        axios.delete(deleteurl)
            .then(function (response) {
                console.log(response)
                if (response.status === 200) {
                    callback({ error: false, message: "Data Deleted Successfully" });
                }
            })
            .catch(function (error) {
                callback({ error: true, message: "Error During Data Deletion" });
            })
    }

    // static loggedIn() {
    //     if (reactLocalStorage.get("token") && reactLocalStorage.get("refresh")) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
}
export default AuthHandler;