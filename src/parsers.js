import yaml from 'yaml-js';

const getParsed = (data, format) => {
  if ((format === 'yaml') || (format ==='yml')) {
    return yaml.load(data);
  }
  return JSON.parse(data);
   
  //const parsers = {
    //json: JSON.parse,
    //yaml: yaml.safeLoad,
    //yml: yaml.safeLoad,
  //};

  //return parsers[format](data);
  

  //if (String(file).endsWith('.json')) {
  //  return JSON.parse(data);
  //} else if (String(file).endWith('.yaml')) {
  //  return yaml.load(data);
  //}
};

export default getParsed;