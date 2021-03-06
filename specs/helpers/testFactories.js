import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb';

const { default: LikeButtonPresenter } = require('../../src/scripts/utils/like-button-presenter');

const createLikeButtonPresenterWithRestaurant = async restaurant => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
