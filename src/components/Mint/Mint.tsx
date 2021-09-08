import React from "react";
import "./mint.css";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Square from "../../assets/images/Square.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(2),
      },
      "& .MuiBadge-root": {
        marginRight: theme.spacing(4),
      },
    },
    buttonStyle: {
      boxShadow: "0 1px 2px 2px #00bcbb",
      background: "black ",
      color: "white",
      fontWeight: "bolder",
      width: "25px",
      height: "25px",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "#00bcbb",
      },
      "&:disabled": {
        color: "gray",
      },
    },
    rootButton: {
      background: "black",
      borderRadius: 8,
      border: 0,
      color: "white",
      fontWeight: "bolder",
      fontSize: "1.6vmax",
      height: 50,
      padding: "0 30px",
      boxShadow: "0 1px 2px 2px #00bcbb",
      "&:hover": {
        backgroundColor: "#00bcbb",
      },
    },
    label: {
      textTransform: "capitalize",
    },
  })
);

const Mint: React.FC = () => {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);
  return (
    <div className="banner-back-drop">
      <div className="banner">
        <div className="mint-component">
          <img src={Square} alt="" />
          <p>Let's start Mint! Own the coolest CowBoys now!</p>
          <div id="mint" className="mint-container">
            <div className="inner-mint-component">
              <div className="counter-button-container">
                <div className="btn-group">
                  <div className={classes.root}>
                    <div>
                      <ButtonGroup className="inner-btn-group">
                        <Button
                          className={classes.buttonStyle}
                          aria-label="reduce"
                          onClick={() => {
                            setCount(Math.max(count - 1, 0));
                          }}
                          disabled={count === 0}
                        >
                          <RemoveIcon
                            style={{
                              fontWeight: "bolder",
                              fontSize: "1.6vmax",
                            }}
                          />
                        </Button>
                        <Button
                          disabled
                          style={{
                            boxShadow: "0 1px 2px 2px #00bcbb",
                            width: "50px",
                            height: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "0 10px",
                            background: "black",
                            color: "white",
                            fontSize: "1.3vmax",
                            fontWeight: "bolder",
                            borderRadius: "8px",
                          }}
                        >
                          {count}
                        </Button>
                        <Button
                          className={classes.buttonStyle}
                          aria-label="increase"
                          onClick={() => {
                            setCount(count + 1);
                          }}
                          disabled={count === 25}
                        >
                          <AddIcon
                            style={{ fontWeight: "bold", fontSize: "1.5vmax" }}
                          />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                  <Button
                    classes={{
                      root: classes.rootButton,
                      label: classes.label,
                    }}
                  >
                    Mint
                  </Button>
                </div>
                <div className="mint-span-details">
                  <span style={{ marginRight: "2vw" }}>Minted {0} / 5000</span>
                  <span> 0.08 ETH per Mint</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
