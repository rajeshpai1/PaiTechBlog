import React, { useRef, useState } from 'react';
import {  Upload, Button, Space, Spin  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';
import { pushPost, pushImage } from 'apis/firebase/pushPost';
import { useMutation } from 'react-query';
import { AnyARecord } from 'dns';
import { useHistory } from 'react-router-dom';

 export default function CreatePost(): any {
   const editorRef = useRef(null);
   const history = useHistory()
   const { data:dataa, mutateAsync, isLoading, isError, isSuccess, error } = useMutation(pushPost)
 
   const log = async () => {
    if (editorRef.current) {
     var content = editorRef.current
     var response = await mutateAsync(content)
     console.log('key', response)
     history.push("/")
    }
   }
   return (
     <>
     <div style={{paddingLeft: "15vw"}}>
       <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         apiKey = 'eyfaxhg41v8i9ca2qhwr8l2azudfe762z2cxj1b7uxjeu4q3'
         initialValue="<p>This is the initial content of the editor.</p>"
         init={{
           height: 600,
           width: '70vw',
           justify: 'center',
           skin: "snow",
           icons: "dark",
           selector : "textarea.editor",
           a11y_advanced_options: true,
           file_browser_callback_types: 'image',
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'insert | undo redo | link image| formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           /* enable automatic uploads of images represented by blob or data URIs*/
           automatic_uploads: true,
           file_picker_types: 'image',
           images_upload_handler: async function (blobInfo, success, failure) {
            var formData = new FormData();
            formData.append('file', blobInfo.blob(), blobInfo.filename());
            formData.append('upload_preset', 'x2njw8oz');
            var res = await pushImage(formData);
            res.status==200 ? success(res.data.secure_url) : failure(res.data.status)}
          ,
          paste_data_images: true,
  
           content_style: 'editor { background-color: #d8e3fa; padding-right: 150px; font-family:Helvetica,Arial,sans-serif; font-size:14px}'
         }}
       />
        <Button onClick={log} >Add Post</Button>
      {isLoading ? (
        <Space size="middle">
        <Spin size="large" />
      </Space>
      ) : (
        <>
          {isError ? (
            <div>An error occurred: {error.message}</div>
          ) : null}
          {isSuccess ? <div>Todo added! {dataa}</div> : null}
        </>
      )}
    </div>
     </>
   );
 }