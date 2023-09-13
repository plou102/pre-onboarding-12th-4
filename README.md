# 프리온보딩 시계열 차트 만들기

주어진 데이터를 기반으로 시계열 차트 만들기

<br />

## 목차

- [🐼 만든 사람](#-만든-사람)
- [🔗 배포 링크](#-배포-링크)
- [🛠️ 기술 스택](#-기술-스택)
- [💻 실행 방법](#-실행-방법)
- [📂 폴더 구조](#-폴더-구조)
- [📚 기능](#-기능)
  - [시계열 차트 만들기](#시계열-차트-만들기)
  - [호버 기능 구현](#호버-기능-구현)
  - [필터링 기능 구현](#필터링-기능-구현)

## 🐼 만든 사람

- 박정민

<br />

## 🔗 배포 링크

- [Time Series Chart](https://pre-time-series-chart.netlify.app/)

<br />

## 🛠️ 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=react router&logoColor=white">

<img src="https://img.shields.io/badge/ESlint-4B32C3?style=flat&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black">

<br />

## 💻 실행 방법

```zsh
$ npm install
$ npm start
```

- git clone후, 위의 명령어를 순서대로 실행하면 프로젝트를 이용하실 수 있습니다.

<br />

## 📂 폴더 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📜CustomTooltip.tsx
 ┃ ┗ 📜FilterButton.tsx
 ┣ 📂context
 ┃ ┣ 📜DataContext.tsx
 ┃ ┗ 📜FilterIdContext.tsx
 ┣ 📂mock
 ┃ ┗ 📜mock_data.json
 ┣ 📂pages
 ┃ ┗ 📜Main.tsx
 ┣ 📂util
 ┃ ┗ 📜FomatClock.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜types.ts
```

<br />

## 📚 기능

### 시계열 차트 만들기

- Recharts를 사용하여 구현하였습니다.
- 왼쪽 Y축에는 Area 그래프의 대략적인 수치를, 오른쪽 Y축에는 Bar 그래프의 대략적인 수치를 나타내었습니다.
- X축을 나타내는 Key값을 포맷팅하여 구현하였습니다.
  - ex) `2023-02-01 14:36:45` -> `35:15`

<img width="1420" alt="스크린샷 2023-09-13 오후 7 20 28" src="https://github.com/plou102/pre-onboarding-12th-2/assets/107393773/3eed5d57-5418-431e-aacd-f1b01459858c">

<br />

### 호버 기능 구현

- 특정 데이터에 마우스 호버시 툴팁이 보여지도록 구현하였습니다.
- 툴팁에 `id, key, value_area, value_bar` 데이터가 보여지도록 커스텀하였습니다.

<img width="202" alt="스크린샷 2023-09-13 오후 7 23 12" src="https://github.com/plou102/pre-onboarding-12th-2/assets/107393773/d8312b95-5bac-4f61-a2d5-21ce3b50e882">

<br />

### 필터링 기능 구현

- 필터링은 `id` 데이터를 기준으로 구현하였습니다.
- 차트 상단의 버튼을 클릭하면 필터링 되어 특정 데이터 구역이 하이라이트 되도록 구현하였습니다.

![filter](https://github.com/plou102/pre-onboarding-12th-2/assets/107393773/75c3e8b6-4bb1-4a5f-98ac-683a70ad45fe)
