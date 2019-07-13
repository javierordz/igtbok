import axios from "axios";

export default {
    saveVenue: function(dbModel) {
        return axios.post("/api/venues", dbModel);
    },
    getVenue: function(dbModel) {
        return axios.get("/api/venues", dbModel);
    },
    getAuth: function(security) {
        return axios.get("/api/auth/checkAuth");
    },
    getAllUsers: function() {
      return axios.get("/api/users/getAllUsers")
    },
    updateUser: function(userData) {
      return axios.post("/api/users/updateUser", userData)
    }
}
