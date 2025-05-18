// SaleComponent.tsx
import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { Icon } from "@iconify/react";
import "./SaleComponent.css";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

interface SaleItem {
  id: string;
  label: string;
  value: React.ReactNode;
}

const PRESALE_ADDRESS = "9NAwkrUE2QZsihBGafG1ozZPyYkHMPQ9d4DwK5XYBF3U";

export default function SaleComponent() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(PRESALE_ADDRESS)
      .then(() => {
        setTooltipOpen(true);
      })
      .catch(() => {
        console.error("Failed to copy text");
      });
  };

  // auto-close tooltip after 1.5s
  useEffect(() => {
    if (tooltipOpen) {
      const timer = setTimeout(() => setTooltipOpen(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [tooltipOpen]);

  const SALE_ITEMS: SaleItem[] = [
    {
      id: "presale-address",
      label: "Presale Address",
      value: (
        <Stack className="css-j7qwjs" spacing={1}>
          <Stack className="css-hp68mp">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              className="css-jtvrhu"
            >
              <Typography variant="body2" className="css-lwhrok">
                {PRESALE_ADDRESS}
              </Typography>
            </Link>
            <Tooltip
              arrow
              title="Copied!"
              placement="top"
              open={tooltipOpen}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              slotProps={{
                popper: {
                  sx: {
                    [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                    {
                      marginTop: '0px',
                    },
                    [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                    {
                      marginBottom: '0px',
                    },
                    [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
                    {
                      marginLeft: '0px',
                    },
                    [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
                    {
                      marginRight: '0px',
                    },
                  },
                },
              }}

            >
              <IconButton
                size="small"
                aria-label="Copy"
                className="css-koascp"
                onClick={handleCopyClick}
              >
                <Icon icon="si:copy-fill" className="css-1fjwirh" />
              </IconButton>
            </Tooltip>
          </Stack>
          <Typography variant="caption" className="css-15nq3i0">
            Do not send SOL directly to the presale address!
          </Typography>
        </Stack>
      ),
    },
    {
      id: "sale-type",
      label: "Sale Type",
      value: (
        <Typography variant="body2" className="css-15nq3i0">
          Fair Launch
        </Typography>
      ),
    },
    {
      id: "token-name",
      label: "Token Name",
      value: (
        <Typography variant="body2" className="css-15nq3i0">
          Global Prosperity
        </Typography>
      ),
    },
    {
      id: "token-symbol",
      label: "Token Symbol",
      value: (
        <Typography variant="body2" className="css-15nq3i0">
          GPR
        </Typography>
      ),
    },
    {
      id: "total-supply",
      label: "Total Supply",
      value: (
        <Typography variant="body2" className="css-15nq3i0">
          1,000,000,000
        </Typography>
      ),
    },
    {
      id: "for-presale",
      label: "Tokens For Presale",
      value: (
        <Typography variant="body2" className="css-15nq3i0">
          680,000,000
        </Typography>
      ),
    },
    {
      id: "for-liquidity",
      label: "Tokens For Liquidity",
      value: (
        <Typography variant="body2" className="css-15nq3i0">
          220,320,000
        </Typography>
      ),
    },
    {
      id: "soft-cap",
      label: "Soft Cap",
      value: (
        <Typography variant="body2" className="css-15nq3i0">
          20 SOL
        </Typography>
      ),
    },
    {
      id: "hard-cap",
      label: "Hard Cap",
      value: <AllInclusiveIcon fontSize="small" />,
    },
    {
      id: "start-time",
      label: "Presale Start Time (UTC)",
      value: (
        <Typography variant="body2" className="css-15nq3i0">
          2025-03-21 11:00
        </Typography>
      ),
    },
    {
      id: "end-time",
      label: "Presale End Time (UTC)",
      value: (
        <Typography variant="body2" className="css-15nq3i0">
          2025-04-19 11:00
        </Typography>
      ),
    },
    {
      id: "liquidity",
      label: "Liquidity",
      value: (
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          className="css-hp68mp"
        >
          <Typography variant="body2" className="css-15nq3i0">
            90 %
          </Typography>
          <Icon icon="iconamoon:pie-chart" className="css-1fjwirh" />
        </Stack>
      ),
    },
    {
      id: "first-vesting",
      label: "First Vesting Release",
      value: (
        <Typography variant="body2" className="css-15nq3i0">
          8 %
        </Typography>
      ),
    },
    {
      id: "cliff",
      label: "Vesting Delay (Cliff)",
      value: (
        <Typography variant="body2" className="css-15nq3i0">
          10 days
        </Typography>
      ),
    },
    {
      id: "period",
      label: "Vesting Time Period",
      value: (
        <Typography variant="body2" className="css-15nq3i0">
          7 days
        </Typography>
      ),
    },
    {
      id: "release-rate",
      label: "Vesting Release per Time Period",
      value: (
        <Typography variant="body2" className="css-15nq3i0">
          2 %
        </Typography>
      ),
    },
  ];

  return (
    <Stack className="css-4pqftp">
      <Stack className="css-enc9am">
        {SALE_ITEMS.map((item, idx) => (
          <React.Fragment key={item.id}>
            <Stack className="css-1pxzzab">
              <Typography variant="body2" className="css-15nq3i0">
                {item.label}
              </Typography>
              {item.value}
            </Stack>
            {idx < SALE_ITEMS.length - 1 && <Divider className="css-56kpj1" />}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
}
