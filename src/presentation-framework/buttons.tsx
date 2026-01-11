import { Button } from "@mui/joy";
import { VscChevronLeft, VscChevronRight, VscHome } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { usePresentationContext } from "./presentation";

export const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/")} size="sm" variant="soft">
      <VscHome />
    </Button>
  );
};

export const NextButton = () => {
  const { next } = usePresentationContext();

  return (
    <Button onClick={next} size="sm" variant="soft">
      <VscChevronRight />
    </Button>
  );
};

export const PreviousButton = () => {
  const { previous } = usePresentationContext();

  return (
    <Button onClick={previous} size="sm" variant="soft">
      <VscChevronLeft />
    </Button>
  );
};
