import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"; // Material UI bell icon
import "./DetailInfo.css";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Icon } from '@iconify/react';
import DetailTabs from "./DetailTabs";

type Props = {
  data: any;
};

export default function DetailInfo({ data }: Props) {
  return (
    <Box
      className="detail-info-root"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <img
        className="detail-info-image"
        src="https://cdn.gempad.app/114-1746818486507-banner.webp"
        alt="Banner"
      />
      <Container disableGutters className="detail-info-container">
        <Grid container className="detail-info-grid-container">
          <Grid size={{ xs: 12, lg: 8 }} className="detail-info-grid-content">
            <Stack
              direction="row"
              justifyContent="space-between"
              className="detail-info-stack"
            >
              <Button
                className="detail-info-back-btn"
                size="small"
                color="inherit"
                startIcon={
                  <ChevronLeftIcon className="detail-info-back-icon" />
                }
                disableElevation
              >
                <Typography
                  variant="subtitle2"
                  className="detail-info-back-text"
                >
                  Back
                </Typography>
              </Button>

              {/*Icons Stack */}
              <Stack direction="row" className="custom-icons-stack">
                <IconButton
                  className="custom-bell-btn"
                  size="small"
                  sx={{
                    color: "rgb(145, 158, 171)",
                    fontSize: "1.125rem",
                    height: 30,
                    width: 30,
                    borderRadius: "50%",
                    padding: "5px",
                    transition:
                      "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <NotificationsNoneOutlinedIcon
                    sx={{ width: 20, height: 20 }}
                    className="custom-bell-icon"
                  />
                </IconButton>
                <IconButton
                  className="custom-bell-btn"
                  size="small"
                  sx={{
                    color: "rgb(145, 158, 171)",
                    fontSize: "1.125rem",
                    height: 30,
                    width: 30,
                    borderRadius: "50%",
                    padding: "5px",
                    transition:
                      "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <FavoriteBorderIcon
                    sx={{ width: 20, height: 20 }}
                    className="custom-bell-icon"
                  />
                </IconButton>
                <IconButton
                  className="custom-bell-btn"
                  size="small"
                  sx={{
                    color: "rgb(145, 158, 171)",
                    fontSize: "1.125rem",
                    height: 30,
                    width: 30,
                    borderRadius: "50%",
                    padding: "5px",
                    transition:
                      "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <AddIcon
                    sx={{ width: 20, height: 20 }}
                    className="custom-bell-icon"
                  />
                </IconButton>
              </Stack>
            </Stack>

            {/* Paper Component will come here */}
            <Paper elevation={0} className="custom-paper">
              <Box className="custom-paper-box">
                <div className="wrapper lazy-load-image-background blur lazy-load-image-loaded">
                  <Box
                    component="img"
                    className="css-vmbpkb"
                    src="https://cdn.gempad.app/114-1746818486507-banner.webp"
                    alt="banner"
                  />
                </div>
              </Box>

              {/* Stack  */}
              <Stack className="custom-stack-outer">
                <Stack className="custom-stack-inner">
                  <Avatar
                    className="custom-avatar"
                    src="https://cdn.gempad.app/113-1746818477778-logo.webp"
                    alt="logo"
                    classes={{ img: "custom-avatar-img" }}
                  />
                </Stack>

                <Stack className="custom-stack-qcseyj">
                  <Stack className="custom-stack-16j8xl6">
                    {/* Left: Token Name */}
                    <Stack className="custom-stack-u4p24i">
                      <Typography className="custom-typography-c6xii6">
                        PO(E)PE
                      </Typography>
                    </Stack>
                    {/* Right: Status */}
                    <Stack className="custom-stack-dsm31">
                      <Box className="custom-box-jze36l" />
                      <Typography className="custom-typography-4bfg2g">
                        SALE LIVE
                      </Typography>
                    </Stack>
                  </Stack>
             
                  <Stack className="custom-stack-5kqbw0">
                    <Stack className="custom-stack-hp68mp">
                      <IconButton
                        className="custom-social-btn"
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="'custom-social-icon">
                          <Icon icon="pajamas:earth"  />
                        </div>
                      </IconButton>
                      <IconButton
                        className="custom-social-btn"
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="'custom-social-icon">
                          <Icon icon="cib:telegram"  />
                        </div>
                      </IconButton>
                      <IconButton
                        className="custom-social-btn"
                        component="a"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="'custom-social-icon">
                          <Icon icon="pajamas:twitter"  />
                        </div>
                      </IconButton>
                    </Stack>
                    <Stack className="custom-stack-vqe3zw">
                      <Stack className="custom-stack-1u64yn7">
                        <a
                          className="custom-link-m5updb"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          AUDIT
                        </a>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>

              <DetailTabs />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
