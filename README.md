# Hayaggu
Stand up now, for our country.

## 프로젝트 구조에 대한 간단한 설명
/src - 실제로 구현하는 소스 코드들이 존재하는 디렉토리

/static - 
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

## [Webpack](http://webpack.github.io)
