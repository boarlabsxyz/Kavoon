import React from 'react';

import CancelIcon from 'src/icons/cancelIcon';
import RespScreenWidth from 'src/data/mediaConst';

interface IProps {
  images: File[];
  deleteImage(image: string): void;
}

function UploadedImages({ images, deleteImage }: IProps) {
  return (
    <>
      <ul className="list">
        {images.map((image) => (
          <li className="list-item" key={image.name}>
            <p className="photo-title">{image.name}</p>
            <button
              className="delete-button"
              type="button"
              aria-label="delete-image-button"
              onClick={() => {
                deleteImage(image.name);
              }}
            >
              <CancelIcon width="100%" height="100%" />
            </button>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin: -7px;
            list-style: none;
          }
          .list-item {
            display: flex;
            align-items: center;
            margin: 7px;
            font-weight: 500;
            font-size: 12px;
            line-height: 1.25;
            letter-spacing: 0.2px;
            color: ver(--main-text-color);
          }
          .photo-title {
            max-width: 464px;
            margin-right: 5px;
            word-break: break-word;
          }
          .delete-button {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            width: 10px;
            height: 10px;
            border: none;
            color: var(--primary-color);
            stroke: var(--primary-color);
            background-color: transparent;
            cursor: pointer;
          }
          @media only screen and (max-width: ${RespScreenWidth.screenWidthMobile}px) {
            .list {
              display: block;
              margin: 0;
            }
            .list-item {
              margin: 0px;
            }
            .list-item:not(:last-child) {
              margin-bottom: 7px;
            }
            .photo-title {
              max-width: 274px;
              margin-right: 14px;
            }
            .delete-button {
              width: 12px;
              height: 12px;
            }
          }
        `}
      </style>
    </>
  );
}

export default UploadedImages;
