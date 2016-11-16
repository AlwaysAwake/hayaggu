# Hayaggu
Stand up now, for our country.



## 프로젝트 구조에 대한 간단한 설명
* /src - 실제로 구현하는 소스 코드들이 존재하는 디렉토리
  * /actions - Redux action functions  
    * actions.js  
  * /components - React 컴포넌트들(Usually Stateless, Dumb components)  
    * /Main  
    * index.js  
  * /constants - Constant values of whole application  
  * /containers - React 컴포넌트들(Smart components - Connected with Redux)  
    * /DevTools  
    * /Main  
    * index.js - List of container components  
  * /reducers - State transition function of Redux  
  * /store - Store configuration function (w/ middleware)  
  * /utils - Utilify functions  
  * App.js - 앱 구성 최외곽 컴포넌트(라우트 포함)  
  * index.js - Webpack entry point  
  * routes.js - 라우팅 명세(React-router)  
* /static - 이미지, 폰트, 스타일시트, 외부 종속적 스크립트들이 들어가는 디렉토리.  
  * /images  
  * /styles  
  * index.html  
  * preview.png  
* .babelrc - Babel에 관한 간단한 설정 파일  
* .editorconfig - 에디터 설정 통일용  
* .gitignore  
* ecosystem.json - 디플로이 툴로 사용 중인 PM2의 설정 파일:  
* index.js - Node.js 진입점(초기 실행 스크립트), ES6 사용을 위해서 server.js를 require해서 가져오는 방식으로 구성해놓음 + Polyfill  
* package.json - npm(Node package manager 설정 파일):   
* README.md  
* server.js - index.html 서빙을 위한 심플 HTTP 서버  
* webpack.config.dev.js - webpack 설정 파일(dev)  
* webpack.config.prod.js - webpack 설정 파일(production)  



## [Editorconfig](http://editorconfig.org)  
에디터 설정 통일에 사용, 라인 브레이크 등을 맞춰줘서 버젼 관리등이 꼬이지 않도록 함.  

## [PM2](http://pm2.keymetrics.io)  
Node.js keep-alive, Deployment 등을 담당하는 툴.  
노드는 기본적으로 스크립트라서 죽으면 재실행이 안되는데 죽었을 때 다시 실행시켜주는 역할을 한다.  
디플로이는 덤  

## [npm](https://npmjs.com)  
CommonJS라고 불리는 현재의 Node.js 패키지 관리 방식의 핵심.  
원래가 반쪽짜리 언어인 JavaScript의 나머지 반쪽을 채워주는,  
외부 디펜던시들을 관리해주는 저장소로 사용되고 있다.  
쉘 스크립트를 지정해두거나 프로젝트에 대한 설명을 명시하는 등 최근에는 표준으로 인정받고 있는 추세임.  

## [Webpack](http://webpack.github.io)  
SPA(Single Page Application) 구성을 위해서 진입점을 설정해 주면,  
필요한 자바스크립트들을 하나로 뭉친 번들(bundle) 자바스크립트를 생성해주는 모듈 번들러.  
빌드해야 할 스크립트들의 진입점도 이 곳에 명시되어 있다.  

## [Babel](https://babeljs.io)
현재의 JavaScript 표준은 ES6(통칭 ES2015, ECMAScript 6)이나,  
많은 브라우저들이 최신 표준을 따라오지 못하고,  
ES5 까지의 기능을 지원하는 경우가 대부분임. (브라우저마다도 지원 범위 다 다름)  
Babel은 ES6으로 작성한 코드를 ES5로 트랜스파일 해주는 역할을 한다.  
프로그래머들은 편리하게 ES6으로 코드를 작성한 뒤 ES5로 서빙해서 브라우저 커버리지를 높일 수 있음.  
본 프로젝트에는 Babel에 대한 설정이 webpack 빌드 시에 함께 진행되도록 구성되어 있음.  
