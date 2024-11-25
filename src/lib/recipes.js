/**
 * @typedef {Object} Recipe
 * @property {string} [제작방법] - 요리 제작방법
 * @property {number} [배수] - 배수, 기본값은 1
 * @property {Array<[string, number]>} [재료] - 재료 배열, ["재료명", 수량] 형식
 * @property {number} [소요시간] - 소요시간 (초)
 * @property {string} [판매가] - 판매가
 */

/** @type {Recipe} */
export const RecipeExample = {}; // Recipe Type 정의용 객체

/** @type {Object<string, Recipe>} */
export const RECIPES = {
	"소금": {"제작방법": "상점 구매", "배수": 1, "재료": [["실버", 2]]},
	"기름": {"제작방법": "상점 구매", "배수": 1, "재료": [["실버", 2]]},
	"요리용 물병": {"제작방법": "상점 구매", "배수": 1, "재료": [["실버", 2]]},
	"날달걀": {"제작방법": "제작대", "배수": 1, "재료": [["달걀", 1]]},
	"쌀": {"제작방법": "제작대", "배수": 1, "재료": [["벼", 1]]},
	"밥": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["쌀", 1]], "소요시간": 45},
	"대구 필렛": {"제작방법": "도마", "배수": 2, "재료": [["대구", 1]]},
	"연어 필렛": {"제작방법": "도마", "배수": 2, "재료": [["연어", 1]]},
	"용암 대구 필렛": {"제작방법": "도마", "배수": 2, "재료": [["용암 대구", 1]]},
	"철갑상어 필렛": {"제작방법": "도마", "배수": 2, "재료": [["철갑상어", 1]]},
	"복어 필렛": {"제작방법": "도마", "배수": 2, "재료": [["복어", 1]]},
	"참치 필렛": {"제작방법": "도마", "배수": 2, "재료": [["참치", 1]]},
	"열대어 필렛": {"제작방법": "도마", "배수": 2, "재료": [["열대어", 1]]},
	"고등어 필렛": {"제작방법": "도마", "배수": 2, "재료": [["고등어", 1]]},
	"게살": {"제작방법": "도마", "배수": 2, "재료": [["참게", 1]]},
	"참치캔": {"제작방법": "제작대", "배수": 1, "재료": [["캔", 1], ["참치", 2], ["기름", 1], ["소금", 1]]},
	"우유병": {"제작방법": "제작대", "배수": 4, "재료": [["우유 양동이", 1], ["유리병", 4]]},
	"밀가루": {"제작방법": "제작대", "배수": 4, "재료": [["밀", 1]]},
	"도우": {"제작방법": "제작대", "배수": 2, "재료": [["밀가루", 1], ["요리용 물병", 1], ["소금", 1]]},
	"도넛 반죽": {"제작방법": "제작대", "배수": 2, "재료": [["밀가루", 1], ["요리용 물병", 1], ["소금", 1], ["날달걀", 1], ["설탕", 1], ["버터", 1]]},
	"파이지": {"제작방법": "프라이팬", "배수": 1, "재료": [["도우", 1], ["버터", 1], ["설탕", 1], ["소금", 1]]},
	"버터": {"제작방법": "제작대", "배수": 1, "재료": [["우유병", 1]]},
	"크림": {"제작방법": "제작대", "배수": 1, "재료": [["우유병", 1], ["설탕", 1]]},
	"치즈": {"제작방법": "냄비", "배수": 2, "재료": [["요리용 물병", 1], ["우유병", 2], ["라임", 1], ["소금", 1]]},
	"치즈 어묵": {"제작방법": "제작대", "배수": 1, "재료": [["대구 필렛", 1], ["치즈", 1], ["소금", 1], ["새우", 1], ["밀가루", 1], ["양파", 1], ["당근", 1]], "판매가": "58.23"},
	"오뎅검 순한맛": {"제작방법": "제작대", "배수": 1, "재료": [["네더라이트 검", 1], ["치즈 어묵", 8]]},
	"빵가루": {"제작방법": "도마", "배수": 4, "재료": [["빵", 1]]},
	"미트볼": {"제작방법": "도마", "배수": 3, "재료": [["돼지고기", 1], ["양파", 1], ["소금", 1], ["빵가루", 1], ["버터", 1]]},
	"익힌 미트볼": {"제작방법": "프라이팬", "배수": 1, "재료": [["미트볼", 1]]},
	"육수": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["멸치", 1], ["말린 켈프", 1], ["양파", 1]]},
	"패티 반죽": {"제작방법": "도마", "배수": 4, "재료": [["소고기", 1], ["돼지고기", 1], ["양파", 1], ["빵가루", 1], ["소금", 1], ["날달걀", 1]]},
	"익힌 패티": {"제작방법": "훈연기", "배수": 1, "재료": [["패티 반죽", 1]]},
	"베이컨": {"제작방법": "프라이팬", "배수": 4, "재료": [["돼지고기", 2], ["소금", 1], ["설탕", 1]]},
	"밀면": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["밀가루", 2], ["소금", 1]]},
	"효모": {"제작방법": "제작대", "배수": 4, "재료": [["갈색 버섯", 1], ["설탕", 1], ["물 양동이", 1], ["밀가루", 1]]},
	"엔더 소스": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["후렴과", 1], ["후렴화", 1]]},
	"드래곤 무정란": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["날달걀", 1], ["드래곤의 숨결", 1]]},
	"빵 반죽": {"제작방법": "제작대", "배수": 1, "재료": [["밀가루", 2], ["효모", 1], ["설탕", 1], ["소금", 1], ["요리용 물병", 1]]},
	"떡": {"제작방법": "도마", "배수": 1, "재료": [["밥", 1]]},
	"토마토 소스": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["토마토", 2], ["양파", 1], ["소금", 1]]},
	"바베큐 꼬치": {"제작방법": "제작대", "배수": 1, "재료": [["양파", 1], ["토마토", 1], ["아무 고기", 2], ["막대기", 1]]},
	"사골국": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["소고기", 1], ["뼈", 2]]},
	"달걀 후라이": {"제작방법": "프라이팬", "배수": 1, "재료": [["날달걀", 1], ["소금", 1]], "판매가": "11.36"},
	"구운 바베큐 꼬치": {"제작방법": "모닥불", "배수": 1, "재료": [["바베큐 꼬치", 1]], "판매가": "37.91"},
	"후렴과 꼬치": {"제작방법": "제작대", "배수": 1, "재료": [["후렴과", 1], ["튀긴 후렴과", 1], ["막대기", 1]], "판매가": "4.22"},
	"달걀 샌드위치": {"제작방법": "제작대", "배수": 1, "재료": [["달걀 후라이", 2], ["식빵", 1]], "판매가": "126.03"},
	"치킨 샌드위치": {"제작방법": "제작대", "배수": 1, "재료": [["양배추", 1], ["당근", 1], ["식빵", 1], ["익힌 닭고기", 1]], "판매가": "108.89"},
	"베이컨 샌드위치": {"제작방법": "제작대", "배수": 1, "재료": [["베이컨", 1], ["토마토", 1], ["양배추", 1], ["식빵", 1]], "판매가": "117.53"},
	"양고기 샌드위치": {"제작방법": "제작대", "배수": 1, "재료": [["달걀 후라이", 1], ["식빵", 1], ["익힌 양고기", 1], ["비트", 1]], "판매가": "120.42"},
	"퍼퍼 새우 샌드위치": {"제작방법": "제작대", "배수": 1, "재료": [["퍼퍼 새우", 1], ["토마토", 1], ["양배추", 1], ["양파", 1], ["달걀 후라이", 1], ["식빵", 1]], "판매가": "119.71"},
	"후렴과 샌드위치": {"제작방법": "제작대", "배수": 1, "재료": [["후렴과", 1], ["치즈", 1], ["엔더 소스", 1], ["식빵", 1]], "판매가": "158.15"},
	"햄버거": {"제작방법": "제작대", "배수": 1, "재료": [["익힌 패티", 1], ["토마토", 1], ["양배추", 1], ["번", 1]], "판매가": "104.77"},
	"치즈 버거": {"제작방법": "제작대", "배수": 1, "재료": [["익힌 패티", 1], ["토마토", 1], ["양배추", 1], ["번", 1], ["치즈", 1]], "판매가": "129.01"},
	"디럭스 버거": {"제작방법": "제작대", "배수": 1, "재료": [["익힌 패티", 2], ["치즈", 2], ["베이컨", 1], ["양배추", 1], ["토마토", 1], ["양파", 1], ["번", 1]], "판매가": "165.61"},
	"퍼퍼 새우 스페셜 버거": {"제작방법": "제작대", "배수": 1, "재료": [["익힌 패티", 1], ["퍼퍼 새우", 1], ["양파", 1], ["토마토", 1], ["양배추", 1], ["치즈", 1], ["크림", 1], ["번", 1]], "판매가": "151.98"},
	"게살버거": {"제작방법": "제작대", "배수": 1, "재료": [["게살", 1], ["양파", 1], ["토마토", 1], ["양배추", 1], ["번", 1], ["치즈", 1], ["켈프", 1]], "판매가": "115.67"},
	"감자 튀김": {"제작방법": "튀김기", "배수": 1, "재료": [["기름", 1], ["감자", 1], ["소금", 1]], "판매가": "20.08"},
	"익히지 않은 퍼퍼 새우튀김": {"제작방법": "제작대", "배수": 1, "재료": [["퍼퍼 새우", 1], ["밀가루", 1], ["소금", 1], ["날달걀", 1], ["빵가루", 1]]},
	"퍼퍼 새우튀김": {"제작방법": "튀김기", "배수": 1, "재료": [["기름", 1], ["익히지 않은 퍼퍼 새우튀김", 1]], "판매가": "50.88"},
	"익히지 않은 엔드스톤 배스 췌이피위": {"제작방법": "제작대", "배수": 1, "재료": [["엔드스톤 배스", 1], ["밀가루", 1], ["고추", 1], ["양파", 1]]},
	"엔드스톤 배스 췌이피위": {"제작방법": "튀김기", "배수": 1, "재료": [["기름", 1], ["익히지 않은 엔드스톤 배스 췌이피위", 1]], "판매가": "53.66"},
	"익히지 않은 돈까스": {"제작방법": "제작대", "배수": 1, "재료": [["돼지고기", 1], ["밀가루", 1], ["소금", 1], ["날달걀", 1], ["토마토 소스", 1], ["빵가루", 1]]},
	"돈까스": {"제작방법": "튀김기", "배수": 1, "재료": [["기름", 1], ["익히지 않은 돈까스", 1]], "판매가": "99.75"},
	"익히지 않은 치즈스틱": {"제작방법": "제작대", "배수": 1, "재료": [["치즈", 1], ["밀가루", 1], ["날달걀", 1], ["빵가루", 1]]},
	"치즈스틱": {"제작방법": "튀김기", "배수": 1, "재료": [["기름", 1], ["익히지 않은 치즈스틱", 1]], "판매가": "54.58"},
	"익히지 않은 피자": {"제작방법": "제작대", "배수": 1, "재료": [["도우", 1], ["토마토", 1], ["베이컨", 1], ["양파", 1], ["옥수수", 1], ["치즈", 1], ["갈색 버섯", 1]]},
	"피자": {"제작방법": "훈연기", "배수": 1, "재료": [["익히지 않은 피자", 1]], "판매가": "70.48"},
	"염지된 닭고기": {"제작방법": "제작대", "배수": 1, "재료": [["닭고기", 1], ["소금", 1], ["요리용 물병", 1], ["설탕", 1], ["블레이즈 가루", 1]]},
	"훈제 치킨": {"제작방법": "튀김기", "배수": 1, "재료": [["기름", 1], ["염지된 닭고기", 1]], "판매가": "160.96"},
	"허니치킨정식": {"제작방법": "제작대", "배수": 1, "재료": [["양파", 1], ["훈제 치킨", 1], ["꿀이 든 병", 1], ["켈프", 1]], "판매가": "210.04"},
	"양념 치킨": {"제작방법": "제작대", "배수": 1, "재료": [["고추", 1], ["달콤한 열매", 1], ["훈제 치킨", 1], ["블레이즈 가루", 1], ["설탕", 1]], "판매가": "177.97"},
	"축제용 통닭": {"제작방법": "프라이팬", "배수": 1, "재료": [["염지된 닭고기", 1], ["버터", 1], ["달콤한 열매", 1]], "판매가": "125.13"},
	"닭갈비 호박찜": {"제작방법": "제작대", "배수": 1, "재료": [["양배추", 1], ["치즈", 1], ["고추", 1], ["닭고기", 2], ["갈색 버섯", 1], ["호박", 1]], "판매가": "165.44"},
	"또띠아": {"제작방법": "프라이팬", "배수": 1, "재료": [["도우", 1], ["옥수수", 1]]},
	"엠파나다": {"제작방법": "프라이팬", "배수": 1, "재료": [["또띠아", 1], ["정어리", 1], ["양파", 1], ["날달걀", 1], ["익힌 감자", 1], ["블레이즈 가루", 1]], "판매가": "104.12"},
	"양고기 브리또": {"제작방법": "제작대", "배수": 2, "재료": [["또띠아", 2], ["양배추", 1], ["양파", 1], ["익힌 양고기", 1], ["블레이즈 가루", 1], ["소금", 1]], "판매가": "28.32"},
	"야채 브리또": {"제작방법": "제작대", "배수": 2, "재료": [["또띠아", 2], ["양배추", 1], ["양파", 1], ["빨간색 버섯", 1], ["당근", 1], ["익힌 감자", 1], ["토마토", 1]], "판매가": "16.91"},
	"해물 브리또": {"제작방법": "제작대", "배수": 2, "재료": [["또띠아", 2], ["레몬", 1], ["익힌 대구", 1], ["익힌 연어", 1], ["말린 켈프", 1], ["크림", 1], ["양파", 1]], "판매가": "26.14"},
	"소고기 브리또": {"제작방법": "제작대", "배수": 1, "재료": [["또띠아", 1], ["양파", 1], ["스테이크", 1], ["치즈", 1], ["설탕", 1]], "판매가": "59.59"},
	"돼지고기 브리또": {"제작방법": "제작대", "배수": 1, "재료": [["또띠아", 1], ["양배추", 1], ["익힌 돼지고기", 1], ["사과", 1], ["꿀이 든 병", 1]], "판매가": "38.83"},
	"치킨 타코": {"제작방법": "제작대", "배수": 1, "재료": [["또띠아", 1], ["양파", 1], ["옥수수", 1], ["토마토 소스", 1], ["익힌 닭고기", 1], ["고추", 1]], "판매가": "82.50"},
	"엔더 잉어 타코": {"제작방법": "제작대", "배수": 1, "재료": [["또띠아", 1], ["양배추", 1], ["토마토", 1], ["엔더 잉어", 1], ["레몬", 1], ["크림", 1]], "판매가": "34.77"},
	"익히지 않은 만두": {"제작방법": "제작대", "배수": 1, "재료": [["도우", 1], ["양파", 1], ["양배추", 1], ["돼지고기", 1], ["갈색 버섯", 1], ["날달걀", 1], ["설탕", 1], ["소금", 1]]},
	"만두 튀김": {"제작방법": "튀김기", "배수": 1, "재료": [["기름", 1], ["익히지 않은 만두", 1]], "판매가": "45.85"},
	"익히지 않은 어만두": {"제작방법": "제작대", "배수": 1, "재료": [["대구 필렛", 1], ["연어 필렛", 1], ["미트볼", 1], ["빨간색 버섯", 1]]},
	"어만두": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["익히지 않은 어만두", 1]], "판매가": "60.79"},
	"떡만둣국": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["익히지 않은 만두", 1], ["사골국", 1], ["떡", 1]], "판매가": "517.31"},
	"속 채운 감자": {"제작방법": "제작대", "배수": 1, "재료": [["베이컨", 1], ["크림", 1], ["버터", 1], ["익힌 감자", 1]], "판매가": "14.54"},
	"양배추 롤": {"제작방법": "제작대", "배수": 1, "재료": [["양배추", 1], ["양파", 1], ["익힌 닭고기", 1], ["날달걀", 1], ["갈색 버섯", 1], ["당근", 1]], "판매가": "18.36"},
	"주먹밥": {"제작방법": "제작대", "배수": 1, "재료": [["밥", 2], ["말린 켈프", 1], ["달콤한 열매", 1], ["소금", 1]], "판매가": "210.09"},
	"연어 초밥": {"제작방법": "제작대", "배수": 3, "재료": [["연어 필렛", 1], ["밥", 1], ["레몬", 1], ["설탕", 1], ["소금", 1]]},
	"대구 초밥": {"제작방법": "제작대", "배수": 3, "재료": [["대구 필렛", 1], ["밥", 1], ["레몬", 1], ["설탕", 1], ["소금", 1]]},
	"달걀 초밥": {"제작방법": "제작대", "배수": 3, "재료": [["날달걀", 2], ["말린 켈프", 1], ["밥", 1], ["레몬", 1], ["설탕", 1], ["소금", 1]]},
	"복어 초밥": {"제작방법": "제작대", "배수": 3, "재료": [["복어 필렛", 1], ["밥", 1], ["레몬", 1], ["설탕", 1], ["소금", 1]]},
	"열대어 초밥": {"제작방법": "제작대", "배수": 3, "재료": [["열대어 필렛", 1], ["말린 켈프", 1], ["밥", 1], ["레몬", 1], ["설탕", 1], ["소금", 1]]},
	"새우 초밥": {"제작방법": "제작대", "배수": 3, "재료": [["새우", 3], ["밥", 1], ["레몬", 1], ["설탕", 1], ["소금", 1]]},
	"문어 초밥": {"제작방법": "제작대", "배수": 3, "재료": [["문어", 1], ["말린 켈프", 1], ["밥", 1], ["레몬", 1], ["설탕", 1], ["소금", 1]]},
	"고등어 초밥": {"제작방법": "제작대", "배수": 3, "재료": [["고등어 필렛", 1], ["말린 켈프", 1], ["밥", 1], ["레몬", 1], ["설탕", 1], ["소금", 1]]},
	"참치 초밥": {"제작방법": "제작대", "배수": 3, "재료": [["참치 필렛", 1], ["밥", 1], ["레몬", 1], ["설탕", 1], ["소금", 1]]},
	"초밥 세트": {"제작방법": "제작대", "배수": 1, "재료": [["연어 초밥", 1], ["대구 초밥", 1], ["달걀 초밥", 1], ["복어 초밥", 1], ["열대어 초밥", 1], ["새우 초밥", 1], ["문어 초밥", 1], ["고등어 초밥", 1], ["참치 초밥", 1]], "판매가": "419.63"},
	"모듬 회": {"제작방법": "도마", "배수": 2, "재료": [["연어 필렛", 1], ["참치 필렛", 1], ["열대어 필렛", 1], ["고등어 필렛", 1], ["용암 대구 필렛", 1], ["대구 필렛", 1], ["철갑상어 필렛", 1]], "판매가": "46.74"},
	"과일 샐러드": {"제작방법": "제작대", "배수": 1, "재료": [["딸기", 1], ["토마토", 1], ["발광 열매", 1], ["달콤한 열매", 1], ["수박 조각", 1], ["사과", 1], ["벌집 조각", 1], ["레몬", 1]], "판매가": "14.71"},
	"샐러드": {"제작방법": "제작대", "배수": 1, "재료": [["양배추", 1], ["토마토", 1], ["비트", 1], ["당근", 1], ["날달걀", 1]], "판매가": "3.03"},
	"네더 샐러드": {"제작방법": "제작대", "배수": 1, "재료": [["블레이즈 가루", 1], ["뒤틀린 균", 1], ["진홍빛 균", 1]], "판매가": "50.77"},
	"차원 샐러드": {"제작방법": "제작대", "배수": 1, "재료": [["후렴과", 1], ["드래곤 무정란", 1], ["진홍빛 균", 1], ["뒤틀린 균", 1], ["양배추", 1], ["토마토", 1]], "판매가": "111.13"},
	"정어리 세비체": {"제작방법": "제작대", "배수": 1, "재료": [["라임", 1], ["양배추", 1], ["양파", 1], ["토마토", 1], ["정어리", 1]], "판매가": "17.66"},
	"새우 세비체": {"제작방법": "제작대", "배수": 1, "재료": [["라임", 1], ["양배추", 1], ["양파", 1], ["토마토", 1], ["새우", 1]], "판매가": "20.38"},
	"볶음밥": {"제작방법": "프라이팬", "배수": 1, "재료": [["밥", 1], ["날달걀", 1], ["당근", 1], ["버터", 1], ["양파", 1], ["소금", 1]], "판매가": "146.54"},
	"참치 김치 볶음밥": {"제작방법": "프라이팬", "배수": 1, "재료": [["밥", 1], ["참치캔", 1], ["김치", 1], ["달걀 후라이", 1], ["설탕", 1], ["버터", 1]], "판매가": "287.95"},
	"버섯 볶음밥": {"제작방법": "프라이팬", "배수": 1, "재료": [["밥", 1], ["갈색 버섯", 1], ["빨간색 버섯", 1], ["버터", 1], ["고추", 1], ["설탕", 1]], "판매가": "135.27"},
	"엔더 죽": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["쌀", 1], ["엔더 소스", 1], ["드래곤 무정란", 1], ["우유병", 1], ["엔더 진주", 2], ["소금", 1]], "판매가": "161.99"},
	"야채죽": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["쌀", 1], ["양파", 1], ["당근", 1], ["말린 켈프", 1], ["갈색 버섯", 1], ["빨간색 버섯", 1]], "판매가": "62.05"},
	"새우죽": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["쌀", 1], ["육수", 1], ["새우", 1], ["양파", 1], ["당근", 1], ["소금", 1]], "판매가": "92.84"},
	"우동": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["밀면", 1], ["육수", 1], ["달걀 후라이", 1], ["갈색 버섯", 1]], "판매가": "121.05"},
	"야채 국수": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀면", 1], ["양파", 1], ["당근", 1]], "판매가": "71.38"},
	"미트볼 파스타": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀면", 1], ["토마토 소스", 1], ["익힌 미트볼", 2], ["갈색 버섯", 1], ["양파", 1]], "판매가": "238.00"},
	"양고기 파스타": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀면", 1], ["버터", 1], ["양고기", 1], ["양파", 1], ["고추", 1]], "판매가": "108.25"},
	"먹물 파스타": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀면", 1], ["먹물 주머니", 2], ["열대어", 1], ["양파", 1], ["문어", 1]], "판매가": "114.81"},
	"버섯 크림 파스타": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀면", 1], ["크림", 1], ["버섯", 1], ["치즈", 1]], "판매가": "141.84"},
	"참게 파스타": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀면", 1], ["우유병", 1], ["게살", 1], ["버터", 1], ["소금", 1]], "판매가": "107.07"},
	"오일 파스타": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀면", 1], ["버터", 1], ["새우", 1], ["소금", 1]], "판매가": "93.37"},
	"베이컨 파스타": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀면", 1], ["버터", 1], ["베이컨", 1], ["치즈", 1], ["날달걀", 1]], "판매가": "128.47"},
	"엔더 파스타": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀면", 1], ["엔더 소스", 1], ["엔더 진주", 2], ["크림", 1], ["퍼퍼 새우", 1], ["소금", 1]], "판매가": "164.05"},
	"발광 먹물 주머니 파스타": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀면", 1], ["발광 먹물 주머니", 1], ["먹물 주머니", 1], ["발광 열매", 1], ["문어", 1], ["용암 잉어", 1]]},
	"치즈 파스타": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀면", 1], ["치즈", 2], ["버터", 1], ["양파", 1]], "판매가": "178.20"},
	"팟타이": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀면", 1], ["라임", 1], ["새우", 1], ["뒤틀린 뿌리", 1], ["양파", 1], ["달걀", 1], ["밀 씨앗", 1]], "판매가": "106.57"},
	"양폭립": {"제작방법": "제작대", "배수": 1, "재료": [["토마토", 1], ["밥", 1], ["비트", 1], ["익힌 양고기", 2]], "판매가": "128.93"},
	"일본식 크림 스튜": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["크림", 1], ["돼지고기", 1], ["당근", 1], ["갈색 버섯", 1], ["감자", 1], ["우유병", 1], ["소금", 1]], "판매가": "116.80"},
	"새우 스튜": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["새우", 1], ["토마토 소스", 1], ["날달걀", 1], ["양파", 1], ["토마토", 1], ["설탕", 1]], "판매가": "126.75"},
	"철갑상어 스튜": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["철갑상어", 1], ["철갑상어 필렛", 1], ["육수", 1], ["양파", 1]], "판매가": "145.38"},
	"후렴 스튜": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["후렴과", 1], ["엔더 소스", 1], ["후렴화", 1]], "판매가": "120.17"},
	"드래곤 무정란 스튜": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["드래곤 무정란", 1], ["옥수수", 1], ["토마토 소스", 1], ["양파", 1], ["빵", 1]], "판매가": "202.38"},
	"고기 스튜": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["익힌 미트볼", 1], ["사골국", 1], ["당근", 1], ["감자", 1], ["레드 와인", 1]], "판매가": "610.66"},
	"용암 잉어 스튜": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["용암 잉어", 1], ["토마토 소스", 1], ["양파", 1], ["블레이즈 가루", 1], ["레몬", 1], ["고추", 1]], "판매가": "146.38"},
	"대구지리탕": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["대구", 1], ["양파", 1], ["고추", 1], ["육수", 1], ["소금", 1], ["뒤틀린 뿌리", 1]], "판매가": "99.57"},
	"양파 수프": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["양파", 1], ["사골국", 1], ["치즈", 1], ["바게트", 1], ["소금", 1], ["우유병", 1]], "판매가": "529.18"},
	"드래곤 숨결 수프": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["드래곤의 숨결", 1], ["엔더 소스", 1], ["후렴과", 1], ["크림", 1], ["우유병", 1]], "판매가": "149.95"},
	"치킨 수프": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["닭고기", 1], ["사골국", 1], ["우유병", 1], ["양파", 1], ["버터", 1], ["소금", 1]], "판매가": "383.50"},
	"야채 수프": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["비트", 1], ["감자", 1], ["당근", 1], ["육수", 1], ["양파", 1], ["양배추", 1]], "판매가": "131.31"},
	"호박 수프": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["호박", 1], ["호박 씨", 1], ["양파", 1], ["크림", 1], ["설탕", 1]], "판매가": "66.20"},
	"옥수수 수프": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["옥수수", 2], ["우유병", 1], ["설탕", 1], ["양파", 1], ["치즈", 1], ["소금", 1]], "판매가": "65.58"},
	"수비드 최고급 한우": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["최고급 한우", 1]]},
	"수비드 최고급 한우 스테이크": {"제작방법": "프라이팬", "배수": 1, "재료": [["수비드 최고급 한우", 1]]},
	"수비드 최고급 한우 스테이크 정식": {"제작방법": "제작대", "배수": 1, "재료": [["수비드 최고급 한우 스테이크", 1], ["샐러드", 1], ["달걀 후라이", 1], ["익힌 감자", 1]], "판매가": "5555"},
	"스테이크 정식": {"제작방법": "제작대", "배수": 1, "재료": [["밥", 1], ["옥수수", 1], ["달걀 후라이", 1], ["익힌 감자", 1], ["스테이크", 1], ["갈색 버섯", 1]], "판매가": "154.43"},
	"연어구이 정식": {"제작방법": "제작대", "배수": 1, "재료": [["양파", 1], ["양배추", 1], ["익힌 연어", 1], ["달콤한 열매", 1]], "판매가": "6.89"},
	"용암 대구정식": {"제작방법": "프라이팬", "배수": 1, "재료": [["용암 대구 필렛", 1], ["토마토", 1], ["밥", 1], ["치즈", 1]], "판매가": "185.27"},
	"네더 양 정식": {"제작방법": "프라이팬", "배수": 1, "재료": [["양고기", 1], ["달콤한 열매", 1], ["뒤틀린 균", 1], ["감자", 1], ["양파", 1]], "판매가": "50.36"},
	"네더 정식": {"제작방법": "프라이팬", "배수": 1, "재료": [["토끼고기", 2], ["마그마 크림", 1], ["뒤틀린 균", 1], ["진홍빛 균", 1], ["설탕", 1]], "판매가": "106.61"},
	"뒤틀린 정식": {"제작방법": "프라이팬", "배수": 1, "재료": [["돼지고기", 1], ["뒤틀린 뿌리", 1], ["뒤틀린 균", 1], ["네더 싹", 1]], "판매가": "66.58"},
	"완벽한 아침식사": {"제작방법": "프라이팬", "배수": 1, "재료": [["베이컨", 1], ["날달걀", 2]], "판매가": "26.97"},
	"라따뚜이": {"제작방법": "프라이팬", "배수": 1, "재료": [["양파", 1], ["토마토 소스", 1], ["비트", 1], ["호박", 1], ["토마토", 1], ["치즈", 1]], "판매가": "198.66"},
	"익히지 않은 버섯 키쉬": {"제작방법": "제작대", "배수": 1, "재료": [["파이지", 1], ["우유병", 1], ["양파", 2], ["치즈", 1], ["갈색 버섯", 1], ["빨간색 버섯", 1], ["날달걀", 1]]},
	"버섯 키쉬": {"제작방법": "화로", "배수": 1, "재료": [["익히지 않은 버섯 키쉬", 1]], "판매가": "156.28"},
	"지중해식 연어 요리": {"제작방법": "프라이팬", "배수": 1, "재료": [["연어 필렛", 1], ["라임", 1], ["토마토", 1], ["크림", 1], ["양배추", 1], ["레몬", 1]], "판매가": "56.74"},
	"연어 타르타르": {"제작방법": "도마", "배수": 1, "재료": [["레몬", 1], ["연어 필렛", 2], ["양파", 1], ["날달걀", 1], ["소금", 1]], "판매가": "45.49"},
	"익히지 않은 감자 프리터": {"제작방법": "제작대", "배수": 1, "재료": [["라임", 1], ["양파", 1], ["감자", 2], ["날달걀", 1], ["치즈", 1]]},
	"감자 프리터": {"제작방법": "튀김기", "배수": 1, "재료": [["기름", 1], ["익히지 않은 감자 프리터", 1]], "판매가": "61.40"},
	"진홍빛 구황작물 메즈쿠프라티": {"제작방법": "프라이팬", "배수": 1, "재료": [["비트", 1], ["감자", 1], ["당근", 1], ["소금", 1], ["고추", 1], ["버터", 1]], "판매가": "39.00"},
	"매운 커리 베이스": {"제작방법": "제작대", "배수": 1, "재료": [["우유병", 1], ["양파", 1], ["토마토 소스", 1], ["닭고기", 1], ["블레이즈 가루", 2], ["고추", 2]]},
	"매운 커리": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["매운 커리 베이스", 1], ["밥", 1]], "판매가": "270.91"},
	"참게 라자냐": {"제작방법": "프라이팬", "배수": 1, "재료": [["게살", 1], ["토마토 소스", 1], ["도우", 1], ["치즈", 1], ["버터", 1]], "판매가": "150.87"},
	"버터참게": {"제작방법": "프라이팬", "배수": 1, "재료": [["참게", 2], ["버터", 1]], "판매가": "60.57"},
	"용암 대구 시니강": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["용암 대구", 1], ["양파", 1], ["라임", 1], ["토마토", 1]], "판매가": "28.67"},
	"셰퍼드 파이": {"제작방법": "제작대", "배수": 1, "재료": [["양파", 2], ["토마토 소스", 1], ["옥수수", 1], ["갈색 버섯", 1], ["익힌 양고기", 1], ["익힌 감자", 1]], "판매가": "210.42"},
	"삼합": {"제작방법": "프라이팬", "배수": 1, "재료": [["돼지고기", 1], ["문어", 1], ["김치", 1], ["양파", 1]], "판매가": "340.72"},
	"보쌈": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["돼지고기", 1], ["육수", 1], ["양배추", 1], ["양파", 1], ["설탕", 1]], "판매가": "204.93"},
	"고기 플래터": {"제작방법": "프라이팬", "배수": 1, "재료": [["소고기", 1], ["양고기", 1], ["토끼고기", 1], ["소금", 1]], "판매가": "85.03"},
	"버섯 모듬 구이": {"제작방법": "프라이팬", "배수": 1, "재료": [["갈색 버섯", 1], ["뒤틀린 균", 1], ["진홍빛 균", 1], ["버터", 1], ["소금", 1]], "판매가": "56.06"},
	"스크램블 에그": {"제작방법": "프라이팬", "배수": 1, "재료": [["날달걀", 1], ["토마토", 1], ["우유병", 1], ["버터", 1], ["소금", 1], ["설탕", 1]], "판매가": "14.72"},
	"오믈렛": {"제작방법": "프라이팬", "배수": 1, "재료": [["날달걀", 1], ["토마토 소스", 1], ["밥", 1], ["옥수수", 1], ["양파", 1], ["당근", 1], ["버터", 1]], "판매가": "182.01"},
	"드래곤 무정란 찜": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["드래곤 무정란", 1], ["엔더 소스", 1], ["양파", 1], ["감자", 1]], "판매가": "146.10"},
	"익히지 않은 참게 랑군": {"제작방법": "제작대", "배수": 1, "재료": [["도우", 1], ["치즈", 1], ["게살", 1], ["크림", 1], ["당근", 1]]},
	"참게 랑군": {"제작방법": "튀김기", "배수": 1, "재료": [["기름", 1], ["익히지 않은 참게 랑군", 1]], "판매가": "67.78"},
	"네더 버섯 찜": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["뒤틀린 균", 1], ["진홍빛 균", 1], ["빨간색 버섯", 1], ["육수", 1], ["소금", 1]], "판매가": "142.72"},
	"달콤한 김부각": {"제작방법": "프라이팬", "배수": 1, "재료": [["말린 켈프", 1], ["설탕", 1], ["밥", 1], ["소금", 1]], "판매가": "35.48"},
	"비스크": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["가재", 1], ["우유병", 1], ["양파", 1], ["토마토 소스", 1], ["화이트 와인", 1], ["빵", 1]], "판매가": "170.69"},
	"김치": {"제작방법": "제작대", "배수": 1, "재료": [["양배추", 1], ["고추", 1], ["멸치", 1], ["설탕", 1], ["소금", 1], ["양파", 1], ["밥", 1]], "판매가": "111.82"},
	"볶은 원두": {"제작방법": "프라이팬", "배수": 1, "재료": [["커피콩", 1]]},
	"엔더 펄": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["엔더 진주", 2], ["떡", 1], ["설탕", 1]]},
	"나쵸칩": {"제작방법": "화로", "배수": 1, "재료": [["또띠아", 1]], "판매가": "29.30"},
	"당고": {"제작방법": "제작대", "배수": 1, "재료": [["떡", 1], ["달콤한 열매", 1], ["초록색 염료", 1], ["설탕", 1], ["요리용 물병", 1]], "판매가": "153.85"},
	"후렴과 떡": {"제작방법": "제작대", "배수": 1, "재료": [["떡", 1], ["후렴과", 1], ["설탕", 1]], "판매가": "161.72"},
	"마시멜로": {"제작방법": "제작대", "배수": 1, "재료": [["요리용 물병", 1], ["설탕", 1], ["슬라임볼", 1]]},
	"구운 마시멜로": {"제작방법": "프라이팬", "배수": 1, "재료": [["마시멜로", 1], ["막대기", 1]], "판매가": "30.41"},
	"푸딩": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["슬라임볼", 1], ["우유병", 1], ["설탕", 1], ["날달걀", 1]], "판매가": "59.08"},
	"사과 푸딩": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["슬라임볼", 1], ["설탕", 1], ["사과 잼", 1], ["사과", 1]], "판매가": "102.69"},
	"후렴과 푸딩": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["슬라임볼", 1], ["설탕", 1], ["엔더 소스", 1], ["후렴과", 1]], "판매가": "75.02"},
	"달콤한 열매 푸딩": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["슬라임볼", 1], ["설탕", 1], ["달콤한 열매 잼", 1], ["달콤한 열매", 1]], "판매가": "131.26"},
	"라임 푸딩": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["슬라임볼", 1], ["설탕", 1], ["라임", 1]], "판매가": "41.80"},
	"딸기 푸딩": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["슬라임볼", 1], ["설탕", 1], ["딸기 잼", 1], ["딸기", 1]], "판매가": "125.73"},
	"발광 열매 푸딩": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["슬라임볼", 1], ["설탕", 1], ["발광 열매", 1]], "판매가": "38.10"},
	"복숭아 푸딩": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["슬라임볼", 1], ["설탕", 1], ["복숭아", 1]], "판매가": "38.63"},
	"초콜릿": {"제작방법": "제작대", "배수": 1, "재료": [["코코아콩", 2], ["설탕", 2], ["크림", 1], ["버터", 1]], "판매가": "7.70"},
	"딸기 잼": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["딸기", 2], ["설탕", 1]]},
	"달콤한 열매 잼": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["달콤한 열매", 2], ["설탕", 1]]},
	"사과 잼": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["사과", 2], ["설탕", 1]]},
	"복숭아 잼": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["복숭아", 2], ["설탕", 1]]},
	"오레오 쿠키": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀가루", 1], ["우유병", 1], ["초콜릿", 2], ["마시멜로", 1]], "판매가": "97.73"},
	"스모어": {"제작방법": "제작대", "배수": 1, "재료": [["구운 마시멜로", 1], ["꿀 쿠키", 2], ["초콜릿", 1]], "판매가": "188.43"},
	"달콤한 열매 쿠키": {"제작방법": "프라이팬", "배수": 1, "재료": [["버터", 1], ["설탕", 1], ["밀가루", 1], ["달콤한 열매", 1]], "판매가": "56.14"},
	"꿀 쿠키": {"제작방법": "프라이팬", "배수": 1, "재료": [["버터", 1], ["설탕", 1], ["밀가루", 1], ["벌집 조각", 1]], "판매가": "55.65"},
	"딸기 쿠키": {"제작방법": "프라이팬", "배수": 1, "재료": [["버터", 1], ["설탕", 1], ["밀가루", 1], ["딸기 잼", 1]], "판매가": "129.27"},
	"글레이즈 달콤한 열매 쿠키": {"제작방법": "프라이팬", "배수": 1, "재료": [["버터", 1], ["설탕", 1], ["밀가루", 1], ["달콤한 열매 잼", 1]], "판매가": "145.95"},
	"초콜릿 쿠키": {"제작방법": "프라이팬", "배수": 1, "재료": [["버터", 1], ["설탕", 1], ["밀가루", 1], ["초콜릿", 1]], "판매가": "62.38"},
	"복숭아 잼 쿠키": {"제작방법": "프라이팬", "배수": 1, "재료": [["버터", 1], ["설탕", 1], ["밀가루", 1], ["복숭아 잼", 1]], "판매가": "103.60"},
	"곰 쿠키": {"제작방법": "프라이팬", "배수": 1, "재료": [["버터", 1], ["설탕", 1], ["밀가루", 1], ["빨간색 염료", 1]]},
	"눈 모양 비스킷": {"제작방법": "프라이팬", "배수": 1, "재료": [["버터", 1], ["설탕", 1], ["소금", 1], ["밀가루", 1], ["하얀색 염료", 1]], "판매가": "62.39"},
	"하트 모양 비스킷": {"제작방법": "프라이팬", "배수": 1, "재료": [["버터", 1], ["설탕", 1], ["소금", 1], ["밀가루", 1], ["분홍색 염료", 1]], "판매가": "66.10"},
	"크리퍼 모양 비스킷": {"제작방법": "프라이팬", "배수": 1, "재료": [["버터", 1], ["설탕", 1], ["소금", 1], ["밀가루", 1], ["초록색 염료", 1]], "판매가": "60.45"},
	"검 모양 비스킷": {"제작방법": "프라이팬", "배수": 1, "재료": [["버터", 1], ["설탕", 1], ["소금", 1], ["밀가루", 1], ["하늘색 염료", 1]], "판매가": "56.69"},
	"엔더의 눈 에끌레어": {"제작방법": "프라이팬", "배수": 1, "재료": [["엔더의 눈", 2], ["설탕", 1], ["밀가루", 1], ["버터", 1]], "판매가": "121.82"},
	"팝콘": {"제작방법": "프라이팬", "배수": 1, "재료": [["옥수수", 1], ["버터", 1], ["소금", 1]], "판매가": "16.73"},
	"카라멜 팝콘": {"제작방법": "프라이팬", "배수": 1, "재료": [["옥수수", 1], ["버터", 1], ["설탕", 1]], "판매가": "20.17"},
	"마카롱": {"제작방법": "프라이팬", "배수": 1, "재료": [["밀 씨앗", 1], ["설탕", 1], ["날달걀", 1], ["코코아콩", 1], ["딸기", 1]], "판매가": "37.53"},
	"엔더 씨리얼": {"제작방법": "제작대", "배수": 1, "재료": [["튀긴 후렴과", 1], ["엔더의 눈", 1], ["엔더 진주", 1], ["우유병", 1]], "판매가": "24.45"},
	"베리 크림치즈 파이": {"제작방법": "제작대", "배수": 1, "재료": [["파이지", 1], ["크림", 1], ["치즈", 1], ["달콤한 열매", 2], ["딸기", 2]], "판매가": "81.92"},
	"초콜릿 파이": {"제작방법": "제작대", "배수": 1, "재료": [["파이지", 1], ["크림", 2], ["초콜릿", 2], ["설탕", 1]], "판매가": "84.23"},
	"발광 열매 파이": {"제작방법": "제작대", "배수": 1, "재료": [["파이지", 1], ["발광 열매", 3], ["설탕", 2], ["밀", 3]], "판매가": "56.75"},
	"애플 파이": {"제작방법": "제작대", "배수": 1, "재료": [["파이지", 1], ["사과", 2], ["사과 잼", 1], ["설탕", 2], ["밀", 3]], "판매가": "120.81"},
	"후렴 파이": {"제작방법": "제작대", "배수": 1, "재료": [["파이지", 1], ["후렴과", 1], ["엔더 소스", 1], ["후렴화", 1], ["설탕", 2], ["밀", 3]], "판매가": "118.64"},
	"복숭아 파이": {"제작방법": "제작대", "배수": 1, "재료": [["파이지", 1], ["복숭아", 2], ["복숭아 잼", 1], ["설탕", 2], ["밀", 3]], "판매가": "107.36"},
	"발광 열매 타르트": {"제작방법": "제작대", "배수": 1, "재료": [["파이지", 1], ["발광 열매", 1], ["크림", 1], ["설탕", 1]], "판매가": "56.02"},
	"초콜릿 타르트": {"제작방법": "제작대", "배수": 1, "재료": [["파이지", 1], ["초콜릿", 1], ["크림", 1], ["설탕", 1]], "판매가": "69.38"},
	"린저토르테": {"제작방법": "제작대", "배수": 1, "재료": [["파이지", 1], ["라임", 1], ["달콤한 열매 잼", 1], ["밀 씨앗", 1], ["설탕", 2], ["밀", 3]], "판매가": "160.22"},
	"플레인 도넛": {"제작방법": "튀김기", "배수": 1, "재료": [["기름", 1], ["도넛 반죽", 1]], "판매가": "48.88"},
	"초코 도넛": {"제작방법": "제작대", "배수": 1, "재료": [["플레인 도넛", 1], ["초콜릿", 1]], "판매가": "64.49"},
	"화이트 초코 도넛": {"제작방법": "제작대", "배수": 1, "재료": [["플레인 도넛", 1], ["초콜릿", 1], ["우유병", 1]], "판매가": "70.25"},
	"부활절 치즈 빵": {"제작방법": "프라이팬", "배수": 1, "재료": [["빵 반죽", 1], ["치즈", 1], ["버터", 1], ["날달걀", 2]], "판매가": "166.63"},
	"크루아상": {"제작방법": "프라이팬", "배수": 1, "재료": [["빵 반죽", 1], ["버터", 2], ["날달걀", 1]], "판매가": "66.95", "소요시간": 15},
	"캄빠뉴": {"제작방법": "프라이팬", "배수": 1, "재료": [["빵 반죽", 1], ["밀 씨앗", 1], ["밀", 1]], "판매가": "93.48", "소요시간": 27},
	"바게트": {"제작방법": "프라이팬", "배수": 1, "재료": [["빵 반죽", 2]], "판매가": "97.76", "소요시간": 30},
	"식빵": {"제작방법": "프라이팬", "배수": 1, "재료": [["빵 반죽", 1], ["우유병", 1], ["버터", 1], ["설탕", 1]], "판매가": "89.44", "소요시간": 25},
	"번": {"제작방법": "프라이팬", "배수": 1, "재료": [["빵 반죽", 1], ["날달걀", 1], ["우유병", 1], ["버터", 1], ["설탕", 1]], "판매가": "61.36", "소요시간": 17},
	"옥수수빵": {"제작방법": "프라이팬", "배수": 1, "재료": [["빵 반죽", 1], ["옥수수", 1], ["우유병", 1], ["설탕", 1], ["날달걀", 1], ["버터", 1]], "판매가": "102.16", "소요시간": 27},
	"빵 세트": {"제작방법": "제작대", "배수": 1, "재료": [["부활절 치즈 빵", 1], ["크루아상", 1], ["캄빠뉴", 1], ["바게트", 1], ["식빵", 1], ["번", 1], ["옥수수빵", 1]], "판매가": "725.91"},
	"커스타드 소라빵": {"제작방법": "프라이팬", "배수": 1, "재료": [["빵 반죽", 1], ["발광 열매 커스타드", 1], ["설탕", 1], ["날달걀", 1], ["버터", 1]], "판매가": "91.57"},
	"딸기 잼 롤": {"제작방법": "프라이팬", "배수": 1, "재료": [["빵 반죽", 1], ["버터", 1], ["설탕", 1], ["날달걀", 1], ["딸기 잼", 1]], "판매가": "193.61"},
	"초코 롤케이크": {"제작방법": "프라이팬", "배수": 1, "재료": [["초콜릿", 1], ["빵 반죽", 1], ["크림", 1], ["날달걀", 1], ["설탕", 1], ["코코아콩", 1]], "판매가": "93.79"},
	"라임 케이크": {"제작방법": "제작대", "배수": 1, "재료": [["라임", 2], ["크림", 2], ["설탕", 1], ["효모", 1], ["날달걀", 1], ["밀", 2]], "판매가": "18.20"},
	"딸기 케이크": {"제작방법": "제작대", "배수": 1, "재료": [["딸기", 1], ["딸기 잼", 1], ["크림", 2], ["설탕", 1], ["효모", 1], ["날달걀", 1], ["밀", 2]], "판매가": "93.73"},
	"달콤한 열매 케이크": {"제작방법": "제작대", "배수": 1, "재료": [["달콤한 열매", 1], ["달콤한 열매 잼", 1], ["크림", 2], ["설탕", 1], ["효모", 1], ["날달걀", 1], ["밀", 2]], "판매가": "82.41"},
	"슈바르츠발트 키르쉬토르테": {"제작방법": "제작대", "배수": 1, "재료": [["초콜릿", 2], ["크림", 2], ["달콤한 열매", 1], ["효모", 1], ["날달걀", 1], ["밀", 2]], "판매가": "31.28"},
	"번트 케이크": {"제작방법": "제작대", "배수": 1, "재료": [["버터", 1], ["크림", 1], ["우유병", 1], ["효모", 1], ["날달걀", 2], ["밀", 2]], "판매가": "11.23"},
	"오레오 케이크": {"제작방법": "제작대", "배수": 1, "재료": [["우유병", 1], ["밀가루", 1], ["설탕", 1], ["초콜릿", 1], ["버터", 1], ["마시멜로", 1], ["오레오 쿠키", 1]], "판매가": "152.40"},
	"딸기 컵케이크": {"제작방법": "프라이팬", "배수": 1, "재료": [["빵 반죽", 1], ["딸기 잼", 1], ["크림", 1], ["딸기", 1], ["우유병", 1], ["버터", 1]], "판매가": "173.87"},
	"달콤한 열매 컵케이크": {"제작방법": "프라이팬", "배수": 1, "재료": [["빵 반죽", 1], ["달콤한 열매 잼", 1], ["크림", 1], ["달콤한 열매", 1], ["우유병", 1], ["버터", 1]], "판매가": "151.79"},
	"사과 컵케이크": {"제작방법": "프라이팬", "배수": 1, "재료": [["빵 반죽", 1], ["사과 잼", 1], ["크림", 1], ["사과", 1], ["우유병", 1], ["버터", 1]], "판매가": "147.11"},
	"발광 열매 커스타드": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["발광 열매", 1], ["크림", 1], ["날달걀", 1], ["설탕", 1]], "판매가": "22.17"},
	"딸기 커스타드": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["딸기", 1], ["크림", 1], ["날달걀", 1], ["설탕", 1]], "판매가": "22.89"},
	"핫초코": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["초콜릿", 1], ["우유병", 1], ["설탕", 1], ["마시멜로", 1]], "판매가": "44.95"},
	"달콤한 주스": {"제작방법": "제작대", "배수": 1, "재료": [["요리용 물병", 1], ["달콤한 열매", 1], ["벌집 조각", 1]], "판매가": "10.60"},
	"당근 주스": {"제작방법": "제작대", "배수": 1, "재료": [["요리용 물병", 1], ["당근", 1], ["설탕", 1], ["달콤한 열매", 1]], "판매가": "4.51"},
	"수박 주스": {"제작방법": "제작대", "배수": 1, "재료": [["수박 조각", 2], ["설탕", 1]], "판매가": "1.51"},
	"켈프 쉐이크": {"제작방법": "제작대", "배수": 1, "재료": [["켈프", 4], ["설탕", 1]], "판매가": "1.66"},
	"사과 사이다": {"제작방법": "제작대", "배수": 1, "재료": [["사과", 2], ["설탕", 1], ["드래곤의 숨결", 1], ["요리용 물병", 1]], "판매가": "32.69"},
	"라임 에이드": {"제작방법": "제작대", "배수": 1, "재료": [["라임", 2], ["설탕", 1], ["요리용 물병", 1]], "판매가": "10.14"},
	"베리 라임 에이드": {"제작방법": "제작대", "배수": 1, "재료": [["라임", 2], ["달콤한 열매", 2], ["설탕", 1], ["요리용 물병", 1]], "판매가": "11.21"},
	"딸기 에이드": {"제작방법": "제작대", "배수": 1, "재료": [["딸기", 2], ["설탕", 1], ["요리용 물병", 1]], "판매가": "3.74"},
	"엔더 버블 티": {"제작방법": "제작대", "배수": 1, "재료": [["후렴과", 2], ["우유병", 1], ["엔더 펄", 1], ["설탕", 1]], "판매가": "152.92"},
	"드래곤의 숨결 소다": {"제작방법": "제작대", "배수": 1, "재료": [["드래곤의 숨결", 2], ["요리용 물병", 1], ["설탕", 1]], "판매가": "53.63"},
	"발광 열매 스무디": {"제작방법": "제작대", "배수": 1, "재료": [["발광 열매", 2], ["우유병", 1], ["눈덩이", 1], ["설탕", 1]], "판매가": "6.78"},
	"달콤한 열매 스무디": {"제작방법": "제작대", "배수": 1, "재료": [["달콤한 열매", 2], ["우유병", 1], ["눈덩이", 1], ["설탕", 1]], "판매가": "3.45"},
	"밀크 스무디": {"제작방법": "제작대", "배수": 1, "재료": [["우유병", 2], ["눈덩이", 1], ["설탕", 1]], "판매가": "4.14"},
	"초코 스무디": {"제작방법": "제작대", "배수": 1, "재료": [["초콜릿", 2], ["우유병", 1], ["눈덩이", 1], ["설탕", 1]], "판매가": "22.23"},
	"복숭아 스무디": {"제작방법": "제작대", "배수": 1, "재료": [["복숭아", 2], ["우유병", 1], ["눈덩이", 1], ["설탕", 1]], "판매가": "8.42"},
	"엔더 넥타르": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["엔더의 눈", 2], ["우유병", 1], ["설탕", 1]], "판매가": "101.24"},
	"초코 아이스크림 콘": {"제작방법": "제작대", "배수": 1, "재료": [["초콜릿", 2], ["얼음", 2], ["크림", 1], ["도우", 1], ["설탕", 1]], "판매가": "28.85"},
	"벨벳 아이스크림 콘": {"제작방법": "제작대", "배수": 1, "재료": [["달콤한 열매", 2], ["얼음", 2], ["크림", 1], ["도우", 1], ["설탕", 1], ["빨간색 염료", 1]], "판매가": "10.17"},
	"복숭아 아이스크림 콘": {"제작방법": "제작대", "배수": 1, "재료": [["복숭아", 2], ["얼음", 2], ["크림", 1], ["도우", 1], ["설탕", 1]], "판매가": "13.46"},
	"딸기 아이스크림 콘": {"제작방법": "제작대", "배수": 1, "재료": [["딸기", 2], ["얼음", 2], ["크림", 1], ["도우", 1], ["설탕", 1]], "판매가": "9.00"},
	"발광 열매 아이스크림 콘": {"제작방법": "제작대", "배수": 1, "재료": [["발광 열매", 2], ["얼음", 2], ["크림", 1], ["도우", 1], ["설탕", 1]], "판매가": "12.06"},
	"소다 아이스크림 콘": {"제작방법": "제작대", "배수": 1, "재료": [["드래곤의 숨결", 2], ["얼음", 2], ["크림", 1], ["도우", 1], ["설탕", 1]], "판매가": "68.97"},
	"발광 열매 아이스크림": {"제작방법": "제작대", "배수": 1, "재료": [["발광 열매", 2], ["얼음", 2], ["우유병", 1], ["설탕", 1]], "판매가": "6.67"},
	"후렴화 차": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["후렴화", 1], ["설탕", 1]], "판매가": "15.20"},
	"라일락 차": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["라일락", 1], ["꿀이 든 병", 1]], "판매가": "24.08"},
	"장미 차": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["장미", 1], ["꿀이 든 병", 1]], "판매가": "24.98"},
	"블랙 커피": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["볶은 원두", 1]], "판매가": "84.19"},
	"밀크 커피": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["볶은 원두", 1], ["우유병", 1], ["설탕", 1]], "판매가": "91.25"},
	"복숭아 차": {"제작방법": "냄비", "배수": 1, "재료": [["요리용 물병", 1], ["복숭아", 1], ["꿀이 든 병", 1]], "판매가": "26.73"},
}