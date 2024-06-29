import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';

export default function MyFormt() {

    const [content, setContent] = useState('');

    const handleEditorChange = (content, editor) => {
      setContent(content);
      console.log('Content was updated:', content);
    };


  return (
    <div>
      <h1>TinyMCE Editor in React</h1>
      <Editor
        apiKey="YOUR_TINYMCE_API_KEY" // Optional, but recommended for production
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
        }}
        onEditorChange={handleEditorChange}
      />
      <h2>Content:</h2>
      <div>{content}</div>
    </div>
  )
}
