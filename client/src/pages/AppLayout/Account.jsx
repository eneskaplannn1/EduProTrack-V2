import UpdateUserDataForm from "../../features/auth/UpdateUserDataForm";
import UpdateUserPassword from "../../features/auth/UpdateUserPassword";

import { Fragment } from "react";

function Account() {
  return (
    <Fragment>
      <h2>Update your account</h2>
      <UpdateUserDataForm />
      <UpdateUserPassword />
    </Fragment>
  );
}

export default Account;
