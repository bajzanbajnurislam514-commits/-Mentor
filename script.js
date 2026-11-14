const MANAGER_PHONE = "+7 (777) 000-11-22";

const professionsData = [
    { id: "logoped", title: "Логопед-дефектолог", desc: "Помогает запустить речь, скорректировать звукопроизношение и развить словарный запас ребенка в мягкой игровой форме.", fact: "«Раннее обращение к логопеду в возрасте до 4 лет ускоряет процесс формирования чистой речи почти в два раза. Игровой формат помогает ребенку осваивать звуки без стресса.»", characterImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", bgImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80" },
    { id: "aba", title: "АВА-терапист", desc: "Помогает адаптировать поведение, развить навыки самообслуживания и социальную коммуникацию при расстройстве аутистического спектра.", fact: "«Системное применение АВА-терапии основано на позитивном подкреплении. Это помогает ребенку мягко усваивать социально важные бытовые навыки.»", characterImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80", bgImg: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80" },
    { id: "neuro", title: "Нейропсихолог", desc: "Работает с памятью, вниманием, пространственным мышлением и координацией движений через специальную нейрогимнастику.", fact: "«Мозг ребенка обладаем высокой пластичностью. Правильно подобранный курс нейрокоррекции помогает развить концентрацию и самоконтроль.»", characterImg: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80", bgImg: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1600&q=80" },
    { id: "pedagog", title: "Специальный педагог", desc: "Адаптирует школьную и дошкольную программу под индивидуальные особенности и темп развития ребенка.", fact: "«Индивидуальный педагогический маршрут позволяет ребенку успешно осваивать знания без переутомления и страха перед учебой.»", characterImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", bgImg: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80" }
];

const allSpecialists = [
    { id: 1, categoryId: "logoped", name: "Елена Вадимовна Соколова", experience: "8 лет стажа", rating: "4.9", reviewsCount: 24, phone: "+7 (707) 123-45-67", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80", bio: "Специализируюсь на запуске речи у детей с ЗРР, РАС и задержкой психоречевого развития.", diplomas: ["КазНПУ им. Абая (Специальная педагогика)", "Логопедическая нейрокоррекция"], reviews: [{ name: "Айгерим К.", rating: 5, text: "Елена Вадимовна помогла сыну заговорить первыми фразами через 3 месяца занятий!" }] },
    { id: 2, categoryId: "logoped", name: "Анна Петровна Иванова", experience: "5 лет стажа", rating: "4.8", reviewsCount: 15, phone: "+7 (708) 222-33-44", avatar: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=300&q=80", bio: "Коррекция звукопроизношения, постановка сложных звуков и развитие мелкой моторики.", diplomas: ["МПГУ (Дефектология)", "Сертифицированный логомассажист"], reviews: [{ name: "Алина М.", rating: 5, text: "Очень терпеливый и добрый педагог. Поставили звук 'Р' легко и без слез." }] },
    { id: 3, categoryId: "aba", name: "Дмитрий Алексеевич Морозов", experience: "6 лет стажа", rating: "5.0", reviewsCount: 18, phone: "+7 (701) 987-65-43", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80", bio: "Коррекция нежелательного поведения, формирование навыков самообслуживания и социализации.", diplomas: ["BCBA Module International Diploma", "Клинический психолог"], reviews: [{ name: "Сергей П.", rating: 5, text: "Дмитрий помог нам справиться с истериками. Появилась четкая структура дня." }] },
    { id: 4, categoryId: "neuro", name: "Ольга Сергеевна Романова", experience: "10 лет стажа", rating: "4.9", reviewsCount: 29, phone: "+7 (777) 555-12-34", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80", bio: "Нейродиагностика и сенсорная интеграция для детей дошкольного и школьного возраста.", diplomas: ["МГУ им. Ломоносова (Нейропсихология)", "Сенсорная интеграция по Джин Айрес"], reviews: [{ name: "Оксана Т.", rating: 5, text: "Улучшилась концентрация внимания в школе. Отличный курс!" }] },
    { id: 5, categoryId: "pedagog", name: "Гульнара Сериковна Ахметова", experience: "12 лет стажа", rating: "5.0", reviewsCount: 31, phone: "+7 (705) 333-88-99", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80", bio: "Адаптация учебных программ и подготовка к школе для детей с особыми образовательными потребностями.", diplomas: ["Олигофренопедагогика высшей категории"], reviews: [{ name: "Динара М.", rating: 5, text: "Гульнара Сериковна нашла подход к ребенку с первой встречи!" }] }
];

let currentProfIndex = 0;
let isTransitioning = false;
let currentModalSpecId = null;
let favoriteSpecIds = [];
let currentFavFilter = 'all';
let currentUser = JSON.parse(localStorage.getItem('mentorUser')) || null;
let selectedReviewRating = 5;

function updateUserUI() {
    const badge = document.getElementById('userAccountBadge');
    const nameEl = document.getElementById('userAccountName');
    if (currentUser) {
        badge.classList.remove('hidden');
        badge.classList.add('flex');
        nameEl.innerText = currentUser.name;
    } else {
        badge.classList.add('hidden');
        badge.classList.remove('flex');
    }
}

function logoutUser() {
    currentUser = null;
    localStorage.removeItem('mentorUser');
    updateUserUI();
}

function selectProfession(index, skipAnimation = false) {
    if (!skipAnimation && (isTransitioning || index === currentProfIndex)) return;

    currentProfIndex = index;
    const prof = professionsData[index];

    const buttons = document.querySelectorAll('.prof-btn');
    buttons.forEach((btn, i) => {
        if (i === index) btn.classList.add('active-ring');
        else btn.classList.remove('active-ring');
    });

    const charImg = document.getElementById('profCharacter');
    const leftCard = document.getElementById('leftProfCard');
    const rightCard = document.getElementById('rightFactCard');
    const bgLayer = document.getElementById('showcaseBg');

    if (skipAnimation) {
        document.getElementById('profTitle').innerText = prof.title;
        document.getElementById('profDesc').innerText = prof.desc;
        document.getElementById('profFact').innerText = prof.fact;
        charImg.src = prof.characterImg;
        bgLayer.style.backgroundImage = `url('${prof.bgImg}')`;
        renderFilteredExperts(prof.id, prof.title);
        return;
    }

    isTransitioning = true;

   
    charImg.classList.add('char-exit-right');

  
    leftCard.classList.add('side-flip-down');
    rightCard.classList.add('side-flip-down');

    
    bgLayer.classList.add('bg-exit-down');

    setTimeout(() => {
        // Обновляем данные
        document.getElementById('profTitle').innerText = prof.title;
        document.getElementById('profDesc').innerText = prof.desc;
        document.getElementById('profFact').innerText = prof.fact;
        charImg.src = prof.characterImg;
        bgLayer.style.backgroundImage = `url('${prof.bgImg}')`;

        
        charImg.classList.remove('char-exit-right');
        charImg.classList.add('char-enter-left');

        leftCard.classList.remove('side-flip-down');
        rightCard.classList.remove('side-flip-down');
        leftCard.classList.add('side-prep-up');
        rightCard.classList.add('side-prep-up');

        bgLayer.classList.remove('bg-exit-down');
        bgLayer.classList.add('bg-enter-reset');

        void charImg.offsetWidth;

        charImg.classList.remove('char-enter-left');
        leftCard.classList.remove('side-prep-up');
        rightCard.classList.remove('side-prep-up');
        bgLayer.classList.remove('bg-enter-reset');

        renderFilteredExperts(prof.id, prof.title);

        setTimeout(() => {
            isTransitioning = false;
        }, 420);
    }, 340);
}

function renderFilteredExperts(catId, catTitle) {
    document.getElementById('currentCategoryHeading').innerText = `Специалисты: ${catTitle}`;
    const filtered = allSpecialists.filter(s => s.categoryId === catId);
    document.getElementById('expertsCountText').innerText = `Доступно проверенных профи: ${filtered.length}`;
    
    const grid = document.getElementById('expertsGrid');
    grid.innerHTML = '';

    filtered.forEach(spec => {
        const isFav = favoriteSpecIds.includes(spec.id);
        const card = document.createElement('div');
        card.className = "bg-white p-6 rounded-3xl border border-amber-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative group";
        card.innerHTML = `
            <button onclick="toggleCardFavorite(${spec.id}, event)" class="absolute top-5 right-5 w-9 h-9 rounded-full ${isFav ? 'bg-rose-500 text-white' : 'bg-cream-100 text-rose-500 hover:bg-rose-100'} flex items-center justify-center transition-all shadow-sm" title="${isFav ? 'Удалить из избранных' : 'Добавить в избранные'}">
                <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart text-base"></i>
            </button>
            <div>
                <div class="flex items-center gap-4 mb-4 pr-10">
                    <img src="${spec.avatar}" alt="${spec.name}" class="w-16 h-16 rounded-2xl object-cover border-2 border-amber-300">
                    <div>
                        <h4 class="font-bold text-warmDark-900 text-base leading-snug">${spec.name}</h4>
                        <span class="text-xs font-semibold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block mt-1">${catTitle}</span>
                    </div>
                </div>
                <div class="flex items-center gap-4 text-xs text-amber-900/80 mb-4 bg-amber-50 p-2.5 rounded-xl">
                    <div><i class="fa-solid fa-briefcase text-amber-600 mr-1"></i> ${spec.experience}</div>
                    <div><i class="fa-solid fa-star text-amber-500 mr-1"></i> ${spec.rating} (${spec.reviewsCount})</div>
                </div>
                <p class="text-xs text-warmDark-800 line-clamp-2 mb-6">${spec.bio}</p>
            </div>
            <button onclick="openModal(${spec.id})" class="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 rounded-xl transition-colors text-xs flex items-center justify-center gap-2">
                <span>Открыть профиль и контакты</span>
                <i class="fa-solid fa-chevron-right text-[10px]"></i>
            </button>
        `;
        grid.appendChild(card);
    });
}

function scrollToExperts() {
    document.getElementById('expertsList').scrollIntoView({ behavior: 'smooth' });
}

function openModal(id) {
    currentModalSpecId = id;
    const spec = allSpecialists.find(s => s.id === id);
    if(!spec) return;

    updateModalFavButtonState();

    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="flex items-center gap-4 mb-6 pr-16">
            <img src="${spec.avatar}" class="w-20 h-20 rounded-2xl object-cover border-2 border-amber-300">
            <div>
                <h3 class="text-xl font-bold text-warmDark-900">${spec.name}</h3>
                <p class="text-xs text-amber-800 mt-1">${spec.experience}</p>
                <p class="text-xs font-bold text-amber-600 mt-0.5">★ ${spec.rating} (${spec.reviewsCount} отзывов)</p>
            </div>
        </div>
        <div class="bg-amber-100/70 p-4 rounded-2xl mb-6">
            <p class="text-xs text-amber-900 font-semibold mb-1">Связаться с менеджером:</p>
            <p class="font-extrabold text-warmDark-900 text-base mb-3">${MANAGER_PHONE}</p>
            <div class="flex gap-2">
                <button onclick="alert('Переход в WhatsApp менеджера для записи к специалисту: ${spec.name}')" class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-colors"><i class="fa-brands fa-whatsapp"></i> WhatsApp</button>
                <button onclick="alert('Переход в Telegram менеджера для записи к специалисту: ${spec.name}')" class="bg-sky-500 hover:bg-sky-600 text-white text-xs px-4 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-colors"><i class="fa-brands fa-telegram"></i> Telegram</button>
            </div>
        </div>
        <div class="mb-6">
            <h4 class="font-bold text-sm text-warmDark-900 mb-2">О специалисте</h4>
            <p class="text-xs text-warmDark-800 leading-relaxed">${spec.bio}</p>
        </div>
        <div>
            <div class="flex items-center justify-between mb-3">
                <h4 class="font-bold text-sm text-warmDark-900">Отзывы родителей</h4>
                <button onclick="handleLeaveReviewClick()" class="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm">
                    <i class="fa-solid fa-pen"></i>
                    <span>Оставить отзыв</span>
                </button>
            </div>
            ${spec.reviews.map(r => `<div class="bg-white p-3.5 rounded-xl border border-amber-200 text-xs mb-2"><div class="flex justify-between font-bold mb-1"><span>${r.name}</span><span class="text-amber-500">${'★'.repeat(r.rating || 5)}</span></div><p class="text-warmDark-800">${r.text}</p></div>`).join('')}
        </div>
    `;
    document.getElementById('expertModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('expertModal').classList.add('hidden');
    currentModalSpecId = null;
}

function handleLeaveReviewClick() {
    if (!currentUser) {
        document.getElementById('authModal').classList.remove('hidden');
    } else {
        openReviewModal();
    }
}

function closeAuthModal() {
    document.getElementById('authModal').classList.add('hidden');
}

function handleAuthSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('authNameInput').value.trim();
    const contact = document.getElementById('authContactInput').value.trim();
    if (!name || !contact) return;

    currentUser = { name, contact };
    localStorage.setItem('mentorUser', JSON.stringify(currentUser));
    updateUserUI();
    closeAuthModal();
    openReviewModal();
}

function openReviewModal() {
    selectedReviewRating = 5;
    updateStarSelectorUI();
    document.getElementById('reviewTextInput').value = '';
    document.getElementById('reviewAuthorSubtext').innerText = `Автор: ${currentUser.name}`;
    document.getElementById('reviewModal').classList.remove('hidden');
}

function closeReviewModal() {
    document.getElementById('reviewModal').classList.add('hidden');
}

function setReviewRating(rating) {
    selectedReviewRating = rating;
    updateStarSelectorUI();
}

function updateStarSelectorUI() {
    const buttons = document.querySelectorAll('#starRatingSelector .star-btn');
    buttons.forEach((btn, idx) => {
        if (idx < selectedReviewRating) {
            btn.classList.remove('text-amber-200');
            btn.classList.add('text-amber-400');
        } else {
            btn.classList.remove('text-amber-400');
            btn.classList.add('text-amber-200');
        }
    });
}

function handleReviewSubmit(event) {
    event.preventDefault();
    if (!currentUser || !currentModalSpecId) return;

    const text = document.getElementById('reviewTextInput').value.trim();
    if (!text) return;

    const spec = allSpecialists.find(s => s.id === currentModalSpecId);
    if (spec) {
        spec.reviews.unshift({
            name: currentUser.name,
            rating: selectedReviewRating,
            text: text
        });
        spec.reviewsCount += 1;

        const prof = professionsData[currentProfIndex];
        renderFilteredExperts(prof.id, prof.title);
        closeReviewModal();
        openModal(spec.id);
    }
}

function toggleModalFavorite() {
    if(!currentModalSpecId) return;
    toggleFavorite(currentModalSpecId);
    updateModalFavButtonState();
}

function toggleCardFavorite(id, event) {
    if(event) event.stopPropagation();
    toggleFavorite(id);
}

function toggleFavorite(id) {
    const index = favoriteSpecIds.indexOf(id);
    if(index > -1) {
        favoriteSpecIds.splice(index, 1);
    } else {
        favoriteSpecIds.push(id);
    }
    updateFavBadges();
    const prof = professionsData[currentProfIndex];
    renderFilteredExperts(prof.id, prof.title);
    if(currentModalSpecId === id) updateModalFavButtonState();
}

function updateModalFavButtonState() {
    const btn = document.getElementById('modalFavBtn');
    const icon = document.getElementById('modalFavIcon');
    const isFav = favoriteSpecIds.includes(currentModalSpecId);

    if(isFav) {
        btn.className = "w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center transition-all shadow-md group";
        icon.className = "fa-solid fa-heart text-xl transition-transform group-hover:scale-110";
    } else {
        btn.className = "w-10 h-10 rounded-full bg-cream-200 hover:bg-rose-100 text-rose-500 flex items-center justify-center transition-all shadow-sm group";
        icon.className = "fa-regular fa-heart text-xl transition-transform group-hover:scale-110";
    }
}

function updateFavBadges() {
    document.getElementById('favHeaderBadge').innerText = favoriteSpecIds.length;
}

function openFavoritesModal() {
    renderFavoritesList();
    document.getElementById('favoritesModal').classList.remove('hidden');
}

function closeFavoritesModal() {
    document.getElementById('favoritesModal').classList.add('hidden');
}

function filterFavorites(catId) {
    currentFavFilter = catId;
    const buttons = document.querySelectorAll('.fav-filter-btn');
    buttons.forEach(btn => {
        btn.className = "fav-filter-btn bg-cream-200 text-warmDark-800 hover:bg-amber-200 px-4 py-2 rounded-xl text-xs font-bold";
    });
    const activeBtn = document.getElementById(`favBtn-${catId}`);
    if(activeBtn) activeBtn.className = "fav-filter-btn bg-amber-500 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm";
    renderFavoritesList();
}

function renderFavoritesList() {
    const container = document.getElementById('favoritesListGrid');
    container.innerHTML = '';

    let filteredSpecs = allSpecialists.filter(s => favoriteSpecIds.includes(s.id));
    if(currentFavFilter !== 'all') {
        filteredSpecs = filteredSpecs.filter(s => s.categoryId === currentFavFilter);
    }

    if(filteredSpecs.length === 0) {
        container.innerHTML = `
            <div class="col-span-2 text-center py-12 bg-white rounded-3xl border border-amber-200">
                <i class="fa-regular fa-heart text-4xl text-amber-300 mb-3 block"></i>
                <h4 class="font-bold text-warmDark-900 text-base mb-1">Список избранного пуст</h4>
                <p class="text-xs text-warmDark-800">Нажимайте на сердечко в карточке или профиле врача, чтобы сохранить его сюда.</p>
            </div>
        `;
        return;
    }

    filteredSpecs.forEach(spec => {
        const prof = professionsData.find(p => p.id === spec.categoryId);
        const profTitle = prof ? prof.title : 'Специалист';

        const card = document.createElement('div');
        card.className = "bg-white p-5 rounded-2xl border border-amber-200 shadow-sm flex flex-col justify-between relative";
        card.innerHTML = `
            <button onclick="toggleFavorite(${spec.id}); renderFavoritesList();" class="absolute top-4 right-4 w-8 h-8 rounded-full bg-rose-100 text-rose-500 hover:bg-rose-200 flex items-center justify-center transition-colors" title="Удалить">
                <i class="fa-solid fa-trash-can text-xs"></i>
            </button>
            <div>
                <div class="flex items-center gap-3 mb-3 pr-8">
                    <img src="${spec.avatar}" class="w-14 h-14 rounded-xl object-cover border-2 border-amber-300">
                    <div>
                        <h4 class="font-bold text-warmDark-900 text-sm leading-snug">${spec.name}</h4>
                        <span class="text-[10px] font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full inline-block mt-0.5">${profTitle}</span>
                    </div>
                </div>
                <p class="text-xs text-amber-900 font-semibold mb-2"><i class="fa-solid fa-headset text-amber-600 mr-1"></i> Менеджер: ${MANAGER_PHONE}</p>
            </div>
            <button onclick="closeFavoritesModal(); openModal(${spec.id});" class="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 rounded-xl text-xs transition-colors mt-2">
                Открыть профиль
            </button>
        `;
        container.appendChild(card);
    });
}

window.onload = function() {
    updateUserUI();
    selectProfession(0, true);
};
