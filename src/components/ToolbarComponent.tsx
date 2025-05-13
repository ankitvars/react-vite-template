// src/components/ToolbarComponent.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FilterListIcon from "@mui/icons-material/FilterList";
import ScienceIcon from "@mui/icons-material/Science";
import SearchIcon from "@mui/icons-material/Search";
import ViewListIcon from "@mui/icons-material/ViewList";
import TemporaryDrawer from "./DrawerFilter";

type ToolBarComponentProps = {
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
  tabIndex: number;
  setTabIndex: (index: number) => void;
};

const ToolbarComponent: React.FC<ToolBarComponentProps> = ({
  tabIndex,
  setTabIndex,
  view,
  setView,
}) => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md")); // ≤ 900px (tablet & below)
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm")); // ≤ 600px (mobile & below)

  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleViewChange = (
    _event: React.MouseEvent<HTMLElement>,
    nextView: "grid" | "list" | null
  ) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleTabChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ) => {
    setTabIndex(newValue);
  };

  // responsive adjustments
  const searchWidth = isSmDown
    ? "100%" // full-width on mobile
    : isMdDown
      ? 150 // narrower on tablet
      : 200; // default on desktop

  return (
    <>
      <Stack
        direction={isSmDown ? "column" : "row"}
        alignItems="center"
        spacing={2}
        sx={{
          width: "100%",
          color: "rgb(121, 134, 134)",
          justifyContent: "center",
          // p: 2,
        }}
      >
        {/* View toggle buttons */}
        <ToggleButtonGroup
          value={view}
          exclusive
          size="small"
          onChange={handleViewChange}
          aria-label="view toggle"
          sx={{
            bgcolor: "rgba(121, 134, 134, 0.1)",
            borderRadius: "10px",
            p: 0.5,
            "& .MuiToggleButton-root": {
              border: "none",
              borderRadius: 2,
              minWidth: 32,
              minHeight: 32,
              p: 0,
              mx: 0.5,
              color: "rgb(121, 134, 134)",
              "&:hover": { bgcolor: "rgba(121, 134, 134, 0.1)" },
              "&.Mui-selected": {
                bgcolor: "rgba(88, 214, 141, 0.2)",
                color: "rgb(88, 214, 141)",
                "&:hover": { bgcolor: "rgba(88, 214, 141, 0.3)" },
              },
            },
          }}
        >
          <ToggleButton value="grid" aria-label="grid view">
            <AppsIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton value="list" aria-label="list view">
            <ViewListIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Search input */}
        <Box
          sx={{
            ml: isSmDown ? 0 : 2,
            width: searchWidth,
            flexGrow: isSmDown ? 0 : 1,
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth={isSmDown}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "rgb(88,214,141)" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                backgroundColor: "rgba(0,0,0,0.2)",
                "& fieldset": {
                  borderColor: "rgb(121, 134, 134)",
                  borderWidth: 1,
                },
                "&:hover fieldset": {
                  borderWidth: 1.5,
                },
                "&.Mui-focused fieldset": {
                  borderWidth: 2,
                },
              },
              "& .MuiInputBase-input": {
                color: "rgb(121, 134, 134)",
                fontSize: isSmDown ? "0.75rem" : "0.875rem",
                "&::placeholder": {
                  opacity: 1,
                },
              },
            }}
          />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            ml: isMdDown ? 1 : 2,
            width: "100%",
            display: "flex",
            justifyContent: isSmDown ? "flex-start" : "center",
            overflowX: isSmDown ? "auto" : "hidden",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
            "&::-webkit-scrollbar": { display: "none" }, // Chrome/Safari
          }}
        >
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            variant={isSmDown ? "scrollable" : "standard"}
            scrollButtons={isSmDown ? "auto" : undefined}
            centered={!isSmDown}
            aria-label="main tabs"
            TabIndicatorProps={{
              style: {
                backgroundColor: "white",
                height: 2,
                borderRadius: 1,
              },
            }}
            sx={{
              flexShrink: 0,
              "& .MuiTab-root": {
                minWidth: isSmDown ? 90 : isMdDown ? 90 : 110,
                fontSize: "0.75rem",
                textTransform: "none",
              },
              "& .Mui-selected": { color: "#fff", fontWeight: 600 },
              "& .MuiTabs-flexContainer": {
                justifyContent: isSmDown ? "flex-start" : "center",
              },
            }}
          >
            {[{ icon: <AppsIcon />, label: "All Presales" }, { icon: <ScienceIcon />, label: "My Contributions" }, { icon: <FavoriteIcon />, label: "Favorites" }]
              .map((tab, index) => (
                <Tab
                  key={index}
                  icon={tab.icon}
                  label={tab.label}
                  iconPosition="start"
                  disableRipple
                  sx={{
                    px: 1,
                    color: "rgb(121, 134, 134)",
                    marginBottom: -2,
                    "& .MuiTab-iconWrapper": {
                      marginBottom: 0,
                      marginRight: 1,
                    },
                    "&.Mui-selected .MuiSvgIcon-root": { color: "white" },
                    "&:hover": {
                      color: "white",
                      "& .MuiSvgIcon-root": { color: "white" },
                    },
                  }}
                />
              ))}
          </Tabs>
        </Box>



        {/* Filters button */}
        <Box sx={{ ml: isSmDown ? 0 : 1 }}>
          {isSmDown ? (
            <Button
              size="small"
              startIcon={<FilterListIcon fontSize="small" />}
              onClick={toggleDrawer(true)}
              sx={{
                textTransform: "none",
                fontSize: "0.75rem",
                color: "rgb(121, 134, 134)",
                "&:hover": {
                  color: "white",
                  "& .MuiSvgIcon-root": { color: "white" },
                },
              }}
            >
              Filters
            </Button>
          ) : (
            <Button
              size="small"
              endIcon={<FilterListIcon fontSize="large" />}
              onClick={toggleDrawer(true)}
              aria-label="filters"
              sx={{
                ml: 1,
                fontSize: "0.75rem",
                textTransform: "capitalize",
                fontWeight: 700,
                color: "rgb(121, 134, 134)",
                "&:hover": {
                  color: "white",
                  "& .MuiSvgIcon-root": { color: "white" },
                },
              }}
            >
              Filters
            </Button>
          )}
        </Box>
      </Stack>


      {open && <TemporaryDrawer open={open} toggleDrawer={toggleDrawer} />}
    </>
  );
};

export default ToolbarComponent;
