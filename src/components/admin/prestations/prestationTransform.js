


const prestationTransform = (data, dataProvider, notify, redirect) => {

  const HH = data.hours ? `${data.hours}` : '00';
  const mm = data.minutes ? `${data.minutes}` : '00';
  const duration = `${HH}:${mm}`;
  let { hours, minutes, ...record } = {
    ...data, duration
  }
  const imageFiles = record.images;
  const prevImageIds = record.prevImages ?? [];

  if (imageFiles) {
    return Promise.all(imageFiles.map(image => {
      return dataProvider.create('images', { data: image })
    }))
      .then(responses => {

        const imageIds = responses.map(r => r.data.id)
        record = {
          ...record, images: [...imageIds, ...prevImageIds],
        }
        return record
      })
      .catch(error => {
        // failure side effects go here 
        notify(`Images registration error: ${error.message}`, { type: 'warning' });
      });
  }
  return record

};


export default prestationTransform