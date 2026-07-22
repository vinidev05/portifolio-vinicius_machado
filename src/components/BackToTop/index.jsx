import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import { Button } from "./styles";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <Button onClick={scrollTop}>
        <FaArrowUp />
      </Button>
    )
  );
};

export default BackToTop;