import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {  Upload, Button  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { pushPost } from 'apis/firebase/pushPost';
import { useQuery } from 'react-query';
import { AnyARecord } from 'dns';

 export default function CreatePost(): any {
   const editorRef = useRef(null);
   const log = () => {
     if (editorRef.current) {
      //  console.log(editorRef.current.getContent());
       console.log('Content was updated:', editorRef.current.getContent());
     }
   };
   return (
     <>
       <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         apiKey = 'eyfaxhg41v8i9ca2qhwr8l2azudfe762z2cxj1b7uxjeu4q3'
         initialValue="<p>This is the initial content of the editor.</p>"
         init={{
           height: 600,
           width:1550,
           justify: 'center',
          //  menubar: 'insert',
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
           /*
             URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
             images_upload_url: 'postAcceptor.php',
             here we add custom filepicker only to Image dialog
           */
           file_picker_types: 'image',
           file_picker_callback: function (callback, value, meta) {
            if (meta.filetype == 'image') {
                var input = document.getElementById('my-file');
                input.click();
                input.onchange = async function () {
                    var file = input.files[0];
                    var res = await pushPost(file)
                    console.log(res)
                    callback(res.data.secure_url)
                };
            }
        },
          paste_data_images: true,
  
           content_style: 'body {  padding-right: 150px; font-family:Helvetica,Arial,sans-serif; font-size:14px}'
         }}
       />
        <input  type="file" id="my-file" name="my-file" onChange="" visbility="hidden" />
       <button onClick={log}>Log editor content</button>
     </>
   );
 }