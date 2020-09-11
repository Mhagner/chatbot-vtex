import React from "react";
import Amplify from "aws-amplify";
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const App = () => (
  <AmplifyChatbot
    botName="chatbot_vtex_aws_dev"
    botTitle="Chatbot Vtex"
    welcomeMessage="Olá!"
  />
);

export default App;
