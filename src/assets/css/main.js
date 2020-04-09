import grey from "@material-ui/core/colors/grey";
export const palette = {
  primary: "#2E69B2",
  bg: "#396BA6",
  secondary: "#00c4f6",
  info: "#eaf0f7",
  grey: "#F7F7F7",
  error: "#d81b1b",
};
export const PRIMARY_BOLD = {
  color: palette.primary,
  fontWeight: "bold",
};
export const WHITE_BUTTON = {
  fontWeight: "bold",
  textTransform: "capitalize",
  color: "white",
  textDecoration: "underline",
};
export const PRIMARY_BUTTON = {
  color: "white",
  backgroundColor: palette.primary,
  textTransform: "capitalize",
};
export const BUTTON_OVAL = {
  borderRadius: 20,
  width: 90,
  height: 40,
  border: "1px solid",
  borderColor: grey[500],
  textTransform: "capitalize",
};

export const DARK = {
  color: "white",
  backgroundColor: grey[800],
  borderColor: grey[800],
};

export const COLUMN_CENNTER = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const COLOR = {
  red: "#ff6559",
  darkGrey: "#bfbfbf",
};

export const BOLD = {
  fontWeight: "bold",
};
