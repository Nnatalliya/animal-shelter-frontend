import React, { useState } from 'react';
import { Heart, User, Mail, Lock, UserPlus, LogIn, Home, Info, Phone, Menu, X } from 'lucide-react';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [registerData, setRegisterData] = useState({ firstName: '', lastName: '', email: '', password: '' });

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login data:', loginData);
        // Тук ще добавиш логиката за вход
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Register data:', registerData);
        // Тук ще добавиш логиката за регистрация
    };

    const Navigation = () => (
        <nav className="bg-gradient-to-r from-amber-100 to-orange-100 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
                        <Heart className="h-8 w-8 text-amber-600" />
                        <span className="text-2xl font-bold text-amber-800">ОсиновиМе</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <button
                                onClick={() => setCurrentPage('home')}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    currentPage === 'home' ? 'bg-amber-200 text-amber-900' : 'text-amber-700 hover:bg-amber-200'
                                }`}
                            >
                                <Home className="inline-block w-4 h-4 mr-1" />
                                Начало
                            </button>
                            <button className="text-amber-700 hover:bg-amber-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                <Info className="inline-block w-4 h-4 mr-1" />
                                За нас
                            </button>
                            <button className="text-amber-700 hover:bg-amber-200 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                <Phone className="inline-block w-4 h-4 mr-1" />
                                Контакти
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-amber-700 hover:text-amber-900 p-2"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-amber-50 border-t border-amber-200">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <button
                            onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                            className="block px-3 py-2 text-amber-700 hover:bg-amber-200 rounded-md w-full text-left"
                        >
                            Начало
                        </button>
                        <button className="block px-3 py-2 text-amber-700 hover:bg-amber-200 rounded-md w-full text-left">
                            За нас
                        </button>
                        <button className="block px-3 py-2 text-amber-700 hover:bg-amber-200 rounded-md w-full text-left">
                            Контакти
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );

    const HomePage = () => (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
            <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
                <div
                    className="relative bg-cover bg-center flex items-center justify-center w-full"
                    style={{
                        height: '600px',
                        backgroundImage: `linear-gradient(rgba(217, 119, 6, 0.4), rgba(217, 119, 6, 0.4)), url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`
                    }}
                >
                    <div className="text-center text-white bg-amber-800/80 rounded-2xl p-8 mx-4 backdrop-blur-sm">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-100">ОсиновиМе</h1>
                        <p className="text-xl md:text-2xl mb-6 text-yellow-200">Лапички търсят сърце</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setCurrentPage('register')}
                                className="bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-8 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                <UserPlus className="inline-block w-5 h-5 mr-2" />
                                Регистрирай се тук
                            </button>
                            <button
                                onClick={() => setCurrentPage('login')}
                                className="bg-white/90 text-amber-800 px-8 py-3 rounded-full font-semibold hover:bg-white transform hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                <LogIn className="inline-block w-5 h-5 mr-2" />
                                Вход
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 px-4 w-full">
                <div className="w-full">
                    <h2 className="text-3xl font-bold text-center text-amber-800 mb-12">Защо да изберете нас?</h2>
                    <div className="grid md:grid-cols-3 gap-8 px-4">
                        <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-amber-800 mb-2">С обич и грижа</h3>
                            <p className="text-amber-600">Всички наши животни са обгрижвани с много любов и внимание.</p>
                        </div>

                        <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <User className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-amber-800 mb-2">Професионален екип</h3>
                            <p className="text-amber-600">Нашият опитен екип ще ви помогне да намерите перфектния спътник.</p>
                        </div>

                        <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-amber-800 mb-2">Подкрепа за цял живот</h3>
                            <p className="text-amber-600">Ще бъдем до вас и след осиновяването с съвети и помощ.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const LoginPage = () => (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-12 px-4">
            <div className="w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center px-4">
                    <div className="text-center lg:text-left">
                        <div className="mb-8">
                            <Heart className="h-16 w-16 text-amber-600 mx-auto lg:mx-0 mb-4" />
                            <h1 className="text-4xl lg:text-5xl font-bold text-amber-800 mb-4">Добре дошли обратно!</h1>
                            <p className="text-xl text-amber-600">Влезте в профила си и открийте вашия нов приятел</p>
                        </div>
                    </div>

                    <div className="max-w-md w-full mx-auto lg:mx-0">
                        <div className="bg-white rounded-2xl shadow-2xl p-8">
                            <div className="text-center mb-8">
                                <Heart className="mx-auto h-12 w-12 text-amber-600 mb-4" />
                                <h2 className="text-3xl font-bold text-amber-800">Вход</h2>
                                <p className="text-amber-600 mt-2">Добре дошли обратно!</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-amber-800 text-sm font-semibold mb-2">Име</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-5 w-5 text-amber-500" />
                                        <input
                                            type="text"
                                            value={loginData.username}
                                            onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                                            className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50/50"
                                            placeholder="Въведете вашето име"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-amber-800 text-sm font-semibold mb-2">Парола</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-5 w-5 text-amber-500" />
                                        <input
                                            type="password"
                                            value={loginData.password}
                                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                                            className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50/50"
                                            placeholder="Въведете вашата парола"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={handleLogin}
                                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                                >
                                    <LogIn className="inline-block w-5 h-5 mr-2" />
                                    Влез
                                </button>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-amber-600">Нямате акаунт?</p>
                                <button
                                    onClick={() => setCurrentPage('register')}
                                    className="text-amber-700 font-semibold hover:text-amber-800 underline"
                                >
                                    Регистрирайте се тук
                                </button>
                            </div>

                            <div className="mt-6 text-center">
                                <button
                                    onClick={() => setCurrentPage('home')}
                                    className="text-amber-600 hover:text-amber-700 text-sm"
                                >
                                    ← Обратно към началото
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const RegisterPage = () => (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-12 px-4">
            <div className="w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center px-4">
                    <div className="text-center lg:text-left">
                        <div className="mb-8">
                            <Heart className="h-16 w-16 text-amber-600 mx-auto lg:mx-0 mb-4" />
                            <h1 className="text-4xl lg:text-5xl font-bold text-amber-800 mb-4">Присъединете се към нас!</h1>
                            <p className="text-xl text-amber-600">Създайте профил и започнете да помагате на животни в нужда</p>
                        </div>
                    </div>

                    <div className="max-w-md w-full mx-auto lg:mx-0">
                        <div className="bg-white rounded-2xl shadow-2xl p-8">
                            <div className="text-center mb-8">
                                <Heart className="mx-auto h-12 w-12 text-amber-600 mb-4" />
                                <h2 className="text-3xl font-bold text-amber-800">Регистрация</h2>
                                <p className="text-amber-600 mt-2">Присъединете се към нас!</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-amber-800 text-sm font-semibold mb-2">Име</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-5 w-5 text-amber-500" />
                                        <input
                                            type="text"
                                            value={registerData.firstName}
                                            onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                                            className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50/50"
                                            placeholder="Въведете вашето име"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-amber-800 text-sm font-semibold mb-2">Фамилия</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 h-5 w-5 text-amber-500" />
                                        <input
                                            type="text"
                                            value={registerData.lastName}
                                            onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                                            className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50/50"
                                            placeholder="Въведете вашата фамилия"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-amber-800 text-sm font-semibold mb-2">Имейл</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 h-5 w-5 text-amber-500" />
                                        <input
                                            type="email"
                                            value={registerData.email}
                                            onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                                            className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50/50"
                                            placeholder="Въведете вашия имейл"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-amber-800 text-sm font-semibold mb-2">Парола</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 h-5 w-5 text-amber-500" />
                                        <input
                                            type="password"
                                            value={registerData.password}
                                            onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                                            className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50/50"
                                            placeholder="Въведете парола"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={handleRegister}
                                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                                >
                                    <UserPlus className="inline-block w-5 h-5 mr-2" />
                                    Регистрирай се
                                </button>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-amber-600">Вече имате акаунт?</p>
                                <button
                                    onClick={() => setCurrentPage('login')}
                                    className="text-amber-700 font-semibold hover:text-amber-800 underline"
                                >
                                    Влезте тук
                                </button>
                            </div>

                            <div className="mt-6 text-center">
                                <button
                                    onClick={() => setCurrentPage('home')}
                                    className="text-amber-600 hover:text-amber-700 text-sm"
                                >
                                    ← Обратно към началото
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen">
            <Navigation />
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'login' && <LoginPage />}
            {currentPage === 'register' && <RegisterPage />}
        </div>
    );
};

export default App;