'use client'
import { ReactFigma } from "@/app/magic";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <ReactFigma layout="home">
      {{
        Button: (
          <button
            onClick={() => {
              setCount((x) => x + 1);
            }}
          />
        ),
        Label: <>Clicks: {count}</>,
      }}
    </ReactFigma>
  );
}
