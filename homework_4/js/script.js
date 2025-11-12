import { API_URL, FetchRequests } from "./FetchRequests.js";
import { XhrRequests } from "./XhrRequests.js";

class RequestsFacade {
    constructor(requestType = "fetch", _baseUrl = API_URL) {
        if (requestType === "fetch") {
            this.req = new FetchRequests(_baseUrl);
        } else {
            this.req = new XhrRequests(_baseUrl);
        }
    }

    getAllTasks(params) {
        return this.req.getAllTasks();
    }

    postTask(newTask) {
        return this.req.postTask(newTask);
    }

    getTaskWithID(id) {
        return this.req.getTaskWithID(id);
    }

    changeTask(id, changeData) {
        return this.req.changeTask(id, changeData);
    }

    deleteTask(id) {
        return this.req.deleteTask(id);
    }
}

const fetchInstance = new RequestsFacade("fetch");
const xhrInstance = new RequestsFacade("xhr");

fetchInstance
    .getAllTasks()
    .then((task) => console.log("Got all tasks", task))
    .catch((err) => console.error(err));

xhrInstance
    .deleteTask(711)
    .then((task) => console.log("Deleted task with id:", task))
    .catch((err) => console.error(err));
