import React from "react";

const foodILike = [
  {
    id: 1,
    name: "김치",
    image:
      "https://images.unsplash.com/photo-1583224944844-5b268c057b72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "삼겹살",
    image:
      "https://images.unsplash.com/photo-1550388342-b3fd986e4e67?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 3,
    name: "된장찌개",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/08/24c312f82313faaf1e4d5ef98761efcb1.jpg",
  },
  {
    id: 4,
    name: "라면",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
  },
];

function Food({ name, picture }) {
  console.log(name);
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map((dish) => {
        return <Food key={dish.id} name={dish.name} picture={dish.image} />;
      })}
    </div>
  );
}

export default App;

// JSX는 단지 HTML + JavaScript의 조합이다
// Component는 대문자로 시작해야 한다.
// Component는 props를 통해 정보를 보낼 수 있다.
