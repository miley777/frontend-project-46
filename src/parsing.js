import yaml from 'js-yaml';

const getParsed = (data, format) => {
  const parsers = {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  };

  return parsers[format](data);
  
  //if (String(file).endsWith('.json')) {
  //  return JSON.parse(data);
  //} else if (String(file).endWith('.yaml')) {
  //  return yaml.load(data);
  //}
};

export default getParsed;