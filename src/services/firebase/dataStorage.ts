import firebaseApp from 'src/services/firebase/firebaseApp';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import {
  getDatabase,
  ref as databaseRef,
  DatabaseReference,
} from 'firebase/database';

type uploadImageFn = (
  image: File,
  productId: string,
  reviewId: string
) => Promise<string>;

type uploadAllImagesFn = (
  image: File[],
  productId: string,
  reviewId: string
) => Promise<string[]>;

type getDatabaseRefFn = (id?: string) => DatabaseReference;

const baseFolder = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_PATH;

const getDatabaseRef: getDatabaseRefFn = (id) => {
  const path = id ? `${baseFolder}/${id}` : baseFolder;
  const database = getDatabase(firebaseApp);
  const reviewsRef = databaseRef(database, path);
  return reviewsRef;
};

const uploadImage: uploadImageFn = (image, productId, reviewId) =>
  new Promise<string>((resolve, reject) => {
    const storage = getStorage();
    const storageRef = ref(
      storage,
      `${baseFolder}/${productId}/${reviewId}/${image.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, image);

    return uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // eslint-disable-next-line no-console
        console.log(`Upload is ${progress}% done`);
      },
      (err) => {
        reject(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // eslint-disable-next-line no-console
          console.log('File available at', downloadURL);
          resolve(downloadURL);
        });
      }
    );
  });

const uploadAllImages: uploadAllImagesFn = (images, productId, reviewId) =>
  Promise.all(images.map((image) => uploadImage(image, productId, reviewId)));

const dataStorage = {
  getDatabaseRef,
  uploadAllImages,
};

export default dataStorage;
