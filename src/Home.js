import React from "react";
import logo from "./react.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: red;
`;

const Anchor = styled.a`
  color: blue;
`;

class Home extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>
          <img src={logo} alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p>
          To get started, edit <code>src/App.js</code> or{" "}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul>
          <li>
            <Anchor href="https://github.com/jaredpalmer/razzle">Docs</Anchor>
          </li>
          <li>
            <Anchor href="https://github.com/jaredpalmer/razzle/issues">
              Issues
            </Anchor>
          </li>
          <li>
            <Anchor href="https://palmer.chat">Community Slack</Anchor>
          </li>
        </ul>
      </Wrapper>
    );
  }
}

export default Home;
