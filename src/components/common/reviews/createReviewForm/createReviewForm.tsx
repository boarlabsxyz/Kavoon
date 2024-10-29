import { useState } from 'react';

import * as Sentry from '@sentry/browser';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import dataStorage from 'src/services/firebase/dataStorage';
import StarRating from 'src/components/common/reviews/starRating';
import UploadedImages from 'src/components/common/reviews/uploadedImages';
import AddReviewBtn from 'src/components/common/reviews/addReviewBtn';
import Spinner from 'src/components/common/spinner';
import reviewsApi from 'src/services/reviews-api';
import lang from 'src/i18n/lang';
import IReview from 'src/types/review';
import { Category } from 'src/data/constants';

import st from './createReviewForm.module.css';

interface IProps {
  productId: string;
  language: string;
  categoryId: Category;
  onClose(): void;
  onSaveReview(message: string): void;
}

function CreateReviewForm({
  productId,
  language,
  onClose,
  onSaveReview,
  categoryId,
}: IProps) {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [rating, setRating] = useState(0);
  const [errorRating, setErrorRating] = useState('');
  const [errorLoadingFile, setErrorLoadingFile] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkImageCount = (chosenImages) => {
    const maxImages = 5;
    if (chosenImages.length + uploadedImages.length > maxImages) {
      setErrorLoadingFile(`${lang('Only5ImagesCanBeUploaded', language)}`);
      return false;
    }
    return true;
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const selectedImages: FileList | null = e.target.files;
    setErrorLoadingFile('');

    if (selectedImages && checkImageCount(selectedImages)) {
      for (let i = 0; i < selectedImages.length; i += 1) {
        const doesAlreadyExist = uploadedImages.find(
          (image) => image.name === selectedImages[i].name
        );
        doesAlreadyExist
          ? setErrorLoadingFile(`${lang('ImageAlreadyAdded', language)}`)
          : setUploadedImages([...uploadedImages, ...selectedImages]);
      }
    }
  };

  const sendRating = (mark: number) => {
    setRating(mark);
    setErrorRating('');
  };

  const deleteImageFromUploaded = (imageTitle: string) => {
    setErrorLoadingFile('');
    const filteredImages = uploadedImages.filter(
      (image) => image.name !== imageTitle
    );
    setUploadedImages(filteredImages);
  };

  return (
    <Formik
      initialValues={{ userName: '', comment: '' }}
      onSubmit={async (values) => {
        if (rating === 0) {
          setErrorRating(`${lang('PleaseRate', language)}`);
          return;
        }

        const reviewId = uuidv4();
        const review: IReview = {
          _id: null,
          productName: productId,
          categoryId: categoryId,
          images: [],
          userName: values.userName,
          rating,
          comment: values.comment,
          showOnSite: false,
          reviewLanguage: '',
          date: Date.now(),
          isActive: true,
        };

        setIsLoading(true);

        try {
          if (uploadedImages.length !== 0) {
            const urls = await dataStorage.uploadAllImages(
              uploadedImages,
              productId,
              reviewId
            );
            review.images = urls;
          }

          onSaveReview(lang('ThankYouForFeedback', language));
          reviewsApi.createReview(review);
        } catch (error) {
          Sentry.captureException(error);
          onSaveReview(lang('ErrorMessage', language));
        }

        setIsLoading(false);
        onClose();
      }}
      validationSchema={Yup.object().shape({
        userName: Yup.string()
          .min(2, `${lang('NameIsTooShort', language)}`)
          .max(17, `${lang('NameIsTooLong', language)}`)
          .required(`${lang('PleaseFill', language)}`),
        comment: Yup.string().max(350, `${lang('CommentIsTooLong', language)}`),
      })}
    >
      {({ values, handleChange, handleSubmit, errors }) => (
        <form className={st.reviewForm} onSubmit={handleSubmit}>
          <fieldset className={st.fieldset}>
            <legend className={st.title}>
              {lang('WriteReview', language)}
            </legend>
            <label className={st.labelText} htmlFor="userName">
              {lang('Name', language)}
            </label>
            <input
              className={st.nameField}
              value={values.userName}
              id="userName"
              name="userName"
              type="text"
              placeholder={`${lang('EnterName', language)}`}
              onChange={handleChange}
            />
            {errors.userName && (
              <div className={st.inputFeedbackUserName}>{errors.userName}</div>
            )}
            <p className={st.labelText}>{lang('Mark', language)}</p>
            <StarRating sendRating={sendRating} cursorStyle="pointer" />
            {errorRating && (
              <div className={st.inputFeedbackMark}>{errorRating}</div>
            )}
            <label className={st.labelText} htmlFor="comment">
              {lang('ReviewText', language)}
            </label>
            <textarea
              className={st.textReviewField}
              value={values.comment}
              id="comment"
              name="comment"
              placeholder={`${lang('WriteComment', language)}`}
              onChange={handleChange}
            />
            {errors.comment && (
              <div className={st.inputFeedbackComment}>{errors.comment}</div>
            )}
            <div className={st.uploadedImagesWrapper}>
              <div className={st.addImageWrapper}>
                <label className={st.labelAddImage} htmlFor="images">
                  {lang('AddImage', language)}
                </label>
                <input
                  className={st.addImageField}
                  value=""
                  type="file"
                  name="add-image"
                  id="images"
                  accept="image/*"
                  size={5000000}
                  multiple
                  onChange={onChange}
                />
                {errorLoadingFile && (
                  <p className={st.inputFeedbackAddImage}>{errorLoadingFile}</p>
                )}
              </div>
              {uploadedImages.length !== 0 && (
                <UploadedImages
                  images={uploadedImages}
                  deleteImage={deleteImageFromUploaded}
                />
              )}
            </div>
            <Spinner loading={isLoading} />
            {!isLoading && (
              <AddReviewBtn type="submit">
                {lang('SendBtn', language)}
              </AddReviewBtn>
            )}
          </fieldset>
        </form>
      )}
    </Formik>
  );
}

export default CreateReviewForm;
