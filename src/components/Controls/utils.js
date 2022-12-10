export const makeRieltorOptions = (rieltors) => {
  return rieltors.map(({ name, surname, secondName, id }) => ({
    label: `${name} ${surname} ${secondName}`,
    value: id,
  }));
};
