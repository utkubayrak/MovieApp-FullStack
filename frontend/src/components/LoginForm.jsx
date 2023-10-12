import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import * as Auth from '../service/AuthService';

export default function LoginForm() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [succes, setSucces] = useState(null);
    const [signupCardOpen, setSignupCardOpen] = useState(false);
    const toggleSignupCard = () => {
        setSignupCardOpen(!signupCardOpen);
    };
    const [formDataLogin, setFormDataLogin] = useState({
        username: '',
        password: '',
    });
    const [formDataRegister, setFormDataRegister] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    useEffect(() => {
        const token = getCookie('token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);
    const handleLoginInputChange = (e) => {
        const { name, value } = e.target;
        setFormDataLogin({ ...formDataLogin, [name]: value });
    };
    const handleRegisterInputChange = (e) => {
        const { name, value } = e.target;
        setFormDataRegister({ ...formDataRegister, [name]: value });
    };
    const handleLoginFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await Auth.loginService(formDataLogin.username, formDataLogin.password);
            const token = response.token;
            const userName = response.username;
            const roles = response.roles;
            setCookie('username', userName, 24 * 60 * 60);
            setCookie("roles", roles, 24 * 60 * 60);
            setCookie('token', token, 24 * 60 * 60);
            if (response.roles.includes('ROLE_ADMIN')) {
                navigate('/admin');
                window.location.reload();
            } else if (response.roles.includes('ROLE_MODERATOR')) {
                navigate('/admin');
                window.location.reload();
            } else {
                navigate('/');
                window.location.reload();
            }
        } catch (error) {
            console.error("Giriş işlemi hatası:", error);
            setError(error.message);
        }
    };
    const isPasswordValid = formDataRegister.password.length >= 8;

    const handleRegisterFormSubmit = async (event) => {
        event.preventDefault();
        if (isPasswordValid && formDataRegister.password === formDataRegister.confirmPassword) {
            try {
                const response = await Auth.registerService(formDataRegister.username, formDataRegister.password, formDataRegister.email);
                console.log("Kayıt başarılı:", response);
                setSucces(response.message)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } catch (error) {
                console.error("Kayıt işlemi hatası:", error);
                setError(error.message)
            }
        } else {
            setError("Parola geçerli değil veya parola onayı uyuşmuyor.");
        }
    }

    const setCookie = (name, value, seconds) => {
        const expires = new Date(Date.now() + seconds * 1000);
        document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
    };
    const getCookie = (name) => {
        const cookieName = `${name}=`;
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.startsWith(cookieName)) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return null;
    };
    useEffect(() => {
        if (succes) {
            showSuccesToast();
        }
        if (error) {
            showErrorToast();
        }
    }, [error, succes]);

    const showSuccesToast = () => {
        toast.success(succes, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            onClose: () => {
                // Toast kapatıldığında error state'ini sıfırla
                setSucces(null);
            }
        });
    }

    const showErrorToast = () => {
        toast.error(error, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            onClose: () => {
                // Toast kapatıldığında error state'ini sıfırla
                setError(null);
            }
        });
    };
    return (
        <>
            <ToastContainer
            />
            <div className="container bg-margin">
                <div className="row  justify-content-center">
                    <div className="col-4">
                        <div className="join-form">
                            <div className="card text-center signup-card">
                                <div className="card-header border-0" >
                                    <h3>Register</h3>
                                </div>
                                <div className="card-body ">
                                    <form className='register-form' onSubmit={handleRegisterFormSubmit}>
                                        <input type="text" name="username" placeholder='Username' value={formDataRegister.username} onChange={handleRegisterInputChange} /><br />
                                        <input type="email" name="email" placeholder='Email' value={formDataRegister.email} onChange={handleRegisterInputChange} /><br />
                                        <input type="password" name="password" placeholder='Password' value={formDataRegister.password} onChange={handleRegisterInputChange} /><br />
                                        <input type="password" name="confirmPassword" placeholder='Confirm Password' value={formDataRegister.confirmPassword} onChange={handleRegisterInputChange} /><br />


                                        <button className='btn btn-primary register-btn mt-2' type="submit">Register</button>
                                    </form>
                                </div>
                            </div>
                            <div className={`card text-center login-card ${signupCardOpen ? 'login-card-open' : ''}`}>

                                <div className="card-header border-0" onClick={toggleSignupCard}>
                                    <h3>Login</h3>
                                </div>
                                <div className="card-body ">
                                    <form className='login-form' onSubmit={handleLoginFormSubmit}>
                                        <input type="text" name="username" placeholder='Username' value={formDataLogin.username} onChange={handleLoginInputChange} /> <br />
                                        <input type="password" name="password" placeholder='Password' value={formDataLogin.password} onChange={handleLoginInputChange} /> <br />
                                        <button className='btn btn-primary login-btn mt-2' type="submit">Login</button>
                                    </form>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
