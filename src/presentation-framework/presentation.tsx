import { Box, Stack } from "@mui/joy";
import { createContext, FC, useCallback, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { HomeButton, NextButton, PreviousButton } from "./buttons";
import { SxProps } from "@mui/joy/styles/types";

const PresentationContext = createContext({
  next: () => {},
  previous: () => {},
});

export const usePresentationContext = () => {
  return useContext(PresentationContext);
};

type Props = {
  slides: FC[];
  showProgress?: boolean;
  progressBarCustomStyle?: SxProps;
};

export default function Presentation({
  slides,
  showProgress = true,
  progressBarCustomStyle = {},
}: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSlide = Number(searchParams.get("s")) || 0;

  const setCurrentSlide = useCallback(
    (index: number) => {
      setSearchParams({ s: `${index}` });
    },
    [setSearchParams]
  );

  const next = useCallback(() => {
    if (currentSlide === slides.length - 1) {
      return;
    }
    setCurrentSlide(currentSlide + 1);
  }, [currentSlide, slides.length, setCurrentSlide]);

  const previous = useCallback(() => {
    if (currentSlide === 0) {
      return;
    }
    setCurrentSlide(currentSlide - 1);
  }, [currentSlide, setCurrentSlide]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        next();
      } else if (event.key === "ArrowLeft") {
        previous();
      }
    },
    [next, previous]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);

    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, [handleKeyPress]);

  const Slide = slides[currentSlide];

  return (
    <PresentationContext.Provider
      value={{
        next,
        previous,
      }}
    >
      <Stack height="100%" p={5}>
        <Slide />
        <Stack
          direction="row"
          justifyContent="center"
          gap={2}
          sx={{
            position: "fixed",
            bottom: 0,
            right: 0,
            padding: 2,
            opacity: 0,
            transition: "opacity 0.2s ease-in-out",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <HomeButton />
          <PreviousButton />
          <NextButton />
        </Stack>
        {showProgress && (
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
              height: 4,
              backgroundColor: "neutral.800",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
                backgroundColor: "primary.500",
                transition: "width 0.3s ease-in-out",
                ...progressBarCustomStyle,
              }}
            />
          </Box>
        )}
      </Stack>
    </PresentationContext.Provider>
  );
}
