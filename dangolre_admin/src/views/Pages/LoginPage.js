import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {

  React.useEffect(() => {

    console.log('LoginPage props :', props);

  }, [] );

  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {

    // 페이지 리로딩 방지
    e.preventDefault();
    
    console.log('email :', email);
    console.log('pass :', pass);

    if( email === "" || pass === "" ){

      alert("이메일, 비밀번호를 제대로 넣어 주시오!");

    } else {

      props.requestAdminLogin({"id": email,"pass": pass}).then( (res) => {

        //console.log('payload :', res.payload);

        const { data } = res.payload;

        //console.log('payload.data :', data);

        if(data && data.isLogin){

          //console.log('isLogin :', data.isLogin);

          setIsLogin(true);

        } else {

          alert("들어가지 못 했오! 이메일, 비밀번호를 확인해주시오!");

        }
      });
    }
  };

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  React.useEffect(() => {
    let id = setTimeout(function() {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });
  const classes = useStyles();

  // ------------------------------- 로그인 성공 -------------------------------
  if( isLogin ){
    const { adminLoginData } = props;
    const queryString = `?id=${adminLoginData.id}&name=${adminLoginData.name}&isLogin=${isLogin}`;

    window.sessionStorage.setItem('id', adminLoginData.id);
    window.sessionStorage.setItem('name', adminLoginData.name);

    return <Redirect to={"/admin/" + adminLoginData.id + queryString} />;
  }
  // --------------------------------------------------------------

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form onSubmit={handleSubmit}>
            <Card login className={classes[cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="rose"
              >
                <h4 className={classes.cardTitle}>들어가는 문</h4>
                {/* <div className={classes.socialLine}>
                  {[
                    "fab fa-facebook-square",
                    "fab fa-twitter",
                    "fab fa-google-plus"
                  ].map((prop, key) => {
                    return (
                      <Button
                        color="transparent"
                        justIcon
                        key={key}
                        className={classes.customButtonClass}
                      >
                        <i className={prop} />
                      </Button>
                    );
                  })}
                </div> */}
              </CardHeader>
              <CardBody>
                {/* <CustomInput
                  labelText="First Name.."
                  id="firstname"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    )
                  }}
                /> */}
                <CustomInput
                  labelText="전자우편"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                    onChange: e => {handleChangeEmail(e)},
                  }}
                />
                <CustomInput
                  labelText="비밀번호"
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off",
                    onChange: e => {handleChangePass(e)},
                  }}
                />
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button type="submit" color="rose" simple size="lg" block>
                  가즈아~!
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
