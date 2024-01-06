import strings from "./lib/strings";

const methods = { ...strings };

type Config = {
  ignore: string[];
};

const defaultConfig: Config = {
  ignore: [],
};

const init = (config: Config = defaultConfig) => {
  Object.entries(methods).forEach(([fnName, fn]) => {
    if (config.ignore.includes(fnName)) return;
    fn();
  });
};

export { init as default, methods };
