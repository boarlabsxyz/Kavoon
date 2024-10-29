function takeStreamValue(stream, selectedParameter) {
  let streamValue = null;
  stream
    .subscribe((value) => {
      if (selectedParameter) {
        streamValue = value.name;
      } else {
        streamValue = value;
      }
    })
    .unsubscribe();
  return streamValue;
}

export default takeStreamValue;
