export const storeData = (data) => {
  console.log(data);
  localStorage.setItem('data', JSON.stringify(data));
};

export const getData = () => {
  const data = localStorage.getItem('data');
  return JSON.parse(data || '[]');
};
