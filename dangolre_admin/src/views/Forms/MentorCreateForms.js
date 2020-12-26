import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { regExp_sign, regExp_space } from 'util';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Contacts from "@material-ui/icons/Contacts";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardText from "components/Card/CardText.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ImageUpload from "components/CustomUpload/ImageUpload.js";

import styles from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

const useStyles = makeStyles(styles);

export default function MentorCreateForms(props) {

  // 메인 데이터 저장
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imagePath, setImagePath] = useState("");

  // 메인 데이터 체크
  const [idState, setIdState] = useState("");
  const [nameState, setNameState] = useState("");
  const [ageState, setAgeState] = useState("");
  const [locationState, setLocationState] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [imagePathState, setImagePathState] = useState("");

  // 상세 데이터 저장
  const [titleImagePath, setTitleImagePath] = useState("");
  const [faceImagePath, setFaceImagePath] = useState("");
  const [locationDesc, setLocationDesc] = useState("");
  const [naverBlogURL, setNaverBlogURL] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");
  const [instagramURL, setInstagramURL] = useState("");
  const [facebookURL, setFacebookURL] = useState("");
  const [titleDesc, setTitleDesc] = useState("");
  const [tagKeyword, setTagKeyword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [introTitle1, setIntroTitle1] = useState("");
  const [introQuote1, setIntroQuote1] = useState("");
  const [introQuoteSub1, setIntroQuoteSub1] = useState("");
  const [introDesc1, setIntroDesc1] = useState("");
  const [introImagePath1, setIntroImagePath1] = useState("");
  const [introTitle2, setIntroTitle2] = useState("");
  const [introQuote2, setIntroQuote2] = useState("");
  const [introQuoteSub2, setIntroQuoteSub2] = useState("");
  const [introDesc2, setIntroDesc2] = useState("");
  const [introImagePath2, setIntroImagePath2] = useState("");
  const [achievements1, setAchievements1] = useState("");
  const [achievements2, setAchievements2] = useState("");
  const [achievements3, setAchievements3] = useState("");
  const [achievements4, setAchievements4] = useState("");
  const [achievements5, setAchievements5] = useState("");
  const [consultCaseTitle1, setConsultCaseTitle1] = useState("");
  const [consultCaseQuote1, setConsultCaseQuote1] = useState("");
  const [consultCaseQuoteSub1, setConsultCaseQuoteSub1] = useState("");
  const [consultCaseDesc1, setConsultCaseDesc1] = useState("");
  const [consultCaseURL1, setConsultCaseURL1] = useState("");
  const [consultCaseTitle2, setConsultCaseTitle2] = useState("");
  const [consultCaseQuote2, setConsultCaseQuote2] = useState("");
  const [consultCaseQuoteSub2, setConsultCaseQuoteSub2] = useState("");
  const [consultCaseDesc2, setConsultCaseDesc2] = useState("");
  const [consultCaseURL2, setConsultCaseURL2] = useState("");
  const [consultCaseTitle3, setConsultCaseTitle3] = useState("");
  const [consultCaseQuote3, setConsultCaseQuote3] = useState("");
  const [consultCaseQuoteSub3, setConsultCaseQuoteSub3] = useState("");
  const [consultCaseDesc3, setConsultCaseDesc3] = useState("");
  const [consultCaseURL3, setConsultCaseURL3] = useState("");
  const [introVideoURL, setIntroVideoURL] = useState("");
  const [addressText, setAddressText] = useState("");
  const [addressNaver, setAddressNaver] = useState("");
  const [addresskakao, setAddresskakao] = useState("");

  // 상세 데이터 체크
  const [titleImagePathState, setTitleImagePathState] = useState("");
  const [faceImagePathState, setFaceImagePathState] = useState("");
  const [locationDescState, setLocationDescState] = useState("");
  const [titleDescState, setTitleDescState] = useState("");
  const [tagKeywordState, setTagKeywordState] = useState("");
  const [phoneNumberState, setPhoneNumberState] = useState("");
  const [introTitleState1, setIntroTitleState1] = useState("");
  const [introQuoteState1, setIntroQuoteState1] = useState("");
  const [introQuoteSubState1, setIntroQuoteSubState1] = useState("");
  const [introDescState1, setIntroDescState1] = useState("");
  const [introImagePathState1, setIntroImagePathState1] = useState("");
  const [introTitleState2, setIntroTitleState2] = useState("");
  const [introQuoteState2, setIntroQuoteState2] = useState("");
  const [introQuoteSubState2, setIntroQuoteSubState2] = useState("");
  const [introDescState2, setIntroDescState2] = useState("");
  const [introImagePathState2, setIntroImagePathState2] = useState("");
  const [achievementsState1, setAchievementsState1] = useState("");
  const [consultCaseTitleState1, setConsultCaseTitleState1] = useState("");
  const [consultCaseQuoteState1, setConsultCaseQuoteState1] = useState("");
  const [consultCaseQuoteSubState1, setConsultCaseQuoteSubState1] = useState("");
  const [consultCaseDescState1, setConsultCaseDescState1] = useState("");
  const [consultCaseURLState1, setConsultCaseURLState1] = useState("");
  const [consultCaseTitleState2, setConsultCaseTitleState2] = useState("");
  const [consultCaseQuoteState2, setConsultCaseQuoteState2] = useState("");
  const [consultCaseQuoteSubState2, setConsultCaseQuoteSubState2] = useState("");
  const [consultCaseDescState2, setConsultCaseDescState2] = useState("");
  const [consultCaseURLState2, setConsultCaseURLState2] = useState("");
  const [consultCaseTitleState3, setConsultCaseTitleState3] = useState("");
  const [consultCaseQuoteState3, setConsultCaseQuoteState3] = useState("");
  const [consultCaseQuoteSubState3, setConsultCaseQuoteSubState3] = useState("");
  const [consultCaseDescState3, setConsultCaseDescState3] = useState("");
  const [consultCaseURLState3, setConsultCaseURLState3] = useState("");
  const [introVideoURLState, setIntroVideoURLState] = useState("");
  const [addressTextState, setAddressTextState] = useState("");
  const [addressNaverState, setAddressNaverState] = useState("");
  const [addresskakaoState, setAddresskakaoState] = useState("");

  const [checked, setChecked] = useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = useState("b");
  const [selectedValue, setSelectedValue] = useState(null);
  const handleChange = event => {
    setSelectedValue(event.target.value);
  };
  const handleChangeEnabled = event => {
    setSelectedEnabled(event.target.value);
  };
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const verifyLength = (value, length) => {
    if (value.length > length) {
      return true;
    }
    return false;
  };

  const [isSaveDone, setIsSaveDone] = React.useState(false);

  const dataSaveClick = () => {
    if (idState === "") {
      setIdState("error");
    }
    if (nameState === "") {
      setNameState("error");
    }
    if (ageState === "") {
      setAgeState("error");
    }
    if (locationState === "") {
      setLocationState("error");
    }
    if (categoryState === "" || category === "") {
      alert('메인 데이터의 카테고리를 신점, 사주, 타로 중 하나로 선택해주세요!');
      setCategoryState("error");
    }
    if (descriptionState === "") {
      setDescriptionState("error");
    }
    if (imagePathState === "" || imagePath === "") {
      alert('메인 데이터의 대표 사진을 넣어주세요!');
      setImagePathState("error");
    }
    if (titleImagePathState === "" || titleImagePath === "") {
      alert('상세 데이터1의 배경 사진을 넣어주세요!');
      setTitleImagePathState("error");
    }
    if (faceImagePathState === "" || faceImagePath === "") {
      alert('상세 데이터1의 얼굴 사진을 넣어주세요!');
      setFaceImagePathState("error");
    }
    if (locationDescState === "") {
      setLocationDescState("error");
    }
    if (titleDescState === "") {
      setTitleDescState("error");
    }
    if (tagKeywordState === "") {
      setTagKeywordState("error");
    }
    if (phoneNumberState === "") {
      setPhoneNumberState("error");
    }
    if (introTitleState1 === "") {
      setIntroTitleState1("error");
    }
    if (introQuoteState1 === "") {
      setIntroQuoteState1("error");
    }
    if (introQuoteSubState1 === "") {
      setIntroQuoteSubState1("error");
    }
    if (introDescState1 === "") {
      setIntroDescState1("error");
    }
    if (introImagePathState1 === "" || introImagePath1 === "") {
      alert('상세 데이터1의 소개 사진1을 넣어주세요!');
      setIntroImagePathState1("error");
    }
    if (introTitleState2 === "") {
      setIntroTitleState2("error");
    }
    if (introQuoteState2 === "") {
      setIntroQuoteState2("error");
    }
    if (introQuoteSubState2 === "") {
      setIntroQuoteSubState2("error");
    }
    if (introDescState2 === "") {
      setIntroDescState2("error");
    }
    if (introImagePathState2 === "" || introImagePath2 === "") {
      alert('상세 데이터1의 소개 사진2을 넣어주세요!');
      setIntroImagePathState2("error");
    }
    if (achievementsState1 === "") {
      setAchievementsState1("error");
    }
    if (consultCaseTitleState1 === "") {
      setConsultCaseTitleState1("error");
    }
    if (consultCaseQuoteState1 === "") {
      setConsultCaseQuoteState1("error");
    }
    if (consultCaseQuoteSubState1 === "") {
      setConsultCaseQuoteSubState1("error");
    }
    if (consultCaseDescState1 === "") {
      setConsultCaseDescState1("error");
    }
    if (consultCaseURLState1 === "") {
      setConsultCaseURLState1("error");
    }
    if (consultCaseTitleState2 === "") {
      setConsultCaseTitleState2("error");
    }
    if (consultCaseQuoteState2 === "") {
      setConsultCaseQuoteState2("error");
    }
    if (consultCaseQuoteSubState2 === "") {
      setConsultCaseQuoteSubState2("error");
    }
    if (consultCaseDescState2 === "") {
      setConsultCaseDescState2("error");
    }
    if (consultCaseURLState2 === "") {
      setConsultCaseURLState2("error");
    }
    if (consultCaseTitleState3 === "") {
      setConsultCaseTitleState3("error");
    }
    if (consultCaseQuoteState3 === "") {
      setConsultCaseQuoteState3("error");
    }
    if (consultCaseQuoteSubState3 === "") {
      setConsultCaseQuoteSubState3("error");
    }
    if (consultCaseDescState3 === "") {
      setConsultCaseDescState3("error");
    }
    if (consultCaseURLState3 === "") {
      setConsultCaseURLState3("error");
    }
    if (introVideoURLState === "") {
      setIntroVideoURLState("error");
    }
    if (addressTextState === "") {
      setAddressTextState("error");
    }
    if (addressNaverState === "") {
      setAddressNaverState("error");
    }
    if (addresskakaoState === "") {
      setAddresskakaoState("error");
    }

    // console.log(`idState === ${idState} || id === ${id} || nameState === ${nameState} || name === ${name} || ageState === ${ageState} || age === ${age} || locationState === ${locationState} || location === ${location} ||
    // categoryState === ${categoryState} || category === ${category} || descriptionState === ${descriptionState} || description === ${description} || imagePathState === ${imagePathState} ||
    // imagePath === ${imagePath} || titleImagePathState === ${titleImagePathState} || titleImagePath === ${titleImagePath} || faceImagePathState === ${faceImagePathState} || faceImagePath === ${faceImagePath} ||
    // locationDescState === ${locationDescState} || locationDesc === ${locationDesc} || titleDescState === ${titleDescState} || titleDesc === ${titleDesc} || tagKeywordState === ${tagKeywordState} ||
    // tagKeyword === ${tagKeyword} || phoneNumberState === ${phoneNumberState} || phoneNumber === ${phoneNumber} || introTitleState1 === ${introTitleState1} || introTitle1 === ${introTitle1} ||
    // introQuoteState1 === ${introQuoteState1} || introQuote1 === ${introQuote1} || introQuoteSubState1 === ${introQuoteSubState1} || introQuoteSub1 === ${introQuoteSub1}  ||
    // introDescState1 === ${introDescState1} || introDesc1 === ${introDesc1} || introImagePathState1 === ${introImagePathState1} || introImagePath1 === ${introImagePath1} ||
    // introTitleState2 === ${introTitleState2} || introTitle2 === ${introTitle2} || introQuoteState2 === ${introQuoteState2} || introQuote2 === ${introQuote2} ||
    // introQuoteSubState2 === ${introQuoteSubState2} || introQuoteSub2 === ${introQuoteSub2} || introDescState2 === ${introDescState2} || introDesc2 === ${introDesc2} ||
    // introImagePathState2 === ${introImagePathState2} || introImagePath2 === ${introImagePath2} || achievementsState1 === ${achievementsState1} || achievements1 === ${achievements1} ||
    // consultCaseTitleState1 === ${consultCaseTitleState1} || consultCaseTitle1 === ${consultCaseTitle1} || consultCaseQuoteState1 === ${consultCaseQuoteState1} || consultCaseQuote1 === ${consultCaseQuote1} ||
    // consultCaseQuoteSubState1 === ${consultCaseQuoteSubState1} || consultCaseQuoteSub1 === ${consultCaseQuoteSub1} || consultCaseDescState1 === ${consultCaseDescState1} || consultCaseDesc1 === ${consultCaseDesc1} ||
    // consultCaseURLState1 === ${consultCaseURLState1} || consultCaseURL1 === ${consultCaseURL1} || consultCaseTitleState2 === ${consultCaseTitleState2} || consultCaseTitle2 === ${consultCaseTitle2} ||
    // consultCaseQuoteState2 === ${consultCaseQuoteState2} || consultCaseQuote2 === ${consultCaseQuote2} || consultCaseQuoteSubState2 === ${consultCaseQuoteSubState2} || consultCaseQuoteSub2 === ${consultCaseQuoteSub2} ||
    // consultCaseDescState2 === ${consultCaseDescState2} || consultCaseDesc2 === ${consultCaseDesc2} || consultCaseURLState2 === ${consultCaseURLState2} || consultCaseURL2 === ${consultCaseURL2} ||
    // consultCaseTitleState3 === ${consultCaseDescState2} || consultCaseTitle3 === ${consultCaseTitle3} || consultCaseQuoteState3 === ${consultCaseQuoteState3} || consultCaseQuote3 === ${consultCaseQuote3} ||
    // consultCaseQuoteSubState3 === ${consultCaseQuoteSubState3} || consultCaseQuoteSub3 === ${consultCaseQuoteSub3} || consultCaseDescState3 === ${consultCaseDescState3} || consultCaseDesc3 === ${consultCaseDesc3} ||
    // consultCaseURLState3 === ${consultCaseURLState3} || consultCaseURL3 === ${consultCaseURL3} || introVideoURLState === ${introVideoURLState} || introVideoURL === ${introVideoURL} ||
    // addressTextState === ${addressTextState} || addressText === ${addressText} || addressNaverState === ${addressNaverState} || addressNaver === ${addressNaver} ||
    // addresskakaoState === ${addresskakaoState} || addresskakao === ${addresskakao}`);

    if (idState === "error" || id === "" || nameState === "error" || name === "" || ageState === "error" || age === "" || locationState === "error" || location === "" ||
      categoryState === "error" || category === "" || descriptionState === "error" || description === "" || imagePathState === "error" || imagePath === "" || titleImagePathState === "error" || titleImagePath === "" ||
      faceImagePathState === "error" || faceImagePath === "" || locationDescState === "error" || locationDesc === "" || titleDescState === "error" || titleDesc === "" ||
      tagKeywordState === "error" || tagKeyword === "" || phoneNumberState === "error" || phoneNumber === "" || introTitleState1 === "error" || introTitle1 === "" ||
      introQuoteState1 === "error" || introQuote1 === "" || introQuoteSubState1 === "error" || introQuoteSub1 === "" || introDescState1 === "error" || introDesc1 === "" ||
      introImagePathState1 === "error" || introImagePath1 === "" || introTitleState2 === "error" || introTitle2 === "" || introQuoteState2 === "error" || introQuote2 === "" ||
      introQuoteSubState2 === "error" || introQuoteSub2 === "" || introDescState2 === "error" || introDesc2 === "" || introImagePathState2 === "error" || introImagePath2 === "" ||
      achievementsState1 === "error" || achievements1 === "" || consultCaseTitleState1 === "error" || consultCaseTitle1 === "" || consultCaseQuoteState1 === "error" || consultCaseQuote1 === "" ||
      consultCaseQuoteSubState1 === "error" || consultCaseQuoteSub1 === "" || consultCaseDescState1 === "error" || consultCaseDesc1 === "" || consultCaseURLState1 === "error" || consultCaseURL1 === "" ||
      consultCaseTitleState2 === "error" || consultCaseTitle2 === "" || consultCaseQuoteState2 === "error" || consultCaseQuote2 === "" || consultCaseQuoteSubState2 === "error" || consultCaseQuoteSub2 === "" ||
      consultCaseDescState2 === "error" || consultCaseDesc2 === "" || consultCaseURLState2 === "error" || consultCaseURL2 === "" || consultCaseTitleState3 === "error" || consultCaseTitle3 === "" ||
      consultCaseQuoteState3 === "error" || consultCaseQuote3 === "" || consultCaseQuoteSubState3 === "error" || consultCaseQuoteSub3 === "" || consultCaseDescState3 === "error" || consultCaseDesc3 === "" ||
      consultCaseURLState3 === "error" || consultCaseURL3 === "" || introVideoURLState === "error" || introVideoURL === "" || addressTextState === "error" || addressText === "" ||
      addressNaverState === "error" || addressNaver === "" || addresskakaoState === "error" || addresskakao === "" 
    ) {

      alert('필수 입력 데이터가 부족합니다! 다시 한번 확인해주세요!');

    } else {

      const dataMain = {
        "id" : id,
        "name" : name,
        "age" : age,
        "location" : location,
        "category" : category,
        "description" : description,
        "imagePath" : imagePath,
      };

      dataMain.id = regExp_sign(dataMain.id);
      dataMain.id = regExp_space(dataMain.id);
      dataMain.name = regExp_sign(dataMain.name);
      dataMain.name = regExp_space(dataMain.name);

      const dataDetail = {      
        "id" : id,
        "name" : name,
        "category" : category,
        "titleImagePath" : titleImagePath,
        "faceImagePath" : faceImagePath,
        "locationDesc" : locationDesc,
        "naverBlogURL" : naverBlogURL,
        "youtubeURL" : youtubeURL,
        "instagramURL" : instagramURL,
        "facebookURL" : facebookURL,
        "titleDesc" : titleDesc,
        "tagKeyword" : tagKeyword,
        "phoneNumber" : phoneNumber,
        "introTitle1" : introTitle1,
        "introQuote1" : introQuote1,
        "introQuoteSub1" : introQuoteSub1,
        "introDesc1" : introDesc1,
        "introImagePath1" : introImagePath1,
        "introTitle2" : introTitle2,
        "introQuote2" : introQuote2,
        "introQuoteSub2" : introQuoteSub2,
        "introDesc2" : introDesc2,
        "introImagePath2" : introImagePath2,
        "achievements1" : achievements1,
        "achievements2" : achievements2,
        "achievements3" : achievements3,
        "achievements4" : achievements4,
        "achievements5" : achievements5,
        "consultCaseTitle1" : consultCaseTitle1,
        "consultCaseQuote1" : consultCaseQuote1,
        "consultCaseQuoteSub1" : consultCaseQuoteSub1,
        "consultCaseDesc1" : consultCaseDesc1,
        "consultCaseURL1" : consultCaseURL1,
        "consultCaseTitle2" : consultCaseTitle2,
        "consultCaseQuote2" : consultCaseQuote2,
        "consultCaseQuoteSub2" : consultCaseQuoteSub2,
        "consultCaseDesc2" : consultCaseDesc2,
        "consultCaseURL2" : consultCaseURL2,
        "consultCaseTitle3" : consultCaseTitle3,
        "consultCaseQuote3" : consultCaseQuote3,
        "consultCaseQuoteSub3" : consultCaseQuoteSub3,
        "consultCaseDesc3" : consultCaseDesc3,
        "consultCaseURL3" : consultCaseURL3,
        "introVideoURL" : introVideoURL,
        "addressText" : addressText,
        "addressNaver" : addressNaver,
        "addresskakao" : addresskakao
      };

      dataDetail.id = regExp_sign(dataDetail.id);
      dataDetail.id = regExp_space(dataDetail.id);
      dataDetail.name = regExp_sign(dataDetail.name);
      dataDetail.name = regExp_space(dataDetail.name);
      dataDetail.titleImagePath = regExp_space(dataDetail.titleImagePath);
      dataDetail.faceImagePath = regExp_space(dataDetail.faceImagePath);
      dataDetail.naverBlogURL = regExp_space(dataDetail.naverBlogURL);
      dataDetail.youtubeURL = regExp_space(dataDetail.youtubeURL);
      dataDetail.instagramURL = regExp_space(dataDetail.instagramURL);
      dataDetail.facebookURL = regExp_space(dataDetail.facebookURL);
      dataDetail.naverBlogURL = regExp_space(dataDetail.naverBlogURL);
      dataDetail.tagKeyword = regExp_space(dataDetail.tagKeyword);
      dataDetail.phoneNumber = regExp_sign(dataDetail.phoneNumber);
      dataDetail.phoneNumber = regExp_space(dataDetail.phoneNumber);
      dataDetail.introImagePath1 = regExp_space(dataDetail.introImagePath1);
      dataDetail.introImagePath2 = regExp_space(dataDetail.introImagePath2);
      dataDetail.consultCaseURL1 = regExp_space(dataDetail.consultCaseURL1);
      dataDetail.consultCaseURL2 = regExp_space(dataDetail.consultCaseURL2);
      dataDetail.consultCaseURL3 = regExp_space(dataDetail.consultCaseURL3);
      dataDetail.introVideoURL = regExp_space(dataDetail.introVideoURL);
      dataDetail.addressNaver = regExp_space(dataDetail.addressNaver);
      dataDetail.addresskakao = regExp_space(dataDetail.addresskakao);

      console.log('send dataMain :', dataMain);
      console.log('send dataDetail :', dataDetail);

      const { mentorMainAddActions, mentorDetailAddActions } = props;

      mentorMainAddActions(dataMain, onSaveFinishMain, onSaveFailureMain);
      mentorDetailAddActions(dataDetail, onSaveFinishDetail, onSaveFailureDetail);
    }
  };

  const onSaveFinishMain = (res) => {
    //console.log('onSaveFinishMain :', res);
    //alert('메인 데이터 저장에 성공하였습니다!\n데이터 목록 화면으로 넘어가겠습니다!');
  }
  const onSaveFailureMain = (res) => {
    //console.log('onSaveFailureMain :', res);
    alert('메인 데이터 저장에 실패하였습니다!\n아이디 중복이나 입력 실수가 있는지 확인해주세요!');
  }

  const onSaveFinishDetail = (res) => {
    //console.log('onSaveFinishDetail :', res);
    alert('데이터 저장에 성공하였습니다!\n데이터 목록 화면으로 넘어가겠습니다!');
    setIsSaveDone(true);
  }
  const onSaveFailureDetail = (res) => {
    //console.log('onSaveFailureDetail :', res);
    alert('상세 데이터 저장에 실패하였습니다!\n아이디 중복이나 입력 실수가 있는지 확인해주세요!');
  }

  const classes = useStyles();

  // 저장 완료되면 목록 화면으로 넘어가기
  if( isSaveDone === true ){
    return <Redirect from="/admin/data-create" to="/admin/data-list" />;
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="rose" text>
            <CardText color="rose">
              <h4 className={classes.cardTitle}>메인 데이터 생성</h4>
            </CardText>
          </CardHeader>
          <CardBody>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    아이디
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={idState === "success"}
                    error={idState === "error"}
                    id="id"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "중복되지 않는 영문",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setIdState("success");
                        } else {
                          setIdState("error");
                        }
                        setId(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        idState === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    이름
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={nameState === "success"}
                    error={nameState === "error"}
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "중복되지 않는 한글",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setNameState("success");
                        } else {
                          setNameState("error");
                        }
                        setName(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        nameState === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    나이
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={ageState === "success"}
                    error={ageState === "error"}
                    id="age"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "빈칸 없는 숫자",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setAgeState("success");
                        } else {
                          setAgeState("error");
                        }
                        setAge(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                      ageState === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    지역
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={locationState === "success"}
                    error={locationState === "error"}
                    id="location"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "대표 지역 ex. 봉화산",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setLocationState("success");
                        } else {
                          setLocationState("error");
                        }
                        setLocation(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        locationState === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    카테고리
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <FormControl
                    fullWidth
                    className={classes.selectFormControl}
                  >
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      신점, 사주, 타로 중 선택
                    </InputLabel>
                    <Select
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={category}
                      inputProps={{
                        name: "category",
                        id: "category",
                        onChange: event => {
                          if (verifyLength(event.target.value, 0)) {
                            setCategoryState("success");
                          } else {
                            setCategoryState("error");
                          }
                          setCategory(event.target.value);
                        },
                        type: "text",
                        endAdornment:
                          categoryState === "error" ? (
                            <InputAdornment position="end">
                              <Close className={classes.inputAdornmentIconError} />
                            </InputAdornment>
                          ) : (
                            undefined
                          )
                      }}
                    >
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="신점"
                      >
                        신점
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="사주"
                      >
                        사주
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="타로"
                      >
                        타로
                      </MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    설명
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={descriptionState === "success"}
                    error={descriptionState === "error"}
                    id="description"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "간략한 설명 ex. 키워드 신점의 대가",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setDescriptionState("success");
                        } else {
                          setDescriptionState("error");
                        }
                        setDescription(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        descriptionState === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2} className={classes.labelHorizontal}>
                  <legend>대표 사진 3:4 비율 (420 x 560) 100KB ~ 200KB 파일명: 아이디_main.jpg</legend>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <ImageUpload
                    addButtonProps={{
                      color: "rose",
                      round: true
                    }}
                    changeButtonProps={{
                      color: "rose",
                      round: true
                    }}
                    removeButtonProps={{
                      color: "inputAdornmentIconError",
                      round: true
                    }}
                    onUploadEnd={ (url) => {
                      if (url) {
                        setImagePathState("success");
                      } else {
                        setImagePathState("error");
                      }
                      setImagePath(url);                     
                      console.log('url : ', url);
                    }}
                  />
                </GridItem>
              </GridContainer>
            </form>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary" text>
            <CardText color="primary">
              <h4 className={classes.cardTitle}>상세 데이터 생성 1</h4>
            </CardText>
          </CardHeader>
          <CardBody>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={2} className={classes.labelHorizontal}>
                  <legend>배경 사진 (500 x 380) 100KB 이하 파일명: 아이디_title.jpg</legend>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <ImageUpload
                    addButtonProps={{
                      color: "rose",
                      round: true
                    }}
                    changeButtonProps={{
                      color: "rose",
                      round: true
                    }}
                    removeButtonProps={{
                      color: "inputAdornmentIconError",
                      round: true
                    }}
                    onUploadEnd={ (url) => {
                      if (url) {
                        setTitleImagePathState("success");
                      } else {
                        setTitleImagePathState("error");
                      }
                      setTitleImagePath(url);
                      console.log('url : ', url);
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2} className={classes.labelHorizontal}>
                  <legend>얼굴 사진 ( 160 x 160 ) 50KB 이하 파일명: 아이디_face.jpg</legend>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <ImageUpload
                    addButtonProps={{
                      color: "rose",
                      round: true
                    }}
                    changeButtonProps={{
                      color: "rose",
                      round: true
                    }}
                    removeButtonProps={{
                      color: "inputAdornmentIconError",
                      round: true
                    }}
                    onUploadEnd={ (url) => {
                      if (url) {
                        setFaceImagePathState("success");
                      } else {
                        setFaceImagePathState("error");
                      }
                      setFaceImagePath(url);
                      console.log('url : ', url);
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    주소 설명
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={locationDescState === "success"}
                    error={locationDescState === "error"}
                    id="locationDesc"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "간략한 주소 ex. 강남역 도보 10분 거리",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setLocationDescState("success");
                        } else {
                          setLocationDescState("error");
                        }
                        setLocationDesc(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        locationDescState === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    네이버 블로그
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    id="naverBlogURL"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "블로그 URL 링크 주소 (없으면 생략)",
                      onChange: event => {
                        setNaverBlogURL(event.target.value);
                      },
                      type: "text",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    유튜브
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    id="youtubeURL"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "유튜브 URL 링크 주소 (없으면 생략)",
                      onChange: event => {
                        setYoutubeURL(event.target.value);
                      },
                      type: "text",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    인스타그램
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    id="instagramURL"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "인스타그램 URL 링크 주소 (없으면 생략)",
                      onChange: event => {
                        setInstagramURL(event.target.value);
                      },
                      type: "text",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    페이스북
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    id="facebookURL"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "페이스북 URL 링크 주소 (없으면 생략)",
                      onChange: event => {
                        setFacebookURL(event.target.value);
                      },
                      type: "text",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상세 설명
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={titleDescState === "success"}
                    error={titleDescState === "error"}
                    id="titleDesc"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "상세한 선생님 설명 모바일 기준 3줄이 적당 ex. 서울시 강남구에서 유명한 점집으로 정평이난...",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setTitleDescState("success");
                        } else {
                          setTitleDescState("error");
                        }
                        setTitleDesc(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        titleDescState === "error" ? (
                            <InputAdornment position="end">
                              <Close className={classes.inputAdornmentIconError} />
                            </InputAdornment>
                          ) : (
                            undefined
                          )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    태그 키워드
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={tagKeywordState === "success"}
                    error={tagKeywordState === "error"}
                    id="tagKeyword"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "신점, 사주, 타로 이외의 하분류 키워드 문자 쉼표로 공백 없이 연결 ex. 운세,총운,방문상담,전화상담,작명,촛불기도,부적,명리학",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setTagKeywordState("success");
                        } else {
                          setTagKeywordState("error");
                        }
                        setTagKeyword(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        tagKeywordState === "error" ? (
                            <InputAdornment position="end">
                              <Close className={classes.inputAdornmentIconError} />
                            </InputAdornment>
                          ) : (
                            undefined
                          )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    전화번호
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={phoneNumberState === "success"}
                    error={phoneNumberState === "error"}
                    id="phoneNumber"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "연결할 전화번호 대시부호(-) 없이 입력 ex. 05089342053",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setPhoneNumberState("success");
                        } else {
                          setPhoneNumberState("error");
                        }
                        setPhoneNumber(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        phoneNumberState === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    소개 타이틀 1
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={introTitleState1 === "success"}
                    error={introTitleState1 === "error"}
                    id="introTitle1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님 소개 타이틀 1 ex. 마음의 병은 곳 육체의 병으로 이어집니다",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setIntroTitleState1("success");
                        } else {
                          setIntroTitleState1("error");
                        }
                        setIntroTitle1(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        introTitleState1 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    소개 인용 문구 1
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={introQuoteState1 === "success"}
                    error={introQuoteState1 === "error"}
                    id="introQuote1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님 소개 인용구 내용 1 ex. 고객의 행복이 저의 행복이며 삶의 원동력이며 가치입니다.",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setIntroQuoteState1("success");
                        } else {
                          setIntroQuoteState1("error");
                        }
                        setIntroQuote1(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        introQuoteState1 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    소개 인용 보조 1
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={introQuoteSubState1 === "success"}
                    error={introQuoteSubState1 === "error"}
                    id="introQuoteSub1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님 소개 인용구 보조 1 ex. 강남 도원사 선생님",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setIntroQuoteSubState1("success");
                        } else {
                          setIntroQuoteSubState1("error");
                        }
                        setIntroQuoteSub1(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        introQuoteSubState1 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    소개 상세 설명 1
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={introDescState1 === "success"}
                    error={introDescState1 === "error"}
                    id="introDesc1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님 소개 상세 설명 1 모바일 기준 3줄이 적당 ex. 어렸을 때 겨울이 되면 가장 기다려 지는 것이 눈...",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setIntroDescState1("success");
                        } else {
                          setIntroDescState1("error");
                        }
                        setIntroDesc1(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                      introDescState1 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2} className={classes.labelHorizontal}>
                  <legend>소개 사진 1 ( 420 x 280 ) 100KB 이하 파일명: 아이디_intro1.jpg</legend>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <ImageUpload
                    addButtonProps={{
                      color: "rose",
                      round: true
                    }}
                    changeButtonProps={{
                      color: "rose",
                      round: true
                    }}
                    removeButtonProps={{
                      color: "inputAdornmentIconError",
                      round: true
                    }}
                    onUploadEnd={ (url) => {
                      if (url) {
                        setIntroImagePathState1("success");
                      } else {
                        setIntroImagePathState1("error");
                      }
                      setIntroImagePath1(url);
                      console.log('url : ', url);
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    소개 타이틀 2
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={introTitleState2 === "success"}
                    error={introTitleState2 === "error"}
                    id="introTitle2"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님 소개 타이틀 2 ex. 당신이 걸어온 길, 걸어가야 하는 길이 있습니다",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setIntroTitleState2("success");
                        } else {
                          setIntroTitleState2("error");
                        }
                        setIntroTitle2(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        introTitleState2 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    소개 인용 문구 2
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={introQuoteState2 === "success"}
                    error={introQuoteState2 === "error"}
                    id="introQuote2"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님 소개 인용구 내용 2 ex. 스스로 존경하면 다른 사람도 그대를 존경할 것 입니다.",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setIntroQuoteState2("success");
                        } else {
                          setIntroQuoteState2("error");
                        }
                        setIntroQuote2(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        introQuoteState2 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    소개 인용 보조 2
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={introQuoteSubState2 === "success"}
                    error={introQuoteSubState2 === "error"}
                    id="introQuoteSub2"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님 소개 인용구 보조 2 ex. 공자 孔子 Confucius",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setIntroQuoteSubState2("success");
                        } else {
                          setIntroQuoteSubState2("error");
                        }
                        setIntroQuoteSub2(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        introQuoteSubState2 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    소개 상세 설명 2
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={introDescState2 === "success"}
                    error={introDescState2 === "error"}
                    id="introDesc2"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님 소개 상세 설명 2 모바일 기준 3줄이 적당 ex. 어미 소가 새끼를 낳는 꿈을 꾸었다면 어마어마한 부...",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setIntroDescState2("success");
                        } else {
                          setIntroDescState2("error");
                        }
                        setIntroDesc2(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        introDescState2 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2} className={classes.labelHorizontal}>
                  <legend>소개 사진 2 ( 420 x 280 ) 100KB 이하 파일명: 아이디_intro2.jpg</legend>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <ImageUpload
                    addButtonProps={{
                      color: "rose",
                      round: true
                    }}
                    changeButtonProps={{
                      color: "rose",
                      round: true
                    }}
                    removeButtonProps={{
                      color: "inputAdornmentIconError",
                      round: true
                    }}
                    onUploadEnd={ (url) => {
                      if (url) {
                        setIntroImagePathState2("success");
                      } else {
                        setIntroImagePathState2("error");
                      }
                      setIntroImagePath2(url);
                      console.log('url : ', url);
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    걸어오신 길 1
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={achievementsState1 === "success"}
                    error={achievementsState1 === "error"}
                    id="achievements1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "업적이나 업력 같은 이력 사항 1줄이 적당 (5개중 최소 1개 필수) ex. 무형문화재 104호 서울 새남굿",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setAchievementsState1("success");
                        } else {
                          setAchievementsState1("error");
                        }
                        setAchievements1(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        achievementsState1 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    걸어오신 길 2
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    id="achievements2"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "업적이나 업력 같은 이력 사항 1줄이 적당 (5개중 최소 1개 필수) ex. 무형문화재 104호 서울 새남굿",
                      onChange: event => {
                        setAchievements2(event.target.value);
                      },
                      type: "text",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    걸어오신 길 3
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    id="achievements3"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "업적이나 업력 같은 이력 사항 1줄이 적당 (5개중 최소 1개 필수) ex. 무형문화재 104호 서울 새남굿",
                      onChange: event => {
                        setAchievements3(event.target.value);
                      },
                      type: "text",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    걸어오신 길 4
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    id="achievements4"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "업적이나 업력 같은 이력 사항 1줄이 적당 (5개중 최소 1개 필수) ex. 무형문화재 104호 서울 새남굿",
                      onChange: event => {
                        setAchievements4(event.target.value);
                      },
                      type: "text",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    걸어오신 길 5
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    id="achievements5"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "업적이나 업력 같은 이력 사항 1줄이 적당 (5개중 최소 1개 필수) ex. 무형문화재 104호 서울 새남굿",
                      onChange: event => {
                        setAchievements5(event.target.value);
                      },
                      type: "text",
                    }}
                  />
                </GridItem>
              </GridContainer>
            </form>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary" text>
            <CardText color="primary">
              <h4 className={classes.cardTitle}>상세 데이터 생성 2</h4>
            </CardText>
          </CardHeader>
          <CardBody>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 제목 1
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseTitleState1 === "success"}
                    error={consultCaseTitleState1 === "error"}
                    id="consultCaseTitle1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님과 고객들의 Q&A 형식 제목이나 질문 ex. Q. 기억에 남는 신점 상담은?",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseTitleState1("success");
                        } else {
                          setConsultCaseTitleState1("error");
                        }
                        setConsultCaseTitle1(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseTitleState1 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 인용구 1
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseQuoteState1 === "success"}
                    error={consultCaseQuoteState1 === "error"}
                    id="consultCaseQuote1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "고객의 의견이나 대화 내용 ex. “강남 도원사 선생님 덕분에 우리 아들이 SKY를 갔습니다!”",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseQuoteState1("success");
                        } else {
                          setConsultCaseQuoteState1("error");
                        }
                        setConsultCaseQuote1(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseQuoteState1 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 인용 보조 1
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseQuoteSubState1 === "success"}
                    error={consultCaseQuoteSubState1 === "error"}
                    id="consultCaseQuoteSub1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "고객의 대략적인 신상명세 ex. 수험생 자녀를 둔 50대 어머님",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseQuoteSubState1("success");
                        } else {
                          setConsultCaseQuoteSubState1("error");
                        }
                        setConsultCaseQuoteSub1(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseQuoteSubState1 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 상세 설명 1
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseDescState1 === "success"}
                    error={consultCaseDescState1 === "error"}
                    id="consultCaseDesc1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님과 고객들의 상세한 상담 내용 모바일 4~5줄 ex. 얼마 있지 않으면 수능 시험이 치러질 텐데 벌써 한참 전에...",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseDescState1("success");
                        } else {
                          setConsultCaseDescState1("error");
                        }
                        setConsultCaseDesc1(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseDescState1 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 블로그 1
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseURLState1 === "success"}
                    error={consultCaseURLState1 === "error"}
                    id="consultCaseURL1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "더 알아보기 링크 클릭시에 이동할 블로그 URL 주소 ex. https://blog.naver.com/dodohanman/222160483018",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseURLState1("success");
                        } else {
                          setConsultCaseURLState1("error");
                        }
                        setConsultCaseURL1(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseURLState1 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 제목 2
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseTitleState2 === "success"}
                    error={consultCaseTitleState2 === "error"}
                    id="consultCaseTitle2"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님과 고객들의 Q&A 형식 제목이나 질문 ex. Q. 기억에 남는 신점 상담은?",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseTitleState2("success");
                        } else {
                          setConsultCaseTitleState2("error");
                        }
                        setConsultCaseTitle2(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseTitleState2 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 인용구 2
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseQuoteState2 === "success"}
                    error={consultCaseQuoteState2 === "error"}
                    id="consultCaseQuote2"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "고객의 의견이나 대화 내용 ex. “강남 도원사 선생님 덕분에 우리 아들이 SKY를 갔습니다!”",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseQuoteState2("success");
                        } else {
                          setConsultCaseQuoteState2("error");
                        }
                        setConsultCaseQuote2(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseQuoteState2 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 인용 보조 2
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseQuoteSubState2 === "success"}
                    error={consultCaseQuoteSubState2 === "error"}
                    id="consultCaseQuoteSub2"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "고객의 대략적인 신상명세 ex. 수험생 자녀를 둔 50대 어머님",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseQuoteSubState2("success");
                        } else {
                          setConsultCaseQuoteSubState2("error");
                        }
                        setConsultCaseQuoteSub2(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseQuoteSubState2 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 상세 설명 2
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseDescState2 === "success"}
                    error={consultCaseDescState2 === "error"}
                    id="consultCaseDesc2"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님과 고객들의 상세한 상담 내용 모바일 4~5줄 ex. 얼마 있지 않으면 수능 시험이 치러질 텐데 벌써 한참 전에...",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseDescState2("success");
                        } else {
                          setConsultCaseDescState2("error");
                        }
                        setConsultCaseDesc2(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseDescState2 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 블로그 2
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseURLState2 === "success"}
                    error={consultCaseURLState2 === "error"}
                    id="consultCaseURL2"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "더 알아보기 링크 클릭시에 이동할 블로그 URL 주소 ex. https://blog.naver.com/dodohanman/222160483018",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseURLState2("success");
                        } else {
                          setConsultCaseURLState2("error");
                        }
                        setConsultCaseURL2(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseURLState2 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 제목 3
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseTitleState3 === "success"}
                    error={consultCaseTitleState3 === "error"}
                    id="consultCaseTitle3"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님과 고객들의 Q&A 형식 제목이나 질문 ex. Q. 기억에 남는 신점 상담은?",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseTitleState3("success");
                        } else {
                          setConsultCaseTitleState3("error");
                        }
                        setConsultCaseTitle3(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseTitleState3 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 인용구 3
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseQuoteState3 === "success"}
                    error={consultCaseQuoteState3 === "error"}
                    id="consultCaseQuote3"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "고객의 의견이나 대화 내용 ex. “강남 도원사 선생님 덕분에 우리 아들이 SKY를 갔습니다!”",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseQuoteState3("success");
                        } else {
                          setConsultCaseQuoteState3("error");
                        }
                        setConsultCaseQuote3(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseQuoteState3 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 인용 보조 3
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseQuoteSubState3 === "success"}
                    error={consultCaseQuoteSubState3 === "error"}
                    id="consultCaseQuoteSub3"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "고객의 대략적인 신상명세 ex. 수험생 자녀를 둔 50대 어머님",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseQuoteSubState3("success");
                        } else {
                          setConsultCaseQuoteSubState3("error");
                        }
                        setConsultCaseQuoteSub3(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseQuoteSubState3 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 상세 설명 3
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseDescState3 === "success"}
                    error={consultCaseDescState3 === "error"}
                    id="consultCaseDesc3"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님과 고객들의 상세한 상담 내용 모바일 4~5줄 ex. 얼마 있지 않으면 수능 시험이 치러질 텐데 벌써 한참 전에...",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseDescState3("success");
                        } else {
                          setConsultCaseDescState3("error");
                        }
                        setConsultCaseDesc3(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseDescState3 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    상담사례 블로그 3
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={consultCaseURLState3 === "success"}
                    error={consultCaseURLState3 === "error"}
                    id="consultCaseURL3"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "더 알아보기 링크 클릭시에 이동할 블로그 URL 주소 ex. https://blog.naver.com/dodohanman/222160483018",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setConsultCaseURLState3("success");
                        } else {
                          setConsultCaseURLState3("error");
                        }
                        setConsultCaseURL3(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        consultCaseURLState3 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    소개 영상 주소
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={introVideoURLState === "success"}
                    error={introVideoURLState === "error"}
                    id="introVideoURL"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "선생님 소개 영상 URL 링크 주소 ex. https://www.youtube.com/watch?v=qkUGn29ODck",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setIntroVideoURLState("success");
                        } else {
                          setIntroVideoURLState("error");
                        }
                        setIntroVideoURL(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        introVideoURLState === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    지도 사용 주소
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={addressTextState === "success"}
                    error={addressTextState === "error"}
                    id="addressText"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "지도에 표시할 정확한 주소 (신구 주소 방식 모두 가능) ex. 서울특별시 강남구 삼성동 44-8",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setAddressTextState("success");
                        } else {
                          setAddressTextState("error");
                        }
                        setAddressText(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        addressTextState === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    네이버 지도 URL
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={addressNaverState === "success"}
                    error={addressNaverState === "error"}
                    id="addressNaver"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "네이버 지도에서 주소로 찾은 링크 URL ex. http://naver.me/FVUNihBt",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setAddressNaverState("success");
                        } else {
                          setAddressNaverState("error");
                        }
                        setAddressNaver(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        addressNaverState === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={2}>
                  <FormLabel className={classes.labelHorizontal}>
                    카카오 지도 URL
                  </FormLabel>
                </GridItem>
                <GridItem xs={12} sm={10}>
                  <CustomInput
                    success={addresskakaoState === "success"}
                    error={addresskakaoState === "error"}
                    id="addresskakao"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      placeholder: "카카오 지도에서 주소로 찾은 링크 URL ex. http://naver.me/FVUNihBt",
                      onChange: event => {
                        if (verifyLength(event.target.value, 0)) {
                          setAddresskakaoState("success");
                        } else {
                          setAddresskakaoState("error");
                        }
                        setAddresskakao(event.target.value);
                      },
                      type: "text",
                      endAdornment:
                        addresskakaoState === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.inputAdornmentIconError} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
              </GridContainer>
            </form>
          </CardBody>
          <CardFooter className={classes.justifyContentCenter}>
            <Button disabled={props.loadingMainData || props.loadingDetailData} color="rose" onClick={dataSaveClick}>
              저장 하기
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
