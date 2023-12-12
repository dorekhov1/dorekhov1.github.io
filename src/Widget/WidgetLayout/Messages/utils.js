import moment from "moment";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const formattedTs = (ts) => {
  return moment(ts).format("DD.MM.YYYY, HH:mm");
};

export const MardownText = ({ text }) => {
  return <ReactMarkdown children={text} remarkPlugins={[remarkGfm]}></ReactMarkdown>;
};
