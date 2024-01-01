import strings from "./lib/strings";

const methods = { ...strings };

const init = (config: { ignore: string[] }) => {
  Object.entries(methods).forEach(([fnName, fn]) => {
    if (config.ignore.includes(fnName)) return;
    fn();
  });
};

export default init;
