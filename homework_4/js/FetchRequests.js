export const API_URL = "https://tasks-service-maks1394.amvera.io/tasks";

export class FetchRequests {
    constructor(_baseurl = API_URL) {
        this._baseurl = _baseurl;
    }

    async fetchRequest(url, method = "GET", body = null) {
        const options = { method };

        if (body) {
            (options.headers = {
                "Content-Type": "application/json;charset=UTF-8",
            }),
                (options.body = JSON.stringify(body));
        }

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Request failed:", error);
        }
    }

    async getAllTasks(params) {
        const query = new URLSearchParams(params).toString();
        const url = query ? `${this._baseurl}?${query}` : this._baseurl;
        return this.fetchRequest(url, "GET");
    }

    async postTask(newTask) {
        return this.fetchRequest(this._baseurl, "POST", newTask);
    }

    async getTaskWithID(id) {
        return this.fetchRequest(`${this._baseurl}/${id}`, "GET");
    }

    async changeTask(id, changeData) {
        return this.fetchRequest(`${this._baseurl}/${id}`, "PATCH", changeData);
    }

    async deleteTask(id) {
        return this.fetchRequest(`${this._baseurl}/${id}`, "DELETE");
    }
}
