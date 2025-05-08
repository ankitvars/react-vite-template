import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./DrawerFilter.css";
import { DrawerFilterLabelRow } from "./DrawerFilterLabelRow";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
  tierImages,
  chainImages,
  badgeOptions,
  statusOptions,
  sortOptions,
  saleTypeOptions,
  listingTypeOptions,
} from "../constants/filterOptions";

type DrawerProps = {
  open: boolean;
  toggleDrawer: (open: boolean) => () => void;
};

export default function TemporaryDrawer({ toggleDrawer, open }: DrawerProps) {
  const handleReset = () => {
    // Reset logic here
  };
  const handleApply = () => {
    // Apply logic here
  };

  const DrawerList = (
    <Box role="presentation">
      <Stack className="drawer-stack">
        <Button className="drawer-close-btn" onClick={toggleDrawer(false)}>
          <CloseIcon className="drawer-close-icon" fontSize="inherit" />
        </Button>
      </Stack>
      {/* SImpleBar */}
      <SimpleBar forceVisible="y" autoHide={false} className="drawer-content">
        <DrawerFilterLabelRow label="Chain" />
        <Stack className="drawer-chain-filter">
          {chainImages.map((img) => (
            <Box
              key={img.alt}
              component="img"
              src={img.src}
              alt={img.alt}
              sx={{
                width: "24px",
                height: "24px",
                marginRight: "12px",
                marginBottom: "12px",
                cursor: "pointer",
                filter: "none",
                transition: "0.3s",
              }}
            />
          ))}
        </Stack>
        <DrawerFilterLabelRow label="Tier" />
        <Stack className="drawer-chain-filter">
          {tierImages.map((img) => (
            <Box
              className="tier-images"
              key={img.alt}
              component="img"
              src={img.src}
              alt={img.alt}
            />
          ))}
        </Stack>

        <Box component="fieldset" className="drawer-fieldset">
          <DrawerFilterLabelRow label="Badges" />
          <FormGroup row className="badge-form-group">
            {badgeOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                className="badge-label"
                control={
                  <Checkbox
                    size="small"
                    color="primary"
                    className="custom-checkbox-square"
                    icon={
                      <CheckBoxOutlineBlankIcon
                        sx={{
                          fontSize: 18,
                          borderRadius: "4px",
                          border: "1.5px solid #c2c2c2",
                          color: "transparent",
                          background: "transparent",
                        }}
                      />
                    }
                    checkedIcon={
                      <CheckBoxIcon
                        sx={{
                          fontSize: 18,
                          borderRadius: "4px",
                          border: "1.5px solid rgb(12, 175, 96)",
                          color: "rgb(12, 175, 96)",
                          background: "transparent",
                        }}
                      />
                    }
                  />
                }
                label={option.label}
                value={option.value}
              />
            ))}
          </FormGroup>
        </Box>

        <Box component="fieldset" className="drawer-fieldset">
          <DrawerFilterLabelRow label="Sort" showButton={false} />
          <FormGroup row className="badge-form-group">
            {sortOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                className="badge-label"
                control={
                  <Checkbox
                    size="small"
                    color="primary"
                    className="custom-checkbox-circle"
                    icon={
                      <RadioButtonUncheckedIcon
                        sx={{
                          fontSize: 18,
                          borderRadius: "50%",
                          border: "1.5px solid #c2c2c2",
                          color: "transparent",
                          background: "transparent",
                        }}
                      />
                    }
                    checkedIcon={
                      <RadioButtonCheckedIcon
                        sx={{
                          fontSize: 18,
                          borderRadius: "50%",
                          border: "1.5px solid rgb(12, 175, 96)",
                          color: "rgb(12, 175, 96)",
                          background: "transparent",
                        }}
                      />
                    }
                  />
                }
                label={option.label}
                value={option.value}
              />
            ))}
          </FormGroup>
        </Box>

        <Box component="fieldset" className="drawer-fieldset">
          <DrawerFilterLabelRow label="Status" showButton={false} />
          <FormGroup row className="badge-form-group">
            {statusOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                className="badge-label"
                control={
                  <Checkbox
                    size="small"
                    color="primary"
                    className="custom-checkbox-square"
                    icon={
                      <CheckBoxOutlineBlankIcon
                        sx={{
                          fontSize: 18,
                          borderRadius: "4px",
                          border: "1.5px solid #c2c2c2",
                          color: "transparent",
                          background: "transparent",
                        }}
                      />
                    }
                    checkedIcon={
                      <CheckBoxIcon
                        sx={{
                          fontSize: 18,
                          borderRadius: "4px",
                          border: "1.5px solid rgb(12, 175, 96)",
                          color: "rgb(12, 175, 96)",
                          background: "transparent",
                        }}
                      />
                    }
                  />
                }
                label={option.label}
                value={option.value}
              />
            ))}
          </FormGroup>
        </Box>

        <Box component="fieldset" className="drawer-fieldset">
          <DrawerFilterLabelRow label="Sale Type" showButton={false} />
          <FormGroup row className="badge-form-group">
            {saleTypeOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                className="badge-label"
                control={
                  <Checkbox
                    size="small"
                    color="primary"
                    className="custom-checkbox-square"
                    icon={
                      <CheckBoxOutlineBlankIcon
                        sx={{
                          fontSize: 18,
                          borderRadius: "4px",
                          border: "1.5px solid #c2c2c2",
                          color: "transparent",
                          background: "transparent",
                        }}
                      />
                    }
                    checkedIcon={
                      <CheckBoxIcon
                        sx={{
                          fontSize: 18,
                          borderRadius: "4px",
                          border: "1.5px solid rgb(12, 175, 96)",
                          color: "rgb(12, 175, 96)",
                          background: "transparent",
                        }}
                      />
                    }
                  />
                }
                label={option.label}
                value={option.value}
              />
            ))}
          </FormGroup>
        </Box>

        <Box component="fieldset" className="drawer-fieldset">
          <DrawerFilterLabelRow label="Listing Type" showButton={false} />
          <FormGroup row className="badge-form-group">
            {listingTypeOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                className="badge-label"
                control={
                  <Checkbox
                    size="small"
                    color="primary"
                    className="custom-checkbox-square"
                    icon={
                      <CheckBoxOutlineBlankIcon
                        sx={{
                          fontSize: 18,
                          borderRadius: "4px",
                          border: "1.5px solid #c2c2c2",
                          color: "transparent",
                          background: "transparent",
                        }}
                      />
                    }
                    checkedIcon={
                      <CheckBoxIcon
                        sx={{
                          fontSize: 18,
                          borderRadius: "4px",
                          border: "1.5px solid rgb(12, 175, 96)",
                          color: "rgb(12, 175, 96)",
                          background: "transparent",
                        }}
                      />
                    }
                  />
                }
                label={option.label}
                value={option.value}
              />
            ))}
          </FormGroup>
        </Box>

        <Stack className="drawer-actions">
          <Button
            variant="outlined"
            color="inherit"
            className="drawer-action-btn"
            onClick={handleReset}
          >
            Reset
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            className="drawer-action-btn"
            onClick={handleApply}
          >
            Apply
          </Button>
        </Stack>
      </SimpleBar>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          className: "drawer-main",
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
