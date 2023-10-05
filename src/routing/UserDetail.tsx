import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  console.log(params); //{id: '1'}

  const [searchParams, setSearchParams] = useSearchParams();
  // setSearchParams has side effect so use it inside useEffect or event handler
  console.log(searchParams); // name=Alice&age=25
  console.log(searchParams.get("name")); //Alice

  const location = useLocation();
  console.log(location);
  // {pathname: '/users/1', search: 'name=Alice&age=25', hash: '', key: default, state: null}

  return <p>User {params.id}</p>;
};

export default UserDetail;
