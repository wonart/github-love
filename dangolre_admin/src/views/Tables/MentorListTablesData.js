import React from 'react';
import MentorListTables from './MentorListTables';

export default function MentorListTablesData(props) {

  React.useEffect(() => {

    // 멘토 데이터 세팅
    props.requestMentorMain();

  }, [] );

  const { mentorMainData, loading } = props;

  return (
    <MentorListTables mentorMainData={mentorMainData} isLoading={loading} {...props} />
  );
}


