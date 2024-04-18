import { AppBar, Toolbar, Typography, Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";
import jobs from "../assets/careercompass.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" style={{ background: "#2E3B55" }}>
      <Toolbar style={{ minHeight: "80px" }}>
        <a
          variant="h6"
          href="/"
          className={classes.title}
          style={{ textDecoration: "none", color: "#FAFAFA", fontSize: "32px", fontWeight: "800" }}
        >
          <img
            src={jobs}
            width="40px"
            style={{ verticalAlign: "text-top", marginRight: "15px" }}
          ></img>
          CAREER COMPASS
        </a>
        <div style={{ marginTop: "8px" }}>
          {isAuth() ? (
            userType() === "recruiter" ? (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  <Typography style={{ fontSize: "18px" }}>Home</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/addjob")}>
                  <Typography style={{ fontSize: "18px" }}>Add Jobs</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                  <Typography style={{ fontSize: "18px" }}>Posted</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/employees")}>
                  <Typography style={{ fontSize: "18px" }}>Employees</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  <Typography style={{ fontSize: "18px" }}>Profile</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  <Typography style={{ fontSize: "18px" }}>Logout</Typography>
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  <Typography style={{ fontSize: "18px" }}>Home</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/applications")}>
                  <Typography style={{ fontSize: "18px" }}>Applied</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  <Typography style={{ fontSize: "18px" }}>Profile</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  <Typography style={{ fontSize: "18px" }}>Logout</Typography>
                </Button>
              </>
            )
          ) : (
            <>
              <div style={{ display: "inline-block", marginRight: "16px" }}>
                <Button
                  style={{
                    backgroundColor: "#6A5ACD", // Background color
                    borderRadius: "22px", // Rounded corners for a capsule shape
                    padding: "8px 16px", // Padding for the button content
                    color: "inherit",
                  }}
                  color="inherit"
                  onClick={() => handleClick("/login")}
                >
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontFamily: "sans-serif",
                      textTransform: "capitalize",
                    }}
                  >
                    Login
                  </Typography>
                </Button>
                <Button
                  style={{
                    backgroundColor: "#6A5ACD", // Background color
                    borderRadius: "22px", // Rounded corners for a capsule shape
                    padding: "8px 16px", // Padding for the button content
                    color: "inherit",
                  }}
                  color="inherit"
                  onClick={() => handleClick("/signup")}
                >
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontFamily: "sans-serif",
                      textTransform: "capitalize",
                    }}
                  >
                    SignUp
                  </Typography>
                </Button>
              </div>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
