

var gCurrLang = 'en'

var gTrans = {
    galery: {
        en: 'Galery',
        he: 'גלריה'
    },
    memes: {
        en: 'Memes',
        he: 'ממים'
    },
    about: {
        en: 'About',
        he: 'על היוצרת'
    },
    language: {
        en: 'language',
        he: 'שפה'
    },
    'presented-by': {
        en: 'Presented By Sundos Guty',
        he: 'מוצג על ידי סונדוס גוטי'
    },
    copyrights: {
        en: '&copy; Copyright 2021, All Right Reserved',
        he: ' 2021 כל הזכויות שמורות ©',
    },
    'about-me': {
        en: `Hello, my name is Sundos Gutty.I'm a Full Stack Web Developer student, with experience in writing single-page-applicationsusing
        the latest WEB technologies such as JavaScript (ES6, ES5). Hard worker, self-learner, team player with
        strong communication skills.`,
        he: ` שלום, שמי סונדוס גוטי. אני סטודנטית לפיתוח אפליקציות ואתרים ב-Full Stack, עם ניסיון בכתיבת יישומים של עמוד בודד בעזרת 
        טכנולוגיות ה-WEB העדכניות ביותר כגון  (ES6, ES5). `
    },
    contact: {
        en: `You can contact me through:`,
        he: 'אפשר למצוא אותי ב:'
    },
    funny: {
        en: 'funny',
        he: 'מצחיק'
    },
    animal: {
        en: 'animal',
        he: 'בעל חיים'
    },
    bad: {
        en: 'bad',
        he: 'רע'
    },
    awkward: {
        en: 'awkward',
        he: 'מביך'
    },
    happy: {
        en: 'happy',
        he: 'שמח'
    },
    politic: {
        en: 'politics',
        he: 'פוליטיקה'
    },
    celebrity: {
        en: 'celebrity',
        he: 'מפורסם'
    },
    animation: {
        en: 'animation',
        he: 'אנימציה'
    },
    baby: {
        en: 'baby',
        he: 'תינוק'
    },
    sport: {
        en: 'sport',
        he: 'ספורט'
    },
    sarcasm: {
        en: 'sarcasm',
        he: 'סרקזם'
    },
    inputSearch: {
        en: 'Search a category....',
        he: 'חפש לפי קטגוריה'
    },
    english:{
        en: 'English',
        he: 'אנגלית'
    },
    hebrew:{
        en: 'hebrew',
        he: 'עברית'
    },
    'edited-memes':{
        en: 'Your Edited Memes',
        he: 'הממים השמורים שלך'
    }

}


function setLang(lang) {
    console.log(lang)
    gCurrLang = lang
}

function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN'
    var transTxt = keyTrans[gCurrLang]
    if (!transTxt) transTxt = keyTrans.en
    return transTxt
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach((el) => {
        var elTrans = el.dataset.trans
        el.innerText = getTrans(elTrans)
    })

}

function getLang() {
    return gCurrLang
}



