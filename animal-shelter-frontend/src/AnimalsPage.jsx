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
        const matchesFilter = filter === "all" || animal.type === filter;
        return matchesSearch && matchesFilter;
    });

    const styles = {
        container: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #fef7ed, #fef3c7, #fef3c7)',
            padding: '2rem'
        },
        maxWidth: {
            maxWidth: '80rem',
            margin: '0 auto'
        },
        title: {
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#92400e',
            textAlign: 'center',
            marginBottom: '3rem'
        },
        controls: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
        },
        searchContainer: {
            position: 'relative',
            width: '100%',
            maxWidth: '20rem'
        },
        searchInput: {
            width: '100%',
            paddingLeft: '3rem',
            paddingRight: '1rem',
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem',
            borderRadius: '0.75rem',
            border: '2px solid #f59e0b',
            outline: 'none',
            color: '#92400e',
            fontWeight: '500'
        },
        searchIcon: {
            position: 'absolute',
            left: '0.75rem',
            top: '0.875rem',
            color: '#d97706',
            width: '1.25rem',
            height: '1.25rem'
        },
        select: {
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            border: '2px solid #f59e0b',
            backgroundColor: 'white',
            color: '#92400e',
            fontWeight: '600',
            outline: 'none'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
        },
        card: {
            backgroundColor: 'white',
            borderRadius: '1rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            border: '1px solid #fef3c7'
        },
        imageContainer: {
            position: 'relative',
            width: '100%',
            height: '300px',
            overflow: 'hidden'
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        },
        cardContent: {
            padding: '1.5rem'
        },
        cardHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '0.75rem'
        },
        cardTitle: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#92400e'
        },
        badge: {
            backgroundColor: '#fef3c7',
            color: '#d97706',
            padding: '0.25rem 0.75rem',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: '500'
        },
        age: {
            color: '#d97706',
            fontWeight: '500',
            marginBottom: '0.75rem'
        },
        description: {
            color: '#b45309',
            lineHeight: '1.6',
            marginBottom: '1.5rem',
            fontSize: '0.875rem'
        },
        button: {
            width: '100%',
            background: 'linear-gradient(90deg, #f59e0b, #eab308)',
            color: 'white',
            padding: '0.75rem 1rem',
            borderRadius: '0.75rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
        },
        noResults: {
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: '4rem 0'
        },
        noResultsEmoji: {
            fontSize: '4rem',
            marginBottom: '1rem'
        },
        noResultsText: {
            color: '#b45309',
            fontSize: '1.25rem',
            fontWeight: '500'
        },
        backButton: {
            marginTop: '4rem',
            textAlign: 'center'
        },
        backButtonStyle: {
            backgroundColor: 'white',
            color: '#92400e',
            padding: '1rem 2rem',
            borderRadius: '0.75rem',
            fontSize: '1.125rem',
            fontWeight: '600',
            border: '2px solid #f59e0b',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.maxWidth}>
                <h1 style={styles.title}>
                    Нашите животни
                </h1>

                {/* Контроли: търсачка + филтър */}
                <div style={styles.controls}>
                    <div style={styles.searchContainer}>
                        <input
                            type="text"
                            placeholder="🔍 Търси по име..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={styles.searchInput}
                        />
                        <Search style={styles.searchIcon} />
                    </div>

                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        style={styles.select}
                    >
                        <option value="all">Всички</option>
                        <option value="Куче">Кучета</option>
                        <option value="Котка">Котки</option>
                    </select>
                </div>

                {/* Картички */}
                <div style={styles.grid}>
                    {filteredAnimals.length > 0 ? (
                        filteredAnimals.map((animal) => (
                            <div
                                key={animal.id}
                                style={styles.card}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'scale(1)';
                                }}
                            >
                                {/* Квадратна снимка */}
                                <div style={styles.imageContainer}>
                                    <img
                                        src={animal.image}
                                        alt={animal.name}
                                        style={styles.image}
                                    />
                                </div>

                                {/* Съдържание на картичката */}
                                <div style={styles.cardContent}>
                                    <div style={styles.cardHeader}>
                                        <h2 style={styles.cardTitle}>
                                            {animal.name}
                                        </h2>
                                        <span style={styles.badge}>
                                            {animal.type === "Куче" ? "🐕" : "🐱"} {animal.type}
                                        </span>
                                    </div>

                                    <p style={styles.age}>
                                        Възраст: {animal.age}
                                    </p>

                                    <p style={styles.description}>
                                        {animal.description}
                                    </p>

                                    <button
                                        style={styles.button}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'linear-gradient(90deg, #d97706, #ca8a04)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'linear-gradient(90deg, #f59e0b, #eab308)';
                                        }}
                                    >
                                        <Heart size={20} />
                                        Осинови ме
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={styles.noResults}>
                            <div style={styles.noResultsEmoji}>😢</div>
                            <p style={styles.noResultsText}>
                                Няма намерени животни
                            </p>
                        </div>
                    )}
                </div>

                {/* Бутон за връщане */}
                <div style={styles.backButton}>
                    <button
                        onClick={() => setCurrentPage("home")}
                        style={styles.backButtonStyle}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#fef3c7';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'white';
                        }}
                    >
                        ← Обратно към началото
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnimalsPage;

