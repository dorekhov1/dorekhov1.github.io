import { MardownText, formattedTs } from "../utils";

import AppContext from "../../../AppContext";
import { useContext } from "react";

export const Card = ({
  imageUrl,
  text,
  startsSequence,
  endsSequence,
  showBotAvatar,
  ts,
}) => {
  const appContext = useContext(AppContext);

  const { botAvatar, botMsgColor, botMsgBackgroundColor } = appContext;
  const position = [
    "message",
    `${startsSequence ? "start" : ""}`,
    `${endsSequence ? "end" : ""}`,
  ]
    .join(" ")
    .trim();
  let borderStyle;
  if (position === "message start end") {
    borderStyle = "rounded-[20px]";
  }

  if (position === "message start") {
    borderStyle =
      "rounded-tl-[20px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[5px]";
  }

  if (position === "message  end") {
    borderStyle =
      "rounded-tl-[5px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px]";
  }
  if (position === "message") {
    borderStyle =
      "rounded-tl-[5px] rounded-bl-[5px] rounded-br-[20px] rounded-tr-[20px]";
  }

  return (
    <div className="flex space-x-1">
      <div className={`flex w-5 items-end`}>
        <img
          className={`h-5 w-5 rounded-full ${showBotAvatar ? "" : "hidden"}`}
          src={botAvatar}
          alt="BotAvatar"
        />
      </div>

      <div className="flex min-w-[10%] max-w-[80%] flex-col space-x-2">
        <div
          className={`w-fit text-sm ${borderStyle}      `}
          style={{
            color: botMsgColor,
            backgroundColor: botMsgBackgroundColor,
          }}
          dir="auto"
        >
          {/* <img className="rounded-t-lg" src={imageUrl} alt="imgAlt" style={{ maxWidth: '300px', maxHeight: '300px' }} /> */}
          <div
            className="flex justify-center" // This will center the image horizontally
            style={{ maxWidth: "100%" }} // Optional, ensures the container doesn't exceed its parent width
          >
            <img
              className="rounded-t-lg"
              src={imageUrl}
              alt="imgAlt"
              style={{ maxWidth: '300px', maxHeight: '300px' }} // Set your desired dimensions
            />
          </div>

          <div
            className={`w-fit text-sm ${borderStyle}  whitespace-pre-line  break-words   px-[15px] py-[8px]`}
            style={{ maxWidth: "100%" }}
            dir="auto"
          >
            <MardownText text={text} />
          </div>
        </div>
        {showBotAvatar && (
          <div className="text-[10px] italic  text-gray-500">
            {formattedTs(ts)}
          </div>
        )}
      </div>
    </div>
  );
};
