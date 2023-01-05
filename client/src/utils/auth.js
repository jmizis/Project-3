import decode from 'jwt-decode';

class AuthService {
    // checks profile
    getProfile() {
        return decode(this.getToken());
    }
    // if logged in with unexpired token return true, else false 
    loggedIn() {
        const token = this.getToken();
        return token && !this.isTokenExpired(token) ? true : false;
    }
    // checks token for expiration from local storage
    isTokenExpired(token) {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }
    // retrieves token from local storage
    getToken(idToken) {
        return localStorage.setItem('id_token', idToken );
    }
    // sets login token if none to local storage
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.replace('./Technician');
    }
    // removes token at log out
    logout(idToken){
        localStorage.removeItem('id-token', idToken);
        window.location.replace('./');
    }
}

export default new AuthService();