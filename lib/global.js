let currentSlide = {
    slideId: 1,
    isSaved: false,
    userId: 'user@gmail.com',
    title: '',
    pages:[]
};

let currentPage = {
    slideId: 1,
    pageId: 10,
    userId: 'user@gmail.com',
    isSaved: false,
    title: '',
    sizeName: "wide",
    style:{
        width: 1507,
        height: 848,
        margin_top: -424,
        margin_left: -754,
    },
    body: []
};

const selectedObj = {
    pageId: "",
    id: "",
    objType: "",
    style: {},
    datas: null,
};

let moveable = null
let mainPage = null
let sidebar = null

const OBJ_TYPE_TEXT = 'text';
const OBJ_TYPE_BUTTON = 'button';
const OBJ_TYPE_DRAW = 'draw';
const OBJ_TYPE_SLIDER = 'slider';
const OBJ_TYPE_VIDEO = 'video';
const OBJ_TYPE_AUDIO = 'audio';
const OBJ_TYPE_COVER = 'cover';

const PAGE_SIZE_WIDE = 'wide';
const PAGE_SIZE_STANDARD = 'standard';
const PAGE_SIZE_EBOOK = 'ebook';
const PAGE_SIZE_A4 = 'A4';


const COMP_TYPE_1 = "comp-1";
const COMP_TYPE_2 = "comp-2";
const COMP_TYPE_3 = "comp-3";
const COMP_TYPE_4 = "comp-4";
const COMP_TYPE_5 = "comp-5";
const COMP_TYPE_6 = "comp-6";
const COMP_TYPE_7 = "comp-7";
const COMP_TYPE_8 = "comp-8";
const COMP_TYPE_9 = "comp-9";
const COMP_TYPE_10 = "comp-10";
