import axios from "axios";

const AUTH_URL = "http://localhost:2222/api/auth"
const tokenExpirationHours = 24;
const tokenExpirationMilliseconds = tokenExpirationHours * 60 * 60 * 1000;

// Token'ı 3 dakika sonra otomatik olarak silmek için bir zamanlayıcı başlatın
setTimeout(() => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}, tokenExpirationMilliseconds);

export const registerService = async (username, password, email) => {
    try {
        const response = await axios.post(`${AUTH_URL}/signup`, {
            username,
            password,
            email,
        });
        console.log(response.data);
        return response.data; // Başarılı yanıtı döndür
    } catch (error) {
        if (error.response && error.response.status === 400) {
            // Sunucu tarafından gönderilen özel bir hata mesajı varsa
            console.error("Kayıt işlemi hatası: ", error.response.data.message);
            throw new Error(error.response.data.message);
        } else {
            console.error("Kayıt işlemi hatası: ", error);
            throw error; // Diğer hata durumlarında hatayı yeniden fırlat
        }
    }
};

export const loginService = async (username, password, email) => {
    try {
        const response = await axios.post(`${AUTH_URL}/signin`, {
            username,
            password,
            email,
        });
        return response.data; // Başarılı yanıtı döndür
    } catch (error) {
        console.error("Giriş işlemi hatası: ", error);
        if (error.response && error.response.status === 401) {
            throw new Error("Error: The username or password is incorrect.");
        } else {
            throw error;
        }
    }
};