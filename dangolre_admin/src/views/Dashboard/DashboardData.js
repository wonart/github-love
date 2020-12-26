import React from 'react';
import Dashboard from './Dashboard';

export default function DashboardData(props) {

  React.useEffect(() => {

    // 멘토 데이터 세팅
    props.requestMentorMain();

  }, [] );

  const { mentorMainData, loading } = props;

  return (
    <Dashboard mentorMainData={mentorMainData} isLoading={loading} {...props} />
  );
}


