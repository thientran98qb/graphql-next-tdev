import { Box, LinearProgress, Typography } from "@mui/material";

type Props = {
  fullHeight?: boolean;
};
export const Loader: React.FC<Props> = ({ fullHeight = false }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 2,
      minHeight: fullHeight ? "100vh" : "auto",
    }}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: "400px",
        height: "100px",
      }}
    >
      <LinearProgress />
    </Box>
  </Box>
);
