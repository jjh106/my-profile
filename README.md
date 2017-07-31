# my-profile

*vue.js를 활용한 나에 관한 웹페이지 제작 프로젝트*

**동영상 링크** : https://youtu.be/avz1ycIblYY

### # 컨텐츠 기획

* home : 간단한 소개, 경험, 관심사를 보여주는 페이지.
* works : 공부하며 간단하게 만들었던 것들을 소개하는 페이지.
* shop : 평소에 관심 있던 물건을 담아 저장하는 장바구니 페이지.
* memo : 나의 일정을 기록하고 관리하는 페이지.


---


### # 디자인

* https://color.adobe.com/ko/explore/?filter=most-popular&time=all 참고하여 대표 색상들을 선택하고

  레이아웃은 컴포넌트 별로 작업을 하며 그때 그때 생각하여 적용함.


---


### # 라우팅 설정

* 폴더와 동일하게 navigation에 HOME, WORKS, SHOP, MEMO를 default로 설정하고 각 메뉴에 header와 footer를 추가하여 SPA를 구현함.


---


### # 컴포넌트 만들기

* 공통적으로 쓰이는 intro, header, footer는 components폴더 상위에 위치.
* home : introduction, experience, interest 3개의 컴포넌트를 만들고 내부에 자식 컴포넌트로 해당하는 

​                     modal 컴포넌트를 만들었다.

* works : project 컴포넌트 생성 후 각각의 프로젝트의 깃헙을 링크로 연결.
* shop : product 리스트에 존재하는 아이템의 add 버튼을 클릭하여 해당 아이템을 cart로 이동 시킨다.

​                   이동한 아이템의 수량을 증감할 수 있고 그에 맞게 total 가격이 나타난다.

* memo : firebase를 사용해 일정을 기록하면 db로 post하고 페이지가 렌더링 될 때면 저장되어 있던

​                      data가 get된다. 마찬가지로 삭제 버튼을 누르게 되면 firebase의 데이터도 제거된다.

---

### # 추가 및 변경해야 할 사항

* 프로젝트에 쓰인 모든 이미지는 assets 폴더에 저장하여 사용했는데 그 부분을 firebase의 storage를 사용하도록 변경이 필요.
* shop 컴포넌트에 검색 인풋을 만들고 네이버 이미지검색 api를 사용해 검색한 이미지를 리스트에 담는 기능 추가해야 함.
* memo 컴포넌트를 달력으로 변경해야 함.
* firebase를 통해 호스팅.



