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
        <nav className="bg-gradient-to-r from-amber-100 to-orange-100 shadow-lg sticky top-0 z-50 w-full">
            <div className="w-full px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
                        <Heart className="h-10 w-10 text-amber-600" />
                        <span className="text-3xl font-bold text-amber-800">ОсиновиМе</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-baseline space-x-8">
                        <button
                            onClick={() => setCurrentPage('home')}
                            className={`px-6 py-3 rounded-md text-lg font-medium transition-colors ${
                                currentPage === 'home' ? 'bg-amber-200 text-amber-900' : 'text-amber-700 hover:bg-amber-200'
                            }`}
                        >
                            <Home className="inline-block w-5 h-5 mr-2" />
                            Начало
                        </button>
                        <button className="text-amber-700 hover:bg-amber-200 px-6 py-3 rounded-md text-lg font-medium transition-colors">
                            <Info className="inline-block w-5 h-5 mr-2" />
                            За нас
                        </button>
                        <button className="text-amber-700 hover:bg-amber-200 px-6 py-3 rounded-md text-lg font-medium transition-colors">
                            <Phone className="inline-block w-5 h-5 mr-2" />
                            Контакти
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-amber-700 hover:bg-amber-200 p-2 rounded-md transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-amber-200 shadow-lg">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <button
                                onClick={() => {
                                    setCurrentPage('home');
                                    setMobileMenuOpen(false);
                                }}
                                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                    currentPage === 'home' ? 'bg-amber-200 text-amber-900' : 'text-amber-700 hover:bg-amber-100'
                                }`}
                            >
                                <Home className="inline-block w-4 h-4 mr-2" />
                                Начало
                            </button>
                            <button className="block w-full text-left text-amber-700 hover:bg-amber-100 px-3 py-2 rounded-md text-base font-medium transition-colors">
                                <Info className="inline-block w-4 h-4 mr-2" />
                                За нас
                            </button>
                            <button className="block w-full text-left text-amber-700 hover:bg-amber-100 px-3 py-2 rounded-md text-base font-medium transition-colors">
                                <Phone className="inline-block w-4 h-4 mr-2" />
                                Контакти
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );

    const HomePage = () => (
        <div className="w-full">
            <div
                className="relative bg-cover bg-center flex items-center justify-center w-full min-h-screen"
                style={{
                    backgroundImage: `linear-gradient(rgba(217, 119, 6, 0.4), rgba(217, 119, 6, 0.4)), url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`
                }}
            >
                <div className="text-center text-white bg-amber-800 bg-opacity-80 rounded-3xl p-24 mx-16 backdrop-blur-sm">
                    <h1 className="text-9xl font-bold mb-12 text-yellow-100">ОсиновиМе</h1>
                    <p className="text-5xl mb-16 text-yellow-200">Лапички търсят сърце</p>
                    <div className="flex gap-12 justify-center">
                        <button
                            onClick={() => setCurrentPage('register')}
                            className="bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-20 py-6 rounded-full text-2xl font-semibold hover:from-yellow-500 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            <UserPlus className="inline-block w-8 h-8 mr-4" />
                            Регистрирай се тук
                        </button>
                        <button
                            onClick={() => setCurrentPage('login')}
                            className="bg-white bg-opacity-90 text-amber-800 px-20 py-6 rounded-full text-2xl font-semibold hover:bg-white transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            <LogIn className="inline-block w-8 h-8 mr-4" />
                            Вход
                        </button>
                    </div>
                </div>
            </div>

            <div className="py-32 px-16 w-full bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
                <div className="w-full">
                    <h2 className="text-7xl font-bold text-center text-amber-800 mb-24">Защо да изберете нас?</h2>
                    <div className="grid grid-cols-3 gap-20 px-16">
                        <div className="text-center bg-white rounded-3xl p-16 shadow-2xl hover:shadow-3xl transition-shadow">
                            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-12">
                                <Heart className="w-16 h-16 text-white" />
                            </div>
                            <h3 className="text-4xl font-semibold text-amber-800 mb-8">С обич и грижа</h3>
                            <p className="text-2xl text-amber-600">Всички наши животни са обгрижвани с много любов и внимание.</p>
                        </div>

                        <div className="text-center bg-white rounded-3xl p-16 shadow-2xl hover:shadow-3xl transition-shadow">
                            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-12">
                                <User className="w-16 h-16 text-white" />
                            </div>
                            <h3 className="text-4xl font-semibold text-amber-800 mb-8">Професионален екип</h3>
                            <p className="text-2xl text-amber-600">Нашият опитен екип ще ви помогне да намерите перфектния спътник.</p>
                        </div>

                        <div className="text-center bg-white rounded-3xl p-16 shadow-2xl hover:shadow-3xl transition-shadow">
                            <div className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-12">
                                <Heart className="w-16 h-16 text-white" />
                            </div>
                            <h3 className="text-4xl font-semibold text-amber-800 mb-8">Подкрепа за цял живот</h3>
                            <p className="text-2xl text-amber-600">Ще бъдем до вас и след осиновяването с съвети и помощ.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const LoginPage = () => (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-12">
            <div className="w-full">
                <div className="grid grid-cols-2 gap-20 items-center px-12">
                    <div className="text-left">
                        <div className="mb-12">
                            <Heart className="h-24 w-24 text-amber-600 mb-8" />
                            <h1 className="text-7xl font-bold text-amber-800 mb-8">Добре дошли обратно!</h1>
                            <p className="text-3xl text-amber-600">Влезте в профила си и открийте вашия нов приятел</p>
                        </div>
                    </div>

                    <div className="w-full max-w-2xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl p-12">
                            <div className="text-center mb-12">
                                <Heart className="mx-auto h-20 w-20 text-amber-600 mb-8" />
                                <h2 className="text-5xl font-bold text-amber-800">Вход</h2>
                                <p className="text-amber-600 mt-4 text-xl">Добре дошли обратно!</p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <label className="block text-amber-800 text-xl font-semibold mb-4">Име</label>
                                    <div className="relative">
                                        <User className="absolute left-5 top-5 h-7 w-7 text-amber-500" />
                                        <input
                                            type="text"
                                            value={loginData.username}
                                            onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                                            className="w-full pl-16 pr-6 py-5 text-xl border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50 bg-opacity-50"
                                            placeholder="Въведете вашето име"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-amber-800 text-xl font-semibold mb-4">Парола</label>
                                    <div className="relative">
                                        <Lock className="absolute left-5 top-5 h-7 w-7 text-amber-500" />
                                        <input
                                            type="password"
                                            value={loginData.password}
                                            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                                            className="w-full pl-16 pr-6 py-5 text-xl border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50 bg-opacity-50"
                                            placeholder="Въведете вашата парола"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={handleLogin}
                                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-5 rounded-xl text-xl font-semibold hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                                >
                                    <LogIn className="inline-block w-7 h-7 mr-3" />
                                    Влез
                                </button>
                            </div>

                            <div className="mt-10 text-center">
                                <p className="text-amber-600 text-xl">Нямате акаунт?</p>
                                <button
                                    onClick={() => setCurrentPage('register')}
                                    className="text-amber-700 text-xl font-semibold hover:text-amber-800 underline"
                                >
                                    Регистрирайте се тук
                                </button>
                            </div>

                            <div className="mt-8 text-center">
                                <button
                                    onClick={() => setCurrentPage('home')}
                                    className="text-amber-600 hover:text-amber-700 text-lg"
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
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-12">
            <div className="w-full">
                <div className="grid grid-cols-2 gap-20 items-center px-12">
                    <div className="text-left">
                        <div className="mb-12">
                            <Heart className="h-24 w-24 text-amber-600 mb-8" />
                            <h1 className="text-7xl font-bold text-amber-800 mb-8">Присъединете се към нас!</h1>
                            <p className="text-3xl text-amber-600">Създайте профил и започнете да помагате на животни в нужда</p>
                        </div>
                    </div>

                    <div className="w-full max-w-2xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl p-12">
                            <div className="text-center mb-12">
                                <Heart className="mx-auto h-20 w-20 text-amber-600 mb-8" />
                                <h2 className="text-5xl font-bold text-amber-800">Регистрация</h2>
                                <p className="text-amber-600 mt-4 text-xl">Присъединете се към нас!</p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <label className="block text-amber-800 text-xl font-semibold mb-4">Име</label>
                                    <div className="relative">
                                        <User className="absolute left-5 top-5 h-7 w-7 text-amber-500" />
                                        <input
                                            type="text"
                                            value={registerData.firstName}
                                            onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                                            className="w-full pl-16 pr-6 py-5 text-xl border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50 bg-opacity-50"
                                            placeholder="Въведете вашето име"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-amber-800 text-xl font-semibold mb-4">Фамилия</label>
                                    <div className="relative">
                                        <User className="absolute left-5 top-5 h-7 w-7 text-amber-500" />
                                        <input
                                            type="text"
                                            value={registerData.lastName}
                                            onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                                            className="w-full pl-16 pr-6 py-5 text-xl border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50 bg-opacity-50"
                                            placeholder="Въведете вашата фамилия"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-amber-800 text-xl font-semibold mb-4">Имейл</label>
                                    <div className="relative">
                                        <Mail className="absolute left-5 top-5 h-7 w-7 text-amber-500" />
                                        <input
                                            type="email"
                                            value={registerData.email}
                                            onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                                            className="w-full pl-16 pr-6 py-5 text-xl border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50 bg-opacity-50"
                                            placeholder="Въведете вашия имейл"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-amber-800 text-xl font-semibold mb-4">Парола</label>
                                    <div className="relative">
                                        <Lock className="absolute left-5 top-5 h-7 w-7 text-amber-500" />
                                        <input
                                            type="password"
                                            value={registerData.password}
                                            onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                                            className="w-full pl-16 pr-6 py-5 text-xl border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50 bg-opacity-50"
                                            placeholder="Въведете парола"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={handleRegister}
                                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-5 rounded-xl text-xl font-semibold hover:from-amber-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                                >
                                    <UserPlus className="inline-block w-7 h-7 mr-3" />
                                    Регистрирай се
                                </button>
                            </div>

                            <div className="mt-10 text-center">
                                <p className="text-amber-600 text-xl">Вече имате акаунт?</p>
                                <button
                                    onClick={() => setCurrentPage('login')}
                                    className="text-amber-700 text-xl font-semibold hover:text-amber-800 underline"
                                >
                                    Влезте тук
                                </button>
                            </div>

                            <div className="mt-8 text-center">
                                <button
                                    onClick={() => setCurrentPage('home')}
                                    className="text-amber-600 hover:text-amber-700 text-lg"
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
        <div className="min-h-screen w-full">
            <Navigation />
            {currentPage === 'home' && <HomePage />}
            {currentPage === 'login' && <LoginPage />}
            {currentPage === 'register' && <RegisterPage />}
        </div>
    );
};

export default App;