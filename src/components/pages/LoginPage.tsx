import React from "react";
import LoginForm from "../forms/LoginForm";
import { ILoginData } from "../forms/LoginData";

class LoginPage extends React.Component {
  public submit = (data: ILoginData): void => {
    console.log(data);
  };

  public render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default LoginPage;
