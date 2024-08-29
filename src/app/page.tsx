"use client";

import Button from "./components/Button/Button";
import ButtonEdit from "./components/Button/ButtonEdit";

export default function Home() {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <main>
      <Button onClick={handleClick} size="small">
        Small Button
      </Button>
      <Button onClick={handleClick} size="medium">
        Medium Button
      </Button>
      <Button onClick={handleClick} size="large">
        Large Button
      </Button>
      <ButtonEdit onClick={handleClick} />
    </main>
  );
}
