import { Grid, Typography } from "@material-ui/core";
import video from "./jobvideo.mp4";

const Welcome = (props) => {
  return (
    <Grid container item direction="column" alignItems="center" justify="center">
      <video
        className="videoTag"
        autoPlay
        loop
        muted
        style={{
          minWidth: "100%",
          minHeight: "100vh",
          maxWidth: "100%",
          maxHeight: "100vh",
          objectFit: "cover",
          zIndex: "-1",
          boxSizing: "border-box",
          backgroundColor: "rgba(35,45,57,0.8)",
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div
        class="caption header-text"
        style={{ position: "absolute", top: "0", left: "0", bottom: "7px", width: "100%" }}
      >
        <div
          style={{
            textAlign: "center",
            position: "absolute",
            width: "60%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            borderRadius: "50px", // Rounded corners for a capsule shape
            padding: "8px 16px",
            background: "rgba(255,255,255,0.5)",
            margin: "12px",
          }}
        >
          <Grid item>
            <Typography
              variant="h6"
              style={{
                marginTop: "0px",
                fontSize: "22px",
                textTransform: "uppercase",
                fontWeight: "800",
                color: "#3f51b5",
                letterSpacing: "0.5px",
              }}
            >
              Find jobs that match your skillset{" "}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              style={{
                marginTop: "30px",
                marginBottom: "25px",
                textTransform: "uppercase",
                fontWeight: "800",
                color: "#3f51b5",
                letterSpacing: "1px",
              }}
            >
              SignUp{" "}
              <em style={{ fontStyle: "normal", color: "#ed563b", fontWeight: "900" }}>NOW</em>
            </Typography>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
