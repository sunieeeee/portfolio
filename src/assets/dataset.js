const dataset = {
  skills: [
    {
      title: "html",
      icon: "fa-solid fa-code",
      desc: [
        "웹 페이지의 구조를 충분히 이해하고 있으며, 시멘틱 태그의 의미를 정확하게 알고 사용할 수 있습니다.",
        "디자인 시안을 기반으로 HTML 구조 및 클레스 네임을 꼼꼼하게 설계한 후 퍼블리싱 작업을 진행합니다. ",
      ],
    },
    {
      title: "css/scss",
      icon: "fa-brands fa-css3-alt",
      desc: [
        "CSS3의 구조와 속성을 숙지하고 있고, 원하는 스타일로 효율적이고 익숙하게 구현할 수 있습니다.",
        "SCSS를 활용하여 변수, 중첩 규칙, Mixin 등을 통해 CSS 코드를 보다 효율적으로 작성하고 관리할 수 있습니다. ",
      ],
    },
    {
      title: "jquery",
      icon: "fa-brands fa-node-js",
      desc: [
        "css 선택자를 사용하여 dom 요소를 손쉽게 선택하고 조작할 수 있습니다.",
        "Ajax를 활용하여 비동기 통신을 구현하고 데이터를 동적으로 가져올 수 있습니다.",
        "다양한 jQuery 플러그인을 활용할 수 있습니다.",
      ],
    },
    {
      title: "javascript",
      icon: "fa-brands fa-square-js",
      desc: [
        "비동기 통신을 위한 axios, fetch 함수를 사용할 수 있으며, 차이점에 대해 충분히 이해하고 있습니다.",
        "javascript의 데이터 타입에 대해 명확히 알고있습니다.",
        "이벤트 처리 및 DOM 조작을 익숙하게 수행할 수 있습니다.",
      ],
    },
    {
      title: "react",
      icon: "fa-brands fa-react",
      desc: [
        "styled-components를 사용하여 css를 컴포넌트화 할 수 있습니다.",
        "json-server와 axios를 활용하여 CRUD를 구현할 수 있습니다.",
        "리덕스를 연결하여 상태관리를 할 수 있습니다.",
      ],
    },
    {
      title: "next.js",
      icon: "fa-brands fa-neos",
      desc: [
        "next.js의 라우팅 방법을 이해하고 있으며, 활용할 수 있습니다.",
        "파일명에 대괄호를 넣는 방식으로 동일한 구조에 대한 서브페이지 구현이 가능합니다.",
        "axios와 리덕스를 활용하여 상태관리를 할 수 있습니다.",
      ],
    },
    {
      title: "redux",
      icon: "fa-regular fa-registered",
      desc: [
        "redux 사용 이유에 대해 충분히 이해하고 있습니다.",
        "fulfilled, rejected, pending의 차이점에 대해 숙지하고 있으며 각각의 상태에 따라 관리할 수 있습니다.",
        "데이터 조회를 위한 액션함수를 디스패치 할 수 있습니다.",
      ],
    },
    {
      title: "git/github",
      icon: "fa-brands fa-github",
      desc: [
        "git과 github를 사용하여 팀원과 협업이 가능합니다.",
        "사용 이유에 대해 잘 알고 있으며, 이를 통해 효율적인 협업과 버전 관리를 구현할 수 있습니다.",
      ],
    },
  ],
  experience: [
    {
      period: "2023.03 ￚ PRESENT",
      position: "PUBLISHER",
      name: "온라인투어",
      desc: [
        "여행사인 온라인투어에서 사이트 유지보수와 기획전 제작 퍼블리싱을 담당하였습니다.",
        "사내 퍼블리싱 규칙에 따라 사이트 유지보수를 하였으며, 기획전 페이지의 동일한 구조 및 자주쓰는 기능에 대해 재사용성을 높이기 위하여 바닐라 자바스크립트를 사용하여 템플릿을 만든 경험이 있습니다. ",
      ],
    },
    {
      period: "2021.06 ￚ 2022.06 (1년 1개월)",
      position: "PUBLISHER",
      name: "에이치투오코리아",
      desc: [
        "솔루션 회사인 에이치투오코리아에서 퍼블리싱 작업을 담당하였습니다.",
        "여행 상품 예약 플랫폼과 관련된 프로젝트에 주로 참여하였으며, 예약과 관련된 UI 인터렉션 제작 능력을 키웠습니다.",
      ],
    },
  ],
  education: [
    {
      period: "2023.10 ￚ 2024.04 (1년 1개월)",
      position: "메가스터디 IT 학원",
      name: "프론트엔드 개발 과정",
      desc: [
        "Axios와 async/await를 사용하여 비동기 요청을 효과적으로 처리하는 방법을 배웠습니다.",
        "성능 최적화를 위해 hook과 라우팅을 효율적으로 사용하는것에 힘썼습니다.",
      ],
    },
    {
      period: "2021.02 ￚ 2021.06",
      position: "sbs컴퓨터아카데미",
      name: "웹퍼블리싱 과정",
      desc: [
        "html, css, jquery를 배웠으며, 이를통해 다양한 UI를 구현할 수 있는 역량을 키웠습니다.",
        "jquery로 DOM조작하는 방법과 인터렉션 구현, 그리고 플러그인 사용법을 학습하였습니다.",
      ],
    },
  ],
  projects: [
    {
      title: "빽다방 클론코딩",
      sub_title: "클론코딩 프로젝트",
      period: "2024.04 ~ 2024.05 (1개월)",
      desc: [
        "커피전문점인 빽다방 클론 프로젝트입니다.",
        "다양한 조건에 맞춰 데이터를 동적으로 필터링하고 검색할 수 있는 기능을 구현하였습니다.",
        "vercel을 통해 배포하였으며, 약 1달정도 소요되었습니다.",
      ],
      tech: ["react", "next.js", "redux"],
      percent: "100%",
      work_area:
        "메인 페이지, 메뉴 페이지, 소식 페이지, 커뮤니티 페이지, 매장안내 페이지",
      link: "https://paikdabang.vercel.app",
      github: "https://github.com/sunieeeee/paikdabang?tab=readme-ov-file",
      group: "Frontend",
      view: [
        {
          name: "메인 페이지",
          text: [
            "swiper를 사용한 이미지 슬라이드 영역, 각각 다른 스타일을 준 배너 영역, SNS 영역으로 나뉜다.",
            "배너의 인덱스를 기준으로 프렌차이즈영역에는 ‘btn_house’ 클래스를, 매장 정보 영역에는 ‘btn_store’클래스를 적용하여 각각 다른 스타일을 적용하였다.",
          ],
          img: "/img/projects/paikdabang/main.gif",
        },
        {
          name: "메뉴 페이지",
          text: [
            "전부 같은 구조이기 때문에 파일이름에 대괄호를 넣었고 Redux를 통해 서브 메뉴를 클릭함에 따라 데이터만 다르게 가져오도록 만들었다.",
            "메뉴 항목을 클릭하면 ‘menuToggle’함수가 호출되어 ‘MenuInfo’컴포넌트에 ‘menuActive’ 클래스가 토글 되면서 메뉴 상세 정보를 표시하거나 감춘다.",
          ],
          img: "/img/projects/paikdabang/menu.gif",
        },
        {
          name: "소식 페이지",
          text: [
            "‘menu_new’ 카테고리인 경우, 모든 데이터를 반환 ‘menu_new’ 외의 카테고리인 경우 해당 카테고리에 맞는 데이터만 반환한다.",
            "테이블형식인 TableContainer 내에서 data 배열을 순회하여 각 뉴스 항목을 tr로 렌더링한다.",
          ],
          img: "/img/projects/paikdabang/news.gif",
        },
        {
          name: "커뮤니티 페이지",
          text: [
            "게시물 목록을 나타내며, 각 게시물 항목은 이미지, 제목, 날짜를 포함한다.",
          ],
          img: "/img/projects/paikdabang/community.gif",
        },
        {
          name: "매장안내 페이지",
          text: [
            "지역 검색을 하였을 때 상태 값이 변할 때마다 그에 맞는 매장 정보 제공한다.",
            "onChange이벤트를 통해 current.value를 set함수에 넣어 상태 값에 전달한다.",
            "바뀐 상태 값은 redux를 통해 백엔드로 넘겨 원하는 데이터만 받아온다.",
          ],
          img: "/img/projects/paikdabang/store.gif",
        },
      ],
    },
    {
      title: "이미지 검색",
      sub_title: "카카오 오픈 API를 이용한 이미지 검색",
      period: " 2024.5.28~2024.6.8 (약 2주)",
      desc: [
        "카카오 오픈 API를 이용한 이미지 검색 기능을 구현하였습니다.",
        "무한 스크롤(Infinity Scroll) 기능을 사용하여 사용자가 스크롤을 내리면 자동으로 더 많은 이미지 데이터를 불러오는 기능을 구현하였습니다.",
      ],
      tech: ["React", "Redux", "Axios", "SCSS"],
      percent: "100%",
      work_area: "검색 페이지",
      link: "",
      group: "Frontend",
      view: [
        {
          name: "검색 기능",
          img: "/img/projects/imageSearch/search.gif",
        },
        {
          name: "무한 스크롤",
          img: "/img/projects/imageSearch/infinite_scroll.gif",
        },
      ],
    },
    {
      title: "일일 영화 검색",
      sub_title: "영화진흥위원회 오픈 API를 이용한 일일 영화 검색",
      period: " 2024.6.10~2024.6.22 (약 2주)",
      desc: [
        "영화진흥위원회 오픈 API를 이용한 일일 영화 검색 기능을 구현하였습니다.",
        "초기값은 어제 날짜로 설정되어 있으며, 사용자가 날짜를 변경할 때마다 해당 날짜의 영화 순위 데이터를 조회되도록 구현하였습니다.",
      ],
      tech: ["React", "Redux", "Axios", "SCSS"],
      percent: "100%",
      work_area: "검색 페이지",
      link: "",
      group: "Frontend",
      view: [
        {
          name: "날짜 선택 및 데이터 조회",
          img: "/img/projects/movierank/MovieRank.gif",
        },
      ],
    },
    {
      title: "Mary's Forest",
      sub_title: "기업사이트 제작",
      period: "2022.05 ~ 2022.09 (5개월)",
      desc: [
        "부트스트랩으로 만든 키즈놀이터 홈페이지입니다.",
        "모든 페이지가 반응형으로서 모바일, 태블릿에서도 문제없이 볼 수 있도록 제작하였습니다.",
      ],
      tech: ["html & css", "jquery", "javascript", "bootstrap", "flatpicker"],
      percent: "100%",
      work_area:
        "메인 페이지, 메리의 숲 이야기 페이지, 공간안내 페이지, 예약 페이지, 공지사항 페이지",
      link: "/pages/marysforest/main.html",
      group: "Publishing",
      view: [
        {
          name: "메인 페이지",
          img: "/img/projects/marysforest/marys2_main.gif",
        },
        {
          name: "메리의 숲 이야기 페이지",
          img: "/img/projects/marysforest/marys2_about.gif",
        },
        {
          name: "공간안내 페이지",
          img: "/img/projects/marysforest/marys2_area.gif",
        },
        {
          name: "예약 페이지",
          img: "/img/projects/marysforest/marys2_reservation.gif",
        },
        {
          name: "공지사항 페이지",
          img: "/img/projects/marysforest/marys2_notice.gif",
        },
      ],
    },
    {
      title: "호반 리조트",
      sub_title: "리조트 예약 사이트 제작",
      period: "2021.12~2022.01(2개월)",
      desc: [
        "호반기업에서 운영하고 있는 리조트의 예약사이트를 제작하였습니다.",
        "모든 페이지가 반응형으로서 모바일, 태블릿에서도 문제없이 볼 수 있도록 제작하였습니다.",
      ],
      tech: ["html & css", "jquery", "bootstrap"],
      percent: "100%",
      work_area:
        "메인 페이지, 상품 상세 페이지, 상품 예약 페이지, 예약 완료 페이지, 상세 예약내역 확인 페이지, 고객정보 변경 페이지, 예약 취소 페이지, 전체 예약내역 페이지",
      link: "/pages/hoban_reservation/html/main.html",
      group: "Publishing",
      view: [
        {
          name: "메인 페이지",
          img: "/img/projects/resome/hoban_main.JPG",
        },
        {
          name: "상품 상세 페이지",
          img: "/img/projects/resome/package_detail.JPG",
        },
        {
          name: "상품 예약 페이지",
          img: "/img/projects/resome/package_reservation.JPG",
        },
        {
          name: "예약 완료 페이지",
          img: "/img/projects/resome/reservation_complete.JPG",
        },
        {
          name: "예약내역 상세 페이지",
          img: "/img/projects/resome/reservation_confirm.JPG",
        },
        {
          name: "고객정보 변경 페이지",
          img: "/img/projects/resome/change_information.JPG",
        },
        {
          name: "예약 취소 페이지",
          img: "/img/projects/resome/reservation_cancel.JPG",
        },
        {
          name: "전체 예약내역 페이지",
          img: "/img/projects/resome/planningStay.JPG",
        },
      ],
    },
    {
      title: "대한상공회의소",
      sub_title: "중소기업 복지 플랫폼 제작",
      period: "2021.08~2021.10(3개월)",
      group: "Publishing",
      desc: [
        "대한상공회의소의 중소기업복지플랫폼 입니다.",
        "헤더, 푸터를 제외한 컨텐츠 영역만 퍼블리싱을 하였고, IE에서도 문제없이 나오도록 구현하였습니다.",
        "반응형으로 제작되어 모바일, 태블릿에서도 문제없이 볼 수 있도록 제작하였습니다.",
      ],
      tech: ["html & css", "jquery", "javascript", "daterangepicker"],
      percent: "100%",
      work_area:
        "원페이지로서 메인배너영역의 검색창, 날짜선택, 인원수 선택 부분을 구현하였습니다.",
      // link: "/pages/hoban_reservation/html/main.html",
      view: [
        {
          // title: "PC",
          img: "/img/projects/korcham/korcham_pc.jpeg",
        },
        // {
        //   title: "MO",
        //   img: "/img/projects/korcham/korcham_mo.jpeg",
        // },
      ],
    },
  ],
};

export default dataset;