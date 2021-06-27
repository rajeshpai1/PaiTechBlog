import React, { useRef, useState } from 'react';
import {  Upload, Button, Space, Spin  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Editor } from '@tinymce/tinymce-react';
import { pushPost, pushImage } from 'apis/firebase/pushPost';
import { useMutation } from 'react-query';
import { useHistory, Redirect } from 'react-router-dom';

var init_sting = "<p>This is the initial content of the editor.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh venenatis cras sed felis. Amet purus gravida quis blandit turpis. Non quam lacus suspendisse faucibus interdum. Diam phasellus vestibulum lorem sed risus ultricies. Elementum sagittis vitae et leo duis ut diam. Cum sociis natoque penatibus et magnis dis parturient. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. A erat nam at lectus. Donec pretium vulputate sapien nec sagittis aliquam. Tellus integer feugiat scelerisque varius morbi enim. Pellentesque habitant morbi tristique senectus et netus et. Nullam ac tortor vitae purus. Dictum sit amet justo donec enim diam vulputate. Mauris augue neque gravida in fermentum et. Vitae et leo duis ut diam quam nulla. Amet dictum sit amet justo donec enim diam vulputate.</p>\n<p>Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Posuere morbi leo urna molestie at. Sit amet massa vitae tortor condimentum lacinia quis. Tempor orci dapibus ultrices in iaculis nunc sed augue. Eleifend donec pretium vulputate sapien. Vitae auctor eu augue ut lectus arcu bibendum at varius. Ridiculus mus mauris vitae ultricies leo integer. Ornare arcu odio ut sem nulla pharetra diam sit amet. Mattis rhoncus urna neque viverra. Elementum nibh tellus molestie nunc non blandit. Eget nunc scelerisque viverra mauris. Etiam sit amet nisl purus in mollis nunc. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Fames ac turpis egestas sed tempus urna et. Vitae turpis massa sed elementum tempus egestas. Egestas sed sed risus pretium quam. Tristique magna sit amet purus gravida quis blandit turpis cursus.</p>\n<p>Sit amet commodo nulla facilisi nullam vehicula. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. A iaculis at erat pellentesque adipiscing. Consequat mauris nunc congue nisi vitae. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Vitae turpis massa sed elementum tempus. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Lacus luctus accumsan tortor posuere ac ut consequat semper. Egestas quis ipsum suspendisse ultrices gravida. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Curabitur vitae nunc sed velit dignissim. Rhoncus dolor purus non enim praesent elementum facilisis. Lorem mollis aliquam ut porttitor leo a. At erat pellentesque adipiscing commodo. Amet consectetur adipiscing elit ut aliquam purus sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis.</p>\n<p>Dolor morbi non arcu risus quis varius. Natoque penatibus et magnis dis parturient montes nascetur. Id diam maecenas ultricies mi eget mauris pharetra et. Non sodales neque sodales ut. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Tempor nec feugiat nisl pretium. Adipiscing enim eu turpis egestas pretium. Posuere sollicitudin aliquam ultrices sagittis orci a.</p>\n<p>Interdum velit laoreet id donec. Egestas pretium aenean pharetra magna ac. Ut diam quam nulla porttitor massa id neque aliquam. Egestas dui id ornare arcu odio ut sem nulla. In cursus turpis massa tincidunt dui. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Est placerat in egestas erat imperdiet sed euismod. Aliquam ut porttitor leo a diam sollicitudin. Fringilla ut morbi tincidunt augue interdum velit euismod. Commodo odio aenean sed adipiscing diam donec.</p>\n\n<p>&nbsp;</p><p><img src=\"https://res.cloudinary.com/dgzls16bt/image/upload/v1624808948/TechBlog/cregsovmews4rloudkof.jpg\" width=\"800\" height=\"400\" /></p>"
export default function CreatePost(): any {
   const editorRef = useRef(null);
   const [key, Setkey] = useState('');
   const history = useHistory()
   const { data:dataa, mutateAsync, isLoading, isError, isSuccess, error } = useMutation(pushPost)
   const log = async () => {
    if (editorRef.current) {
     var content = editorRef.current
     var response = await mutateAsync(content)
     Setkey(response)
     history.push("/")
    }
   }
   return (
     <>
     <div style={{paddingLeft: "15vw"}}>
       <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         apiKey = 'eyfaxhg41v8i9ca2qhwr8l2azudfe762z2cxj1b7uxjeu4q3'
         initialValue= {init_sting ? init_sting : "<p>This is the initial content of the editor.</p>"}
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