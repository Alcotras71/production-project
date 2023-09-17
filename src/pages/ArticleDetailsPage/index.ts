export { articleDetailsPageReducer } from './model/slices';
export { articleDetailsRecommendationsReducer } from './model/slices/articleDetailsRecommendationsSlice';
export { articleDetailsCommentsReducer } from './model/slices/articleDetailsCommentsSlice';
export { ArticleDetailsPageAsync as ArticleDetailsPage } from './ui/ArticleDetailsPage/ArticlesDetailsPage.async';

export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
export type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
export type { ArticleDetailsPageSchema } from './model/types';
