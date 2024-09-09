import yaml from 'yaml-js';

const getParsed = (data, format) => {
  switch (format) {
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    case 'json':
      return JSON.parse(data);
    default:
      return new Error(`Format: ${format} is underfined`);
  }
};

export default getParsed;
