
import React, { FC, useState } from "react";
import styles from "./spaceModal.module.css";

type ModalType = {
  sState: any;
};

const SpaceModal: FC<ModalType> = ({ sState }) => {

  const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
  const initialState = {
    name: "",
    type: "LargeSpace",
    capacity: 0,
    assets: [{}],
    imgs: [{}],
    location: "",
    price: "",
  };
  const fData = new FormData();

  //Our InputGroup
  const [spaceDetail, setSpaceDetail] = useState({ ...initialState });

  //handle Our Changes
  const handleChanges = (e: any) => {
    const { name, value } = e.target;
    setSpaceDetail({ ...spaceDetail, [name]: value });
  };

  // Set your cloud name and unsigned upload preset here:
  let YOUR_CLOUD_NAME = "weird-d";
  let YOUR_UNSIGNED_UPLOAD_PRESET = "qdajly77";
  let POST_URL =
    "https://api.cloudinary.com/v1_1/" + YOUR_CLOUD_NAME + "/auto/upload";

  let XUniqueUploadId = +new Date();
  //to upload our images
  const uploadFiles = (file: any, allData: any) => {
    fetch(POST_URL, {
      method: "POST",
      headers: {
        "X-Unique-Upload-Id": `${XUniqueUploadId}`,
      },
      body: file,
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const imgurl = {
          name: "img",
          imgurl: JSON.parse(data).url,
        };
        allData.imgs.push(imgurl);
        console.log(JSON.parse(data).url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //handle Our Submissions
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let pushData = spaceDetail;
    const formData = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    const imageData: any = document.querySelector("input[type='file']");
    console.log(imageData.files[0]);
    for (let i = 0; i < Object.entries(imageData).length; i++) {
      fData.append('file', imageData.files[i]);
      fData.append('upload_preset', YOUR_UNSIGNED_UPLOAD_PRESET);
      fData.append('public_id', `my${imageData.files[i]?.name}`);
      uploadFiles(fData, pushData);
    }
    formData.forEach((e) => {
      const checkedItem = {
        name: e.getAttribute("id"),
        description: `We have ${e.getAttribute("id")} available`,
        ImgUrl: e.getAttribute("value"),
      };
      pushData.assets.push(checkedItem);
    });
    console.log(pushData);
  };
  return (
    <div
      className={styles.Wrapper}
      onClick={(e: any) => {
        (e.target.className === 'spaceModal_Wrapper__cvqAb' ||
          e.target.className === 'spaceModal_Wrapper__eR750') &&
          sState(false);
      }}
    >
      <form onSubmit={handleSubmit} id="form">
        <h3>Add Space</h3>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Name:
          </span>
          <input
            type="text"
            className="form-control"
            name="name"
            value={spaceDetail.name}
            onChange={handleChanges}
            placeholder="Maryland Office Workplace"
            aria-label="spacename"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Type:
          </span>
          <select
            className="form-control"
            name="type"
            value={spaceDetail.type}
            onChange={handleChanges}
            aria-label="spacetype"
            aria-describedby="basic-addon1"
          >
            <option value="LargeSpace">Large Space</option>
            <option value="ddesk">Dedicated Desk</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Capacity:
          </span>
          <input
            type="text"
            className="form-control"
            name="capacity"
            value={spaceDetail.capacity}
            onChange={handleChanges}
            placeholder="30"
            aria-label="spaceCapacity"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Location:
          </span>
          <input
            className="form-control"
            name="location"
            value={spaceDetail.location}
            onChange={handleChanges}
            aria-label="spaceLocation"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Price:
          </span>
          <input
            className="form-control"
            name="price"
            value={spaceDetail.price}
            onChange={handleChanges}
            aria-label="spaceLocation"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            name="images"
            type={"file"}
            id="images"
            accept="image/png, image/jpeg"
            aria-label="spaceImages"
            aria-describedby="basic-addon1"
            required
            multiple
          />
        </div>
        <fieldset>
          <legend>Available Amenities</legend>
          <div className="mb-3">
            <input type="checkbox" id="wifi" name="assets" value="BiWifi" />
            <label htmlFor="wifi">Wifi</label>
          </div>
          <div className="mb-3">
            <input
              type="checkbox"
              id="cafeteria"
              name="assets"
              value="GrCafeteria"
            />
            <label htmlFor="cafeteria">Cafeteria</label>
          </div>
          <div className="mb-3">
            <input
              type="checkbox"
              id="printer"
              name="assets"
              value="BsPrinterFill"
            />
            <label htmlFor="printer">Printer</label>
          </div>
        </fieldset>
        <button type="submit" className="btn btn-warning">
          Create Space
        </button>
      </form>
    </div>
  );
};

export default SpaceModal;
