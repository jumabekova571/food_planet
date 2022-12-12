import React from 'react'
import Card from '../Card/Card'
import SectionNavigation from '../SectionNavigation/SectionNavigation'
import burger1 from '../../assets/img/burgers/burger-1.png'
import burger2 from '../../assets/img/burgers/burger-2.png'
import burger3 from '../../assets/img/burgers/burger-3.png'
import burger4 from '../../assets/img/burgers/burger-4.png'

const items = [
  {
    id: '1',
    title: 'Чизбургер',
    description: `Булка, котлета,сыр,  соленый огурец, лук, помидор,
    салат айсберг,
    соус чесночный, соус гриль,
    кетчуп, майонез`,
    image: burger1,
    price: 200,
  }, {
    id: '2',
    title: 'Чизбургер',
    description: `Булка, котлета,сыр,  соленый огурец, лук, помидор,
салат айсберг,
соус чесночный, соус гриль,
кетчуп, майонез`,
    image: burger2,
    price: 200,
  }, {
    id: '3',
    title: 'Чизбургер',
    description: `Булка, котлета,сыр,  соленый огурец, лук, помидор,
салат айсберг,
соус чесночный, соус гриль,
кетчуп, майонез`,
    image: burger3,
    price: 200,
  }, {
    id: '4',
    title: 'Чизбургер',
    description: `Булка, котлета,сыр,  соленый огурец, лук, помидор,
салат айсберг,
соус чесночный, соус гриль,
кетчуп, майонез`,
    image: burger4,
    price: 200,
  },
]

const NewProductsSection = () => {
  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'>
        <h2 style={{ fontSize: '25px', fontWeight: 900, color: 'var(--color-secondary)' }}>Новинки</h2>
        <SectionNavigation />
      </div>

      <div className='row'>
        {items.map(item => (
          <div
            key={item.id}
            className='col-3'
          >
            <Card
              dark
              imageUrl={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewProductsSection