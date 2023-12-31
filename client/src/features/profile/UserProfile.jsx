import Button from "../../UI/Button/Button";
import { NavLink } from "react-router-dom";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import { DetailImage, DetailInfo } from "../../UI/Detail";
import { useAuth } from "../../context/AuthProvider";

function UserProfile() {
  const { user } = useAuth();
  return (
    <>
      <DetailImage>
        <img src={`/users/${user.photo}`} />
      </DetailImage>
      <DetailInfo>
        <li>FullName : {user.name}</li>
        <li>Email : {user.email}</li>
        {/* Admin Scheme do not contain these properties */}
        {user.role !== "Admin" && (
          <>
            <li>Gender : {user.gender}</li>
            <li>Age : {user.age}</li>
            <li>Phone : {user.phone}</li>
          </>
        )}

        <li>Address : 123 Main Street, City</li>
        <li>Role : {user.role}</li>
        <li>
          Admission Date :
          {new Intl.DateTimeFormat("en-US").format(
            new Date(user.adminssionDate)
          )}
        </li>
      </DetailInfo>
      <ButtonContainer>
        <NavLink to="/account">
          <Button size="medium" variation="blue">
            Update Account
          </Button>
        </NavLink>
      </ButtonContainer>
    </>
  );
}

export default UserProfile;
