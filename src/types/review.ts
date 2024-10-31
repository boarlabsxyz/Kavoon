interface IReview {
  _id?: string | null;
  productName: string;
  categoryId?: string;
  images?: string[];
  userName: string;
  rating: number;
  comment?: string;
  showOnSite: boolean;
  reviewLanguage: '' | 'uk' | 'en' | 'ru' | 'pl';
  date: number;
  isActive: boolean;
}

export default IReview;
