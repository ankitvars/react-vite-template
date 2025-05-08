import { Stack, Button, FormLabel } from "@mui/material";
import "./DrawerFilter.css";

type DrawerFilterLabelRowProps = {
  label: string;
  onUncheckAll?: () => void;
  buttonText?: string;
  showButton?: boolean;
};

export function DrawerFilterLabelRow({
  label,
  onUncheckAll,
  buttonText = "Uncheck All",
  showButton = true,
}: DrawerFilterLabelRowProps) {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <FormLabel className="drawer-form-label">{label}</FormLabel>
      {showButton && (
        <Button
          variant="outlined"
          size="small"
          color="inherit"
          disableElevation
          className="drawer-uncheck-btn"
          onClick={onUncheckAll}
        >
          {buttonText}
        </Button>
      )}
    </Stack>
  );
}
