import React from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/hooks';
import { Categories } from '../../Types';
import "./Category.scss"


interface CategoryProps {
  categories: Categories[];
}

console.log()

function Category(props: CategoryProps) {
  return (
    <section className='categories py-5 bg-ghost-white' id="categories">
      <div className="container">
        <div className="categories-content">
          <div className="section-title">
            <h3 className="text-uppercase fw-7 text-regal-blue ls-1">Category</h3>
          </div>
        </div>
        <div className="category-items grid">
          {
            props.categories && props.categories.slice(0, 5).map(category => (
              <Link to={`category/${category.id}`} key={category.id}>
                <div className="category-item">
                  <div className="category-item-img">
                    <img src={category.image} alt="" />
                  </div>
                  <div className="category-item-name text-center">
                    <h6 className="fs-20">
                      {category.name}
                    </h6>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Category