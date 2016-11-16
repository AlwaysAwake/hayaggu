# Hayaggu
Stand up now, for our country.



## 프로젝트 구조에 대한 간단한 설명
/src - 실제로 구현하는 소스 코드들이 존재하는 디렉토리

/static - 이미지, 폰트, 스타일시트, 외부 종속적 스크립트들이 들어가는 디렉토리.  
.babelrc - Babel에 관한 간단한 설정 파일  
.editorconfig - 에디터 설정 통일용  
.gitignore  
ecosystem.json - 디플로이 툴로 사용 중인 PM2의 설정 파일:  
index.js  
package.json - npm(Node package manager 설정 파일):   
README.md  
server.js  
webpack.config.dev.js - webpack  
webpack.config.prod.js - webpack 설정 파일    



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

## [Webpack](http://webpack.github.io)  
SPA(Single Page Application) 구성을 위해서 진입점을 설정해 주면,  
필요한 자바스크립트들을 하나로 뭉친 번들(bundle) 자바스크립트를 생성해주는 모듈 번들러.  
