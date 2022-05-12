import { useRecordContext } from "react-admin"
import React, {
  Children, useEffect, useState
} from 'react';
import { ImageField, ImageInput, } from "react-admin";

const EditImageInput = props => {
  let { children, source } = props
  let record = useRecordContext(props)
  let [recordData, setRecordData] = useState(record);
  useEffect(() => {
    if (record && record.imageUrl && !record.imageFile) {
      fetch(record.imageUrl, {
        mode: 'no-cors'
      })
        .then(response => {
          return response.blob()
        })
        .then(blob => {
          let imageUrl = URL.createObjectURL(blob);
          let file = new File([blob], 'image')
          setRecordData((prev) => ({
            ...prev, imageFile: {
              imageUrl,
              rawFile: file,
              title: 'image'
            }
          })
          )
        })
        .catch(console.log)
    }
  }, [])
  console.log(recordData)
  return (
    <ImageInput record={recordData} source="imageFile" label={""} accept="image/*">
      <ImageField source="imageUrl" title="title" />
    </ImageInput>
  )
}

export default EditImageInput;