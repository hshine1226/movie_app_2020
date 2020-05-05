import React from "react";

function Food({ favorite }) {
  console.log(favorite);
  return <h2>I like {favorite}</h2>;
}
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food favorite="Chicken" />
      <Food favorite="된장찌게" />
      <Food favorite="라면" />
      <Food favorite="삼겹살" />
    </div>
  );
}

export default App;

// JSX는 단지 HTML + JavaScript의 조합이다
// Component는 대문자로 시작해야 한다.
// Component는 props를 통해 정보를 보낼 수 있다.
