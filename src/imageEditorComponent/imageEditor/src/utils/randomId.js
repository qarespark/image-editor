const randomId = (prefixString = '') => {
  console.log(`${prefixString}${prefixString ? '-' : ''}${parseInt(Date.now() * Math.random(), 10)}`)
  return `${prefixString}${prefixString ? '-' : ''}${parseInt(Date.now() * Math.random(), 10)}`;
}
export default randomId;
