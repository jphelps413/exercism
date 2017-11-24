const accumulate = (coll, pred) => {
  const rslt = [];
  for (let i = 0; i < coll.length; i += 1) {
    rslt.push(pred(coll[i]));
  }
  return rslt;
};

export default accumulate;
