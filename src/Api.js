export default () => fetch(`https://yesno.wtf/api/`)
  .then(res => res.json());
