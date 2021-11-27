/* eslint-disable no-plusplus */
// @ts-check
/* eslint-disable-next-line no-console */

// 2021 11 28, parcel index.html을 통해서 계속 뛰어놓자.

for(let j = 1; j < 5; ++j) {
    const ajax = new XMLHttpRequest();
    
    // 가변스트링을 위해서 1 왼쪽의 작은 따음표와 딸러와 브라켓을 이용한다
    const NEW_URL = `https://api.hnpwa.com/v0/news/${j}.json`; 
    
    ajax.open('GET',NEW_URL , false);
    ajax.send();
    
    const newsFeed = JSON.parse(ajax.response);
    // `comments_count: 3
    // domain: "juxt.pro"
    // id: 29341400
    // points: 54
    // time: 1637848777
    // time_ago: "2 hours ago"
    // title: "Abstract Clojure"
    // type: "link"
    // url: "https://www.juxt.pro/blog/abstract-clojure"
    // user: "joelittlejohn"`
    
    // document에서 특정 테그로 요소를 생성하고 그 요소를 Root에 붙이는 것
    const ul = document.createElement('ul');
    for (let i = 0; i < 10; ++i) {
        const li = document.createElement('li');    
        const anchorTag = document.createElement('a');        

        anchorTag.href = 'http://naver.com'
        anchorTag.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count}}`;
        ul.append(li);
        li.append(anchorTag);
    }
    
    document.getElementById('root').append(ul);
}




