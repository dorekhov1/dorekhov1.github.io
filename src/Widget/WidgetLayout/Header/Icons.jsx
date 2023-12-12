import {
  ArrowUturnLeftIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
export const Icon = ({ name }) => {
  if (name === "Начать заново") {
    return <ArrowUturnLeftIcon className="h-4 w-4" />;
  }
  if (name === "Очистить чат") {
    return <TrashIcon className="h-4 w-4" />;
  }
  if (name === "Закрыть") {
    return <XMarkIcon className="h-4 w-4" />;
  }
};
