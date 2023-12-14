import { persistor, store } from "../store";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { WidgetLayout } from "./WidgetLayout";
import { botAvatar } from "./avatar";

export const Widget = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WidgetLayout {...props} />
      </PersistGate>
    </Provider>
  );
};

Widget.prototype = {
  rasaServerUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  initialPayload: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  metadata: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
  botAvatar: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  widgetColor: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  botTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  botSubTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  textColor: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  userMsgBackgroundColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  botMsgBackgroundColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  botMsgColor: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  botResponseDelay: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  userMsgColor: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  chatHeaderTextColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  buttonsCss: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
  errorMessages: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  chatHeaderCss: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
  embedded: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Widget.defaultProps = {
  rasaServerUrl: "https://chat.choice.shopping/webhooks/rest/webhook",
  initialPayload: "/greet",
  metadata: {},
  botAvatar: botAvatar,
  widgetColor: "#ebbf1e",
  textColor: "#4b5563",
  userMsgBackgroundColor: "#f2e6b8",
  botTitle: "Choice by Lania",
  botSubTitle: "ИИ-продавец-консультант",
  botMsgBackgroundColor: "#f3f4f6",
  botResponseDelay: "",
  chatHeaderCss: {
    textColor: "#4b5563",
    backgroundColor: "#ebbf1e",
    enableBotAvatarBorder: true,
  },
  chatHeaderTextColor: "#4b5563",
  botMsgColor: "#4b5563",
  userMsgColor: "#4b5563",
  buttonsCss: {
    color: "#4b5563",
    backgroundColor: "#f2e6b8",
    borderColor: "#f2e6b8",
    borderWidth: "1px",
    borderRadius: "999px",
    hoverBackgroundColor: "#f2e6b8",
    hoverColor: "#4b5563",
    hoverborderWidth: "1px",
    hoverBorderColor: "#ebbf1e",
    enableHover: true,
  },
  embedded: false,
};
