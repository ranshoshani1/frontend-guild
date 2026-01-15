import { Button, Stack } from "@mui/joy";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Stack width="50%" gap={3}>
        <Button
          onClick={() => {
            navigate("/use-effect");
          }}
        >
          Use Effect
        </Button>
        <Button
          onClick={() => {
            navigate("/css");
          }}
        >
          CSS
        </Button>
        <Button
          onClick={() => {
            navigate("/tanstack-query");
          }}
          sx={{
            background: "linear-gradient(135deg, #e040fb 0%, #f48fb1 100%)",
          }}
        >
          TanStack Query
        </Button>
      </Stack>
    </Stack>
  );
}

export default App;
