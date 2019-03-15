import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { ILoginData } from "./LoginData";

interface IErrorData {
  username?: string;
  password?: string;
}

class LoginForm extends React.Component<ILoginFormProps, any> {
  constructor(props: ILoginFormProps) {
    super(props);
    this.state = {
      data: {
        password: "",
        username: ""
      },
      errors: {},
      loading: false
    };
  }

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  public handleSubmit = () => {
    const errors: IErrorData = this.validate(this.state.data);
    this.setState({ errors });
    if (this.isEmpty(errors)) {
      this.props.submit(this.state.data);
    }
  };

  private isEmpty = (errors: IErrorData): boolean => {
    return Object.keys(errors).length === 0;
  };

  public validate = (data: IErrorData) => {
    const errors = {} as IErrorData;
    if (!data.username) {
      errors.username = "Username can't be blank!";
    }
    if (!data.password) {
      errors.password = "Password can't be blank!";
    }
    return errors;
  };

  public render() {
    const { data } = this.state;
    return (
      <FormControl>
        <TextField
          id="username"
          label="Username"
          type="text"
          name="username"
          onChange={this.handleChange}
          error={this.state.errors.hasOwnProperty("username")}
          helperText={this.state.errors.username}
          margin="normal"
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          name="password"
          onChange={this.handleChange}
          error={this.state.errors.hasOwnProperty("password")}
          helperText={this.state.errors.password}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={this.handleSubmit}>
          Login
        </Button>
      </FormControl>
    );
  }
}

interface ILoginFormProps {
  submit: (data: ILoginData) => void;
}

export default LoginForm;
