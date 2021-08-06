import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar';
  const formattEamil = (email).trim().toLowerCase();
  const hash = md5(formattEamil, { encoding: binary });
  return `${base}${hash}`;
};

export default gravatar;
