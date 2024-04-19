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
    <AppBar position="fixed" style={{ background: "#734f96" }}>
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
                <Button onClick={() => handleClick("/home")} style={{background:"#DFC5FE", margin:'0px 5px', borderRadius:"50px", padding:"10px 16px"}}>
                  <Typography style={{ fontSize: "18px", color:"#36454F"  }}>Home</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/addjob")} style={{background:"#DFC5FE", margin:'0px 5px', borderRadius:"50px", padding:"10px 16px"}}>
                  <Typography style={{ fontSize: "18px", color:"#36454F" }}>Add Jobs</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/myjobs")} style={{background:"#DFC5FE", margin:'0px 5px', borderRadius:"50px", padding:"10px 16px"}}>
                  <Typography style={{ fontSize: "18px", color:"#36454F" }}>Posted</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/employees")} style={{background:"#DFC5FE", margin:'0px 5px', borderRadius:"50px", padding:"10px 16px"}}>
                  <Typography style={{ fontSize: "18px" , color:"#36454F"}}>Employees</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")} style={{background:"#DFC5FE", margin:'0px 5px', borderRadius:"50px", padding:"10px 16px"}}>
                  <Typography style={{ fontSize: "18px", color:"#36454F" }}>Profile</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")} style={{background:"#DFC5FE", margin:'0px 5px', borderRadius:"50px", padding:"10px 16px"}}>
                  <Typography style={{ fontSize: "18px", color:"#36454F" }}>Logout</Typography>
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => handleClick("/home")} style={{background:"#DFC5FE", margin:'0px 5px', borderRadius:"50px", padding:"10px 16px"}}>
                  <Typography style={{ fontSize: "18px", color:"#36454F" }}>Home</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/applications")} style={{background:"#DFC5FE", margin:'0px 5px', borderRadius:"50px", padding:"10px 16px"}}>
                  <Typography style={{ fontSize: "18px", color:"#36454F" }}>Applied</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")} style={{background:"#DFC5FE", margin:'0px 5px', borderRadius:"50px", padding:"10px 16px"}}>
                  <Typography style={{ fontSize: "18px" , color:"#36454F"}}>Profile</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")} style={{background:"#DFC5FE", margin:'0px 5px', borderRadius:"50px", padding:"10px 16px"}}>
                  <Typography style={{ fontSize: "18px", color:"#36454F" }}>Logout</Typography>
                </Button>
              </>
            )
          ) : (
            <>
              <div style={{ display: "inline-block", marginRight: "16px" }}>
                <Button
                    style={{background:"#DFC5FE", margin:'0px 5px', borderRadius:"50px", padding:"10px 16px"}}
                  onClick={() => handleClick("/login")}
                >
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontFamily: "sans-serif",
                      textTransform: "capitalize", color:"#36454F"
                    }}
                  >
                    Login
                  </Typography>
                </Button>
                <Button
                 style={{background:"#DFC5FE", margin:'0px 5px', borderRadius:"50px", padding:"10px 16px"}}
                  color="inherit"
                  onClick={() => handleClick("/signup")}
                >
                  <Typography
                    style={{
                      fontSize: "18px",
                      fontFamily: "sans-serif",
                      textTransform: "capitalize",
                      color:"#36454F"
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
