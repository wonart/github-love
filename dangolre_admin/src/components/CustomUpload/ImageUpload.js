import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// core components
import Button from "components/CustomButtons/Button.js";

import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

import { storageService } from "fbase";

export default function ImageUpload(props) {
  const [file, setFile] = React.useState(null);
  const [fileRef, setFileRef] = React.useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(
    props.avatar ? defaultAvatar : defaultImage
  );

  const { imageCurrentUrl } = props;

  React.useEffect(() => {

    if( imageCurrentUrl !== "" ){

      setImagePreviewUrl(imageCurrentUrl);

      const fileName = imageCurrentUrl.replace(/^.*\//, '').split('?')[0];
      const ref = storageService.ref().child(fileName);
      setFileRef(ref);
    }

  }, [imageCurrentUrl] );

  let fileInput = React.createRef();
  const handleStorageDelete = () => {
    fileRef.delete().then(function() {
      props.onUploadEnd("");
      console.log('file delete success :', fileRef);
    }).catch(function(error) {
      console.log('file delete error :', error);
    });
  }
  const handleImageChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      if(fileRef){
        // 업로드 이미지 삭제
        handleStorageDelete();
      }  
      setFile(file);
      setImagePreviewUrl(reader.result);
      //console.log('file :', file);
    };
    if (file) {
      reader.readAsDataURL(file);

      // 이미지 업로드
      const ref = storageService.ref().child(`${file.name}`);
      ref.put(file).then(function(snapshot) {
        //console.log('snapshot :', snapshot);
        snapshot.ref.getDownloadURL().then(function(downloadURL) {
          //console.log('downloadURL', downloadURL);
          props.onUploadEnd(downloadURL);
        });
      });
      setFileRef(ref);
    }
  };
  // eslint-disable-next-line
  const handleSubmit = e => {
    e.preventDefault();
    // file is the file/image uploaded
    // in this function you can save the image (file) on form submit
    // you have to call it yourself
  };
  const handleClick = () => {
    fileInput.current.click();
  };
  const handleRemove = () => {
    setFile(null);
    setImagePreviewUrl(props.avatar ? defaultAvatar : defaultImage);
    fileInput.current.value = null;
    setFileRef(null);

    // 업로드 이미지 삭제
    handleStorageDelete();
  };
  let { avatar, addButtonProps, changeButtonProps, removeButtonProps } = props;
  return (
    <div className="fileinput text-center">
      <input type="file" onChange={handleImageChange} ref={fileInput} />
      <div className={"thumbnail" + (avatar ? " img-circle" : "")}>
        <img src={imagePreviewUrl} alt="..." />
      </div>
      <div>
        {file === null && imageCurrentUrl === "" ? (
          <Button {...addButtonProps} onClick={() => handleClick()}>
            {avatar ? "사진추가" : "불러오기"}
          </Button>
        ) : (
          <span>
            <Button {...changeButtonProps} onClick={() => handleClick()}>
              변경
            </Button>
            {avatar ? <br /> : null}
            <Button {...removeButtonProps} onClick={() => handleRemove()}>
              <i className="fas fa-times" /> 삭제
            </Button>
          </span>
        )}
      </div>
    </div>
  );
}

ImageUpload.defaultProps = {
  imageCurrentUrl: ""
};

ImageUpload.propTypes = {
  imageCurrentUrl: PropTypes.string,
  onUploadEnd: PropTypes.func,
  avatar: PropTypes.bool,
  addButtonProps: PropTypes.object,
  changeButtonProps: PropTypes.object,
  removeButtonProps: PropTypes.object
};
