// Данные результатов матчей волейбольной лиги
const MATCH_RESULTS = {
    "tournament": "Волейбольный турнир 2026",
    "results": [
        // Тур 1
        {"match_id": 1, "gameweek": 1, "home": "Макиато", "away": "Dream team", "played": true, "sets": {"home": 2, "away": 1}, "set_scores": [{ "home": 25, "away": 20 },{ "home": 17, "away": 25 },{ "home": 25, "away": 23 }], "points": {"home": 2, "away": 1}},
        {"match_id": 2, "gameweek": 1, "home": "Серволюкс", "away": "Сетка 37", "played": true, "sets": {"home": 2, "away": 1}, "set_scores": [{ "home": 25, "away": 16 },{ "home": 13, "away": 25 },{ "home": 25, "away": 23 }], "points": {"home": 2, "away": 1}},
        {"match_id": 3, "gameweek": 1, "home": "Могилевгражданпроект", "away": "Отцы и дети", "played": true, "sets": {"home": 2, "away": 1}, "set_scores": [{ "home": 25, "away": 23 },{ "home": 25, "away": 23 },{ "home": 17, "away": 25 }], "points": {"home": 2, "away": 1}},
        {"match_id": 4, "gameweek": 1, "home": "33", "away": "Могилевгипрозем", "played": true, "sets": {"home": 2, "away": 1}, "set_scores": [{ "home": 25, "away": 23 },{ "home": 15, "away": 25 },{ "home": 25, "away": 16 }], "points": {"home": 2, "away": 1}},

        // Тур 2
        {"match_id": 5, "gameweek": 2, "home": "Dream team", "away": "Серволюкс", "played": true, "sets": {"home": 3, "away": 0}, "set_scores": [{ "home": 25, "away": 13 },{ "home": 25, "away": 16 },{ "home": 25, "away": 16 }], "points": {"home": 3, "away": 0}},
        {"match_id": 6, "gameweek": 2, "home": "Сетка 37", "away": "Могилевгражданпроект", "played": true, "sets": {"home": 1, "away": 2}, "set_scores": [{ "home": 24, "away": 26 },{ "home": 22, "away": 25 },{ "home": 25, "away": 18 }], "points": {"home": 1, "away": 2}},
        {"match_id": 7, "gameweek": 2, "home": "Отцы и дети", "away": "Могилевгипрозем", "played": true, "sets": {"home": 0, "away": 3}, "set_scores": [{ "home": 17, "away": 25 },{ "home": 17, "away": 25 },{ "home": 15, "away": 25 }], "points": {"home": 0, "away": 3}},
        {"match_id": 8, "gameweek": 2, "home": "33", "away": "Макиато", "played": true, "sets": {"home": 1, "away": 2}, "set_scores": [{ "home":20, "away": 25 },{ "home": 26, "away": 24 },{ "home": 20, "away": 25 }], "points": {"home": 1, "away": 2}},

        // Тур 3
        {"match_id": 9, "gameweek": 3, "home": "Макиато", "away": "Сетка 37", "played": true, "sets": {"home": 2, "away": 1}, "set_scores": [{ "home":25, "away": 27 },{ "home": 25, "away": 23 },{ "home": 25, "away": 16 }], "points": {"home": 2, "away": 1}},
        {"match_id": 10, "gameweek": 3, "home": "Серволюкс", "away": "Отцы и дети", "played": true, "sets": {"home": 0, "away": 3}, "set_scores": [{ "home":13, "away": 25 },{ "home": 16, "away": 25 },{ "home": 18, "away": 25 }], "points": {"home": 0, "away": 3}},
        {"match_id": 11, "gameweek": 3, "home": "33", "away": "Могилевгражданпроект", "played": true, "sets": {"home": 0, "away": 3}, "set_scores": [{ "home":22, "away": 25 },{ "home": 21, "away": 25 },{ "home": 18, "away": 25 }], "points": {"home": 0, "away": 3}},
        {"match_id": 12, "gameweek": 3, "home": "Могилевгипрозем", "away": "Dream team", "played": true, "sets": {"home": 1, "away": 2}, "set_scores": [{ "home":19, "away": 25 },{ "home": 20, "away": 25 },{ "home": 25, "away": 16 }], "points": {"home": 1, "away": 2}},

        // Тур 4
        {"match_id": 13, "gameweek": 4, "home": "Dream team", "away": "Могилевгражданпроект", "played": true, "sets": {"home": 1, "away": 2}, "set_scores": [{ "home":25, "away": 12 },{ "home": 17, "away": 25 },{ "home": 23, "away": 25 }], "points": {"home": 1, "away": 2}},
        {"match_id": 14, "gameweek": 4, "home": "Могилевгипрозем", "away": "Сетка 37", "played": true, "sets": {"home": 2, "away": 1}, "set_scores": [{ "home":22, "away": 25 },{ "home": 25, "away": 18 },{ "home": 25, "away": 22 }], "points": {"home": 2, "away": 1}},
        {"match_id": 15, "gameweek": 4, "home": "Отцы и дети", "away": "Макиато", "played": true, "sets": {"home": 3, "away": 0}, "set_scores": [{ "home":25, "away": 15 },{ "home": 25, "away": 19 },{ "home": 25, "away": 15 }], "points": {"home": 3, "away": 0}},
        {"match_id": 16, "gameweek": 4, "home": "33", "away": "Серволюкс", "played": true, "sets": {"home": 3, "away": 0}, "set_scores": [{ "home":25, "away": 19 },{ "home": 25, "away": 17 },{ "home": 25, "away": 22 }], "points": {"home": 3, "away": 0}},

        // Тур 5

        {"match_id": 18, "gameweek": 5, "home": "Серволюкс", "away": "Могилевгипрозем", "played": true, "sets": {"home": 1, "away": 2}, "set_scores": [{ "home":23, "away": 25 },{ "home": 17, "away": 25 },{ "home": 25, "away": 19 }], "points": {"home": 1, "away": 2}},
        {"match_id": 19, "gameweek": 5, "home": "Dream team", "away": "33", "played": true, "sets": {"home": 3, "away": 0}, "set_scores": [{ "home":25, "away": 19 },{ "home": 25, "away": 14 },{ "home": 25, "away": 17 }], "points": {"home": 3, "away": 0}},
        {"match_id": 20, "gameweek": 5, "home": "Сетка 37", "away": "Отцы и дети", "played": true, "sets": {"home": 1, "away": 2}, "set_scores": [{ "home":12, "away": 25 },{ "home": 25, "away": 21 },{ "home": 17, "away": 25 }], "points": {"home": 1, "away": 2}},

        // Тур 6
        {"match_id": 21, "gameweek": 6, "home": "Могилевгражданпроект", "away": "Серволюкс", "played": true, "sets": {"home": 2, "away": 1}, "set_scores": [{ "home":25, "away": 21 },{ "home": 23, "away": 25 },{ "home": 25, "away": 21 }], "points": {"home": 2, "away": 1}},
        {"match_id": 22, "gameweek": 6, "home": "Могилевгипрозем", "away": "Макиато", "played": true, "sets": {"home": 0, "away": 3}, "set_scores": [{ "home":18, "away": 25 },{ "home": 21, "away": 25 },{ "home": 20, "away": 25 }], "points": {"home": 0, "away": 3}},
        {"match_id": 23, "gameweek": 6, "home": "33", "away": "Сетка 37", "played": true, "sets": {"home": 0, "away": 3}, "set_scores": [{ "home":23, "away": 25 },{ "home": 19, "away": 25 },{ "home": 29, "away": 31 }], "points": {"home": 0, "away": 3}},
        {"match_id": 24, "gameweek": 6, "home": "Отцы и дети", "away": "Dream team", "played": true, "sets": {"home": 1, "away": 2}, "set_scores": [{ "home":25, "away": 27 },{ "home": 25, "away": 17 },{ "home": 22, "away": 25 }], "points": {"home": 1, "away": 2}},

        // Тур 7
        {"match_id": 17, "gameweek": 5, "home": "Макиато", "away": "Могилевгражданпроект", "played": true, "sets": {"home": 3, "away": 0}, "set_scores": [{ "home":25, "away": 10 },{ "home": 25, "away": 21 },{ "home": 25, "away": 19 }], "points": {"home": 3, "away": 0}},
        {"match_id": 25, "gameweek": 7, "home": "Макиато", "away": "Серволюкс", "played": true, "sets": {"home": 3, "away": 0}, "set_scores": [{ "home":25, "away": 17 },{ "home": 25, "away": 9 },{ "home": 25, "away": 23 }], "points": {"home": 3, "away": 0}},
        {"match_id": 26, "gameweek": 7, "home": "Dream team", "away": "Сетка 37", "played": true, "sets": {"home": 3, "away": 0}, "set_scores": [{ "home":26, "away": 24 },{ "home": 25, "away": 23 },{ "home": 25, "away": 23 }], "points": {"home": 3, "away": 0}},
        {"match_id": 27, "gameweek": 7, "home": "33", "away": "Отцы и дети", "played": true, "sets": {"home": 2, "away": 1}, "set_scores": [{ "home":25, "away": 19 },{ "home": 25, "away": 22 },{ "home": 23, "away": 25 }], "points": {"home": 2, "away": 1}},
        {"match_id": 28, "gameweek": 7, "home": "Могилевгипрозем", "away": "Могилевгражданпроект", "played": true, "sets": {"home": 1, "away": 2}, "set_scores": [{ "home":25, "away": 22 },{ "home": 21, "away": 25 },{ "home": 19, "away": 25 }], "points": {"home": 1, "away": 2}},

        // Тур 8
        {"match_id": 29, "gameweek": 8, "home": "Dream team", "away": "Макиато", "played": true, "sets": {"home": 2, "away": 1}, "set_scores": [{ "home":25, "away": 16 },{ "home": 12, "away": 25 },{ "home": 25, "away": 20 }], "points": {"home": 2, "away": 1}},
        {"match_id": 30, "gameweek": 8, "home": "Сетка 37", "away": "Серволюкс", "played": true, "sets": {"home": 2, "away": 1}, "set_scores": [{ "home":25, "away": 9 },{ "home": 25, "away": 13 },{ "home": 17, "away": 25 }], "points": {"home": 2, "away": 1}},
        {"match_id": 31, "gameweek": 8, "home": "Отцы и дети", "away": "Могилевгражданпроект", "played": true, "sets": {"home": 3, "away": 0}, "set_scores": [{ "home":25, "away": 22 },{ "home": 25, "away": 15 },{ "home": 25, "away": 20 }], "points": {"home": 3, "away": 0}},
        {"match_id": 32, "gameweek": 8, "home": "33", "away": "Могилевгипрозем", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},

        // Тур 9
        {"match_id": 33, "gameweek": 9, "home": "Серволюкс", "away": "Dream team", "played": true, "sets": {"home": 1, "away": 2}, "set_scores": [{ "home":26, "away": 28 },{ "home": 16, "away": 25 },{ "home": 25, "away": 19 }], "points": {"home": 1, "away": 2}},
        {"match_id": 34, "gameweek": 9, "home": "Могилевгражданпроект", "away": "Сетка 37", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 35, "gameweek": 9, "home": "Могилевгипрозем", "away": "Отцы и дети", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 36, "gameweek": 9, "home": "Макиато", "away": "33", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},

        // Тур 10
        {"match_id": 37, "gameweek": 10, "home": "Сетка 37", "away": "Макиато", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 38, "gameweek": 10, "home": "Отцы и дети", "away": "Серволюкс", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 39, "gameweek": 10, "home": "33", "away": "Могилевгражданпроект", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 40, "gameweek": 10, "home": "Dream team", "away": "Могилевгипрозем", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},

        // Тур 11
        {"match_id": 41, "gameweek": 11, "home": "Могилевгражданпроект", "away": "Макиато", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 42, "gameweek": 11, "home": "Могилевгипрозем", "away": "Серволюкс", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 43, "gameweek": 11, "home": "33", "away": "Dream team", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 44, "gameweek": 11, "home": "Отцы и дети", "away": "Сетка 37", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},

        // Тур 12
        {"match_id": 45, "gameweek": 12, "home": "Серволюкс", "away": "Могилевгражданпроект", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 46, "gameweek": 12, "home": "Макиато", "away": "Могилевгипрозем", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 47, "gameweek": 12, "home": "Сетка 37", "away": "33", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 48, "gameweek": 12, "home": "Dream team", "away": "Отцы и дети", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},

        // Тур 13
        {"match_id": 49, "gameweek": 13, "home": "Серволюкс", "away": "Макиато", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 50, "gameweek": 13, "home": "Сетка 37", "away": "Dream team", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 51, "gameweek": 13, "home": "Отцы и дети", "away": "33", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 52, "gameweek": 13, "home": "Могилевгражданпроект", "away": "Могилевгипрозем", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},

        // Тур 14
        {"match_id": 53, "gameweek": 14, "home": "Макиато", "away": "Отцы и дети", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 54, "gameweek": 14, "home": "Могилевгипрозем", "away": "Сетка 37", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 55, "gameweek": 14, "home": "Серволюкс", "away": "33", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}},
        {"match_id": 56, "gameweek": 14, "home": "Могилевгражданпроект", "away": "Dream team", "played": false, "sets": {"home": null, "away": null}, "set_scores": [], "points": {"home": null, "away": null}}
    ]
};


