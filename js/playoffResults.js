// Данные результатов матчей плей-офф
//
// Как заполнять:
// 1. Когда матч не сыгран — оставляйте played: false, sets с null и пустой set_scores.
// 2. Когда матч сыгран — ставьте played: true и указывайте счёт по сетам.
// 3. В set_scores записывайте счёт каждого сыгранного сета по порядку.
//
// Обозначения матчей:
// - upper_semi_1 — полуфинал: 1-е место vs 4-е место
// - upper_semi_2 — полуфинал: 2-е место vs 3-е место
// - upper_final  — золотой матч
// - upper_third  — матч за 3-е место

const PLAYOFF_RESULTS = {
    "tournament": "Плей-офф 2026",
    "matches": [
        // Полуфинал: 1-е место vs 4-е место
        {"playoff_id": "upper_semi_1", "played": false, "sets": {"home": null, "away": null}, "set_scores": []},

        // Полуфинал: 2-е место vs 3-е место
        {"playoff_id": "upper_semi_2", "played": false, "sets": {"home": null, "away": null}, "set_scores": []},

        // Золотой матч
        {"playoff_id": "upper_final", "played": false, "sets": {"home": null, "away": null}, "set_scores": []},

        // Матч за 3-е место
        {"playoff_id": "upper_third", "played": false, "sets": {"home": null, "away": null}, "set_scores": []}
    ]
};

