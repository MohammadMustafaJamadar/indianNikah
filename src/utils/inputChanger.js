const inputChanger = (event, updatedValue) => {
  const value = event.target.value;
  updatedValue(value);
}

export default inputChanger;