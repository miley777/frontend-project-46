import yaml from 'yaml-js';

const getParsed = (data, format) => {
  if ((format === 'yaml') || (format === 'yml')) {
    return yaml.load(data);
  }
  return JSON.parse(data);
};

export default getParsed;
