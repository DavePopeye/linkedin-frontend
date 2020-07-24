import React from "react";
import { Button, Image, Modal } from "react-bootstrap";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src:
        "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
      base64Url: "",
      modal: false,
      file: null,
    };
    this.input = React.createRef();
  }
  componentDidMount() {
    const { src } = this.props;
    if (src) {
      this.setState({ src });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.src !== this.props.src) {
      this.setState({ src: this.props.src });
    }
  }

  encodeImageFileAsURL(file, callback) {
    const reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  }
  handleFileClick = () => {
    this.input.current.click();
  };
  handleFileChange = (e) => {
    const { files } = e.target;
    const file = files[0];
    if (file.type.includes("image")) {
      this.encodeImageFileAsURL(file, (src) => {
        this.setState({ src, file });
      });
    }
  };
  sendPhoto = async () => {
    const { updateUrl } = this.props;
    const { file } = this.state;
    const formData = new FormData();
    if (file !== null && updateUrl) {
      const Authorization = localStorage.getItem("authorization");
      formData.append("photo", file);
      let res = await fetch(updateUrl, {
        method: "PUT",
        body: formData,
        headers: {
          Authorization,
        },
      });
      if (res.ok) {
        setTimeout(() => {
          this.props.callBack && this.props.callBack();
          this.toggleModal();
        }, 1500);
      } else {
      }
    }
  };
  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };
  render() {
    const { src, modal } = this.state;
    return (
      <>
        <input
          ref={this.input}
          onChange={this.handleFileChange}
          type={"file"}
          hidden
        />
        <Image
          {...this.props}
          style={{ objectFit: "cover" }}
          src={src}
          onClick={this.toggleModal}
        />
        <Modal centered show={modal} onHide={this.toggleModal}>
          <Modal.Body
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image {...this.props} style={{ width: "50%" }} src={src} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleFileClick} variant="secondary">
              Choose New Photo
            </Button>
            <Button variant="primary" onClick={this.sendPhoto}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Avatar;
