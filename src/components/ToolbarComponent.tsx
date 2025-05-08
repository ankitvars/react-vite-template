import AppsIcon from "@mui/icons-material/Apps";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FilterListIcon from "@mui/icons-material/FilterList";
import ScienceIcon from "@mui/icons-material/Science";
import SearchIcon from "@mui/icons-material/Search";
import ViewListIcon from "@mui/icons-material/ViewList";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  ToggleButton,
  ToggleButtonGroup
} from "@mui/material";
import { useState } from "react";
import TemporaryDrawer from "./DrawerFilter";

type ToolBarComponentProps = {
  view: "grid" | "list";
  setView: (view: "grid" | "list") => void;
  tabIndex: number;
  setTabIndex: (index: number) => void;
}

const ToolbarComponent = ({ tabIndex, setTabIndex, view, setView }: ToolBarComponentProps) => {
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
      console.log("View changed to:", nextView);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log("Search term:", event.target.value);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
    console.log("Tab changed to index:", newValue);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ width: "100%", p: 2, color: "rgb(121, 134, 134)" }}
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

              // hover on non‑selected
              "&:hover": {
                bgcolor: "rgba(121, 134, 134, 0.1)",
              },

              // selected state
              "&.Mui-selected": {
                bgcolor: "rgba(88, 214, 141, 0.2)", // green highlight
                color: "rgb(88, 214, 141)", // green icon
                "&:hover": {
                  bgcolor: "rgba(88, 214, 141, 0.3)",
                },
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
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            ml: 2,
            width: 200,
            // style the overall outlined input
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px", // fully pill‑shaped
              backgroundColor: "rgba(0,0,0,0.2)", // subtle dark fill
              "& fieldset": {
                borderColor: "rgb(121, 134, 134)", // muted teal border
                borderWidth: 1,
              },
              "&:hover fieldset": {
                borderColor: "rgb(121, 134, 134)",
                borderWidth: 1.5,
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgb(121, 134, 134)",
                borderWidth: 2,
              },
            },

            // style the input text + placeholder
            "& .MuiInputBase-input": {
              color: "rgb(121, 134, 134)",
              fontSize: "0.875rem",
              "&::placeholder": {
                color: "rgb(121, 134, 134)",
                opacity: 1,
              },
            },

            // style the search icon
            "& .MuiSvgIcon-root": {
              color: "rgb(121, 134, 134)",
              fontSize: "1rem",
            },
          }}
        />

        {/* Centered tabs */}
        <Box sx={{ flexGrow: 1, ml: 4 }}>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            centered
            aria-label="main tabs"
            TabIndicatorProps={{
              style: {
                backgroundColor: "white",
                height: 2,
                borderRadius: 1,
              },
            }}
          >
            {[
              { icon: <AppsIcon />, label: "All Presales" },
              { icon: <ScienceIcon />, label: "My Contributions" },
              { icon: <FavoriteIcon />, label: "Favorites" },
            ].map((tab, index) => (
              <Tab
                key={index}
                icon={tab.icon}
                label={tab.label}
                iconPosition="start"
                disableRipple
                sx={{
                  px: 1, // horizontal padding
                  color: "rgb(121, 134, 134)", // default text/icon
                  fontSize: "0.75rem", // smaller font
                  fontWeight: 500,
                  textTransform: "none", // preserve spacing
                  marginBottom: -2,

                  // icon + text in a row
                  "& .MuiTab-iconWrapper": {
                    marginBottom: 0,
                    marginRight: 1,
                  },

                  // selected state
                  "&.Mui-selected": {
                    color: "white",
                    fontWeight: 600,
                  },
                  "&.Mui-selected .MuiSvgIcon-root": {
                    color: "white",
                  },

                  // hover for any tab
                  "&:hover": {
                    color: "white",
                    "& .MuiSvgIcon-root": {
                      color: "white",
                    },
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Filters button */}
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
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            },
          }}
        >
          Filters
        </Button>
      </Stack>


      {open && <TemporaryDrawer open={open} toggleDrawer={toggleDrawer} />}
    </>
  );
};

export default ToolbarComponent;
