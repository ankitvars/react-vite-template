import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { cloneElement, useEffect } from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import logo from "../assets/logo/logo.svg";
import './LeftSideComponent.css';
import LeftSideHeader from "./LeftSideHeader";
import NavigationList, { navSections } from "./NavigationList";


// Drawer width
const drawerWidth = 170;
const miniDrawerWidth = 80;

// Drawer open/close mixins
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// Drawer header
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

// Styled Drawer
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

type LeftSideComponentProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const LeftSideComponent = ({ open, setOpen }: LeftSideComponentProps) => {
  const theme = useTheme();
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setOpen(!isMobile); // open only on desktop
  }, [isMobile]);


  return (
    <Box className="main-box">
      {open ? (
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <LeftSideHeader />
            <IconButton className="drawer-button" onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <NavigationList />
        </Drawer>
      ) : (
        <Box
          sx={{
            width: miniDrawerWidth,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'background.paper',
            borderRight: '1px solid #222',
            position: 'fixed',
            zIndex: 1200,
            justifyContent: 'space-between',
            py: 2,
          }}
        >
          {/* Logo */}
          <Box>
            <img alt="logo" src={logo} height={24} width={24} />
          </Box>
          {/* Icons List */}

          <Stack className="iconList" spacing={3} overflow="auto" alignItems="center" flexGrow={1} mt={4}>
            {navSections
              .flatMap((section) => section.items)
              .map((item) => (
                <Box
                  key={item.text}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cloneElement(item.icon, { fontSize: "medium", color: "rgb(99, 115, 129)", })}
                  <span
                    style={{
                      fontSize: "10px",
                      color: "rgb(99, 115, 129)",
                      marginTop: 2,
                      textAlign: "center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.text}
                  </span>
                </Box>
              ))}
          </Stack>
          {/* Open Drawer Button */}
          <IconButton className="drawer-button-new" onClick={handleDrawerOpen} sx={{ mb: 1 }}>
            {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>
      )}
    </Box>

  );
};

export default LeftSideComponent;