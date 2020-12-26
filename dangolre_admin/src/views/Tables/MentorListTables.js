import React from "react";
import { Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import ReactTable from "components/ReactTable/ReactTable.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

import withLoading from "views/Components/withLoading";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

const useStyles = makeStyles(styles);

function MentorListTables(props) {

  console.log('MentorListTables props :', props);

  const { mentorMainData, loading } = props;
  console.log('mentorMainData :', mentorMainData);

  const [clickUpdateID, setClickUpdateID] = React.useState("");

  const [data, setData] = React.useState(
    mentorMainData.map((prop, key) => {
      return {
        id: prop.id,
        name: prop.name,
        position: prop.category,
        office: prop.location,
        age: prop.age,
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                let obj = data.find(o => o.id === prop.id);
                alert(
                  "You've clicked LIKE button on \n{ \id: " +
                    obj.id +
                    ", \nname: " +
                    obj.name +
                    ", \nposition: " +
                    obj.position +
                    ", \noffice: " +
                    obj.office +
                    ", \nage: " +
                    obj.age +
                    "\n}."
                );
              }}
              color="info"
              className="like"
            >
              <VisibilityIcon />
            </Button>{" "}
            {/* use this button to add a edit kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                let obj = data.find(o => o.id === prop.id);
                // alert(
                //   "You've clicked LIKE button on \n{ \id: " +
                //     obj.id +
                //     ", \nname: " +
                //     obj.name +
                //     ", \nposition: " +
                //     obj.position +
                //     ", \noffice: " +
                //     obj.office +
                //     ", \nage: " +
                //     obj.age +
                //     "\n}."
                // );
                setClickUpdateID(obj.id);
              }}
              color="warning"
              className="edit"
            >
              <Dvr />
            </Button>{" "}
            {/* use this button to remove the data row */}
            <Button
              justIcon
              round
              simple
              onClick={() => {

                if(window.confirm("정말 선생님 데이터를 삭제하시겠습니까!?") == true){
                  if(window.confirm("다시 한번 생각해보시고 확인을 눌러주세요!!") == true){

                    props.mentorMainDeleteActions(prop.id);

                    props.mentorDetailDeleteActions(prop.id).then( (res) => {

                      if(res.error){
                        alert('삭제에 실패하였습니다! 다시 한번 시도해주세요!');
                      } else {
                        var newData = data;
                        newData.find((o, i) => {
                          if (o.id === prop.id) {
                            // here you should add some custom code so you can delete the data
                            // from this component and from your server as well
                            newData.splice(i, 1);
                            return true;
                          }
                          return false;
                        });
                        setData([...newData]);
                        alert('선생님 데이터를 삭제하였습니다...ㅠㅠ');
                      }
                    });
                  }
                }
              }}
              color="danger"
              className="remove"
            >
              <Close />
            </Button>{" "}
          </div>
        )
      };
    })
  );
  const classes = useStyles();

  if(clickUpdateID !== ""){
    return <Redirect from="/admin/data-list" to={`/admin/data-update?id=${clickUpdateID}`} />;
  }

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>선생님 목록</h4>
          </CardHeader>
          <CardBody>
            <ReactTable
              columns={[
                {
                  Header: "아이디",
                  accessor: "id"
                },
                {
                  Header: "이름",
                  accessor: "name"
                },
                {
                  Header: "분야",
                  accessor: "position"
                },
                {
                  Header: "장소",
                  accessor: "office"
                },
                {
                  Header: "나이",
                  accessor: "age"
                },
                {
                  Header: "데이터 조작",
                  accessor: "actions"
                }
              ]}
              data={data}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withLoading()(MentorListTables);