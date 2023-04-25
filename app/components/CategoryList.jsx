import React from 'react';
import {json} from '@remix-run/cloudflare';

import CategoryCard from './CategoryCard';

export const loader = async () => {
    return json(await(await fetch('https://api.escuelajs.co/api/v1/categories')).json())
}

const CategoryList = ({categoryList}) => {
console.log('categoryList', categoryList)
  /*const data = [{
    "id": 1,
    "name": "Clothes",
    "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=4278"
  }]*/

  return (
    <div className="flex flex-wrap categoryList">
      {categoryList?.map((category, index) => (
        <CategoryCard key={index} name={category.name} image={`https://source.unsplash.com/random/400x200?${category.id}`} />
      ))}
    </div>
  );
};

export default CategoryList;
