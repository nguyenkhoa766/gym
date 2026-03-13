// ===================================================================
// FitLife Pro — App Logic v2
// Meal Plans (7 days) + Workout (Chest/Shoulder/Abs + Running 5x/week)
// Gemini AI InBody Scanner
// ===================================================================

// ===== MEAL PLAN DATA =====
// Dinner at 18:00, gym 19:30-21:00
const mealPlanData = {
    1: {
        dayName: 'Thứ 2',
        meals: [
            { type: 'Bữa Sáng', emoji: '🌅', time: '6:15', items: [
                { name: '2 quả trứng luộc', cal: 140, protein: 12 },
                { name: '1 quả chuối', cal: 105, protein: 1 },
                { name: 'Rau luộc (200g)', cal: 50, protein: 3 }
            ]},
            { type: 'Bữa Trưa', emoji: '☀️', time: '12:00', items: [
                { name: '150g ức gà áp chảo', cal: 230, protein: 43 },
                { name: '1 chén cơm nhỏ (100g)', cal: 130, protein: 3 },
                { name: 'Rau xào tỏi (200g)', cal: 70, protein: 3 }
            ]},
            { type: 'Bữa Tối (nhà bác · 18:00)', emoji: '🌙', time: '18:00', items: [
                { name: 'Thịt/cá (ưu tiên nạc)', cal: 200, protein: 30 },
                { name: '1 chén cơm nhỏ', cal: 130, protein: 3 },
                { name: 'Rau + canh', cal: 80, protein: 4 }
            ]}
        ]
    },
    2: {
        dayName: 'Thứ 3',
        meals: [
            { type: 'Bữa Sáng', emoji: '🌅', time: '6:15', items: [
                { name: '150g ức gà luộc xé', cal: 230, protein: 43 },
                { name: '1/2 chén cơm', cal: 65, protein: 1.5 },
                { name: 'Rau sống + dưa leo', cal: 30, protein: 2 }
            ]},
            { type: 'Bữa Trưa', emoji: '☀️', time: '12:00', items: [
                { name: '3 trứng (2 nguyên + 1 lòng trắng)', cal: 190, protein: 19 },
                { name: '1 chén cơm nhỏ (100g)', cal: 130, protein: 3 },
                { name: 'Rau luộc (200g)', cal: 50, protein: 3 }
            ]},
            { type: 'Bữa Tối (nhà bác · 18:00)', emoji: '🌙', time: '18:00', items: [
                { name: 'Thịt/cá + đậu hũ', cal: 220, protein: 28 },
                { name: '1 chén cơm nhỏ', cal: 130, protein: 3 },
                { name: 'Canh rau', cal: 60, protein: 3 }
            ]}
        ]
    },
    3: {
        dayName: 'Thứ 4',
        meals: [
            { type: 'Bữa Sáng', emoji: '🌅', time: '6:15', items: [
                { name: '2 trứng chiên ít dầu', cal: 160, protein: 12 },
                { name: '1 quả chuối', cal: 105, protein: 1 },
                { name: 'Rau trộn (200g)', cal: 40, protein: 2 }
            ]},
            { type: 'Bữa Trưa', emoji: '☀️', time: '12:00', items: [
                { name: '150g ức gà nướng', cal: 230, protein: 43 },
                { name: '1 chén cơm nhỏ (100g)', cal: 130, protein: 3 },
                { name: 'Rau xào (200g)', cal: 70, protein: 3 }
            ]},
            { type: 'Bữa Tối (nhà bác · 18:00)', emoji: '🌙', time: '18:00', items: [
                { name: 'Thịt/cá (ưu tiên nạc)', cal: 200, protein: 30 },
                { name: '1 chén cơm nhỏ', cal: 130, protein: 3 },
                { name: 'Rau + canh', cal: 80, protein: 4 }
            ]}
        ]
    },
    4: {
        dayName: 'Thứ 5',
        meals: [
            { type: 'Bữa Sáng', emoji: '🌅', time: '6:15', items: [
                { name: '100g ức gà xé + 1 trứng luộc', cal: 220, protein: 35 },
                { name: '1/2 chén cơm', cal: 65, protein: 1.5 },
                { name: 'Rau luộc (200g)', cal: 50, protein: 3 }
            ]},
            { type: 'Bữa Trưa', emoji: '☀️', time: '12:00', items: [
                { name: '2 trứng + rau', cal: 170, protein: 14 },
                { name: '1 chén cơm nhỏ (100g)', cal: 130, protein: 3 },
                { name: '1 quả chuối (sau bữa)', cal: 105, protein: 1 }
            ]},
            { type: 'Bữa Tối (nhà bác · 18:00)', emoji: '🌙', time: '18:00', items: [
                { name: 'Thịt/cá nạc', cal: 200, protein: 30 },
                { name: '1 chén cơm nhỏ', cal: 130, protein: 3 },
                { name: 'Rau + canh', cal: 80, protein: 4 }
            ]}
        ]
    },
    5: {
        dayName: 'Thứ 6',
        meals: [
            { type: 'Bữa Sáng', emoji: '🌅', time: '6:15', items: [
                { name: '2 trứng luộc + rau trộn', cal: 170, protein: 14 },
                { name: '1 quả chuối', cal: 105, protein: 1 }
            ]},
            { type: 'Bữa Trưa', emoji: '☀️', time: '12:00', items: [
                { name: '150g ức gà chiên ít dầu', cal: 250, protein: 43 },
                { name: '1 chén cơm nhỏ (100g)', cal: 130, protein: 3 },
                { name: 'Rau luộc (250g)', cal: 60, protein: 4 }
            ]},
            { type: 'Bữa Tối (nhà bác · 18:00)', emoji: '🌙', time: '18:00', items: [
                { name: 'Thịt/cá + đậu hũ', cal: 210, protein: 28 },
                { name: '1 chén cơm nhỏ', cal: 130, protein: 3 },
                { name: 'Rau + canh', cal: 80, protein: 4 }
            ]}
        ]
    },
    6: {
        dayName: 'Thứ 7',
        meals: [
            { type: 'Bữa Sáng', emoji: '🌅', time: '7:30', items: [
                { name: '150g ức gà luộc', cal: 230, protein: 43 },
                { name: '1 quả chuối', cal: 105, protein: 1 },
                { name: 'Rau sống', cal: 30, protein: 2 }
            ]},
            { type: 'Bữa Trưa', emoji: '☀️', time: '12:00', items: [
                { name: '3 trứng (2 nguyên + 1 lòng trắng)', cal: 190, protein: 19 },
                { name: '1 chén cơm nhỏ (100g)', cal: 130, protein: 3 },
                { name: 'Rau xào tỏi (200g)', cal: 70, protein: 3 }
            ]},
            { type: 'Bữa Tối (nhà bác · 18:00)', emoji: '🌙', time: '18:00', items: [
                { name: 'Thịt/cá (ưu tiên nạc)', cal: 200, protein: 30 },
                { name: '1 chén cơm nhỏ', cal: 130, protein: 3 },
                { name: 'Rau + canh nhiều', cal: 90, protein: 5 }
            ]}
        ]
    },
    7: {
        dayName: 'Chủ Nhật',
        meals: [
            { type: 'Bữa Sáng', emoji: '🌅', time: '8:00', items: [
                { name: '2 trứng ốp la ít dầu', cal: 160, protein: 12 },
                { name: '1/2 chén cơm', cal: 65, protein: 1.5 },
                { name: 'Rau luộc (200g)', cal: 50, protein: 3 }
            ]},
            { type: 'Bữa Trưa', emoji: '☀️', time: '12:00', items: [
                { name: '120g ức gà áp chảo', cal: 185, protein: 34 },
                { name: '1 chén cơm nhỏ (100g)', cal: 130, protein: 3 },
                { name: 'Rau xào (200g)', cal: 70, protein: 3 },
                { name: '1 quả chuối', cal: 105, protein: 1 }
            ]},
            { type: 'Bữa Tối (nhà bác · 18:00)', emoji: '🌙', time: '18:00', items: [
                { name: 'Thịt/cá nạc', cal: 200, protein: 30 },
                { name: '1 chén cơm nhỏ', cal: 130, protein: 3 },
                { name: 'Rau + canh', cal: 80, protein: 4 }
            ]}
        ]
    }
};

// ===== WORKOUT DATA — Chest/Shoulder/Abs Focus + Running (19:30-21:00) =====
const workoutData = {
    1: { // Thứ 2 — CHEST + ABS + Running
        dayName: 'Thứ 2',
        type: 'Chest + Abs',
        typeVi: 'Ngực + Bụng',
        badge: 'STRENGTH + RUN',
        icon: '💪',
        hasHIIT: true,
        exercises: [
            { name: 'Flat Barbell Bench Press', sets: 4, reps: '8-10', rest: '2-3 phút', compound: true },
            { name: 'Incline Dumbbell Press', sets: 4, reps: '10-12', rest: '2 phút', compound: true },
            { name: 'Cable Fly (giữa ngực)', sets: 3, reps: '12-15', rest: '60 giây', compound: false },
            { name: 'Dips (nghiêng trước, ưu tiên ngực)', sets: 3, reps: '10-12', rest: '90 giây', compound: true },
            { name: 'Pec Deck Fly (máy)', sets: 3, reps: '12-15', rest: '60 giây', compound: false },
            { name: 'Cable Crunch', sets: 3, reps: '15-20', rest: '60 giây', compound: false },
            { name: 'Hanging Leg Raise', sets: 3, reps: '12-15', rest: '60 giây', compound: false },
            { name: 'Plank', sets: 3, reps: '45-60 giây', rest: '45 giây', compound: false }
        ],
        hiit: {
            name: '🏃 Chạy bộ Intervals trên máy',
            protocol: '1 phút chạy nhanh (10-12 km/h) / 1 phút đi bộ nhanh (6 km/h)',
            rounds: 8,
            duration: '16 phút',
            note: 'Khởi động 2 phút đi bộ. Tăng dần tốc độ sprint mỗi tuần.'
        }
    },
    2: { // Thứ 3 — SHOULDER + ABS
        dayName: 'Thứ 3',
        type: 'Shoulder + Abs',
        typeVi: 'Vai + Bụng',
        badge: 'STRENGTH',
        icon: '🔥',
        hasHIIT: false,
        exercises: [
            { name: 'Overhead Press (đứng)', sets: 4, reps: '8-10', rest: '2-3 phút', compound: true },
            { name: 'Dumbbell Lateral Raise', sets: 4, reps: '12-15', rest: '60 giây', compound: false },
            { name: 'Face Pull (rear delt)', sets: 3, reps: '15-20', rest: '60 giây', compound: false },
            { name: 'Arnold Press', sets: 3, reps: '10-12', rest: '90 giây', compound: true },
            { name: 'Cable Front Raise', sets: 3, reps: '12-15', rest: '60 giây', compound: false },
            { name: 'Reverse Pec Deck (vai sau)', sets: 3, reps: '15-20', rest: '60 giây', compound: false },
            { name: 'Ab Roller / Bánh xe tập bụng', sets: 3, reps: '10-12', rest: '60 giây', compound: false },
            { name: 'Russian Twist (tạ)', sets: 3, reps: '20 (10/bên)', rest: '45 giây', compound: false }
        ]
    },
    3: { // Thứ 4 — REST + Light Run
        dayName: 'Thứ 4',
        type: 'Active Recovery',
        typeVi: 'Nghỉ Ngơi + Chạy Nhẹ',
        badge: 'REST + RUN',
        icon: '🧘',
        isRest: true,
        restActivities: [
            '🏃 Chạy bộ nhẹ (easy run) 20-30 phút, pace thoải mái',
            'Foam rolling toàn thân 15 phút',
            'Giãn cơ vai, ngực, bụng 10 phút',
            'Ngủ đủ 7-8 tiếng để cơ phục hồi'
        ]
    },
    4: { // Thứ 5 — CHEST + SHOULDER (combo) + Running
        dayName: 'Thứ 5',
        type: 'Chest + Shoulder',
        typeVi: 'Ngực + Vai Combo',
        badge: 'STRENGTH + RUN',
        icon: '🏋️',
        hasHIIT: true,
        exercises: [
            { name: 'Incline Barbell Bench Press', sets: 4, reps: '8-10', rest: '2-3 phút', compound: true },
            { name: 'Dumbbell Shoulder Press', sets: 4, reps: '10-12', rest: '2 phút', compound: true },
            { name: 'Decline Dumbbell Press', sets: 3, reps: '10-12', rest: '90 giây', compound: true },
            { name: 'Cable Lateral Raise', sets: 4, reps: '12-15', rest: '60 giây', compound: false },
            { name: 'Low Cable Crossover (ngực trên)', sets: 3, reps: '12-15', rest: '60 giây', compound: false },
            { name: 'Upright Row (dây cáp)', sets: 3, reps: '12-15', rest: '60 giây', compound: true },
            { name: 'Decline Sit-up', sets: 3, reps: '15-20', rest: '60 giây', compound: false },
            { name: 'Mountain Climber', sets: 3, reps: '30 giây', rest: '30 giây', compound: false }
        ],
        hiit: {
            name: '🏃 Chạy bộ Tempo Run',
            protocol: '5 phút khởi động → 10 phút chạy nhanh vừa (8-9 km/h) → 3 phút hạ nhiệt',
            rounds: 1,
            duration: '18 phút',
            note: 'Tempo run = chạy ở ngưỡng "khó nói chuyện". Cực kỳ hiệu quả đốt mỡ bụng.'
        }
    },
    5: { // Thứ 6 — BACK + ARMS + ABS + Running
        dayName: 'Thứ 6',
        type: 'Back + Arms + Abs',
        typeVi: 'Lưng + Tay + Bụng',
        badge: 'STRENGTH + RUN',
        icon: '💪',
        hasHIIT: true,
        exercises: [
            { name: 'Deadlift', sets: 4, reps: '6-8', rest: '3 phút', compound: true },
            { name: 'Lat Pulldown', sets: 4, reps: '10-12', rest: '90 giây', compound: true },
            { name: 'Seated Cable Row', sets: 3, reps: '10-12', rest: '90 giây', compound: true },
            { name: 'Barbell Curl', sets: 3, reps: '10-12', rest: '60 giây', compound: false },
            { name: 'Tricep Pushdown', sets: 3, reps: '12-15', rest: '60 giây', compound: false },
            { name: 'Hammer Curl', sets: 3, reps: '12-15', rest: '60 giây', compound: false },
            { name: 'Hanging Knee Raise', sets: 3, reps: '15-20', rest: '60 giây', compound: false },
            { name: 'Plank', sets: 3, reps: '60 giây', rest: '45 giây', compound: false }
        ],
        hiit: {
            name: '🏃 Chạy bộ Intervals',
            protocol: '1 phút chạy nhanh (10 km/h) / 1 phút đi bộ (5.5 km/h)',
            rounds: 8,
            duration: '16 phút',
            note: 'Chạy bộ = bài tập chân duy nhất. Đủ để giữ cơ chân và đốt mỡ hiệu quả.'
        }
    },
    6: { // Thứ 7 — FULL BODY + Running
        dayName: 'Thứ 7',
        type: 'Full Body + Run',
        typeVi: 'Toàn Thân + Chạy',
        badge: 'FULL BODY + RUN',
        icon: '🔥',
        hasHIIT: true,
        exercises: [
            { name: 'Bench Press (nhẹ, pump)', sets: 3, reps: '12-15', rest: '90 giây', compound: true },
            { name: 'Pull-up / Lat Pulldown', sets: 3, reps: '8-10', rest: '2 phút', compound: true },
            { name: 'Dumbbell Lateral Raise', sets: 3, reps: '15-20', rest: '60 giây', compound: false },
            { name: 'Barbell Row', sets: 3, reps: '10-12', rest: '90 giây', compound: true },
            { name: 'Goblet Squat', sets: 3, reps: '12-15', rest: '90 giây', compound: true },
            { name: 'Plank', sets: 3, reps: '60 giây', rest: '45 giây', compound: false },
            { name: 'Bicycle Crunch', sets: 3, reps: '20 (10/bên)', rest: '45 giây', compound: false }
        ],
        hiit: {
            name: '🏃 Chạy bộ Sprint Intervals',
            protocol: '30 giây sprint tối đa / 60 giây đi bộ',
            rounds: 8,
            duration: '12 phút',
            note: 'Sprint hết sức! Đây là bài đốt mỡ mạnh nhất. Tốc độ sprint 12-15 km/h.'
        }
    },
    7: { // Chủ nhật — FULL REST
        dayName: 'Chủ Nhật',
        type: 'Rest Day',
        typeVi: 'Nghỉ Ngơi Hoàn Toàn',
        badge: 'REST',
        icon: '😴',
        isRest: true,
        restActivities: [
            'Nghỉ ngơi hoàn toàn — KHÔNG tập',
            'Đi bộ nhẹ nhàng 20-30 phút ngoài trời',
            'Foam rolling + giãn cơ 15 phút',
            'Chuẩn bị meal prep cho tuần mới',
            'Ngủ sớm, nghỉ ngơi đầy đủ 8 tiếng'
        ]
    }
};


// ===== RENDER: MEALS =====
function renderMeals(dayNum) {
    const container = document.getElementById('meals-container');
    const dayData = mealPlanData[dayNum];
    if (!dayData) return;

    let totalCal = 0, totalProtein = 0;
    let html = '';
    dayData.meals.forEach((meal, idx) => {
        let mealCal = 0, mealProtein = 0;
        meal.items.forEach(i => { mealCal += i.cal; mealProtein += i.protein; });
        totalCal += mealCal;
        totalProtein += mealProtein;

        html += `
            <div class="meal-card" style="animation-delay: ${idx * 0.1}s">
                <div class="meal-header">
                    <span class="meal-emoji">${meal.emoji}</span>
                    <div><div class="meal-type">${meal.type}</div><div class="meal-time">${meal.time}</div></div>
                </div>
                <ul class="meal-items">
                    ${meal.items.map(i => `<li><span class="meal-item-name">${i.name}</span><span class="meal-item-cal">${i.cal} kcal · ${i.protein}g P</span></li>`).join('')}
                </ul>
                <div class="meal-total">
                    <span class="meal-total-label">Tổng bữa</span>
                    <span class="meal-total-value">${mealCal} kcal · ${mealProtein}g protein</span>
                </div>
            </div>`;
    });

    html += `
        <div class="meal-card" style="animation-delay: 0.3s; border-color: rgba(0, 245, 160, 0.2); background: rgba(0, 245, 160, 0.04);">
            <div class="meal-header"><span class="meal-emoji">📊</span><div>
                <div class="meal-type">Tổng Ngày ${dayData.dayName}</div>
                <div class="meal-time">Mục tiêu: ~1,800 kcal</div></div></div>
            <ul class="meal-items">
                <li><span class="meal-item-name">Tổng calo</span>
                    <span class="meal-item-cal" style="color: ${totalCal <= 1900 ? '#00f5a0' : '#f5a623'}; font-weight: 700;">${totalCal} kcal</span></li>
                <li><span class="meal-item-name">Tổng protein</span>
                    <span class="meal-item-cal" style="color: #00d9f5; font-weight: 700;">${totalProtein}g</span></li>
                <li><span class="meal-item-name">So với mục tiêu</span>
                    <span class="meal-item-cal" style="color: ${totalCal <= 1800 ? '#00f5a0' : '#f5a623'}; font-weight: 700;">
                        ${totalCal <= 1800 ? '✅ Đạt' : '⚠️ Hơi cao, giảm cơm tối'}</span></li>
            </ul>
            <div class="meal-total" style="background: rgba(0, 245, 160, 0.12);">
                <span class="meal-total-label">Thâm hụt ước tính</span>
                <span class="meal-total-value">~${2200 - totalCal} kcal</span>
            </div>
        </div>`;

    container.innerHTML = html;
}

// ===== RENDER: WORKOUT =====
function renderWorkout(dayNum) {
    const container = document.getElementById('workout-container');
    const data = workoutData[dayNum];
    if (!data) return;

    if (data.isRest) {
        container.innerHTML = `
            <div class="workout-day" style="text-align: center;">
                <div class="rest-day-content">
                    <div class="rest-emoji">${data.icon}</div>
                    <h3>${data.typeVi}</h3>
                    <p>Nghỉ ngơi là một phần quan trọng. Cơ bắp cần thời gian phục hồi và phát triển.</p>
                    <ul style="list-style: none; margin-top: 24px; text-align: left; max-width: 400px; margin-left: auto; margin-right: auto;">
                        ${data.restActivities.map(a => `<li style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.04); color: var(--text-secondary); font-size: 0.875rem;">✅ ${a}</li>`).join('')}
                    </ul>
                </div>
            </div>`;
        return;
    }

    let html = `
        <div class="workout-day">
            <div class="workout-day-header">
                <div class="workout-day-title">${data.icon} ${data.typeVi} — <span>${data.type}</span></div>
                <span class="workout-day-badge ${data.hasHIIT ? 'cardio' : ''}">${data.badge}</span>
            </div>
            <table class="exercise-table">
                <thead><tr><th>Bài tập</th><th>Sets</th><th>Reps</th><th>Nghỉ</th></tr></thead>
                <tbody>
                    ${data.exercises.map(ex => `<tr>
                        <td><span class="exercise-name">${ex.name}${ex.compound ? '<span class="compound-tag">Compound</span>' : ''}</span></td>
                        <td>${ex.sets}</td><td>${ex.reps}</td><td>${ex.rest}</td>
                    </tr>`).join('')}
                </tbody>
            </table>`;

    if (data.hasHIIT && data.hiit) {
        html += `
            <div class="hiit-section">
                <h4>⚡ ${data.hiit.name}</h4>
                <p>${data.hiit.note}</p>
                <div class="hiit-protocol">
                    <div class="hiit-item"><div class="hiit-value">${data.hiit.rounds}</div><div class="hiit-label">Rounds</div></div>
                    <div class="hiit-item"><div class="hiit-value">${data.hiit.duration}</div><div class="hiit-label">Tổng thời gian</div></div>
                    <div class="hiit-item"><div class="hiit-value" style="font-size: 0.9rem;">${data.hiit.protocol}</div><div class="hiit-label">Protocol</div></div>
                </div>
            </div>`;
    }

    html += '</div>';
    container.innerHTML = html;
}

// ===== TAB SWITCHING =====
function setupTabs(tabsId, renderFn) {
    const el = document.getElementById(tabsId);
    if (!el) return;
    el.addEventListener('click', (e) => {
        const tab = e.target.closest('.day-tab');
        if (!tab) return;
        el.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderFn(parseInt(tab.dataset.day));
    });
}

// ===== ANIMATED COUNTERS =====
function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const start = performance.now();
    (function update(now) {
        const p = Math.min((now - start) / 1500, 1);
        el.textContent = ((1 - Math.pow(1 - p, 3)) * target).toFixed(1);
        if (p < 1) requestAnimationFrame(update);
    })(start);
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.stat-bar').forEach(b => { setTimeout(() => b.style.width = b.dataset.progress+'%', 200); }); obs.unobserve(e.target); }});
    }, { threshold: 0.2 });
    const sg = document.querySelector('.stats-grid');
    if (sg) obs.observe(sg);

    const fo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: 0.1 });
    document.querySelectorAll('.stat-card, .tip-card, .method-card, .timeline-item, .principle').forEach(el => { el.classList.add('fade-in'); fo.observe(el); });
}

// ===== NAVBAR =====
function setupNavbar() {
    const nav = document.getElementById('main-nav');
    const toggle = document.getElementById('nav-toggle');
    const links = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

    if (toggle && links) {
        toggle.addEventListener('click', () => links.classList.toggle('open'));
        links.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => links.classList.remove('open')));
    }

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const sp = window.scrollY + 100;
        sections.forEach(s => {
            if (s.offsetTop <= sp && s.offsetTop + s.offsetHeight > sp) {
                const id = s.getAttribute('id');
                document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
            }
        });
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});


// =======================================================================
// GEMINI AI — InBody Photo Scanner
// =======================================================================

let selectedFile = null;
let parsedInBodyData = null;

function setupGeminiAI() {
    const keyInput = document.getElementById('gemini-key');
    const saveBtn = document.getElementById('save-key-btn');
    const uploadArea = document.getElementById('ai-upload-area');
    const uploadContent = document.getElementById('ai-upload-content');
    const fileInput = document.getElementById('inbody-file');
    const previewEl = document.getElementById('ai-preview');
    const previewImg = document.getElementById('ai-preview-img');
    const removeBtn = document.getElementById('ai-remove-img');
    const analyzeBtn = document.getElementById('ai-analyze-btn');
    const resultEl = document.getElementById('ai-result');
    const resultContent = document.getElementById('ai-result-content');
    const applyBtn = document.getElementById('ai-apply-btn');
    const errorEl = document.getElementById('ai-error');

    if (!keyInput) return;

    // Load saved key
    const savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey) {
        keyInput.value = savedKey;
        saveBtn.textContent = '✅ Đã lưu';
        saveBtn.classList.add('saved');
    }

    // Save key
    saveBtn.addEventListener('click', () => {
        const key = keyInput.value.trim();
        if (key) {
            localStorage.setItem('gemini_api_key', key);
            saveBtn.textContent = '✅ Đã lưu';
            saveBtn.classList.add('saved');
            setTimeout(() => { saveBtn.textContent = 'Lưu'; saveBtn.classList.remove('saved'); }, 2000);
        }
    });

    // Upload area click
    uploadArea.addEventListener('click', (e) => {
        if (e.target.closest('.ai-remove-btn')) return;
        fileInput.click();
    });

    // Drag & drop
    uploadArea.addEventListener('dragover', (e) => { e.preventDefault(); uploadArea.classList.add('drag-over'); });
    uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('drag-over'));
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) handleFile(file);
    });

    // File input change
    fileInput.addEventListener('change', () => {
        if (fileInput.files[0]) handleFile(fileInput.files[0]);
    });

    function handleFile(file) {
        if (file.size > 10 * 1024 * 1024) {
            showError('File quá lớn! Tối đa 10MB.');
            return;
        }
        selectedFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImg.src = e.target.result;
            uploadContent.hidden = true;
            previewEl.hidden = false;
            analyzeBtn.disabled = false;
        };
        reader.readAsDataURL(file);
    }

    // Remove image
    removeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        selectedFile = null;
        previewEl.hidden = true;
        uploadContent.hidden = false;
        analyzeBtn.disabled = true;
        fileInput.value = '';
        resultEl.hidden = true;
        errorEl.hidden = true;
    });

    // Analyze button
    analyzeBtn.addEventListener('click', async () => {
        const apiKey = localStorage.getItem('gemini_api_key') || keyInput.value.trim();
        if (!apiKey) { showError('Vui lòng nhập Gemini API key trước!'); return; }
        if (!selectedFile) { showError('Vui lòng chọn ảnh InBody!'); return; }

        // Show loading
        analyzeBtn.disabled = true;
        analyzeBtn.querySelector('.ai-analyze-text').hidden = true;
        analyzeBtn.querySelector('.ai-analyze-loading').hidden = false;
        resultEl.hidden = true;
        errorEl.hidden = true;

        try {
            const base64 = await fileToBase64(selectedFile);
            const data = await callGeminiAPI(apiKey, base64, selectedFile.type);
            parsedInBodyData = data;
            showResult(data);
        } catch (err) {
            showError(err.message || 'Có lỗi xảy ra khi phân tích ảnh.');
        } finally {
            analyzeBtn.disabled = false;
            analyzeBtn.querySelector('.ai-analyze-text').hidden = false;
            analyzeBtn.querySelector('.ai-analyze-loading').hidden = true;
        }
    });

    // Apply button
    applyBtn.addEventListener('click', () => {
        if (parsedInBodyData) {
            applyDataToPage(parsedInBodyData);
            applyBtn.textContent = '✅ Đã áp dụng!';
            setTimeout(() => applyBtn.textContent = 'Áp dụng lên trang', 2000);
        }
    });

    function showError(msg) {
        errorEl.textContent = '❌ ' + msg;
        errorEl.hidden = false;
    }

    function showResult(data) {
        // Build comparison table
        let rows = '';
        const fields = [
            { key: 'weight', label: 'Cân nặng', unit: 'kg' },
            { key: 'height', label: 'Chiều cao', unit: 'cm' },
            { key: 'bmi', label: 'BMI', unit: '' },
            { key: 'pbf', label: 'PBF (%)', unit: '%' },
            { key: 'muscle', label: 'Cơ xương', unit: 'kg' },
            { key: 'fatMass', label: 'Khối lượng mỡ', unit: 'kg' },
            { key: 'bmr', label: 'BMR', unit: 'kcal' },
            { key: 'score', label: 'Điểm InBody', unit: '/100' },
            { key: 'visceralFat', label: 'Mỡ nội tạng', unit: '' },
            { key: 'waistHip', label: 'Tỷ lệ eo-hông', unit: '' },
            { key: 'targetWeight', label: 'CN mục tiêu', unit: 'kg' }
        ];

        fields.forEach(f => {
            if (data[f.key] !== undefined && data[f.key] !== null) {
                rows += `<tr><td>${f.label}</td><td><span class="new-val">${data[f.key]} ${f.unit}</span></td></tr>`;
            }
        });

        resultContent.innerHTML = `
            <p>Gemini AI đã đọc thành công kết quả InBody từ ảnh:</p>
            <table><thead><tr><th>Chỉ số</th><th>Giá trị mới</th></tr></thead>
            <tbody>${rows}</tbody></table>
            <p style="margin-top: 12px; color: var(--accent-green);">Nhấn <strong>"Áp dụng lên trang"</strong> để cập nhật tất cả chỉ số.</p>`;

        resultEl.hidden = false;
    }
}

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

async function callGeminiAPI(apiKey, base64Data, mimeType) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const prompt = `Analyze this InBody body composition report image. Extract these values and return ONLY a valid JSON object (no markdown, no code blocks, just raw JSON):

{
  "weight": number (kg),
  "height": number (cm),
  "bmi": number,
  "pbf": number (body fat percentage),
  "muscle": number (skeletal muscle mass in kg),
  "fatMass": number (body fat mass in kg),
  "bmr": number (basal metabolic rate in kcal),
  "score": number (InBody score out of 100),
  "visceralFat": number (visceral fat level),
  "waistHip": number (waist-hip ratio),
  "targetWeight": number (target weight in kg, if shown),
  "age": number,
  "gender": "male" or "female",
  "date": "date string if visible"
}

If a value is not visible or unclear, set it to null. Return ONLY the JSON, nothing else.`;

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{
                parts: [
                    { text: prompt },
                    { inlineData: { mimeType, data: base64Data } }
                ]
            }]
        })
    });

    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error?.message || `API lỗi: ${response.status}`);
    }

    const result = await response.json();
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('Không nhận được kết quả từ Gemini.');

    // Parse JSON from response (handle possible markdown code blocks)
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    try {
        return JSON.parse(cleaned);
    } catch {
        throw new Error('Không thể đọc dữ liệu từ ảnh. Hãy thử chụp rõ hơn.');
    }
}

function applyDataToPage(data) {
    // Update hero stat counters
    const heroValues = document.querySelectorAll('.hero-stat-value[data-target]');
    if (data.weight && heroValues[0]) {
        heroValues[0].dataset.target = data.weight;
        heroValues[0].textContent = data.weight;
    }
    if (data.targetWeight && heroValues[1]) {
        heroValues[1].dataset.target = data.targetWeight;
        heroValues[1].textContent = data.targetWeight;
    }

    // Update body card
    if (data.score) {
        const scoreNum = document.querySelector('.score-number');
        if (scoreNum) scoreNum.textContent = data.score;
        // Update ring
        const ring = document.querySelector('.score-ring circle:nth-child(2)');
        if (ring) {
            const offset = 326.7 * (1 - data.score / 100);
            ring.setAttribute('stroke-dashoffset', offset);
        }
    }
    if (data.age || data.gender) {
        const nameEl = document.querySelector('.body-card-name');
        if (nameEl && data.age) nameEl.textContent = `${data.gender === 'female' ? 'Nữ' : 'Nam'}, ${data.age} tuổi`;
    }
    if (data.height) {
        const heightEl = document.querySelector('.body-card-height');
        if (heightEl) heightEl.textContent = data.height + ' cm';
    }
    if (data.bmr) {
        const metrics = document.querySelectorAll('.metric-value');
        if (metrics[0]) metrics[0].textContent = data.bmr.toLocaleString() + ' kcal';
    }

    // Update stat cards
    const statCards = document.querySelectorAll('.stat-card');
    const updates = [
        { idx: 0, value: data.weight, unit: 'kg', target: data.targetWeight },
        { idx: 1, value: data.bmi, unit: '' },
        { idx: 2, value: data.pbf, unit: '%' },
        { idx: 3, value: data.muscle, unit: 'kg' },
        { idx: 4, value: data.visceralFat ? `Mức ${data.visceralFat}` : null, unit: '' },
        { idx: 5, value: data.waistHip, unit: '' }
    ];

    updates.forEach(u => {
        if (u.value !== null && u.value !== undefined && statCards[u.idx]) {
            const valEl = statCards[u.idx].querySelector('.stat-value-lg');
            if (valEl) {
                if (typeof u.value === 'number') {
                    valEl.innerHTML = `${u.value} <small>${u.unit}</small>`;
                } else {
                    valEl.textContent = u.value;
                }
            }
        }
    });

    // Update hero subtitle
    if (data.weight && data.targetWeight) {
        const diff = (data.weight - data.targetWeight).toFixed(1);
        const subtitle = document.querySelector('.hero-subtitle');
        if (subtitle) {
            subtitle.innerHTML = `Chương trình cá nhân hóa dành riêng cho bạn — Mục tiêu giảm <strong>${diff} kg</strong> cân nặng.`;
        }
    }

    // Save to localStorage
    localStorage.setItem('inbody_data', JSON.stringify(data));
}

// Load saved data on startup
function loadSavedInBodyData() {
    const saved = localStorage.getItem('inbody_data');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            applyDataToPage(data);
        } catch {}
    }
}


// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderMeals(1);
    renderWorkout(1);
    setupTabs('meal-tabs', renderMeals);
    setupTabs('workout-tabs', renderWorkout);
    setupScrollAnimations();
    setupNavbar();
    setupGeminiAI();
    loadSavedInBodyData();

    document.querySelectorAll('.hero-stat-value[data-target]').forEach(el => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) { animateCounter(el); obs.unobserve(el); }});
        });
        obs.observe(el);
    });
});
