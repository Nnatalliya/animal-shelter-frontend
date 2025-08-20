import React, { useState, useEffect } from "react";
import animalsData from "./assets/animals.json";
import { Heart, Search } from "lucide-react";

const AnimalsPage = ({ setCurrentPage }) => {
    const [animals, setAnimals] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        setAnimals(animalsData);
    }, []);

    // Филтрирани животни
    const filteredAnimals = animals.filter((animal) => {
        const matchesSearch = animal.name.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === "all" || animal.type.toLowerCase() === filter.toLowerCase();
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-12">
            <h1 className="text-6xl font-bold text-amber-800 text-center mb-12">
                Нашите животни
            </h1>

            {/* Контроли: търсачка + филтър */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
                <div className="relative w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="🔍 Търси по име..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-amber-300 focus:ring-2 focus:ring-amber-400 outline-none"
                    />
                    <Search className="absolute left-3 top-3.5 text-amber-600 w-5 h-5" />
                </div>

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="px-6 py-3 rounded-xl border-2 border-amber-300 bg-white text-amber-800 font-semibold focus:ring-2 focus:ring-amber-400 outline-none"
                >
                    <option value="all">Всички</option>
                    <option value="куче">Кучета</option>
                    <option value="котка">Котки</option>
                </select>
            </div>

            {/* Картички */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredAnimals.length > 0 ? (
                    filteredAnimals.map((animal) => (
                        <div
                            key={animal.id}
                            className="card bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
                        >
                            <img
                                src={animal.image}
                                alt={animal.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-8">
                                <h2 className="text-3xl font-bold text-amber-800 mb-2">
                                    {animal.name}
                                </h2>
                                <p className="text-lg text-amber-600 mb-2">
                                    {animal.type} • {animal.age}
                                </p>
                                <p className="text-amber-700 mb-6">{animal.description}</p>
                                <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all duration-200 shadow-lg">
                                    <Heart className="inline-block w-5 h-5 mr-2" />
                                    Осинови ме
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-amber-700 text-xl col-span-full">
                        Няма намерени животни 😢
                    </p>
                )}
            </div>

            <div className="mt-16 text-center">
                <button
                    onClick={() => setCurrentPage("home")}
                    className="bg-white text-amber-800 px-8 py-3 rounded-xl text-lg font-semibold border-2 border-amber-300 hover:bg-amber-50 shadow-md transition"
                >
                    ← Обратно към началото
                </button>
            </div>
        </div>
    );
};

export default AnimalsPage;
