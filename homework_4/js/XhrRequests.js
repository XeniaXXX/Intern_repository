const API_URL = "https://tasks-service-maks1394.amvera.io/tasks";

export class XhrRequests {
    constructor(_baseurl = API_URL) {
        this._baseurl = _baseurl;
    }

    xhrRequest(url, method = "GET", body = null) {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open(method, url);

            if (body) {
                request.setRequestHeader(
                    "Content-Type",
                    "application/json;charset=UTF-8"
                );
                body = JSON.stringify(body);
            }

            request.addEventListener("load", function () {
                if (this.status >= 200 && this.status < 300) {
                    try {
                        const result = JSON.parse(this.responseText);
                        resolve(result);
                    } catch (error) {
                        reject(new Error("Parcing error:", error));
                    }
                }
            });
            request.send(body);
        });
    }

    getAllTasks(params) {
        const query = new URLSearchParams(params).toString();
        const url = query ? `${this._baseurl}?${query}` : this._baseurl;
        return this.xhrRequest(url, "GET");
    }

    postTask(newTask) {
        return this.xhrRequest(this._baseurl, "POST", newTask);
    }

    getTaskWithID(id) {
        return this.xhrRequest(`${this._baseurl}/${id}`, "GET");
    }

    changeTask(id, changeData) {
        return this.xhrRequest(`${this._baseurl}/${id}`, "PATCH", changeData);
    }

    deleteTask(id) {
        return this.xhrRequest(`${this._baseurl}/${id}`, "DELETE");
    }
}
